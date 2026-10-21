# Ordini aperti — specifica di design

Magias UI Protocol v0.2 · Design Mode · revisione 1 · 21 ottobre 2026.
Fonte unica: `materiale/contesto.md`. Superficie: confronto ordini e consultazione del dettaglio. Nessuna applicazione o identità preesistente disponibile nel workspace.

## Compito e contenuti

Due operatrici confrontano ogni mattina circa 40 ordini aperti su monitor da 24 pollici e, talvolta, tablet, per decidere cosa preparare oggi. Il numero 40 è un ordine di grandezza, non un conteggio da mostrare in produzione.

Dati forniti: numero ordine, cliente, data ordine, consegna promessa, stato (nuovo, in lavorazione, pronto, in ritardo), importo, numero articoli e note brevi. Identità fornita: sobria, blu notte e sabbia; nessuna animazione richiesta.

Il mockup `schermata.html` è una tavola statica della composizione con dettaglio aperto. Ogni valore tra parentesi quadre è un segnaposto del campo, non un ordine. Etichette operative e messaggi di questa specifica sono copy proposto. Nessun cliente, importo, scadenza o conteggio reale è stato inventato.

## Composizione

Titolo «Ordini aperti», filtro «Solo in ritardo» e indicazione dell'ordinamento precedono una tabella unica. Nessuna paginazione prevista per circa 40 righe: scorrimento continuo, intestazioni persistenti e nessun raggruppamento che separi gli ordini da confrontare. «Vedere tutto insieme» è interpretato come un unico elenco confrontabile, non come 40 righe obbligatoriamente visibili senza scroll: la diagonale del monitor non determina risoluzione e spazio disponibile.

Colonne, da sinistra: numero, cliente, consegna promessa, stato, articoli, importo, data ordine, note. La consegna precede la data ordine perché guida la decisione. Numeri allineati a destra con cifre tabulari; date a larghezza coerente. Le note vanno a capo senza troncamento. Il numero ordine è un pulsante esplicito di apertura; la sola riga cliccabile non è l'unico accesso.

L'ordine iniziale proposto è per consegna crescente, con date assenti in fondo. Un secondo clic sull'intestazione «Consegna promessa» inverte l'ordine; `aria-sort` descrive la direzione. A pari consegna si usa data ordine crescente, poi numero come stringa: criterio proposto da validare. Non si impone priorità per importo o stato.

Sul desktop, il dettaglio è un pannello non modale di circa 360 px accanto all'elenco, senza ridimensionare le colonne all'apertura: occupa uno spazio laterale riservato quando la larghezza lo consente. Ripete i nove campi noti, note complete e «Chiudi dettaglio». Non aggiunge prodotti, indirizzi, disponibilità o azioni di preparazione non documentate.

## Interazioni e conservazione della posizione

- Il filtro include esclusivamente lo stato fornito «in ritardo». Non dedurre il ritardo dalla data finché manca la regola di business. Disattivandolo si torna all'intero elenco mantenendo l'ordinamento.
- Apertura dettaglio: preservare scroll verticale e orizzontale, ordinamento, filtro e identificativo della riga. Evidenziare la riga con bordo e testo/stato accessibile, senza affidarsi al colore.
- Portare il focus sul titolo del pannello (`tabindex=-1`); essendo non modale, la tabulazione può ritornare alla tabella. Escape o «Chiudi dettaglio» chiudono e riportano il focus al pulsante d'origine senza scroll automatico imprevisto.
- Se il filtro esclude la riga aperta, chiudere il dettaglio, mantenere focus sul filtro e annunciare il cambiamento. Non mantenere selezioni invisibili.
- Non sono previsti salvataggio, modifica stato, selezione multipla o assegnazione «da preparare oggi»: il contesto descrive una decisione, ma non il suo eventuale salvataggio.

## Responsive e carattere

Valori iniziali proposti, da verificare con dati reali: font di sistema 14–16 px, titolo 28 px, righe minime 44 px che crescono con il contenuto, controlli touch 44 px. Blu notte `#172B42`, sabbia `#E9DFC9`, fondo `#F7F5F0`, testo `#172B42`, divisori `#82909C`. Sono interpretazioni cromatiche, non codici ufficiali. Nessun font distribuito, immagine, logo o dipendenza remota.

Da circa 1440 CSS px: tabella e pannello affiancati. Sotto questa soglia: tabella a larghezza piena, dettaglio modale sovrapposto con contenuto scorrevole; focus contenuto nel dialogo, Escape e pulsante di chiusura sempre raggiungibili, sfondo inerte e restituzione di focus/scroll. Il passaggio di breakpoint conserva ordine aperto e contesto, adattando il contratto del focus.

Su tablet e a 320 CSS px: toolbar a capo, tabella in regione orizzontalmente scorrevole con nome accessibile, focus visibile e suggerimento testuale «Scorri la tabella per vedere tutte le colonne». Nessun campo eliminato. Il dettaglio occupa lo spazio disponibile; campi impilati. La bidimensionalità della tabella serve al confronto; il resto della pagina deve rifluire senza scroll orizzontale. Non fissare colonne se sottraggono troppo spazio a zoom elevato.

## Stati e recupero

- Caricamento iniziale: «Caricamento ordini…», regione `aria-busy`, nessuna riga o cifra fittizia. Nessuno spinner animato necessario.
- Elenco caricato: contatore solo se disponibile dalla sorgente, annunciato dopo filtri senza spostare il focus.
- Elenco realmente vuoto: «Nessun ordine aperto» solo dopo risposta valida.
- Filtro senza risultati: «Nessun ordine in ritardo», azione «Mostra tutti gli ordini».
- Errore elenco: «Impossibile caricare gli ordini», azione «Riprova». Conservare filtro e ordinamento; un errore non diventa un elenco vuoto.
- Dettaglio in caricamento/errore: conservare la tabella e il numero selezionato; messaggio locale e «Riprova», con chiusura sempre disponibile.
- Campo assente: «Non disponibile», senza sostituire importi o quantità con zero. Nota realmente vuota: «Nessuna nota». Distinguere vuoto da mancato caricamento.
- Ordine non più disponibile: messaggio nel dettaglio, chiusura e ritorno all'elenco senza rimuovere silenziosamente il contesto.
- Aggiornamenti concorrenti: niente riordino automatico mentre si consulta una riga. Strategia di aggiornamento e gestione dati obsoleti da definire con la sorgente.

## Movimento e accessibilità

Profilo unico operativo: nessuna animazione o transizione, anche per apertura, filtro e ordinamento. Risultati immediati dopo la risposta dati; nessun ritardo cosmetico. Con `prefers-reduced-motion` comportamento identico, niente scroll fluido. Input ripetuti: prevale l'ultima richiesta; risposte obsolete non sovrascrivono l'ordine corrente. Se lo script fallisce, nell'implementazione mostrare errore esplicito e percorso di ricaricamento; non lasciare controlli apparentemente operativi. Il mockup è dichiaratamente statico.

Obiettivo tecnico: WCAG 2.2 AA, senza attestazione di conformità. Prevedere HTML nativo, `lang=it`, titolo principale, tabella con caption e intestazioni associate, pulsanti nominati, checkbox etichettata, focus visibile e annunci discreti degli esiti. Stati sempre testuali. Nessun significato affidato al solo colore o hover.

## Informazioni mancanti

1. Campione reale, comprese note e clienti lunghi, campi mancanti, massimi di importo e articoli. Senza questi non si conferma la densità.
2. Codici colore ufficiali, eventuale logo e convenzioni tipografiche esistenti. Usare i token proposti solo come provvisori.
3. Risoluzione e browser del monitor, modello/orientamento tablet: la diagonale non basta per fissare il layout.
4. Definizione di ordine aperto e ritardo; chiarire se «in ritardo» sostituisce o si affianca allo stato di lavorazione. Fino ad allora visualizzare lo stato ricevuto senza riclassificarlo.
5. Valuta e convenzione per le date; non aggiungere simboli monetari o date di esempio.
6. Sorgente dati, aggiornamento simultaneo, tempi, gestione errori e contenuto ulteriore del dettaglio. Il progetto si limita ai campi forniti.
7. Eventuale necessità di registrare la scelta giornaliera e regole operative per farlo. Nessun comando di preparazione prima di definirle.

## Registro di applicabilità e piano prove

Gate Design: specifica pronta per confronto e consultazione con le assunzioni sopra; produzione e rilascio restano separati. Non è un gestionale funzionante.

- P07, L01–L02, L06, L10, T01–T03, T05–T07: applicabili; scelte documentate e contenuti confrontati con la fonte. Resa con dati reali NON VERIFICATA.
- L03, L07–L09, T04, A01–A08, A10–A12: applicabili; contratti definiti, prove runtime NON VERIFICATE. In implementazione compilare il registro completo A/AA per i processi interessati.
- T02.a: NON APPLICABILE alla distribuzione, nessun font incorporato.
- A09: NON APPLICABILE, nessuna immagine o media nella schermata.
- Movimento M/MX: nessun effetto temporale; autoplay, pausa, parallax e interpolazioni NON APPLICABILI. Controllo, focus, dati autorevoli e preferenza ridotta restano applicabili e NON VERIFICATI sul runtime.
- CRO, consenso e analytics: NON APPLICABILI, nessun acquisto, modulo commerciale, consenso o tracking previsto.
- R01 e R03: applicabili; separazione tra fonte, proposta, incognite e verifiche esplicita. R02: nessun audit di difetti esistenti nello scope.

Prove future: confronto con circa 40 ordini reali; ordinamento crescente/decrescente con pari date e dati mancanti; filtro con/senza risultati; apertura/chiusura dopo scroll e passaggio di breakpoint; risposte in ordine inverso; errori e riprova. Verificare su desktop e tablet effettivi, oltre a 1440, 1024, 768 e 320 CSS px e resize continuo. Provare tastiera, screen reader con versione registrata, touch, testo 200%, reflow 400%, text spacing, contrasti di ogni stato, focus non coperto e movimento ridotto. Nessuna di queste prove runtime è dichiarata eseguita.
