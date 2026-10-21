Ho riscritto la home in **`materiale/home-iki.html`** e lasciato intatto l'originale. **Non ho potuto verificarla:** i permessi della sessione hanno bloccato l'avvio di Chrome headless e lo script per calcolare i contrasti, quindi non ho controllato nulla nel browser.

## Come ho letto "iki"
Iki non vuol dire "stile giapponese": niente beige, ideogrammi o spazio bianco fine a sé stesso. Verde petrolio, bianco e font sans geometrico restano. Ho usato tre idee (è una mia interpretazione, le fonti non sono verificate):
- **Sicurezza senza alzare la voce:** niente maiuscole urlate né "!!!". Il titolo dice cosa fa lo studio: *"Riqualificazione energetica per condomini"*.
- **Integrità:** promesse solo se dimostrabili, condizioni sempre in vista.
- **Togliere il superfluo:** via ciò che non aiuta un amministratore che legge di fretta sul telefono.

In pratica è soprattutto un sito più onesto e più facile da usare. Ed è questo che lo fa sembrare più elegante.

## Cosa ho cambiato

| Prima | Dopo | Perché |
|---|---|---|
| "Risparmio garantito fino al 70%*", con nota "osservato su un caso" | "Il risparmio dipende dall'edificio… Nel caso migliore seguito finora i consumi sono scesi del 70%" | La nota contraddiceva il "garantito": era un'affermazione fuorviante |
| 3 pulsanti nell'apertura | 1 azione principale (sopralluogo) + link ai casi | Una sola scelta chiara |
| "98% clienti soddisfatti", "100% professionalità" | Tolti | Il 98% non ha fonte né periodo; il 100% non dice niente. Il 98% torna se lo studio ha i dati |
| Slider in autoplay | Elenco fisso dei 3 casi | Il movimento automatico senza pausa intralcia la lettura |
| Privacy e newsletter in un'unica casella già spuntata | Informativa come testo; newsletter in una casella a parte, non spuntata e facoltativa | Un consenso marketing preselezionato non è ammesso |
| Campi senza etichetta, solo placeholder | Etichette vere, campi obbligatori segnati, errori leggibili accanto al campo, dati conservati, niente doppio invio | Il modulo è il punto in cui si converte |
| "Come ci hai conosciuto?" (menu senza opzioni) | Tolto | Non funzionava e non serve per il sopralluogo |
| Link "Contatti" che non portava da nessuna parte | Piè di pagina `#contatti` | Prima il link era rotto |

Ho aggiunto anche: link "Vai al contenuto", struttura semantica, aree cliccabili di almeno 44 px e impaginazione mobile-first.

## Da completare prima di pubblicare
1. **Contatti:** indirizzo, telefono ed email non c'erano nel materiale. Nel piè di pagina ci sono segnaposto tra `[ ]` da sostituire.
2. **I numeri "oltre 250 condomini" e "oltre 12.000 famiglie":** servono fonte e data.
3. **"Garantito":** se lo studio offre davvero una garanzia contrattuale, va scritta con le sue condizioni.
4. **Descrizioni dei servizi:** le frasi brevi le ho scritte io, vanno confermate.
5. **Casi:** per ora c'è solo l'indirizzo. Servono la foto reale del cantiere (con testo alternativo), i lavori fatti, il risparmio misurato e il periodo di misura.
6. **Modulo:** va collegato al servizio di invio reale. Il messaggio di conferma va mostrato solo quando la richiesta è davvero arrivata. Se l'invio fallisce, il pulsante ora resta disattivato: va gestito quando si collega il backend.
7. **Font:** ho messo una serie di font geometrici di sistema. Va sostituita con il font dell'identità, se la licenza ne consente l'uso sul web.
8. **Privacy:** il testo dell'informativa e la necessità o meno di un consenso vanno fatti controllare da chi segue la privacy per lo studio.

## Controlli non fatti
- Resa a 320 e 375 px e su desktop, zoom al 200%, navigazione da tastiera, screen reader: tutto da fare.
- Contrasti: i colori sono scelti per superare la soglia AA, ma non li ho misurati. Il conto va fatto.
- Effetto sulle richieste di sopralluogo: nessuna previsione. Si vedrà dai dati reali dopo la pubblicazione.

Se autorizzi i comandi di Chrome headless e Python, faccio subito screenshot e calcolo dei contrasti.
