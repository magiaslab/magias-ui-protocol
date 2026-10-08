# Segnali per la review

Magias UI Protocol · v0.2

Gli ID N04–N20 identificano segnali/alias, non ulteriori regole da sommare al gate. N19 governa il comportamento del revisore: nessun FAIL per la sola simmetria. Le priorità MUST rinviano ai requisiti indipendenti nel metodo.

| ID/segnale | Forza del riferimento | Ambito | Eccezioni | Verifica | Auto |
|---|---|---|---|---|---|
| N04 / 9 · tre card | SHOULD | Ripetizione del medesimo layout | Entità autonome, confronto, raggruppamento significativo | Verificare se formato segue contenuto e compito; conteggio non bloccante | H |
| N05 / 10 · bento | SHOULD | Modularità e priorità | Moduli indipendenti leggibili | Ordine di lettura, salienza, responsive e comprensione | S |
| N06 / 11 · effetti | SHOULD | Gradienti, glow, glass, orb | Identità, separazione, rappresentazione pertinente | Contrasto, costi e funzione; presenza non FAIL | S |
| N07 / 12 · pill | SHOULD | Tag, filtri, stati, azioni | Raggruppamento e semantica riconoscibili | Distinzione controlli/dati e task test | H |
| N08 / 13 · icone | SHOULD | Segni aggiuntivi | Riconoscimento rapido, densità, supporto linguistico | Comprensione, nome accessibile e ridondanza utile | S |
| N09 / 14 · hero vaga | MUST | Apertura commerciale | Narrazione/arte con scopo diverso | C02: persona riconosce offerta e azione pertinente | H |
| N10 / 15 · CTA equivalenti | SHOULD | Decisione con priorità motivata | Scelte neutrali ed equivalenti | C03: nessuna gerarchia ingannevole; comprensione delle azioni | H |
| N11 / 16 · scroll motion | SHOULD | Richiami ripetuti | Storytelling controllabile e informazione persistente | M03/M04: accesso senza reveal e preferenze rispettate | S |
| N12 / 17 · grigio tenue | MUST | Contrasto pertinente | Eccezioni normative | A02: contrasto reale negli stati, non divieto del grigio | S |
| N13 / 18 · accordion ovunque | SHOULD | Comprensione dell’offerta | FAQ, dettagli e gruppi in cui disclosure aiuta | C04: sintesi decisiva visibile e accesso al dettaglio | H |
| N14 / 19 · solo hover | MUST | Informazioni e azioni | Hover solo arricchimento con equivalenti | M06 e criteri applicabili: touch, tastiera, focus | S |
| N15 / 20 · vuoti immensi | SHOULD | Distanza fra informazione e azione | Atmosfera e pause utili, densità di progetto | P04/L07: contesto, zoom, scroll e compito | H |
| N16 / 21 · colonne impilate | SHOULD | Adattamento responsive | Impilamento corretto se compito e gerarchia preservati | L08: parità funzionale e casi estremi | S |
| N17 / 22 · simboli giapponesi | SHOULD | Iconografia e attribuzioni | Contenuto pertinente, brand o riferimento consapevole | Review culturale/editoriale; nessun lint “simbolo = errore” | H |
| N18 / 23 · prove inventate | MUST | Fiducia e risultati dichiarati | Fiction/placeholder espliciti fuori dalle prove reali | C05: fonte e uso dichiarato; qualità/provenienza umana | S |
| N19 / 24 · simmetria proibita | MUST | Logica del protocollo | Asimmetria facoltativa; non si impone simmetria | Controllo della policy: nessun FAIL basato solo sulla simmetria | D |
| N20 / 25 · copy generico | SHOULD | Comprensione del pubblico | Voce espressiva pertinente | C07: task test e review editoriale; stringhe solo indizi | H |
