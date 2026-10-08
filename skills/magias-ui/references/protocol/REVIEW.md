# Review e quality gate

Magias UI Protocol · v0.2 · nucleo v0.2

[Gate per modalità](QUALITY-GATES.md) e [report](templates/REVIEW-REPORT.md) governano la consegna. Un audit completo può contenere FAIL; un prototipo non prova runtime. I controlli documentali del pacchetto non provano il funzionamento dei siti.

## R01 · MUST

Registrare stato e applicabilità di ogni controllo; usare gate distinti per specifica, audit, implementazione e release. MUST pertinente aperto impedisce il gate che ne richiede evidenza.

- Ambito: Esiti e gate dello scope.
- Eccezioni/limiti: Design consegnabile con prove runtime aperte; release non consentita se MUST pertinente aperto.
- Verifica: Schema stati, applicabilità, evidenze e versione.
- Automazione: D.

## R02 · MUST

Localizzare i rilievi con regola, effetto, gravità, evidenza e azione; forza normativa e gravità sono campi separati, senza voto compensativo.

- Ambito: Rilievi.
- Eccezioni/limiti: Osservazione non dimostrata è ipotesi; suggerimento senza FAIL.
- Verifica: Regola, posizione, effetto, evidenza e azione concreta.
- Automazione: D.

## R03 · MUST

Distinguere osservazione, asserzione automatizzata e giudizio; PASS richiede prova eseguita sulla revisione/ambiente dichiarati. Nessuna evidenza inventata.

- Ambito: Tutte le verifiche.
- Eccezioni/limiti: Nessuna evidenza inventata; limiti sempre espliciti.
- Verifica: Tipo di prova, ambiente, limite e validità del risultato.
- Automazione: D.

