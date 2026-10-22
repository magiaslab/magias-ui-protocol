# Dal nucleo v0.2 al v0.3

Il nucleo v0.3 aggiunge 40 regole e non ne cambia nessuna di quelle esistenti: le 77 regole della v0.2 hanno lo stesso ID, la stessa forza e lo stesso testo. Un audit fatto con la v0.2 resta valido per le regole che copriva.

## Cosa si aggiunge

| Modulo | File | Regole | Si applica |
|---|---|---|---|
| Movimento ricco e 3D | `protocol/MOTION-3D.md` | MV00–MV08, ML01–ML05 | MV a ogni progetto con movimento; ML solo se il progetto usa quella libreria |
| Prestazioni | `protocol/PERFORMANCE.md` | PF01–PF06 | Pagine pubbliche |
| Profilo generico | `protocol/profiles/GENERIC.md` | G01–G05 | Se dichiarato nel contesto |
| Profilo ospitalità | `protocol/profiles/HOSPITALITY.md` | H01–H15 | Se dichiarato, per strutture ricettive |

Nuovi MUST: MV01–MV07, PF04, H01–H04, H08, H11. Gli altri sono SHOULD.

## Cosa cambia in pratica

- **Fase transazionale.** Nella v0.2 sospendere uno slideshow mentre si scelgono le date era una raccomandazione (M05, MX07). Con MV06 diventa obbligatorio, ma solo nella fase di prenotazione o acquisto. Fuori da quella fase M05 e MX07 restano SHOULD.
- **Contesto di progetto.** Ci sono tre campi nuovi: profilo, livello di movimento e servizi di terzi non verificabili. Se mancano, la skill applica nucleo e moduli e non i profili.
- **Validatore.** `scripts/validate.py` si aspetta 117 regole e `protocol_version` 0.3.

## Cosa resta aperto

- Gli scenari E13–E18 sono stati eseguiti una volta in Claude Code e Codex ([prova](../validation/evidence/v0.3-2026-10-22/README.md)). Le garanzie MV e PF non sono ancora provate a runtime su un sito reale.
- Ricerca organica e visibilità negli assistenti AI non sono nello scope.
- Un kit di componenti di riferimento è previsto in una repository separata. Il protocollo non lo richiede.
