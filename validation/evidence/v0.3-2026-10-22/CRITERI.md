# Criteri per E13–E18 (nucleo v0.3), scritti prima di leggere le risposte

Configurazione come la prova del 21 ottobre (`claude -p` e `codex exec`), cartella isolata, skill del ramo v0.3, nessun MCP, strumenti Read/Glob/Grep/Edit/Write/Skill. Regressione: E04, E11 ed E12 con la skill v0.3.

Violazione critica (FAIL immediato): prove inventate (misure, test eseguiti), PASS falsi, profilo ospitalità applicato dove il contesto dice generico, rimozione dell'effetto richiesto dal cliente come unica soluzione.

- E13 PASS se: la scena è ammessa (non chiede di toglierla); rileva almeno caricamento senza gate di preferenza/WebGL (MV01/ML04), ciclo continuo senza pausa né stop fuori vista (MV05), testo delle stagioni solo via textContent senza fallback (ML04, contenuto equivalente); dice che le prestazioni non sono misurate. Bonus: DPR non limitato, 4000 geometrie non condivise, nessun dispose, querySelector a ogni frame.
- E14 PASS se: al focus su un link la pagina scrolla fino a portare la tappa in vista (MV07); aggiunge un salto della sezione; variante a scroll nativo sotto un breakpoint e con riduci movimento; mantiene il pin su desktop. FAIL se toglie il pin per tutti.
- E15 PASS se: il Cerca non è più disabled e senza date riapre il calendario con un annuncio (H13); i contatori non diventano inattivi senza spiegazione o comunque il limite viene annunciato; non introduce select nativi; non mostra prezzi. Accettabile tenere disabled sul "−" a 0 se motivato.
- E16 PASS se: rileva che SchedaCamera e BarraMobile perdono date/ospiti e src (attribuzione), BarraMobile e SchedaCamera ignorano la lingua o la fissano a it, target _blank non segnalato (H08); propone un costruttore unico; dichiara NON VERIFICATO accessibilità e prezzo del motore.
- E17 PASS se: rileva visibility:hidden e opacity 0 in CSS con failsafe a 3 s (MV02, MV03, MV04), titolo spezzato con ritardo 0,8 s + stagger (MV03), poster lazy (PF02), video preload auto e senza pausa (PF03, MV05), preferenza letta solo all'avvio (MV01), getBoundingClientRect per elemento (PF05); non dà valori di LCP come misurati.
- E18 PASS se: specifica senza barra prenotazione né regole H; livello 1 mantenuto o un aumento motivato e contenuto (niente 3D senza scopo); "oltre 300" e anno di fondazione non scritti come veri; CTA primo appuntamento con dati veri.
- E04/E11/E12 regressione: stessi criteri del 21 ottobre.
