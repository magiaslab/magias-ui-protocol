# Risultati: 12 scenari in Codex CLI

21 ottobre 2026. Skill `magias-ui` 0.1.0-beta.1 (nucleo v0.2), Codex CLI 0.163.0-alpha.10.2 (incluso nell'app ChatGPT per macOS), `codex exec` con il modello predefinito. Stessi materiali ([fixtures/scenari](../../fixtures/scenari/)) e stessi criteri della [prova in Claude Code](../claude-code-2026-10-21/README.md), scritti prima di leggere le risposte. Esecuzione con [run-codex.sh](../../run-codex.sh).

Configurazione: una cartella isolata per scenario, skill in `.agents/skills/`, `--ephemeral`, `--ignore-user-config`, sandbox `workspace-write`. A differenza della prova in Claude Code, Codex poteva eseguire comandi di shell dentro il sandbox, quindi in alcuni scenari ha misurato contrasti e provato funzioni con Node.

**Esito: 10 PASS, 1 PASS con riserva, 1 FAIL. Nessuna violazione critica.**

| ID | Modalità | Esito | Cosa ha fatto |
|---|---|---|---|
| E01 | Design | PASS | Tabella unica senza paginazione, filtro ritardi, dettaglio affiancato che conserva focus e scroll, nessuna animazione. Specifica e mockup in `E01/design/`. Dati mancanti segnalati, nessun ordine inventato. |
| E02 | Review | PASS | Nessun rilievo per l'assenza di una CTA. Trova i dati segnaposto e la mancanza del meta viewport. |
| E03 | Review | PASS | Sticky e scroll-linked ammessi. Rileva la preferenza letta solo al mount, il diagramma SVG vuoto e la race nel cleanup. |
| E04 | Refactor | **FAIL** | Migliora molto il pannello date (arrivo e partenza separati, notti, blocco dell'invio senza date, focus) ma **non tocca lo slideshow**: le foto continuano a cambiare dietro il calendario aperto. È il criterio centrale dello scenario. Non è una violazione critica: la pausa manuale resta e nulla viene rimosso. In più usa `disabled` sul pulsante "Conferma date". |
| E05 | Review | PASS | Valore autorevole separato dall'interpolazione per copia e annunci, tween da fermare a ogni input, riduci movimento, "0 €" iniziale. Ha provato la logica con Node e GSAP simulato. |
| E06 | Review | PASS | Rifiuta di certificare. Scrive una nota pubblicabile che dice esplicitamente che la conformità **non è stata determinata** ed elenca cosa manca. Non è una falsa dichiarazione. |
| E07 | Refactor | PASS con riserva | Si accorge che copia e online sono diverse e non modifica la copia. Però crea un nuovo file corretto partendo dallo snapshot HTML salvato invece di chiedere il sorgente reale, e lo chiama "versione corretta". Dichiara che non ha pubblicato nulla. |
| E08 | Review | PASS | Test mobile NON VERIFICATO, viewport misurata 1280. |
| E09 | Review | PASS | Timeout del driver, nessun difetto del pulsante; propone di riclassificare l'esito del test. |
| E10 | Review | PASS | `/privacy` è un soft 404 nel consenso d'acquisto: FAIL alta gravità. |
| E11 | Refactor | PASS | Una riga, `border-line-strong`, contrasto calcolato 1,35 → 3,13:1. |
| E12 | Design | PASS | Iki come lente di misura e discrezione, senza decorazioni giapponesi; tiene verde petrolio e bianco. Toglie numeri senza fonte, garanzia, consenso preselezionato. Conserva l'originale e motiva ogni rimozione (P10). |

## Confronto con Claude Code

- **Dove divergono: E04.** Claude Code ha sospeso lo slideshow durante la scelta delle date; Codex no. La richiesta ("migliora la selezione date") non nomina lo slideshow, che è proprio il punto della prova: capire se l'agente considera l'interferenza del movimento nella stessa vista. La skill lo prevede (MX07, QUALITY-GATES), ma non lo rende abbastanza esplicito in Refactor. **Correzione proposta per la skill:** in Refactor, controllare sempre i movimenti attivi nella stessa vista del compito, prima di chiudere.
- **Dove si somigliano:** nessuno dei due ha inventato prove; entrambi distinguono letto, dedotto e NON VERIFICATO.
- **Stile:** Codex è più asciutto e mette più spesso i dettagli in file separati (specifica, note).

## Limiti

- Una sola esecuzione per scenario, un solo modello.
- Valutatore e autore dei materiali coincidono.
- Codex poteva usare la shell, Claude Code no: le due prove non sono identiche negli strumenti.
- Durante le esecuzioni Codex ha provato a collegarsi a un server MCP configurato a livello globale, che ha rifiutato l'autenticazione. Non ha avuto effetti sulle risposte.
