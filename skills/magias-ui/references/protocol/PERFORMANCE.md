# Prestazioni

Magias UI Protocol · v0.3 · modulo nuovo

Le prestazioni fanno parte dell'esperienza: un'apertura lenta o un pulsante che si sposta mentre lo tocchi sono problemi d'interfaccia. Le soglie seguono le Core Web Vitals; le misure si dichiarano con ambiente, rete e dispositivo. Un risultato di laboratorio non è un dato di campo, e una misura mancante resta NON VERIFICATO. Per il costo del movimento vedi M07 e ML05 in [Movimento ricco e 3D](MOTION-3D.md).

Ricerca organica e visibilità negli assistenti AI non sono nello scope di questa versione.

<!-- regole -->

## PF01 · SHOULD

Puntare a LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 al 75° percentile dei dati reali, o in laboratorio su telefono di fascia media se mancano; motivare e registrare le deviazioni.

- Ambito: Pagine pubbliche.
- Eccezioni/limiti: Applicazioni interne con budget proprio; pagine senza traffico misurabile.
- Verifica: Dati di campo se disponibili, altrimenti laboratorio con rete e CPU dichiarate.
- Automazione: S.

## PF02 · SHOULD

L'elemento più grande della prima schermata non è caricato in modo differito, ha priorità di caricamento e non dipende da JavaScript per comparire.

- Ambito: Prima schermata.
- Eccezioni/limiti: Prima schermata solo testuale.
- Verifica: Individuazione dell'elemento LCP e della sua catena di richieste.
- Automazione: S.

## PF03 · SHOULD

I video non essenziali non si precaricano per intero: preload none o metadata, poster come immagine iniziale, riproduzione solo in vista.

- Ambito: Video decorativi e di apertura.
- Eccezioni/limiti: Video che sono il contenuto principale scelto dalla persona.
- Verifica: Richieste di rete al caricamento e durante lo scroll.
- Automazione: S.

## PF04 · MUST

Riservare lo spazio di immagini, media, barre e banner che compaiono dopo il primo disegno, così che non spostino i contenuti su cui la persona sta agendo.

- Ambito: Elementi caricati o inseriti dopo il primo disegno.
- Eccezioni/limiti: Spostamenti causati dalla persona entro il tempo atteso dal browser.
- Verifica: Registrazione degli spostamenti di layout durante caricamento e interazione.
- Automazione: S.

## PF05 · SHOULD

Nei cicli di animazione e negli handler di scroll non leggere il layout per ogni elemento a ogni frame: leggere in blocco, memorizzare e ricalcolare solo al resize.

- Ambito: Motori di movimento e handler di scroll.
- Eccezioni/limiti: Letture uniche fuori dal ciclo.
- Verifica: Profilo delle prestazioni durante lo scroll: layout forzati e durata dei frame.
- Automazione: S.

## PF06 · SHOULD

Caricare mappe, widget di prenotazione, chat e altri script di terzi su intenzione o dopo il consenso pertinente, con un'alternativa testuale o un link nel frattempo.

- Ambito: Script e iframe di terzi.
- Eccezioni/limiti: Servizi necessari al primo compito della pagina.
- Verifica: Richieste di rete prima dell'interazione e del consenso; contenuto disponibile nell'alternativa.
- Automazione: S.
