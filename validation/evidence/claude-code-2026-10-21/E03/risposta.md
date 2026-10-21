# Review: diagramma scroll-linked "Come lavoriamo"

**Modalità:** Review · protocollo Magias v0.2 · gate Review
**Scope:** `materiale/diagramma.md` (specifica) e `materiale/Diagramma.tsx` (30 righe). Non ci sono progetto, pagina ospite, CSS/tema, contenuto SVG né eseguibile.
**Metodo:** solo lettura statica del codice e confronto con la specifica. Non ho eseguito nessuna prova runtime: per farlo servirebbe installare React, GSAP e Tailwind, e non è autorizzato. Non ho usato browser, screen reader né strumenti per il contrasto.
**Esito:** l'audit è completo nello scope, con limiti. Ci sono 2 FAIL dimostrati dal codice e diversi MUST NON VERIFICATI a runtime.

## Cosa funziona già (lettura del codice)

- **Fallback a script fallito:** lo stato iniziale `attiva = 3` (riga 6) fa partire l'HTML del server e la versione senza JS già col diagramma completo. Tutte le fasi sono a `opacity-100`.
- **Separazione delle due varianti:** il CSS (`motion-reduce:`) e il JS (`no-preference`, riga 8) usano la stessa media query. GSAP non viene nemmeno caricato con movimento ridotto.
- **Nessuno scroll coercitivo:** lo scroll resta nativo, con `onUpdate` che legge solo il progresso. Scroll veloce, scroll all'indietro, tastiera e ancore non vengono intercettati.
- **Testo nel DOM:** le fasi stanno in un `<ol>` nativo, sempre presente, e la ricerca nella pagina le trova.
- **Mappatura per quarti:** con `Math.min` (riga 16) il progresso 1 non va oltre la fase 4. Con 300svh di corsa, ogni quarto vale 75svh, meno di un PageDown (circa 87%), quindi da tastiera nessuna fase viene saltata.

## Rilievi

| ID | Posizione | Regola (forza) | Gravità | Stato | Effetto ed evidenza | Correzione |
|---|---|---|---|---|---|---|
| R1 | `Diagramma.tsx:10-19` | M03 / MX03 (MUST) | maggiore | **FAIL** (codice) | **Race nel cleanup.** `kill` viene assegnato solo dopo l'`import()` asincrono. Se il componente si smonta prima, il cleanup esegue la funzione vuota (noop), poi la promise si risolve e crea un ScrollTrigger orfano, con `trigger: ref.current` ormai `null`, e chiama `setAttiva` su un componente smontato. In StrictMode (dev) l'effetto gira due volte e nascono 2 trigger, uno dei quali non viene mai distrutto. Lo stesso accade con le navigazioni client rapide. | Aggiungere un flag `let cancelled = false`, controllarlo dopo ogni `await` e impostarlo nel cleanup. Catturare `const el = ref.current` prima dell'import. |
| R2 | `Diagramma.tsx:26` | A07 (MUST) | minore | **FAIL** (codice) | In movimento ridotto, senza JS e a script fallito, `attiva = 3` mette `aria-current="step"` su "Misura". Lo screen reader annuncia "passo corrente" per un diagramma che la specifica vuole completo e statico. Lo stato comunicato è falso. | Usare `aria-current` solo quando lo scrollytelling è attivo (es. uno stato `animato` booleano), oppure toglierlo del tutto: lo stato visivo è decorativo e narrativo. |
| R3 | `Diagramma.tsx:7-20` | M04 / MX04 (MUST) | maggiore | NON VERIFICATO (ipotesi forte) | La preferenza di movimento viene letta una sola volta, senza listener `change`. **Da standard a ridotto a pagina aperta:** il CSS passa a `h-auto`/`static`, ma il trigger resta vivo e `attiva` resta parziale. Si vedono fasi a `opacity-30` in una variante che dovrebbe essere completa. **Da ridotto a standard:** la sezione torna alta 400svh e sticky, ma GSAP non parte. Restano 300svh di scroll "morto" con il diagramma fermo. | Ascoltare `mq.addEventListener('change', …)`: con riduzione attiva, `kill()` e `setAttiva(3)`; al contrario, inizializzare. |
| R4 | `:22-23` e catch assente | M03 (MUST, degrado dichiarato) | minore | NON VERIFICATO | Senza JS o con chunk GSAP fallito il contenuto resta completo (bene), ma la sezione resta alta 400svh e sticky: 300svh di scroll senza nulla che cambi. L'`import()` non ha `.catch`, quindi produce una unhandled rejection. La specifica non dichiara il degrado a script fallito, che è un contratto distinto dal movimento ridotto. | Applicare l'altezza 400svh e lo sticky solo quando il JS è pronto (classe o attributo impostato dall'effetto), e aggiungere `.catch`. Documentare il fallback nella specifica. |
| R5 | `:23` `h-svh` sticky | L07, A04, T04 (MUST) | maggiore se confermato | NON VERIFICATO | Il contenitore sticky ha altezza fissa pari a quella del viewport, con overflow visibile. Con viewport basso (mobile orizzontale, zoom 400% ≈ 320×256 CSS px, testo al 200%) titolo, SVG e lista possono superare l'altezza. Durante il pin la parte che sporge resta fuori schermo, e a fine pin si sovrappone alla sezione successiva. | Usare `min-h-svh`, oppure disattivare il pin sotto una soglia di altezza (`@media (max-height: …)`) e passare alla variante statica. Provare a 320 px, al 200% e al 400%. |
| R6 | `:26` `opacity-30` | A02 (MUST) | maggiore se confermato | NON VERIFICATO (manca la palette) | Le fasi inattive sono testo di contenuto, non componenti disabilitati, quindi l'eccezione di 1.4.3 non si applica. Esempio: testo nero su bianco al 30% di opacità dà circa #B3B3B3, cioè circa 2,1:1, sotto la soglia di 4,5:1. Chi si ferma a metà sezione legge male le fasi future. | Usare un'attenuazione che mantenga 4,5:1, oppure segnalare lo stato con un altro tratto (peso, marcatore, numerazione) invece che con la sola luminosità. Misurare sui colori reali. |
| R7 | `:25` SVG `{/* tratti */}` | MX02 (MUST), M01 (SHOULD) | da definire | NON VERIFICATO | La specifica chiede un "tratto che si disegna verso la successiva", ma il codice ha solo un segnaposto e nessun legame tra SVG e `attiva` o il progresso. Non posso valutare il disegno progressivo, la sua variante statica, il contrasto dei tratti non testuali (3:1) né la coerenza con la lista. | Fornire l'SVG reale. Decidere se il tratto segue `attiva` (a scatti) o `progress` (continuo), e specificarne la resa a diagramma completo. |
| R8 | `:25-26` | A09 / A06 (MUST) | minore | NON VERIFICATO | L'`aria-label` dell'SVG ripete esattamente la lista che segue, quindi lo screen reader legge la sequenza due volte. Non è un errore, è ridondanza. | Visto che l'`<ol>` è l'alternativa equivalente, valutare `aria-hidden="true"` sull'SVG, oppure un'etichetta che dica solo ciò che aggiunge il disegno. |
| R9 | `:14` | M02 (SHOULD) | minore | NON VERIFICATO | Quando GSAP finisce di caricarsi, `setAttiva(0)` porta tre fasi da piene a `opacity-30` di colpo. Se la sezione è già visibile (ricarica a metà pagina, ancora), si vede un lampo da completo a parziale. Poi `onUpdate` corregge solo al primo scroll, perché lo stato non viene calcolato dal progresso iniziale. | Impostare lo stato da `st.progress` subito dopo la creazione del trigger, invece di forzare 0. |
| R10 | `:24` `id="come"` | A06 (MUST) | minore | NON VERIFICATO | Se il componente viene usato due volte nella stessa pagina, l'ID fisso si duplica e rompe `aria-labelledby`. | `useId()`. |
| R11 | Specifica | P09 (MUST) / N03 (SHOULD) | da chiarire | NON VERIFICATO | "Il testo di ogni fase è sempre nel DOM", ma il codice contiene solo i nomi. Se esistono descrizioni delle fasi, mancano. Se non esistono, 300svh di scroll per quattro parole hanno un costo di attenzione da motivare: è ammesso (MX10), ma va giustificato in chiave narrativa. | Confermare il contenuto previsto per fase. |

**Note senza difetto:**
- `scrub: true` non ha effetto, perché non c'è un'animazione collegata; è innocuo.
- `setAttiva` a ogni frame non fa ri-renderizzare: React scarta l'aggiornamento se il valore è uguale.
- Il pin e lo scroll-linked in sé non sono un FAIL (MX10, MAY).

## Esiti per controllo

| Regola | Stato |
|---|---|
| M03 / MX03 (controllo, degrado) | **FAIL** (R1); degrado: NON VERIFICATO (R4) |
| A07 (stati accessibili) | **FAIL** (R2) |
| M04 / MX04 (movimento ridotto) | NON VERIFICATO. La variante iniziale è corretta nel codice; il cambio a runtime è a rischio (R3). |
| MX02 (informazioni durante la transizione) | NON VERIFICATO. Il testo è nel DOM; il tratto SVG manca (R7). |
| MX06, A03 (focus, tastiera) | NON APPLICABILE per gli elementi focalizzabili: la sezione non ne ha e non ha CTA. Lo scroll da tastiera è NON VERIFICATO a runtime. |
| A02, A04, L07, T04, A12 | NON VERIFICATO (manca l'ambiente) |
| A11 (screen reader) | NON VERIFICATO |
| MX05, MX09 | NON APPLICABILE: nessun valore transazionale. Il movimento dipende dallo scroll, non è autoplay, quindi non serve pausa (2.2.2). |
| M07 / MX08 (prestazioni) | NON VERIFICATO. Il caricamento lazy e il singolo trigger risultano adeguati alla lettura. |
| C* (CRO) | NON APPLICABILE: nessuna CTA né offerta nella sezione. |
| A01 (conformità AA) | Non valutata. Questa review non certifica AA. |

## Priorità e prossime prove

1. Correggere **R1** e **R2**: sono dimostrati dal codice e la correzione è piccola.
2. Correggere **R3** e **R4** insieme: entrambi riguardano lo stato "JS non attivo" e si risolvono attivando altezza e sticky solo quando il JS è pronto.
3. Prove runtime da fare: viewport basso, zoom 200% e 400% e reflow a 320 px (R5). Contrasto sui colori reali (R6). Cambio di `prefers-reduced-motion` a pagina aperta. Ricarica a metà sezione (R9). Scroll veloce e all'indietro. Passaggio con screen reader, annotando versione e browser.
4. Fornire l'SVG reale per chiudere **R7**.

La decisione di rilascio va presa a parte. Con R1 e R2 in FAIL e R3, R5 e R6 non verificati, il gate implementativo resta aperto. Se vuoi passo in Refactor Mode e correggo R1–R4 e R9–R10 senza toccare il carattere dell'effetto.
