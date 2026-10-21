# Correzione Refactor e nuova prova (21 ottobre 2026)

Nella prova in Codex lo scenario E04 era fallito: migliorando la selezione date, l'agente non aveva considerato lo slideshow che continuava a cambiare dietro il calendario aperto. La richiesta non nominava lo slideshow apposta.

**Correzione della skill** (nessuna regola modificata):
- `references/refactor.md`: prima di chiudere, guardare la vista del compito anche se la richiesta non nomina il movimento; elencare ciò che si muove; valutare l'interferenza (M05/MX07); applicare una `task_suspension` distinta dalla `manual_pause` o registrare perché il movimento resta attivo.
- `SKILL.md`: consultare il modulo movimento anche quando la richiesta non lo nomina ma nella vista del compito qualcosa si muove.

**Nuova prova**, stessa configurazione delle prove precedenti:

| Scenario | Runtime | Esito |
|---|---|---|
| E04 (3 esecuzioni) | Codex CLI 0.163.0-alpha.10.2 | 3 PASS: slideshow sospeso durante la selezione, pausa manuale separata, riduci movimento rispettato |
| E04 | Claude Code 2.1.306 | PASS: sospensione con un hook dedicato, pausa manuale separata |
| E11 (controllo di regressione) | Codex e Claude Code | PASS in entrambi: una sola classe cambiata, nessun ampliamento del perimetro |

Nota sulla variabilità: nella prima prova Claude Code aveva ricalcolato a mano il contrasto in E11 (3,13:1) correggendo il commento del materiale (3,4:1); in questa si è fidato del commento e ha dichiarato il valore NON VERIFICATO. Entrambi gli esiti rispettano il protocollo, ma mostrano che una sola esecuzione per scenario non basta a misurare la costanza.
