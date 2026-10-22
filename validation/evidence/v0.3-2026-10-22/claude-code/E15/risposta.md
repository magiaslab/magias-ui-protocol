Ho sistemato `materiale/BarraPrenota.tsx`, ma non ho potuto provarlo: la cartella contiene solo il componente, senza progetto né dipendenze, quindi non ho compilato né aperto nulla nel browser.

## Perché "Cerca" a volte non faceva niente

Dal codice risultano tre cause:

1. **Pulsante disattivato senza spiegazione.** Se le date non erano state scelte, o se l'ospite aveva indicato solo l'arrivo, "Cerca" era disattivato. Il clic non produceva nulla e non diceva cosa mancava. La regola H13 del profilo ospitalità chiede proprio di non disattivarlo.
2. **Arrivo e partenza nello stesso giorno.** Toccando due volte lo stesso giorno, il calendario restituisce un intervallo di zero notti. Il pulsante si attivava e mandava al motore una ricerca che probabilmente il motore rifiuta (non ho potuto verificarlo).
3. **Nuova scheda bloccata.** Il blocco dei popup o i browser interni alle app (Instagram, Facebook) possono impedire l'apertura della nuova scheda. In quel caso il codice non faceva altro e non succedeva niente.

## Cosa ho cambiato

- **"Cerca" è sempre attivo.** Se mancano le date, riapre il calendario e scrive cosa manca: "Scegli le date di arrivo e partenza", "Scegli la data di partenza" oppure "almeno una notte". Lo stesso messaggio viene letto dagli screen reader. Sparisce appena l'ospite cambia le date.
- **Serve almeno una notte** prima di passare al motore.
- **Se la nuova scheda viene bloccata**, il motore si apre nella stessa pagina. Il link al motore porta ancora date, adulti e bambini come prima.
- **Agli screen reader il pulsante dice che si apre in una nuova scheda.** Chi lo vede non nota differenze: aspetto e disposizione della barra non cambiano.

## Da provare prima di pubblicare

- Su un telefono vero: invio senza date, con solo l'arrivo e con arrivo e partenza uguali.
- Con il blocco popup attivo e dal browser interno di Instagram.
- Con VoiceOver o NVDA, per sentire se il messaggio viene letto.
- Se il motore accetta soggiorni di una sola notte.
- La pagina che contiene la barra: con il livello di movimento 2 potrebbe esserci uno slideshow o un video. Se continua a muoversi mentre l'ospite sceglie le date, va fermato, ma quel codice non è tra i file che mi hai dato.

## Problemi trovati ma non toccati

- I pulsanti + e − degli ospiti si disattivano al limite di 6 senza spiegare perché. La stessa regola H13 chiede di indicare il limite.
- I pulsanti "−" e "+" non hanno un nome che dica a cosa servono (adulti o bambini).
- Il calendario permette di scegliere date già passate.

Posso sistemare anche questi se vuoi.
