# Risposta osservata — Codex

Revisione magias-ui v0.2 della sola `fixture.md`. Metodo: analisi documentale; compiti assunti: comprendere il racconto, selezionare una data e consultare informazioni legali. Nessuna prova runtime eseguita.

- **R1 — Test mobile, priorità alta:** viewport richiesta 390, effettiva 1280. La prova non dimostra comportamento mobile né un difetto responsive. **L08/A04 · MUST: NON VERIFICATO.** Ripetere con viewport effettiva controllata; verificare separatamente reflow, testo al 200% e text spacing.
- **R2 — Slideshow durante prenotazione, rischio da verificare:** possibile interferenza con lettura e selezione, senza danno dimostrato. **M05/MX07 · SHOULD: NON VERIFICATO.** Valutare sospensione contestuale preservando identità. **MX09 · MUST:** applicabilità di pausa/stop da determinare tramite durata, autoplay e controlli disponibili.
- **R3 — Diagramma scroll-linked:** variante statica completa dichiarata, coerente con movimento ridotto. **M04 · MUST: NON VERIFICATO** nell’esecuzione. **M03 · MUST: NON VERIFICATO:** controllare scroll rapido/inverso, focus e guasto dello script; la variante ridotta non prova il fallback al guasto.
- **R4 — Calendario:** date ferme e dato finale esplicito sono indizi favorevoli. **MX05/MX06 · MUST: NON VERIFICATO:** mancano prove di dato autorevole, input ripetuti, focus e stabilità durante aggiornamenti.
- **Pagina legale:** CTA commerciale **NON APPLICABILE**, per il compito dichiarato; nessun rilievo per la sua assenza.
- **Conversioni:** nessuna misurazione disponibile; nessun miglioramento CRO dimostrabile.

**Gate Review:** audit documentale completo nello scope, con limiti dichiarati; nessun FAIL di prodotto dimostrato. Accessibilità AA e gate implementativo restano **NON VERIFICATI**. **Release:** verifica insufficiente per raccomandarla.
