**La scena è coerente con l’identità approvata, ma presenta carenze da correggere prima del rilascio.** Il livello 3 ammette WebGL, pinning e racconto allo scroll: conservarli è appropriato.

Review statica secondo Magias UI v0.3, limitata a `ScenaCampi.tsx` e al contesto fornito. Nessun file modificato.

1. **Alta — FAIL · Movimento ridotto ignorato.**  
   `Import e inizializzazione` (`materiale/ScenaCampi.tsx:3`): three.js e GSAP sono importati subito; scena, pinning e loop partono senza consultare la preferenza né ascoltarne i cambiamenti. **MV01/M04 — MUST.** Prevedere una variante statica equivalente e caricare il movimento solo quando consentito.

2. **Alta — FAIL · Racconto assente senza JavaScript o WebGL.**  
   `Markup` (`materiale/ScenaCampi.tsx:38`): il paragrafo iniziale è vuoto; le stagioni diventano leggibili soltanto dal loop, dopo la creazione del renderer. Un errore WebGL lascia la sezione senza contenuto narrativo. **MV02 — MUST; ML04 — SHOULD.** Rendere le quattro stagioni come testo nel DOM iniziale, con fallback visivo; usare il canvas come arricchimento.

3. **Alta — FAIL · Loop automatico senza pausa e sospensione.**  
   `Ciclo di rendering` (`materiale/ScenaCampi.tsx:28`): le rotazioni continuano indipendentemente dallo scroll; mancano pausa, controllo della visibilità e gestione della scheda nascosta. **MV05 — MUST.** Introdurre pausa accessibile e sospensione fuori vista/in background, conservando la scelta manuale. La sospensione automatica di `requestAnimationFrame` operata dal browser non sostituisce questo contratto.

4. **Alta — FAIL · Nessun cleanup all’uscita.**  
   `Effect` (`materiale/ScenaCampi.tsx:12`): manca una funzione di ritorno che cancelli il frame, ripristini tween/ScrollTrigger e liberi renderer, geometrie e materiali. **ML01/ML04 — SHOULD**, senza deviazione motivata. Il ciclo può sopravvivere allo smontaggio e accumulare lavoro ai rimontaggi. Conservare i riferimenti e rilasciare tutte le risorse create.

5. **Media — FAIL · Allocazioni e risoluzione senza contenimento.**  
   `Creazione della scena` (`materiale/ScenaCampi.tsx:15`): DPR integrale e 4.000 mesh, ciascuna con geometria e materiale nuovi. **ML04 — SHOULD.** Limitare il DPR, condividere risorse e valutare `InstancedMesh`; attivare la scena vicino alla viewport. È un costo strutturale documentabile, **non prova di FPS insufficienti o Core Web Vitals fuori soglia**.

6. **Media — Dimensioni non aggiornate al resize.**  
   `Renderer e camera` (`materiale/ScenaCampi.tsx:16`): dimensioni e rapporto prospettico vengono impostati una sola volta. Dopo resize o rotazione il canvas può risultare tagliato o non corrispondere alla sezione. Aggiornare dimensioni, `camera.aspect` e matrice di proiezione in base al contenitore. **Effetto visivo NON VERIFICATO a runtime.**

**Esiti e limiti:** PASS documentale per intento narrativo e livello dichiarato — M01/MV00/G05. Restano **NON VERIFICATI** contrasto, reflow, testo al 200%, text spacing, tastiera/screen reader, scroll rapido e inverso, accesso diretto oltre il pinning e prestazioni PF01/ML05. Mancano app avviabile, stili e misure. Il pinning di 4.000 px, da solo, non dimostra un percorso coercitivo.

MV06 e i controlli transazionali sono **NON APPLICABILI al componente fornito**, che non contiene acquisti; l’integrazione con eventuali controlli della home resta non verificata.

L’audit statico è completo entro questi limiti. **Raccomandazione di release: correggere i MUST falliti e verificare la scena nell’app**, preservando il racconto immersivo. Nessuna conformità AA o conseguenza sulle conversioni è dimostrata.
