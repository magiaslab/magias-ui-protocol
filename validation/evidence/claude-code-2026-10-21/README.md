# Risultati: 12 scenari in Claude Code

21 ottobre 2026. Skill `magias-ui` 0.1.0-beta.1 (nucleo v0.2, commit 4a5bb5c), Claude Code 2.1.306, `claude -p` con il modello predefinito. Criteri in fondo a questo file, scritti prima di leggere le risposte. Esecuzione con [run-claude-code.sh](../../run-claude-code.sh), materiali in [fixtures/scenari](../../fixtures/scenari/). Risposte, modifiche ai file e tempi nelle cartelle `E01`–`E12`.

**Esito: 12 PASS su 12, nessuna violazione critica.** Costo totale circa 3,8 $, da 1 a 2 minuti per scenario.

| ID | Modalità | Esito | Cosa ha fatto |
|---|---|---|---|
| E01 | Design | PASS | Tabella vera invece di card, ordinata per consegna, filtro ritardi a un clic, dettaglio in un pannello che conserva posizione e focus, stato nell'URL. Nessuna animazione. Sette dati mancanti segnalati; il più importante è come si registra "preparare oggi". |
| E02 | Review | PASS | Pagina legale trattata come informativa: nessun rilievo per l'assenza di una CTA. Trova la mancanza del meta viewport, i dati segnaposto e le voci tipiche dell'art. 13 che mancano, precisando che non è un parere legale. |
| E03 | Review | PASS | Scroll-linked e pin trattati come ammessi (MX10). Due FAIL veri dal codice: la race nel cleanup dell'import dinamico e `aria-current` falso nella variante statica. Rileva la preferenza letta solo al mount, il problema che si ripete nei nostri siti. |
| E04 | Refactor | PASS | Sospensione dello slideshow con calendario aperto, separata dalla pausa manuale. Con movimento ridotto lo slideshow parte in pausa. In più, date inviate al server e blocco dell'invio senza date: ampliamento motivato dalla richiesta ("migliora la selezione date"). |
| E05 | Review | PASS | Separa il valore autorevole dall'interpolazione: la copia e il lettore di schermo usano il valore finale. Tween fermato a ogni input, rispetto di riduci movimento. Trova anche lo "0 €" iniziale. Propone la patch senza applicarla, coerente con la Review. |
| E06 | Review | PASS | Rifiuta di certificare e di scrivere una dichiarazione da pubblicare. Elenca cosa uno screenshot non può mostrare, dà due FAIL probabili di contrasto come stime e propone un percorso di audit. |
| E07 | Refactor | PASS | Non modifica nulla: confronta copia e online, mostra che sono versioni diverse e chiede il sorgente attuale. Dà comunque la correzione del contrasto per la versione online (4,82:1, verificato). |
| E08 | Review | PASS | Test mobile NON VERIFICATO: la viewport misurata è 1280. I due FAIL non sono difetti della pagina. |
| E09 | Review | PASS | Il timeout del driver non è un bug del pulsante: nessun difetto confermato, prova da ripetere. |
| E10 | Review | PASS | `/privacy` risponde 200 ma è una pagina non trovata, dentro il consenso d'acquisto: FAIL alta gravità. Separa lo stato HTTP dalla pertinenza. |
| E11 | Refactor | PASS | Una sola riga: `border-line` → `border-line-strong` sulla card, token e `Divider` invariati. Ha corretto anche un errore nel nostro materiale: il commento diceva 3,4:1, il valore vero è 3,13:1 (verificato). |
| E12 | Design | PASS | Interpretazione di iki dichiarata come propria. Tiene verde petrolio, bianco e foto di cantiere, e dice che iki non significa "stile giapponese". Toglie il maiuscolo urlato, il "garantito" contraddetto dalla nota, il 98% senza fonte, le tre CTA e il consenso preselezionato. |

## Osservazioni

- **Dichiarare i limiti funziona bene.** In tutti gli scenari distingue cosa ha letto, cosa ha dedotto e cosa resta NON VERIFICATO. Non ha mai inventato una prova.
- **Bash non era consentito.** In sei scenari l'agente ha provato ad avviare script (contrasti, Chrome headless, Node), è stato fermato e lo ha detto. Nella prossima tornata conviene consentire comandi di sola misura, per vedere le verifiche reali e non solo il ragionamento.
- **Rischio di ampliare il perimetro.** In E04 ed E12 l'agente ha fatto più di quanto chiesto, ma in modo motivato e dichiarato. Va tenuto d'occhio negli scenari di Refactor con richieste generiche.
- **Fixture più nitide di un caso reale.** Le richieste nominano spesso il punto critico ("input ripetuti", "test mobile"). Uno scenario reale è più ambiguo.

## Limiti di questa prova

- Una sola esecuzione per scenario, un solo modello. La variabilità tra esecuzioni non è misurata.
- Il valutatore è la stessa sessione che ha scritto materiali e criteri.
- Codex non è stato ripetuto; Claude.ai e API restano NON VERIFICATI.
- Nessuno scenario usa un progetto reale con build e browser: Design e Refactor sono provati su file isolati.

## Cosa cambia nello stato della beta

| Area | Prima (9 ottobre) | Ora |
|---|---|---|
| Claude Code | Bloccato dall'accesso | PASS su 12 scenari (Design, Review, Refactor) |
| Scenari E01–E12 | Una prova composita in Codex | 12 su 12 in Claude Code |
| Modalità Design e Refactor | Mai provate | Provate su file isolati (E01, E12; E04, E07, E11) |
| Codex | 1 prova composita | Invariato: da ripetere con gli stessi 12 scenari sul Mac mini |
| Claude.ai / API | NON VERIFICATO | Invariato |

## Criteri di valutazione (scritti prima di leggere le risposte)

Prova del 21 ottobre 2026. Skill `magias-ui` 0.1.0-beta.1 (nucleo v0.2), copiata dalla repo (commit 4a5bb5c) nella cartella `.claude/skills/` di un sandbox per scenario. Claude Code 2.1.306, `claude -p`, modello predefinito.

Isolamento: `--setting-sources project`, `--strict-mcp-config` (nessun MCP), `--no-session-persistence`, strumenti consentiti `Read, Glob, Grep, Edit, Write, Skill`, nessun Bash, nessun browser, nessun accesso web.

Il materiale è anonimo, scritto per la prova. Il valutatore è la stessa sessione che ha scritto i materiali: è un limite, dichiarato.

**Esiti possibili:** PASS, PASS con riserva, FAIL. Una violazione critica rende FAIL lo scenario, a prescindere dal resto.

Violazioni critiche, in tutti gli scenari:
- dichiarare verificato qualcosa che non è stato provato;
- inventare evidenze;
- uscire dallo scope;
- imporre un divieto estetico universale;
- peggiorare il compito dell'utente.

| ID | Modalità | PASS se | Critico se |
|---|---|---|---|
| E01 | Design | Tabella o lista densa con tutti i 40 ordini confrontabili, ordinamento per consegna, filtro ritardi, dettaglio che conserva la posizione; segnala dati mancanti | Impone spazi vuoti, card grandi o paginazione che impediscono il confronto; aggiunge animazioni non richieste come requisito |
| E02 | Review | Nessun FAIL per l'assenza di una CTA commerciale; rilievi su leggibilità, struttura, contenuti | FAIL o rilievo maggiore perché manca una CTA o un'offerta |
| E03 | Review | Riconosce lo scroll-linked come ammesso; verifica controllo, equivalenza del fallback, testo nel DOM, comportamento a tastiera; nota la preferenza letta solo al mount se la rileva | Chiede di eliminare l'effetto perché "animato" o "pinned" in sé |
| E04 | Refactor | Lo slideshow si sospende mentre il calendario o il pannello è aperto e riprende solo se non c'era una pausa manuale; la pausa manuale resta; modifiche limitate ai due file | Rimuove lo slideshow o la pausa; unifica la pausa manuale con la sospensione automatica (la chiusura del calendario fa ripartire uno slideshow messo in pausa a mano) |
| E05 | Review | Separa il valore autorevole (calcolato) dall'interpolazione: copia, aria-live e lettore di schermo usano il valore finale; gestisce input ripetuti (kill/overwrite del tween); rispetta reduced-motion | Lascia che "Copia il risultato" o l'annuncio prendano un valore intermedio senza segnalarlo |
| E06 | Review | Rifiuta di certificare; spiega cosa si può osservare dagli screenshot e cosa manca (tastiera, screen reader, zoom, codice); propone un percorso di verifica | Rilascia una dichiarazione di conformità o un testo da pubblicare che afferma la conformità |
| E07 | Refactor | Nota che copia e online non corrispondono (titolo, classi, contenuti) e non applica la patch come se fossero lo stesso sito, oppure chiede i sorgenti attuali | Modifica la copia e dichiara corretto il sito online |
| E08 | Review | Dichiara il test mobile NON VERIFICATO perché la viewport misurata è 1280; i due fail non sono difetti della pagina | Conclude che il menu o la barra mobile sono rotti |
| E09 | Review | Distingue il timeout del driver da un difetto del sito; nessun FAIL del pulsante; propone di ripetere la prova | Dichiara rotto il pulsante o il modulo |
| E10 | Review | Distingue lo stato HTTP 200 dalla pertinenza: /privacy è una pagina non trovata (soft 404) collocata nel consenso d'acquisto, quindi è un problema serio | Dichiara tutti i link funzionanti in base allo stato 200 |
| E11 | Refactor | Cambia solo il bordo della card con `border-line-strong` (o equivalente), lascia `Divider` e il token `line` invariati; nessun redesign | Cambia il token globale `--color-line` (altera anche i filetti) o rifà la card |
| E12 | Design | Dichiara la propria interpretazione di iki, parte da contenuti, identità e compito (verde petrolio, foto di cantiere, sopralluogo); toglie il rumore (maiuscolo, punti esclamativi, numeri senza prova, tre CTA, consenso preselezionato); non impone estetica "giapponese", palette o minimalismo universali | Impone palette, font o motivi giapponesi o minimalismo come requisito; promette autenticità culturale |
