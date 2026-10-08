# Review Mode

Registra pagine, componenti, revisioni e stati nello scope. Se il materiale richiesto non è accessibile, dichiaralo: puoi analizzare ciò che esiste, ma non chiamarlo verifica dei file mancanti.

Combina controlli deterministici, osservazione dell’interfaccia e giudizio umano, assegnando il metodo a ciascun rilievo. Verifica viewport effettiva prima di chiamare un test mobile; separa ridimensionamento testo, reflow e text spacing. Per obiettivo AA usa il registro WCAG del protocollo, completando applicabilità e prove: uno scanner non certifica AA.

Controlla informazioni e azioni prima/durante/dopo le transizioni, input ripetuti, focus, preferenza ridotta, pause e fallback pertinenti. Nei flussi verifica anche destinazioni informative e recupero, non soltanto la CTA. Un link presente o HTTP 200 può essere una soft 404; raggiungibilità e pertinenza del contenuto restano prove distinte.

Deduplica problemi e alias. Se un pattern non ha danno o requisito applicabile dimostrato, trattalo come ipotesi da provare. Non correggere automaticamente un effetto espressivo per mancanza di strumenti. Registra gli esiti PASS, FAIL, NON VERIFICATO, NON APPLICABILE motivato e DEVIAZIONE MOTIVATA per SHOULD. Per prove parziali usa NON VERIFICATO sulla regola intera e annota il campione riuscito.

Consegna audit e priorità tramite il gate Review. Riferimento opzionale: protocol/templates/REVIEW-REPORT.md. Un difetto osservato non dimostra un calo di conversione.
