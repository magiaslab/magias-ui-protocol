Ho sistemato la sezione "Il percorso" in `materiale/Percorso.tsx`, ma non l'ho provata: nel progetto non ci sono dipendenze né un ambiente per avviarlo, e non ho installato nulla. Nemmeno la compilazione TypeScript è stata eseguita: le correzioni le ho controllate solo leggendo il codice.

## Cosa non funzionava (regola MV07, che si appoggia su A03)
1. **Il focus finiva fuori schermo.** La striscia si sposta con una trasformazione legata allo scroll verticale. Con Tab il focus arrivava su "Prenota questa tappa" di tappe ancora fuori vista, quindi non si vedeva. In più `overflow-hidden` lasciava che il browser facesse scorrere la sezione di lato, sfasandola rispetto all'animazione.
2. **Non c'era modo di saltare la sezione:** con la tastiera bisognava attraversare tutte e sei le tappe.
3. **Non c'era una versione con scroll normale** per schermi stretti o per chi ha attivato la riduzione del movimento. Anche lì restava la striscia bloccata durante lo scroll.

## Cosa ho cambiato
- **Il focus porta in vista la tappa.** Quando una tappa fuori vista riceve il focus da tastiera, la pagina scorre fino al punto in cui la striscia la mostra al centro. Funziona anche con Shift+Tab. Lo spostamento avviene subito dopo lo scroll automatico del browser, così non viene sovrascritto. Se la tappa è già visibile, o se si clicca col mouse, non succede niente.
- Al posto di `overflow-hidden` uso `overflow-clip`, che impedisce al browser di far scorrere la sezione di lato.
- **Link "Salta il percorso"**: compare solo quando riceve il focus e porta all'elemento `#dopo-percorso`, subito dopo la sezione.
- **Versione con scroll normale**: con `gsap.matchMedia` la striscia bloccata resta solo da 768px in su e senza riduzione del movimento attiva. Negli altri casi la striscia scorre di lato normalmente e si ferma su ogni tappa. Se la preferenza cambia a pagina aperta, la sezione si adatta. La stessa versione resta anche se JavaScript non parte (MV02).
- **Ritocchi minori:**
  - ogni link ha un nome distinto per gli screen reader ("Prenota questa tappa: La vigna"), che comincia comunque col testo visibile;
  - il focus sui link è più evidente;
  - ogni tappa è etichettata col suo titolo;
  - ho aggiunto un piccolo spazio sotto la striscia, così il contorno del focus non viene tagliato.

L'effetto su desktop resta quello di prima: stessa striscia, stesso movimento, stessi contenuti.

## Cosa resta da verificare
- **Prova in un browser vero:** Tab e Shift+Tab lungo tutta la striscia, il link di salto, uno schermo stretto (incluso 320px) e il passaggio alla riduzione del movimento a pagina aperta.
- **Prova con screen reader** (A11).
- **Due punti fuori da questo file:**
  - **Caricamento di GSAP:** è importato direttamente nel file, quindi con la riduzione del movimento la libreria viene comunque scaricata, anche se non si avvia. Questo va contro MV01. Conviene caricarla solo quando serve, dal punto unico dove il progetto registra i plugin di GSAP (ML01), se ne esiste uno.
  - **Ancora del link di salto:** è un `div` vuoto. Se la sezione successiva ha già un `id`, è meglio puntare a quella.

Finché queste prove non sono fatte, la modifica è consegnata ma non verificata.
