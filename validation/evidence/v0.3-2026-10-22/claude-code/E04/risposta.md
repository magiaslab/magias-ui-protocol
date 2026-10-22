Ho modificato i due file in `materiale/`. Non ho potuto verificare nulla in esecuzione: il progetto, `node_modules` e `tsc` non ci sono, e il controllo che volevo lanciare con Node (formato delle date e conteggio delle notti) non è stato approvato. Il codice quindi non è stato né compilato né provato nel browser.

## Problemi trovati

1. **Lo slideshow non si fermava mai mentre si sceglievano le date.** Le foto continuavano a cambiare dietro il pannello per tutta la scelta. In una prenotazione il protocollo lo vieta (regola MV06, obbligatoria).
2. **Il pannello si allargava e si spostava.** È centrato sul suo contenuto, quindi passando da "Scegli le date" alle date scelte cambiava larghezza e spostava il pulsante "Verifica disponibilità" (regola PF04, obbligatoria).
3. **Le date scelte non venivano inviate.** Il form non conteneva le date, e si poteva inviare anche senza averle scelte, senza alcun messaggio (regola C08).
4. **Il calendario non era in italiano.** Mesi in inglese, settimana che inizia di domenica, due mesi affiancati anche su schermi stretti.
5. **Il campo date non aveva un'etichetta.** Dopo la scelta uno screen reader leggeva solo "24/10/2026 – 2/11/2026", senza dire a cosa si riferiscono.

## Modifiche

**`PannelloPrenota.tsx`**
- Il campo ha un'etichetta visibile, "Arrivo – partenza". Le date compaiono come "sab 24 ott – lun 2 nov · 9 notti"; a metà scelta compare "scegli la partenza".
- Il pannello ha una larghezza fissa (`max-w-xl`), quindi il pulsante non si sposta più. Su schermi stretti campo e pulsante vanno uno sotto l'altro.
- Calendario in italiano, con almeno una notte obbligatoria. Mostra un mese sotto i 640px e due sopra. Si riapre sul mese già scelto e si chiude da solo quando arrivo e partenza sono entrambi scelti.
- Il form invia `arrivo` e `partenza` come `AAAA-MM-GG` nell'ora locale, così il giorno non slitta per il fuso orario. Se mancano le date, l'invio si blocca, compare un messaggio letto dagli screen reader e il calendario si riapre.
- Lo slideshow si ferma mentre il calendario è aperto o mentre si è dentro il pannello.

**`HeroSlider.tsx`**
- C'è un meccanismo condiviso (`useSospensioneSlider`) che ferma lo slideshow durante la scelta delle date. È separato dal pulsante Pausa: alla fine della scelta lo slideshow riparte, tranne se la persona l'aveva messo in pausa. In quel caso resta fermo finché non preme "Riprendi".
- Ho aggiunto altri casi in cui si ferma, perché agiscono sullo stesso timer: movimento ridotto attivo nel sistema (anche se cambiato a pagina aperta), scheda in background, slider fuori dallo schermo. Vanno oltre la richiesta stretta. Con il movimento ridotto il pulsante Pausa non viene mostrato, perché non c'è niente da fermare.

## Punti da controllare nel progetto vero

- **Import `date-fns/locale`:** suppone che `date-fns` sia installato. Con react-day-picker v9 si può usare anche `react-day-picker/locale`.
- **Import `./HeroSlider`:** l'ho scritto supponendo che i due file stiano nella stessa cartella. Se nel progetto non è così, va corretto.
- **Chiusura automatica e `min`:** si basano sull'API di react-day-picker, che cambia fra la v8 e la v9. Vanno provate nella versione installata.
- **Cosa fa davvero il form all'invio:** non ha `action` né un handler, quindi non so dove vada. I due campi nascosti si aggiungono a quel comportamento senza cambiarlo.
- **Prove da fare:** scegliere le date con mouse, tastiera e touch mentre lo slideshow gira; controllare che una pausa manuale resti attiva dopo la scelta; attivare il movimento ridotto a pagina aperta; mettere la scheda in background; provare con uno screen reader.

## Problemi già presenti, che non ho toccato

- Il pulsante Pausa non ha stile, quindi sulla foto potrebbe non vedersi. Inoltre usa `aria-pressed` ma cambia anche il proprio nome fra "Pausa" e "Riprendi": per uno screen reader è un segnale contraddittorio.
- Lo slideshow non ha comandi per andare avanti o indietro fra le foto.
