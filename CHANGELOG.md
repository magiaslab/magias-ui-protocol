# Changelog

## 0.3.0-beta.1 — 25 ottobre 2026

Seconda beta pubblica: skill con nucleo protocollo v0.3.

- Validazione a runtime delle garanzie MV e PF con il kit di riferimento [magias-ui-kit](https://github.com/magiaslab/magias-ui-kit) su tre bozze di siti di ospitalità (Next 16, livello di movimento 2): 14, 13 e 16 prove su altrettante, in Chrome headless con build di produzione. Restano da fare lettori di schermo, telefono vero, Lighthouse e dati di campo.
- Nucleo v0.3: 40 regole nuove, nessuna regola esistente cambiata. Moduli movimento ricco e 3D (livelli 0–3, MV00–MV08, ML01–ML05) e prestazioni (PF01–PF06); profili generico (G01–G05) e ospitalità (H01–H15). MV06 rende obbligatoria la sospensione dei movimenti concorrenti nella sola fase transazionale. Contesto di progetto con profilo, livello di movimento e servizi di terzi. Validatore a 117 regole. Note in `docs/MIGRATION-0.3.md`. Scenari E13–E18, eseguiti con la regressione di E04, E11 ed E12: Claude Code 9 PASS su 9, Codex 8 PASS e 1 con riserva (`validation/evidence/v0.3-2026-10-22`).
- Validazione: i 12 scenari anonimi eseguiti in Claude Code 2.1.306, 12 PASS. Materiali in `validation/fixtures/scenari`, risposte e criteri in `validation/evidence/claude-code-2026-10-21`, script `validation/run-claude-code.sh`. Nessuna regola modificata.
- Validazione: gli stessi 12 scenari in Codex CLI 0.163, 10 PASS, 1 PASS con riserva (E07), 1 FAIL (E04), nessuna violazione critica. Evidenze in `validation/evidence/codex-2026-10-21` (link locali delle risposte resi come testo), script `validation/run-codex.sh`.
- Skill, Refactor Mode: prima di chiudere si controllano i movimenti attivi nella vista del compito anche se la richiesta non li nomina, con sospensione distinta dalla pausa manuale. Corregge il FAIL di E04 in Codex (3 PASS su 3 nella nuova prova). Nessuna regola modificata.

## 0.1.0-beta.1 — 8 ottobre 2026

Prima beta pubblica della skill con nucleo protocollo v0.2. Include Design, Review e Refactor, 77 regole, filosofia iki in italiano e inglese, contratto motion, adapter, scenari anonimi, istruzioni di installazione e confezionamento locale. Verifiche comportamentali documentate separatamente dai controlli strutturali. Nessuna installazione globale o pubblicazione automatica.
