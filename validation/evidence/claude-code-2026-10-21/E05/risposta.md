## Review di `materiale/Calcolatore.tsx`: input ripetuti e veloci

**Come ho verificato:** ho letto solo il sorgente. Nella cartella non c'è un progetto: niente `package.json`, niente `gsap` installato, niente browser né screen reader. Non ho installato nulla perché non era autorizzato, quindi i comportamenti a runtime restano **NON VERIFICATI**. I rilievi sotto si ricavano dal codice.

### Rilievi (dal più grave)

| ID | Dove | Regola | Problema ed effetto | Gravità | Esito |
|---|---|---|---|---|---|
| R1 | `:9`, `:19` | MX05 MUST, MX02 | All'avvio il risultato mostra **"0 €"**, anche se i valori predefiniti (300 × 120) danno **5.220 €**. Il valore corretto compare solo dopo la prima modifica. Il pulsante "Copia" all'avvio copia "0 €". | Alta | FAIL |
| R2 | `:20` | MX05 MUST | "Copia" legge `textContent`, cioè il numero mentre scorre. Se si clicca entro 1,2 s da un input, si copia una cifra intermedia e quindi falsa. | Alta | FAIL |
| R3 | `:19` + `:13` | MX05, A07 MUST | L'animazione scrive nella regione `aria-live` circa 70 volte per ogni modifica. Con input veloci gli annunci si accavallano e possono leggere cifre intermedie. Come si comporta davvero un lettore di schermo non è verificato. | Alta | FAIL nel codice; effetto sul lettore NON VERIFICATO |
| R4 | `:17-18` | MX03 MUST | `+e.target.value` trasforma un campo vuoto in `0` e lo scrive subito nel campo. Chi cancella "300" per scrivere un altro numero si ritrova "0" e poi "05". Intanto il risultato scende a 0 € e risale. Sono accettati anche valori negativi (risparmio negativo) e decimali sulle notti. | Media | FAIL |
| R5 | `:12` | M02 SHOULD, MX08 | Ogni tasto crea una nuova animazione sullo stesso oggetto senza `overwrite` e senza fermare la precedente. Più animazioni girano insieme e ciascuna riscrive il testo. Dovrebbe comunque finire sull'ultimo valore, perché l'animazione più recente viene disegnata per ultima, ma è fragile e spreca lavoro. Nessuna pulizia quando il componente viene rimosso. | Media | NON VERIFICATO (runtime) |
| R6 | `:12` | M04 / MX04 MUST | La preferenza "riduci movimento" non viene considerata: il numero scorre comunque per 1,2 s. | Media | FAIL |
| R7 | `:20` | A10, M02.a | La copia non dà nessun riscontro di successo o errore, e un rifiuto degli appunti resta un errore non gestito. | Bassa | FAIL |
| R8 | `:11` | MX02 (nota) | Le aliquote 18 % e 3,5 % sono fisse e non vengono mostrate all'utente. Restano fuori dallo scope richiesto, ma sono le ipotesi su cui si basa la cifra. | Nota | NON VERIFICATO |

Su un punto il codice è a posto. Ogni handler usa lo stato dell'ultimo render (`prezzo`/`notti`). Gli eventi di input sono discreti e React li elabora uno alla volta, quindi l'ultimo tasto produce l'obiettivo giusto. Il difetto non sta nel calcolo ma in come il valore viene mostrato.

### Correzione proposta

L'idea è separare il **valore autorevole** (calcolato nel render, usato per lettore di schermo e copia) dall'**animazione** (solo visiva, interrompibile, saltata con "riduci movimento"). Il conteggio animato e la durata di 1,2 s restano: non è un redesign.

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Stima del risparmio annuo: notti dirette * prezzo * (commissione OTA - costo canale diretto)
const COMMISSIONE_OTA = 0.18
const COSTO_DIRETTO = 0.035
const euro = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const aNumero = (s: string) => { const n = Number(s); return s.trim() === '' || !Number.isFinite(n) || n < 0 ? null : n }

export function Calcolatore() {
  const [notti, setNotti] = useState('300')
  const [prezzo, setPrezzo] = useState('120')
  const [copia, setCopia] = useState('')
  const n = aNumero(notti), p = aNumero(prezzo)
  const risparmio = n !== null && p !== null ? Math.round(n * p * (COMMISSIONE_OTA - COSTO_DIRETTO)) : null
  const testo = risparmio === null ? '—' : euro.format(risparmio)

  const visivo = useRef<HTMLSpanElement>(null)
  const mostrato = useRef({ v: risparmio ?? 0 })
  const [iniziale] = useState(testo) // React non riscrive più questo nodo: lo gestisce GSAP

  useEffect(() => {
    const el = visivo.current
    if (!el) return
    const render = () => { el.textContent = euro.format(Math.round(mostrato.current.v)) }
    gsap.killTweensOf(mostrato.current)
    if (risparmio === null) { el.textContent = '—'; return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mostrato.current.v = risparmio; render(); return
    }
    const t = gsap.to(mostrato.current, { v: risparmio, duration: 1.2, ease: 'power2.out', onUpdate: render })
    return () => { t.kill() } // input successivo o smontaggio: riparte dal valore corrente
  }, [risparmio])

  async function copiaRisultato() {
    try { await navigator.clipboard.writeText(testo); setCopia('Risultato copiato') }
    catch { setCopia('Copia non riuscita: seleziona il valore manualmente') }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Notti prenotate direttamente all'anno <input type="number" inputMode="numeric" min={0} step={1} value={notti} onChange={(e) => { setNotti(e.target.value); setCopia('') }} /></label>
      <label>Prezzo medio a notte (€) <input type="number" inputMode="decimal" min={0} step="any" value={prezzo} onChange={(e) => { setPrezzo(e.target.value); setCopia('') }} /></label>
      <p>Risparmio stimato:{' '}
        <output>
          <span ref={visivo} aria-hidden="true">{iniziale}</span>
          <span className="sr-only">{risparmio === null ? 'inserisci valori validi' : testo}</span>
        </output>
      </p>
      <button type="button" onClick={copiaRisultato} disabled={risparmio === null}>Copia il risultato</button>
      <p role="status">{copia}</p>
    </form>
  )
}
```

Come risponde ai rilievi:
- **R1:** il valore iniziale viene calcolato e mostrato subito, anche nell'HTML generato dal server.
- **R2:** la copia usa `testo`, che è sempre il valore finale.
- **R3:** il lettore di schermo legge solo il testo finale. `<output>` ha già il ruolo `status`, quindi `aria-live` esplicito non serve.
- **R4:** lo stato è una stringa, quindi il campo può restare vuoto; i valori non validi mostrano "—".
- **R5:** a ogni input l'animazione precedente viene fermata, e anche quando il componente viene rimosso.
- **R6:** con "riduci movimento" il numero compare subito, senza conteggio.
- **R7:** c'è un messaggio di esito, con alternativa se la copia fallisce.

Due cose da sapere:
- La classe `sr-only` deve esistere nel progetto; se non c'è, va aggiunta.
- Mentre si digita "300", il lettore di schermo legge anche "3" e "30". Sono valori veri, ma se gli annunci risultano troppi si può ritardare di 300–500 ms solo il testo nascosto letto dal lettore di schermo.

### Limiti e prossimi passi

Non ho modificato il file: questa è una proposta.

Per chiudere i NON VERIFICATI serve il componente in un'app con React e `gsap`. Le prove da fare sono:
1. Digitazione veloce e cancellazione dei campi.
2. Copia durante l'animazione.
3. Emulazione di "riduci movimento".
4. Rimozione del componente a metà animazione.
5. Una prova con NVDA o VoiceOver.

Se vuoi, applico la correzione al file e ti preparo questi controlli.
