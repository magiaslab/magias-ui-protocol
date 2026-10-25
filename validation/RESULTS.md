# Stato delle verifiche

Aggiornato il 25 ottobre 2026; beta 0.3.0-beta.1, nucleo v0.3.

| Area | Stato | Evidenza e limite |
|---|---|---|
| Struttura skill, licenza e riferimenti | PASS locale | Validatore standard-library; non parser YAML generale |
| Registro e matrice | PASS locale | 117 regole (nucleo v0.3), corrispondenza dei campi e moduli |
| Confezionamento ZIP | PASS locale | Contenuto confrontato byte per byte; licenza inclusa |
| Claude Code 2.1.306 | PASS su 12 scenari su 12 | E01–E12 in Design, Review e Refactor su file isolati, una esecuzione ciascuno: [prova del 21 ottobre](evidence/claude-code-2026-10-21/README.md) |
| Codex CLI 0.163.0-alpha.10.2 | 11 PASS (uno con riserva) su 12, poi E04 corretto | E04 falliva (slideshow non sospeso); dopo la correzione della skill 3 PASS su 3: [prova](evidence/codex-2026-10-21/README.md), [correzione](evidence/correzione-refactor-2026-10-21/README.md) |
| Codex CLI 0.160.0 | PASS nel campione documentale (8 ottobre) | Una prova composita in Review |
| Claude Code 2.1.226 | BLOCCATO da autenticazione (9 ottobre) | Superato dalla prova del 21 ottobre con la versione 2.1.306 |
| Nucleo v0.3, E13–E18 + regressione | Claude Code 9 PASS su 9; Codex 8 PASS, 1 con riserva | Una esecuzione ciascuno: [prova del 22 ottobre](evidence/v0.3-2026-10-22/README.md) |
| Runtime MV e PF con il kit | PASS su tre siti (14/14, 13/13, 16/16) | Bozze di siti di ospitalità in Next 16, build di produzione, Chrome headless via CDP, 22 ottobre: senza JavaScript, riduci movimento all'avvio e a pagina aperta, focus su blocchi in attesa, strisce orizzontali da tastiera, sospensione con calendario, fuori vista e scheda nascosta, niente avanzamento automatico sul telefono, niente animazioni infinite, LCP e CLS in laboratorio. Lettori di schermo, telefono vero, Lighthouse e dati di campo NON VERIFICATI. [Note del kit](https://github.com/magiaslab/magias-ui-kit#validazione-su-un-sito-22-ottobre-2026) |
| Claude.ai / API | NON VERIFICATO | Non installati/caricati |
| CI GitHub | PASS remoto | Run 37850941100 del 9 ottobre 2026: validazione e confezionamento riusciti sul commit 11b7769 |

## Prova Claude Code (21 ottobre)

I 12 scenari di [SCENARIOS.md](SCENARIOS.md) sono stati eseguiti con `claude -p`, una cartella isolata per scenario, solo la skill del progetto, nessun MCP, strumenti limitati a lettura e scrittura di file (nessuna shell, nessun browser). I materiali anonimi sono in [fixtures/scenari](fixtures/scenari/), lo script in [run-claude-code.sh](run-claude-code.sh). I criteri sono stati scritti prima di leggere le risposte.

Esito: 12 PASS, nessuna violazione critica. L'agente ha distinto in ogni scenario ciò che ha letto, ciò che ha dedotto e ciò che resta NON VERIFICATO, e non ha inventato prove. Limiti: una sola esecuzione per scenario e un solo modello; valutatore e autore dei materiali coincidono; i materiali sono più nitidi di un caso reale; senza shell l'agente non ha potuto misurare (contrasti, browser) e lo ha dichiarato. Dettagli e risposte complete nella [cartella della prova](evidence/claude-code-2026-10-21/).

## Prova Codex

Materiale: [fixture anonima](fixtures/review-sample.md). [Risposta effettiva](evidence/codex-review-response.md) e [registro della prova](evidence/codex-review-run.json) conservano risultato e provenienza. L’agente ha letto solo fixture e skill locale. Sono state osservate sette decisioni coerenti con il protocollo: viewport, interferenza del movimento, diagramma ammesso, distinzione fra preferenza ridotta e guasto, pagina legale senza CTA, CRO non misurato, gate audit separato dalla release.

Valutazione qualitativa dell’autore del pacchetto. Una prova composita non equivale al superamento dei dodici [scenari](SCENARIOS.md) né valida Design e Refactor. Dopo la prova sono stati aggiunti metadata e testo MIT e aggiornate intestazioni editoriali; le istruzioni operative sono invariate; gli hash del materiale effettivamente provato sono registrati.

## Prova Claude (9 ottobre)

Tentativo eseguito in cartella temporanea, con skill locale, sola lettura, hook disabilitati e senza MCP esterni. L’ambiente ristretto non trovava l’autenticazione; il secondo tentativo ha identificato una sessione OAuth scaduta e non rinnovabile. Occorre completare l’accesso nel proprio Claude Code e ripetere la prova prima di dichiarare il runtime validato. Nessun login, account o impostazione globale modificato.

## Integrità e prossime prove

Il validatore bundled della skill-creator non è stato eseguito per dipendenza YAML non disponibile; il validatore locale usa il formato scalare specifico del frontmatter. Claude.ai e API restano NON VERIFICATI. La divergenza E04 fra Claude Code e Codex è stata corretta nella skill (Refactor controlla i movimenti nella vista del compito) e riprovata con esito positivo. La beta può essere distribuita con questi limiti dichiarati, ma non presentata come validata in tutti i runtime.

Verifiche degli strumenti di integrità: copie temporanee con matrice divergente, licenza della skill assente e collegamento locale interrotto sono state respinte dal validatore. Due build consecutive hanno prodotto gli stessi hash degli artefatti. Nessuna mutazione è stata applicata alla candidata per queste prove.
