# Review: prima schermata della home

**Ambito:** ho letto solo i sorgenti in `materiale/` (contesto, layout, Apertura, motore-movimento, globals.css). Il profilo è ospitalità, con livello di movimento 2.
**Cosa non ho potuto fare:** non ho avviato l'app e non ho misure da laboratorio o dal campo. Anche il contesto dice che non ce ne sono. Tutto quello che segue viene dalla lettura del codice. Le soglie di tempo (PF01) restano NON VERIFICATO.

## In sintesi

Gran parte della lentezza dipende dal codice, non dalla rete. Il titolo e la CTA sono nascosti dal CSS e ricompaiono solo dopo il JavaScript, i font e un'animazione di quasi 3 secondi. Intanto il telefono scarica per intero un video che sotto i 768 px resta coperto dal poster. Il poster stesso è caricato in modo differito.

## Rilievi, in ordine di priorità

**R1 · Il titolo è nascosto fino a circa 3 s** (MV03 MUST, MV02 MUST) → **FAIL, gravità alta**
- `globals.css:3` imposta `.motion-pending .apertura-titolo { visibility: hidden }`. Il titolo ricompare solo dopo questa catena:
  1. download dei bundle e hydration;
  2. `document.fonts.ready`;
  3. SplitText;
  4. `delay: 0.8` più 7 parole × `stagger 0.12` più `duration 1.2`.
- Dalla fine del caricamento dei font, l'ultima parola diventa visibile dopo circa **2,7 s**. Il limite di MV03 è 300 ms.
- Senza JavaScript, il titolo resta invisibile per sempre (`motore-movimento.ts:14-16`, `layout.tsx:9`), perché lo stato nascosto lo imposta il CSS e non lo script.
- Effetto: la persona vede una schermata vuota o solo il video, e la pagina sembra lenta anche quando è già scaricata.

**R2 · Il video si scarica anche dove non si vede** (PF03 SHOULD → FAIL; MV05 MUST → FAIL) → **gravità alta**
- In `Apertura.tsx:4` il video ha `preload="auto"`, `autoPlay` e `loop`, e non è nascosto su mobile. Su mobile, però, l'`<img>` con `md:hidden` lo copre del tutto.
- Risultato: il telefono scarica e decodifica un video che non si vede, togliendo banda e CPU a tutto il resto.
- Il video gira in loop per più di 5 s senza comando di pausa, non si ferma fuori dalla vista né con la scheda in background, e manca l'attributo `poster`.

**R3 · Il poster su mobile ha `loading="lazy"`** (PF02 SHOULD) → **FAIL, gravità alta**
- `Apertura.tsx:5`: con ogni probabilità è l'elemento più grande della prima schermata su mobile. Va caricato subito e con priorità alta, non in differita.

**R4 · Le librerie di movimento si caricano sempre, anche con movimento ridotto** (MV01 MUST → FAIL; ML01 SHOULD → FAIL) → **gravità media**
- `motore-movimento.ts:3-7` importa GSAP, ScrollTrigger, SplitText e Lenis in modo statico. Il componente sta nel layout radice, quindi questo codice è nel bundle di ogni pagina e va scaricato ed eseguito prima dell'hydration.
- Con `prefers-reduced-motion`, le librerie sono comunque già scaricate e registrate.
- Il cambio di preferenza a pagina aperta non viene ascoltato.
- Il video resta in autoplay anche con la preferenza ridotta, quindi fallisce anche M04 (MUST).

**R5 · Corsa tra il timer dei 3 s e il caricamento dei font** (MX02 MUST) → **FAIL per lettura del codice, gravità media**
- `layout.tsx:9` toglie `motion-pending` dopo 3 s, qualunque cosa succeda. Su un telefono lento, dove JavaScript e font arrivano oltre i 3 s, il titolo compare.
- Poi `gsap.from` lo riporta a `opacity: 0` e lo rianima: il titolo appare, sparisce e riappare.
- Non l'ho riprodotto, perché servirebbe un test con CPU rallentata.

**R6 · La CTA "Verifica disponibilità" è invisibile ma si può attivare** (MV04 MUST) → **FAIL, gravità media**
- `globals.css:2` la imposta a `opacity: 0`. Finché lo script non parte, si può raggiungere con Tab o toccare senza vederla, e se riceve il focus non diventa visibile.
- Senza JavaScript resta invisibile per sempre.
- H01 (MUST, ricerca date e ospiti nella prima schermata) è **NON VERIFICATO**: nella prima schermata c'è solo un link a `#prenota`, e la destinazione non è nel materiale che ho ricevuto.

**R7 · Lenis attivo anche su touch** (ML03 SHOULD) → **FAIL, gravità bassa**
- `motore-movimento.ts:12-13` avvia Lenis senza controllare `(pointer: fine)`, quindi su touch gira un ciclo per ogni frame senza alcun beneficio.
- Mancano anche altre cose:
  - `lenis.on('scroll', ScrollTrigger.update)`;
  - la gestione delle ancore, quindi il link `#prenota` è da verificare;
  - la pulizia nell'effetto: `lenis.destroy`, la rimozione dal ticker, `split.revert()`.

## Esiti degli altri controlli

| Regola | Esito | Nota |
|---|---|---|
| PF01 soglie LCP/INP/CLS | NON VERIFICATO | Nessuna misura disponibile |
| PF04 spazio riservato | NON VERIFICATO | I media sono `absolute inset-0`: dal codice non vedo spostamenti, ma non l'ho provato a runtime |
| PF05 letture di layout | NON APPLICABILE | `getBoundingClientRect` viene letto una sola volta, fuori da qualsiasi ciclo di animazione |
| MV03, titolo spezzato e tecnologie assistive | NON VERIFICATO | Dipende dalla versione di SplitText (le recenti aggiungono `aria-label`) |
| Contrasto del titolo sul video | NON VERIFICATO | Non c'è un velo scuro dietro al testo; serve uno screenshot |
| ML05 misura con e senza movimento | FAIL (SHOULD) | Non risulta fatta |

## Correzioni consigliate

Mantengono il carattere del livello 2: video d'apertura e titolo animato restano.

1. **Titolo e CTA visibili al primo disegno.** Togliere le regole di `globals.css` e il timer dei 3 s. Lo stato iniziale dell'animazione lo imposta lo script. Per l'animazione del titolo:
   - nessun `delay`;
   - `stagger` intorno a 0,04;
   - lo spostamento `y` può restare, ma le parole devono diventare leggibili entro circa 300 ms.
2. **Video solo dove serve.**
   - Classi `hidden md:block` e `preload="none"` (oppure `metadata`), con l'attributo `poster`.
   - Avvio solo con `matchMedia('(min-width:768px)')`, senza movimento ridotto né risparmio dati.
   - Pausa fuori dalla vista (IntersectionObserver) e con la scheda nascosta (`visibilitychange`).
   - Un pulsante di pausa visibile.
3. **Poster subito e con priorità alta:** togliere `lazy` e usare `fetchPriority="high"` oppure `next/image` con `priority`, più `srcset` per i telefoni.
4. **Motore di movimento caricato dopo il primo disegno e mai con movimento ridotto.**
   - `import()` dinamico, eseguito solo se la preferenza ridotta è spenta.
   - `gsap.matchMedia` per gestire preferenza e breakpoint.
   - Ascolto del cambio di preferenza a pagina aperta.
   - `revert` nel cleanup.
5. **Lenis solo con puntatore fine:**
   - collegarlo a ScrollTrigger;
   - attivare `anchors: true` per gestire le ancore;
   - aggiungere la pulizia.

Per confermare l'effetto delle correzioni serve una misura prima e dopo: Lighthouse o WebPageTest su un telefono di fascia media, con rete e CPU dichiarate. Vale anche un profilo registrato sul telefono del cliente. Le correzioni dovrebbero accorciare molto il tempo prima che il contenuto si veda, ma non ho numeri per dimostrarlo.

**Decisione di release:** la tengo separata da questo audit. Ci sono MUST in FAIL (MV01, MV02, MV03, MV04, MV05, M04), quindi una correzione (Refactor) non supererebbe il gate finché questi punti non sono risolti e verificati. Se vuoi, passo alla modalità Refactor su R1–R4.
