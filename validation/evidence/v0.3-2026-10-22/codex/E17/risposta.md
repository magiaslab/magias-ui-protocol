**Il codice introduce attese artificiali nella prima schermata e avvia un video anche sul telefono, dietro l’immagine.** Sono due cause plausibili della lentezza segnalata; senza eseguibile e misure non posso quantificarne il peso.

Review statica dei cinque file, protocollo Magias UI v0.3, profilo ospitalità, movimento livello 2. Nessun file modificato.

1. **Alta — Titolo e disponibilità dipendono da JavaScript per comparire.**  
   `layout.tsx:5` (`materiale/layout.tsx:5`), `globals.css:2` (`materiale/globals.css:2`), `motore-movimento.ts:15` (`materiale/motore-movimento.ts:15`).  
   L’HTML parte con `motion-pending`: titolo nascosto e link trasparente. Lo sblocco attende l’effetto React e `document.fonts.ready`; poi il titolo ha ancora **0,8 s di ritardo**, durata 1,2 s e stagger. Il timeout di 3 secondi rimuove solo la classe: non annulla l’animazione GSAP eventualmente avviata. Senza JavaScript, titolo e azione restano nascosti.  
   **Correzione:** contenuti essenziali visibili nell’HTML iniziale; animazione come arricchimento, senza attesa dei font per leggere o prenotare. **FAIL da sorgente — MV02 e MV03, MUST.**

2. **Alta — Il telefono carica il video dietro il poster.**  
   `Apertura.tsx:4` (`materiale/Apertura.tsx:4`).  
   Il video ha `autoPlay`, `loop` e `preload="auto"` a ogni breakpoint. L’immagine mobile lo ricopre, ma non ne impedisce richieste e possibile decodifica. Inoltre l’immagine della prima schermata è `loading="lazy"` e il video non ha un attributo `poster`. La quantità effettivamente scaricata dipende dal browser.  
   **Correzione:** dare priorità all’immagine iniziale; assegnare la sorgente video solo quando serve davvero e la sezione è visibile. Cambiare soltanto `preload` lasciando autoplay non basta a garantire il risparmio. **FAIL sulla configurazione — PF03, SHOULD; PF02 NON VERIFICATO finché non si identifica l’LCP.**

3. **Alta — La preferenza di movimento ridotto è gestita solo in parte.**  
   `motore-movimento.ts:3` (`materiale/motore-movimento.ts:3`), `motore-movimento.ts:11` (`materiale/motore-movimento.ts:11`).  
   GSAP, plugin e Lenis sono importati prima del controllo. La preferenza viene letta una sola volta, senza ascoltarne i cambiamenti; il video continua ad avere autoplay.  
   **Correzione:** import dinamici dopo la verifica, gestione del cambio di preferenza e fallback statico anche per il video. **FAIL da sorgente — MV01, MUST.**

4. **Media — Il motore non libera le risorse.**  
   `motore-movimento.ts:13` (`materiale/motore-movimento.ts:13`).  
   `useEffect` non restituisce cleanup: restano callback del ticker, istanza Lenis, animazioni, ScrollTrigger e suddivisione del titolo. Un rimontaggio può duplicare il lavoro; anche la promessa dei font può completarsi dopo lo smontaggio. Lenis viene inoltre inizializzato senza distinguere puntatore fine e touch.  
   **Correzione:** callback nominata da rimuovere, `destroy`, contesto GSAP con `revert`, annullamento logico dell’avvio asincrono e scroll nativo su touch. **FAIL sulla struttura — ML01/ML03, SHOULD; impatto prestazionale NON VERIFICATO.**

5. **Media — Mancano pausa e sospensione del video.**  
   `Apertura.tsx:4` (`materiale/Apertura.tsx:4`).  
   Nel materiale non esistono comando di pausa né gestione di fuori vista o scheda nascosta. Il browser potrebbe sospenderlo autonomamente, ma il codice non lo garantisce.  
   **Correzione:** pausa esplicita e sospensione per visibilità, conservando la scelta manuale. **FAIL da sorgente — MV05, MUST.**

6. **Media — Il link può ricevere focus restando invisibile.**  
   `globals.css:2` (`materiale/globals.css:2`), `Apertura.tsx:9` (`materiale/Apertura.tsx:9`).  
   `opacity: 0` non elimina il link dalla tabulazione e manca una regola che lo renda visibile al focus.  
   **Correzione:** lasciare visibile l’azione essenziale o garantirne la comparsa immediata al focus. **FAIL da sorgente — MV04, MUST.**

**Ordine consigliato:** rendere subito visibili titolo e disponibilità; evitare il video nascosto su mobile; correggere caricamento e ciclo di vita del motore.

**Limiti della verifica:** LCP, INP, CLS e relativo confronto con/senza movimento sono **NON VERIFICATI** (PF01/ML05). Anche accessibilità del titolo dopo SplitText, contrasto, touch e raggiungibilità della ricerca a 375/1366 px richiedono runtime; il solo `href="#prenota"` non verifica la destinazione. Il `getBoundingClientRect()` presente viene eseguito all’inizializzazione: non dimostra letture di layout a ogni frame.

La review dei sorgenti è completa nello scope richiesto; la verifica su telefono e la decisione di release restano aperte.
