# Movimento ricco e 3D

Magias UI Protocol · v0.3 · modulo nuovo

Questo modulo si aggiunge a [Movimento](MOTION.md) e non lo sostituisce. MOTION.md dice cosa il movimento deve garantire; qui ci sono i livelli di movimento, le garanzie che valgono a ogni livello (MV) e le regole per le librerie che usiamo più spesso (ML). Le regole ML valgono solo se il progetto usa quella libreria: non sono un invito ad adottarla. [Scheda effetto](templates/MOTION-CONTRACT.md).

## Livelli di movimento

Si sceglie un livello per progetto e lo si scrive nel [contesto](PROJECT-CONTEXT.md). Una pagina può avere un livello diverso, con un motivo. Le garanzie MV sono le stesse a ogni livello.

| Livello | Cosa include di solito | Dove ha senso |
|---|---|---|
| 0 Fermo | Feedback di stato e transizioni brevi | Gestionali, pagine legali, strumenti |
| 1 Editoriale | Apertura in CSS, reveal, titoli riga per riga, sipario sulle foto, transizioni fra pagine | Gran parte dei siti |
| 2 Ricco | Livello 1 più scroll fluido, parallax e zoom legati allo scroll, strisce bloccate, disegni che si tracciano, video d'apertura | Ospitalità, cantine, racconto di luoghi |
| 3 Immersivo | Livello 2 più scene WebGL guidate dallo scroll o dal puntatore, cursore, loop decorativi | Progetti in cui il movimento è parte dell'identità |

Il livello descrive il carattere del progetto, non una quota da raggiungere. Un livello alto non giustifica ostacoli nella fase del compito: per prenotazione e acquisto vale MV06 a ogni livello.

<!-- regole -->

## MV00 · SHOULD

Dichiarare nel contesto di progetto il livello di movimento (0 Fermo, 1 Editoriale, 2 Ricco, 3 Immersivo) e motivare le pagine che se ne discostano.

- Ambito: Progetto e pagine.
- Eccezioni/limiti: Pagine con fasi diverse possono avere livelli diversi; il livello non è un obiettivo da raggiungere.
- Verifica: Contesto compilato e confronto fra livello dichiarato ed effetti presenti.
- Automazione: H.

## MV01 · MUST

Con preferenza di movimento ridotto non caricare né avviare le librerie di movimento non necessarie e mostrare lo stato finale o il fallback; ascoltare il cambio di preferenza mentre la pagina è aperta.

- Ambito: Livelli 1–3.
- Eccezioni/limiti: Movimento essenziale con alternativa; transizioni brevi di stato ammesse.
- Verifica: Preferenza attiva prima del caricamento e cambiata a pagina aperta: richieste di rete, loop fermi, contenuti completi.
- Automazione: S.

## MV02 · MUST

Senza script o con script fallito la pagina resta completa: lo stato iniziale nascosto di un effetto lo imposta lo script, non il CSS di partenza.

- Ambito: Contenuti con effetti d'ingresso.
- Eccezioni/limiti: Applicazioni che dichiarano la dipendenza da JavaScript e il loro degrado.
- Verifica: Pagina con JavaScript disattivato o bloccato e con errore nel modulo di movimento.
- Automazione: S.

## MV03 · MUST

Il contenuto principale della prima schermata è leggibile al primo disegno senza attendere JavaScript; un'animazione d'ingresso non lo nasconde oltre 300 ms. Un titolo spezzato in parti conserva il testo intero per le tecnologie assistive.

- Ambito: Prima schermata e titoli animati.
- Eccezioni/limiti: Sipari e dissolvenze ammessi entro il limite; contenuti secondari esclusi.
- Verifica: Registrazione del caricamento con rete e CPU rallentate; albero accessibile del titolo.
- Automazione: S.

## MV04 · MUST

Un elemento in attesa di animazione resta raggiungibile da tastiera e trovabile con la ricerca nella pagina; se riceve il focus diventa visibile.

- Ambito: Reveal e contenuti in attesa.
- Eccezioni/limiti: Contenuti volutamente chiusi da un controllo esplicito, come accordion e dialog.
- Verifica: Tab attraverso la pagina prima dello scroll e ricerca nella pagina di un testo non ancora rivelato.
- Automazione: S.

## MV05 · MUST

Ogni movimento continuo o automatico che dura più di 5 secondi ha un comando di pausa, si ferma fuori dalla vista e quando la scheda è nascosta.

- Ambito: Video, loop, marquee, slideshow, scene 3D che si muovono da sole.
- Eccezioni/limiti: Movimento essenziale; media scelti e avviati dalla persona.
- Verifica: Pausa e ripresa da tastiera, scroll oltre l'elemento, scheda in background, consumo CPU.
- Automazione: S.

## MV06 · MUST

Nella fase di prenotazione o acquisto nessun movimento continuo o legato allo scroll agisce su date, prezzi, quantità e pulsanti; i movimenti concorrenti nella stessa vista si sospendono con task_suspension, senza annullare una pausa manuale.

- Ambito: Fase transazionale.
- Eccezioni/limiti: Feedback di stato, apertura di pannelli e micro-conferme; movimento nelle altre fasi della pagina.
- Verifica: Prova del compito con slideshow o video attivi: target fermi, sospensione e ripresa, pausa manuale conservata.
- Automazione: S.

## MV07 · MUST

Una striscia orizzontale bloccata porta in vista l'elemento che riceve il focus, si può saltare e ha una variante a scroll nativo per schermi stretti e movimento ridotto.

- Ambito: Sezioni con pinning e scorrimento orizzontale.
- Eccezioni/limiti: Strisce senza elementi interattivi possono omettere il salto se brevi.
- Verifica: Tab attraverso la striscia, link di salto, viewport stretta e preferenza ridotta.
- Automazione: S.

## MV08 · SHOULD

Applicare un solo effetto di movimento per elemento; dissolvenza, sipario, zoom e parallax non si sommano sulla stessa immagine.

- Ambito: Immagini e blocchi animati.
- Eccezioni/limiti: Composizioni coordinate dichiarate come un unico effetto nel contratto.
- Verifica: Inventario degli effetti per elemento e osservazione durante lo scroll.
- Automazione: H.

## ML01 · SHOULD

Se il progetto usa GSAP: un solo punto di registrazione dei plugin usati, import dinamico dopo il caricamento dei font, gsap.matchMedia per preferenza e breakpoint, revert nel cleanup, durate ed easing presi dai token tramite un ponte unico.

- Ambito: Progetti con GSAP.
- Eccezioni/limiti: Librerie equivalenti con lo stesso contratto; progetti esistenti in migrazione.
- Verifica: Lettura del modulo di movimento, cambio di pagina ripetuto, confronto fra token e valori usati.
- Automazione: S.

## ML02 · SHOULD

Usare un vocabolario di attributi per gli effetti con un prefisso unico (es. data-m-*), elencato nel design system del progetto; niente attributi documentati e non implementati.

- Ambito: Effetti dichiarati nel markup.
- Eccezioni/limiti: Componenti che incapsulano l'effetto senza attributi.
- Verifica: Ricerca degli attributi nel codice e confronto con il documento del design system.
- Automazione: A.

## ML03 · SHOULD

Se il progetto usa scroll fluido (es. Lenis): solo con puntatore fine, ancore gestite, sospensione in dialog, popover e menu aperti, aree con scroll proprio escluse, un solo ciclo di animazione condiviso, ritorno in cima al cambio di pagina.

- Ambito: Progetti con scroll fluido.
- Eccezioni/limiti: Nessun obbligo di scroll fluido; touch con scroll nativo.
- Verifica: Tastiera, ancore, dialog, aree scrollabili interne, touch e cambio pagina.
- Automazione: S.

## ML04 · SHOULD

Se il progetto usa scene WebGL (es. three.js): caricare la scena solo se movimento ridotto è spento, WebGL disponibile, risparmio dati spento e la sezione è vicina alla vista; limitare la densità di pixel, fermare il ciclo fuori vista, liberare le risorse all'uscita e offrire un fallback con lo stesso contenuto e testo vero nel DOM.

- Ambito: Livello 3 e scene decorative o esplicative.
- Eccezioni/limiti: Scene che sono il prodotto stesso (configuratori) con budget dichiarato.
- Verifica: Rete e CPU rallentate, scheda in background, uscita e rientro nella pagina, contenuto senza WebGL.
- Automazione: S.

## ML05 · SHOULD

Per i livelli 2 e 3 misurare prima e dopo il movimento LCP, INP e CLS su un telefono di fascia media, con le soglie di PF01.

- Ambito: Livelli 2 e 3.
- Eccezioni/limiti: Livelli 0 e 1 con misura a campione.
- Verifica: Due misure ripetibili con e senza movimento nello stesso ambiente.
- Automazione: S.
