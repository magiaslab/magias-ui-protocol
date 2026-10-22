# Prova del nucleo v0.3: scenari E13–E18 e regressione

22 ottobre 2026, ramo `v0.3`. Claude Code 2.1.307 (`claude -p`, strumenti di sola lettura e scrittura file, niente shell) e Codex CLI 0.163.0-alpha.10.2 (`codex exec`, sandbox `workspace-write`, shell consentita). Una cartella isolata per scenario, skill del ramo, nessun MCP. [Criteri](CRITERI.md) scritti prima di leggere le risposte. Script: [run-claude-code.sh](../../run-claude-code.sh), [run-codex.sh](../../run-codex.sh).

**Esito: Claude Code 9 PASS su 9. Codex 8 PASS e 1 PASS con riserva. Nessuna violazione critica.** Costo Claude Code circa 4 $.

| ID | Modalità | Claude Code | Codex | Note |
|---|---|---|---|---|
| E13 | Review | PASS | PASS | Tutti e due tengono la scena (livello 3 dichiarato) e rilevano caricamento senza controllo della preferenza, testo solo nel canvas, nessun cleanup, 4000 mesh e DPR senza limite. Prestazioni NON VERIFICATE. Claude Code nota che la rotazione dei coni è invisibile, quindi MV05 non si applica oggi: è un difetto del materiale, ha ragione. |
| E14 | Refactor | PASS | PASS | Focus che porta in vista la tappa, link per saltare la sezione, scroll nativo su schermi stretti e con riduci movimento. Pin conservato su desktop. Claude Code segnala che GSAP si scarica comunque (MV01) fuori dal file autorizzato. |
| E15 | Refactor | PASS | PASS con riserva | Cerca sempre attivo: senza date riapre il calendario e lo annuncia. Claude Code segnala come problema rimasto i contatori ospiti disattivati al limite (H13) senza toccarli. Codex non li nomina. |
| E16 | Review | PASS | PASS | Tre costruttori diversi; date, ospiti, lingua e `src` persi in due ingressi; nuova scheda non annunciata; `room` non documentato. Prezzo, accessibilità e attribuzione del motore NON VERIFICATI. |
| E17 | Review | PASS | PASS | Contenuto nascosto dal CSS con failsafe, ritardo del titolo, video scaricato sotto il poster, poster lazy, preferenza letta all'avvio, nessuna pausa del video. LCP, INP, CLS NON VERIFICATI. Tutti e due dicono che `getBoundingClientRect` è letto una sola volta: il criterio PF05 del valutatore era sbagliato. |
| E18 | Design | PASS | PASS | Niente regole ospitalità, livello 1 mantenuto e motivato, niente 3D né video di stock, "oltre 300" e anno di fondazione non pubblicati. Codex propone un select nativo per il servizio come deviazione da G02, motivata. |
| E04 | Refactor | PASS | PASS | Regressione. Slideshow sospeso con il pannello aperto, pausa manuale conservata. Claude Code cita MV06. |
| E11 | Refactor | PASS | PASS | Regressione. Una riga, `border-line-strong`. Claude Code questa volta non ricalcola il contrasto (calcolo non consentito) e lo dichiara NON VERIFICATO. |
| E12 | Design | PASS | PASS | Regressione. Iki come lente, verde petrolio e bianco tenuti, claim senza fonte tolti. |

## Cosa dice la prova

- **I moduli nuovi vengono letti e applicati.** In tutti gli scenari gli agenti citano le regole MV, ML, PF, G e H giuste, e le dichiarano NON APPLICABILI quando non servono.
- **Il profilo non si estende dove non deve.** In E18 nessuno dei due applica il profilo ospitalità, e la richiesta di "qualcosa di più vivo" non porta a 3D o scroll fluido.
- **Gli effetti restano.** Nessuno toglie la scena 3D, il pin o lo slideshow per risolvere il problema.
- **Due errori nei materiali**, trovati dagli agenti: la rotazione invisibile in E13 e la lettura di layout in E17. Vanno corretti nelle fixture prima della prossima tornata.

## Limiti

- Una sola esecuzione per scenario e per agente.
- Valutatore e autore di materiali e regole coincidono.
- Codex poteva usare la shell, Claude Code no.
- Nessuno scenario gira su un sito reale con browser: le prove MV e PF a runtime restano da fare in una validazione su un progetto.
