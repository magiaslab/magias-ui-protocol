Ho scritto la specifica in `materiale/specifica-ordini-aperti.md`. È pronta come progetto, ma non c'è ancora nessuna implementazione, quindi nessuna prova è stata eseguita.

## La proposta in breve

**Schermata "Ordini aperti"**, interfaccia operativa (le regole su offerte e conversioni non si applicano). È divisa in quattro zone, ognuna legata a uno dei bisogni indicati nel contesto:

- **Intestazione:** titolo, ora dell'ultimo caricamento e pulsante "Aggiorna". Con due operatrici sugli stessi dati, sapere quanto sono aggiornati conta.
- **Barra filtri:** pulsanti per stato con il conteggio accanto. "In ritardo" si attiva con un solo clic. Sotto c'è il testo "Mostrati N di 40", che viene anche letto dallo screen reader.
- **Tabella:** è il componente principale ed è una tabella vera, scelta al posto delle card perché le operatrici sono abituate al foglio di calcolo e devono confrontare colonna per colonna. Di default è ordinata per consegna promessa, dalla più vicina; le intestazioni delle colonne restano fisse durante lo scorrimento. Date e importi sono allineati a destra con cifre della stessa larghezza. L'ordine si apre dal link sul numero.
- **Dettaglio senza perdere la posizione:**
  - Sul 24" è un pannello affiancato che non blocca la tabella: lo scorrimento resta dov'era e la riga aperta rimane evidenziata.
  - Ci sono i pulsanti "Ordine precedente" e "Ordine successivo".
  - Esc chiude il pannello e riporta il cursore della tastiera sulla riga di partenza.
  - Filtri, ordinamento e ordine aperto restano nell'indirizzo della pagina, così si ritrovano anche dopo una ricarica.

**Tablet e schermi stretti:** su tablet il dettaglio si sovrappone alla tabella. Sotto i 768 px ogni ordine diventa un blocco di righe "etichetta: valore", con le stesse funzioni.

**Stati e colori:** ho definito caricamento, errore, elenco vuoto e filtro senza risultati. Gli stati degli ordini hanno sempre testo e icona, mai solo il colore. Il sabbia è usato come sfondo e non per il testo.

**Animazioni:** nessuna, come richiesto.

## Cosa manca (lo segnalo, non l'ho inventato)

1. **Come si registra la decisione "preparare oggi".** Il contesto non indica nessuna azione, quindi per ora la schermata serve solo a consultare. È la mancanza che pesa di più: se serve un'azione, cambiano gli stati della schermata e la gestione delle due postazioni.
2. **Il significato di "in ritardo".** Non è chiaro se sia uno stato a sé o se si calcoli dalla data di consegna. Per esempio, un ordine "pronto" ma oltre la data cosa diventa?
3. **I colori e il font aziendali.** Mancano i codici esatti di blu notte e sabbia; ho usato valori provvisori, marcati come tali.
4. **Il tablet.** Non conosco modello, sistema operativo e orientamento.
5. **I dati.** Non so da dove arrivano, ogni quanto si aggiornano e se entrambe le operatrici modificano gli ordini.
6. **I formati:** valuta, formato delle date e cosa conta come "oggi".
7. **Le note e il dettaglio:** lunghezza massima delle note e cosa contiene il dettaglio oltre agli 8 campi.

La specifica ha anche due domande minori: se servono la ricerca e la stampa, e quali ordini restano fuori dagli "aperti".

## Limiti

- Non ho verificato nulla: contrasto, tastiera, screen reader, zoom e layout sui vari schermi restano da provare finché non c'è un'implementazione.
- Il contrasto dipende dai colori definitivi.
- Non dichiaro la conformità WCAG AA.

Il piano di prove nella specifica parte da un test con le due operatrici, su una mattina di dati reali, confrontato con il foglio di calcolo. Prevede poi le prove su posizione, tastiera, screen reader (NVDA e VoiceOver), zoom, scala di grigi e uso contemporaneo dalle due postazioni.
