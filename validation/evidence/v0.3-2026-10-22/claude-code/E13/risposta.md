# Review: scena 3D della home (`materiale/ScenaCampi.tsx`)

**Esito:** audit completo nello scope, con FAIL. Il gate implementativo resta aperto su diversi MUST.

Ho solo letto il codice: `materiale/ScenaCampi.tsx` (44 righe) e `materiale/contesto.md`. Non ho eseguito la scena, non avevo un browser né misure, e non ho visto la pagina in cui la scena è montata. Dove un esito dipende dal comportamento a runtime, l'ho segnato come NON VERIFICATO. Un FAIL ricavato dal codice vale a meno che quel caso sia già gestito da un componente che lo contiene e che non ho visto.

La scena immersiva è una scelta d'identità approvata dal cliente e il livello 3 è dichiarato. I rilievi correggono come è costruita, non mettono in discussione la sua presenza (MX10).

## Rilievi in ordine di priorità

| # | Posizione | Regola | Gravità | Stato | Problema e effetto | Correzione |
|---|---|---|---|---|---|---|
| 1 | r.14 | M03, MV02 (MUST) | bloccante | FAIL (codice) | Se WebGL non è disponibile o il contesto non si crea (GPU in blocklist, troppi contesti aperti), `new WebGLRenderer` lancia un'eccezione dentro `useEffect` che nessuno intercetta. In React questo smonta l'albero fino al primo error boundary: rischi di perdere l'intera home, non solo la scena. | Controllare il supporto WebGL e usare try/catch. Se fallisce, mostrare un fallback statico con lo stesso contenuto. Mettere un error boundary attorno alla scena. |
| 2 | r.12–37 | ML01, ML04, MX08 (SHOULD); coerenza con MV00 | bloccante | FAIL (codice) | Manca il cleanup. Quando si naviga verso prodotto o carrello (livello 1), il ciclo `requestAnimationFrame` continua all'infinito e disegna 4000 mesh su un canvas staccato. Restano vivi anche il tween e ScrollTrigger con il pin. A ogni ritorno sulla home si aggiungono un altro renderer e altri 4000 mesh, e dopo circa 16 contesti il browser perde quelli più vecchi. In StrictMode (dev) tutto parte due volte. C'è anche un rischio possibile: il pin avvolge `<section>` in un pin-spacer, e se la sezione è la radice smontata da React può comparire l'errore `removeChild`. Va verificato. | Il cleanup deve fare: `cancelAnimationFrame`, `ctx.revert()` (o `useGSAP`), `dispose` di geometria, materiale e renderer, e `renderer.forceContextLoss()` se serve. |
| 3 | r.12–36 | M04, MX04, MV01 (MUST) | bloccante | FAIL (codice) | Non c'è alcun controllo su `prefers-reduced-motion`. Il volo in avanti della camera legato allo scroll, lungo 4000 px, è uno stimolo vestibolare tipico. three e GSAP si caricano comunque, e la preferenza non viene ascoltata mentre la pagina è aperta. | Usare `gsap.matchMedia()` con `(prefers-reduced-motion: no-preference)` e importare la scena in modo dinamico solo in quel ramo. Nel ramo ridotto: niente pin, solo un'immagine statica e le quattro stagioni come testo. |
| 4 | r.22, r.29 | WCAG 2.3.1 (A), MX02 | potenzialmente bloccante | NON VERIFICATO (ipotesi forte) | La camera sta in (0,0,z) e scorre lungo la colonna di alberi con `x = 0` (per `i%80 = 40`): ci passa attraverso un cono ogni 2 unità, circa 50 volte. Ogni cono in avvicinamento occupa gran parte dello schermo e poi sparisce. Il verde oliva sotto la luce ambientale 0.8 ha una luminanza relativa di circa 0,10 contro lo sfondo nero, cioè proprio al limite della soglia di flash. Con uno scroll rapido si superano facilmente 3 alternanze al secondo. A prescindere dal flash, è quasi certamente un difetto di composizione. | Spostare la camera in un corridoio libero tra i filari (per esempio `x = 0.5`, `y` sopra le chiome) e aggiungere `scene.fog` per un orizzonte più morbido. Poi verificare a runtime con scroll rapido. |
| 5 | r.41, r.8 | MV02 (MUST), ML04 (SHOULD), A06 | maggiore | FAIL (codice) | Il racconto delle quattro stagioni esiste solo in JS: nell'HTML renderizzato dal server il `<p>` è vuoto. Senza script, o se WebGL fallisce, la sezione è vuota e alta quanto lo schermo. Con un lettore di schermo si sente una stagione alla volta, oppure niente. Se la scena è la prima schermata, fallisce anche MV03. Va verificato dove è montata. | Mettere le quattro stagioni come testo vero nel DOM (per esempio `<ol>` con un titolo di sezione) ed evidenziare quella attiva con un attributo. Il canvas va marcato `aria-hidden`. |
| 6 | r.32 | M01, MX02 | maggiore | FAIL (codice) | Con `Math.round(stagione)` su 0→3, Inverno e Autunno occupano 1/6 dello scroll ciascuno, Primavera ed Estate 1/3 ciascuna. Il racconto è sbilanciato e la raccolta, il punto d'arrivo, dura metà delle altre. | Usare `Math.min(3, Math.floor(progress * 4))`, con `progress` preso da `self.progress` di ScrollTrigger. |
| 7 | r.15, r.20–24, r.3–5 | ML04, M07, MX08 (SHOULD); PF01, ML05 | maggiore | FAIL su ML04; NON VERIFICATO su PF01, ML05, M07 (nessuna misura) | Ogni mesh ha la sua geometria e il suo materiale: 4000 draw call e 8000 risorse GPU. La densità di pixel non ha tetto (`devicePixelRatio` può valere 3 su un telefono). three e GSAP sono importati in modo statico nel bundle della home, anche quando la scena non serve, e il caricamento non aspetta che la sezione sia vicina alla vista. | Usare `InstancedMesh` con una sola geometria e un solo materiale, `setPixelRatio(Math.min(dpr, 1.5–2))`, e `next/dynamic` con `ssr:false` più IntersectionObserver. Rispettare anche il risparmio dati. Poi misurare LCP/INP/CLS con e senza scena su un telefono di fascia media. |
| 8 | r.30, r.25 | MX08 (SHOULD); MV05 | minore | FAIL su MX08; MV05 NON APPLICABILE (motivo sotto) | I coni ruotano attorno al proprio asse di simmetria e c'è solo luce ambientale, quindi la rotazione è invisibile: lavoro fatto a ogni frame senza alcun effetto. Per lo stesso motivo il movimento autonomo oggi non si vede, e per questo MV05 non si applica. Il render continua anche fuori vista e dopo la fine del pin. Nota di design: con la sola `AmbientLight` gli alberi sono sagome piatte senza volume. Se è voluto va bene, altrimenti conviene una luce direzionale. Se la rotazione diventa visibile, MV05 diventa MUST: serve una pausa e lo stop fuori vista. | Togliere la rotazione, oppure renderla percepibile e aggiungere i controlli. Disegnare solo quando cambia lo scroll o quando la sezione è in vista. |
| 9 | r.15–18 | A04, L07 (MUST) | minore/maggiore | NON VERIFICATO | Non c'è gestione del resize. `setSize(innerWidth, innerHeight)` imposta la larghezza in px includendo la scrollbar, quindi su desktop con scrollbar classiche è probabile un overflow orizzontale. Su mobile `innerHeight` non coincide con `h-svh`. Ruotando il telefono si ottengono aspect e dimensioni sbagliati. | Ridimensionare in base alla `<section>` (con ResizeObserver, `setSize(w, h, false)`, aggiornando `camera.aspect`) e aggiungere `overflow-hidden` sulla sezione. |
| 10 | r.31–32 | PF05 (SHOULD) | minore | FAIL (codice) | A ogni frame il codice fa `querySelector` e riscrive `textContent`, anche quando il valore non cambia. | Tenere un riferimento all'elemento e aggiornarlo solo quando cambia la stagione. |
| 11 | r.27 | M03 (MUST) | minore | NON VERIFICATO | Il pin dura 4000 px fissi e prima del negozio non c'è un modo diretto per scavalcarlo. Il percorso non è bloccante (Fine e PagGiù funzionano) ma è lungo, soprattutto su mobile. Il trigger è la stringa `'#campi'`, quindi si rompe se il componente compare due volte. | Aggiungere un link visibile "Vai ai prodotti" e usare il ref come trigger. |
| 12 | r.6 | ML01 (SHOULD) | minore | FAIL (codice) | La registrazione del plugin è nel modulo del componente, non c'è `matchMedia` e non c'è `revert`. | Un solo modulo per il movimento, `useGSAP` o `gsap.context`. |
| 13 | r.41 | A02 (MUST) | — | NON VERIFICATO | Il testo bianco ha circa 21:1 di contrasto sul nero di sfondo e circa 6,8:1 sul verde dei coni. È un calcolo sui valori del codice, non sul render. | Verificare sul render, anche con la nebbia se viene aggiunta. |

Esiti senza difetti:
- **MV00, G05:** PASS. Il contesto dichiara profilo, livelli e librerie.
- **MV06, MX05, MX06, MV07:** NON APPLICABILE. La scena non è nella fase d'acquisto e non contiene una striscia orizzontale. Vale però il rilievo 2: oggi il ciclo continua anche nel carrello.
- **MV04:** NON APPLICABILE. Non ci sono contenuti in attesa di essere rivelati.

## Struttura consigliata

È uno schizzo non testato, da usare come riferimento per il refactor:

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    if (!webglDisponibile() || navigator.connection?.saveData) return
    let stop: (() => void) | undefined
    import('./scena').then(({ avvia }) => {            // three caricato solo qui
      stop = avvia(canvasRef.current!, sectionRef.current!, {
        onStagione: i => setAttiva(i),                // floor(progress*4), solo al cambio
      })                                              // InstancedMesh, dpr ≤ 2, ResizeObserver,
    })                                                // render solo in vista, camera fuori dai filari
    return () => stop?.()                             // cancelAnimationFrame + dispose
  })
}, { scope: sectionRef })                             // revert automatico di tween e pin
```

## MUST aperti e prove ancora da fare

**MUST aperti:**
- in FAIL: M03, MV02, M04/MX04/MV01;
- da verificare: 2.3.1 (rilievo 4), A04/L07 e A02.

**Prove ancora da fare:**
- scroll rapido e all'indietro con registrazione (per il flash);
- WebGL disattivato e JavaScript bloccato;
- preferenza di movimento ridotto attivata prima del caricamento e cambiata a pagina aperta;
- navigazione home → prodotto → carrello → home ripetuta, controllando CPU e numero di contesti WebGL;
- resize e rotazione del telefono;
- misure LCP/INP/CLS su un telefono di fascia media, con e senza scena;
- lettore di schermo sulla sezione.

**Release:** è una decisione separata da questo audit. Il mio consiglio è di non pubblicare finché non sono risolti i rilievi 1, 2, 3, 5 e 6 ed escluso il rilievo 4 con una prova a runtime. Gli altri rilievi possono seguire.
