# Stato delle verifiche

Aggiornato il 9 ottobre 2026; beta 0.1.0-beta.1, nucleo v0.2.

| Area | Stato | Evidenza e limite |
|---|---|---|
| Struttura skill, licenza e riferimenti | PASS locale | Validatore standard-library; non parser YAML generale |
| Registro e matrice | PASS locale | 77 regole, corrispondenza dei campi e moduli |
| Confezionamento ZIP | PASS locale | Contenuto confrontato byte per byte; licenza inclusa |
| Codex CLI 0.160.0 | PASS nel campione documentale | Skill invocata, file pertinenti letti, risposta osservata e giudizio registrati |
| Claude Code 2.1.226 | BLOCCATO da autenticazione | Sessione OAuth scaduta, rinnovo non riuscito; nessuna risposta della skill |
| Claude.ai / API | NON VERIFICATO | Non installati/caricati |
| CI GitHub | PASS remoto | Run 37850941100 del 9 ottobre 2026: validazione e confezionamento riusciti sul commit 11b7769 |

## Prova Codex

Materiale: [fixture anonima](fixtures/review-sample.md). [Risposta effettiva](evidence/codex-review-response.md) e [registro della prova](evidence/codex-review-run.json) conservano risultato e provenienza. L’agente ha letto solo fixture e skill locale. Sono state osservate sette decisioni coerenti con il protocollo: viewport, interferenza del movimento, diagramma ammesso, distinzione fra preferenza ridotta e guasto, pagina legale senza CTA, CRO non misurato, gate audit separato dalla release.

Valutazione qualitativa dell’autore del pacchetto. Una prova composita non equivale al superamento dei dodici [scenari](SCENARIOS.md) né valida Design e Refactor. Dopo la prova sono stati aggiunti metadata e testo MIT e aggiornate intestazioni editoriali; le istruzioni operative sono invariate; gli hash del materiale effettivamente provato sono registrati.

## Prova Claude

Tentativo eseguito in cartella temporanea, con skill locale, sola lettura, hook disabilitati e senza MCP esterni. L’ambiente ristretto non trovava l’autenticazione; il secondo tentativo ha identificato una sessione OAuth scaduta e non rinnovabile. Occorre completare l’accesso nel proprio Claude Code e ripetere la prova prima di dichiarare il runtime validato. Nessun login, account o impostazione globale modificato.

## Integrità e prossime prove

Il validatore bundled della skill-creator non è stato eseguito per dipendenza YAML non disponibile; il validatore locale usa il formato scalare specifico del frontmatter. Gli scenari mancanti restano NON VERIFICATI. La beta può essere distribuita con questi limiti dichiarati, ma non presentata come validata in tutti i runtime.

Verifiche degli strumenti di integrità: copie temporanee con matrice divergente, licenza della skill assente e collegamento locale interrotto sono state respinte dal validatore. Due build consecutive hanno prodotto gli stessi hash degli artefatti. Nessuna mutazione è stata applicata alla candidata per queste prove.
