Ho modificato i due file in `materiale/` con il protocollo in modalità Refactor. Il codice non è stato compilato né provato in un browser: sono tutte verifiche ancora da fare (dettagli in fondo).

## Cosa ho cambiato

**`PannelloPrenota.tsx`**
1. **Le date non arrivavano al server.** Il form non conteneva nessun campo con un nome. Ora invia `arrivo` e `partenza` come campi nascosti nel formato `yyyy-mm-dd`, calcolati sull'ora locale. Uso apposta l'ora locale: `toISOString()` converte in UTC e per l'Italia la data di mezzanotte diventerebbe il giorno prima.
2. **Si poteva inviare senza date.** Se manca un intervallo di almeno una notte, l'invio si blocca: compare un messaggio collegato al campo (`aria-describedby`, `aria-invalid`) e il calendario si riapre.
3. **Leggibilità:**
   - etichetta visibile "Date del soggiorno", collegata al pulsante che apre il calendario;
   - riepilogo breve tipo "sab 24 ott – mar 27 ott · 3 notti" al posto di "24/10/2026 – …";
   - calendario in italiano con settimana che parte dal lunedì (`locale={it}`).
4. **Più controllo nel calendario:** sotto il calendario c'è una riga con il riepilogo completo, letto dagli screen reader a ogni scelta (`aria-live`), e i pulsanti "Cancella" e "Fatto". Il calendario non si chiude da solo appena scegli la partenza, così puoi correggerla. Lo apertura e la chiusura, insieme all'apertura automatica in caso di errore, sono gestite dal codice.
5. **Mobile:** su schermi stretti (sotto 640px) mostra un solo mese invece di due, e il riquadro resta dentro lo schermo. Il pannello ora ha una larghezza massima e va a capo se serve.
6. "Oggi" viene calcolato una volta sola dalla mezzanotte, così il primo giorno prenotabile non cambia da un render all'altro.

**`HeroSlider.tsx`**
- Nuova prop `sospeso`: mentre il calendario è aperto le foto smettono di cambiare dietro il pannello. È una sospensione temporanea, separata dalla pausa manuale: quando chiudi il calendario lo slideshow riparte da capo, ma solo se non l'avevi messo in pausa tu.
- Se il dispositivo chiede di ridurre le animazioni, lo slideshow parte in pausa e si può avviare con "Riprendi". Era un requisito obbligatorio (M04) non rispettato. Con questa impostazione si vede solo la prima foto finché la persona non avvia lo slideshow; le foto erano già marcate come decorative.

## Collegamento necessario nel componente genitore
Il componente che li contiene non è in `materiale/`, quindi va collegato a mano:
```tsx
const [prenotando, setPrenotando] = useState(false)
<div className="relative">
  <HeroSlider sospeso={prenotando} />
  <PannelloPrenota onAttivoChange={setPrenotando} />
</div>
```
Se non lo colleghi, il pannello funziona lo stesso, ma lo slideshow non si ferma. `onAttivoChange` è nelle dipendenze di un effetto: passa `setPrenotando` direttamente (resta sempre lo stesso) e non una funzione inline.

## Cosa non ho potuto verificare
- **Compilazione:** non ci sono `package.json` né dipendenze, quindi niente TypeScript né build. Do per scontato che esistano `date-fns` (lo usa già react-day-picker) e il `Calendar` di shadcn, e non so se la versione di react-day-picker è la 8 o la 9. Le prop che uso esistono in entrambe, ma conviene controllare.
- **Funzioni sulle date:** ho provato a testare con Node il formato `yyyy-mm-dd` e il conteggio delle notti nel fuso di Roma, ma il comando non è stato autorizzato, quindi restano da provare.
- **Prove nel browser:** non ho potuto provare tastiera (apertura, Esc, ritorno del focus), screen reader, contrasto, zoom e larghezze da 320px, né il comportamento con riduzione delle animazioni attiva.
- Non posso garantire un miglioramento della conversione: le modifiche correggono difetti nel flusso di prenotazione, ma l'effetto sulle prenotazioni non è misurato.

## Problemi già presenti che non ho toccato
- Il pulsante Pausa/Riprendi cambia testo **e** usa `aria-pressed`. È un'indicazione doppia e confusa per gli screen reader: meglio tenere un testo fisso con `aria-pressed`, oppure solo il testo che cambia.
- Lo stesso pulsante non ha stile né contrasto garantito sopra le foto, e non si sa se raggiunge una dimensione toccabile adeguata.
- Il carosello non ha controlli per scorrere le foto a mano.
