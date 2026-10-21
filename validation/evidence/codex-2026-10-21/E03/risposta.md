Il movimento è coerente con il racconto delle quattro fasi; **sticky e scroll-linked sono ammessi**. Il codice fornito, però, non realizza ancora tutto il comportamento descritto e presenta due problemi di gestione dell’effetto.

Review statica secondo Magias UI v0.2 sui due file forniti. Mancano applicazione eseguibile, CSS compilato e ambiente di prova: nessun test runtime o screen reader eseguito. Nessun file modificato.

1. **R01 · Gravità alta · FAIL — Preferenza ridotta non aggiornata durante l’uso.**  
   `Diagramma.tsx:8` controlla `matchMedia` solo al montaggio. Attivando successivamente reduced motion, le classi CSS cambiano layout, ma il trigger rimane attivo e le fasi successive possono restare attenuate.  
   **Regola:** M04, MUST, alias MX04.  
   **Correzione:** ascoltare i cambiamenti della preferenza, eliminare il trigger e mostrare tutte le fasi; ricrearlo quando appropriato.

2. **R02 · Gravità media · FAIL rispetto alla descrizione — Il diagramma è vuoto.**  
   `Diagramma.tsx:25` contiene soltanto un commento nello SVG. Mancano nodi, tratti e relativo disegno progressivo; `attiva` modifica esclusivamente l’elenco. Anche la variante ridotta manca del diagramma completo promesso.  
   **Riferimento:** contratto del movimento e comportamento dichiarato in `diagramma.md`.  
   **Correzione:** implementare la geometria e collegarla al progresso, mantenendola completa nella variante statica.

3. **R03 · Gravità media · FAIL nel ciclo di cleanup — Inizializzazione asincrona non cancellabile.**  
   `Diagramma.tsx:10`: se il componente viene smontato prima della risoluzione degli import, il cleanup esegue ancora la funzione vuota. La continuazione può quindi creare un trigger senza successiva pulizia.  
   **Regole interessate:** M03, MUST; M07, SHOULD.  
   **Correzione:** verificare annullamento e presenza del nodo dopo gli `await`, prima di creare il trigger. Gestire anche il fallimento degli import con un fallback esplicito.

Restano questi controlli:

- **PASS documentale — M01, SHOULD:** intento narrativo esplicito e pertinente.
- **NON VERIFICATO — M03/M06:** tutte le etichette sono nel JSX e non compaiono intercettazioni dello scroll; restano da provare scroll rapido/inverso, tastiera, navigazione diretta e guasto degli import. Il fallback deve essere valutato separatamente da reduced motion.
- **NON VERIFICATO — A02:** `opacity-30` richiede misurazione del contrasto sugli stati reali; la presenza nel DOM non garantisce leggibilità.
- **NON VERIFICATO — A04/A12:** altezza sticky, reflow a 320 CSS px, testo al 200% e text spacing richiedono prove distinte.
- **NON VERIFICATO — A06/A07/A09/A11:** elenco ordinato e nome dello SVG sono presenti; significato di `aria-current`, albero accessibile e lettura assistiva vanno verificati. Nella variante statica, indicare soltanto “Misura” come fase corrente richiede una motivazione.
- **NON VERIFICATO — M07:** nessuna misura di prestazioni disponibile.
- **NON APPLICABILE nello scope — MX05/MX06, A05/A08:** assenti valori transazionali, bersagli interattivi, dialog e menu.
- **NON APPLICABILE al comportamento fornito — MX09:** non emerge autoplay o movimento autonomo che richieda pausa/stop; la durata dello scroll, da sola, non impone un pulsante pausa.

**Esito Review:** audit statico completato nello scope dichiarato, con FAIL e verifiche aperte. **Release:** non raccomandata finché i rilievi non sono risolti e il comportamento reale non viene verificato; nessuna conformità AA attestata.