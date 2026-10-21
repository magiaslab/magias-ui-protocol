## Review: pulsante "Invia richiesta" (/contatti)

**Modalità:** Review · **Protocollo:** Magias UI v0.2 · **Scope:** pulsante `button[type=submit]` "Invia richiesta" e il suo invio.
**Materiale disponibile:** solo `materiale/log-prova.txt`. Nel workspace non ci sono sorgenti del modulo, screenshot o albero accessibile. Ho provato a controllare se `http://localhost:3000/contatti` risponde, ma il comando non è stato approvato, quindi non ho fatto nessuna prova runtime.

### Cosa dice davvero il log

- Righe 1–5: la pagina si carica e i tre campi (nome, email, messaggio) vengono compilati correttamente.
- Riga 6: il runner chiede il click sul pulsante.
- Riga 7: il **driver** va in timeout dopo 30 s su `Input.dispatchMouseEvent`, con l'errore "Waiting for target frame/session".
- Riga 8: il driver stesso scrive che il comando **non risulta consegnato alla pagina** e che dopo le 10:02:13 non c'è nessuna richiesta di rete.
- Riga 9: il runner segna `FAIL "invio modulo"`.

**Conclusione:** il FAIL della riga 9 è un fallimento dell'automazione, non un difetto del prodotto. Il click non è mai arrivato al pulsante, quindi il pulsante non è stato messo alla prova. Che manchino richieste di rete è normale se il click non c'è stato: non prova che l'handler di invio sia rotto. Il protocollo lo dice esplicitamente: un timeout del driver non prova un bug del prodotto (R03: niente evidenze dedotte).

### Esiti dei controlli

| ID | Regola | Esito | Motivo |
|---|---|---|---|
| R1 | C08 (MUST): label, errori, conservazione dei dati, niente invii doppi, conferma reale | **NON VERIFICATO** | Il click non è stato eseguito. Campione riuscito: la compilazione dei tre campi (righe 3–5). Non sono stati osservati validazione, invio, errori, conferma o idempotenza. |
| R2 | M06 (MUST): azione accessibile con input pertinenti (mouse, tastiera, touch) | **NON VERIFICATO** | Non c'è nessuna prova d'interazione, nemmeno da tastiera. |
| R3 | T06 (MUST): etichetta leggibile, contrasto | **NON VERIFICATO** | Non ho sorgenti né screenshot. L'etichetta "Invia richiesta" (riga 6) descrive bene l'azione, ma questa è solo un'osservazione testuale, non un PASS. |
| R4 | A01 (MUST): obiettivo WCAG 2.2 AA | **NON VERIFICATO** | Non c'è nessun registro WCAG compilato per questo processo. |
| R5 | C09.a: consenso marketing separato | **NON VERIFICATO** | Non so se il modulo contiene un consenso. Senza il materiale non posso dichiararlo NON APPLICABILE. |

**Difetti di prodotto confermati: nessuno.** Il FAIL del runner non va registrato come bug del pulsante.

### Azioni consigliate

1. **Sistemare la prova, non il pulsante.** Ripetere il test cercando la causa del timeout del driver: sessione o frame staccato, un iframe (per esempio un captcha) che cattura il target, un overlay, una navigazione in corso. Conviene registrare trace o screenshot al momento del click e loggare le richieste di rete. Se il problema si ripete, provare anche l'invio da tastiera (Invio dentro un campo, oppure focus sul pulsante e Spazio): così si capisce se il guasto è del driver o del pulsante.
2. **Una volta che il click arriva alla pagina, verificare:**
   - la validazione con campi vuoti o un'email non valida;
   - che i dati restino nei campi dopo un errore;
   - che un doppio click non produca due invii;
   - come viene gestito un timeout della rete;
   - che la conferma corrisponda allo stato reale ("inviata" solo se il server l'ha accettata);
   - focus visibile e annuncio di errori e conferma.
3. **Per una review completa mi servono** i sorgenti del modulo, oppure il permesso di aprire `localhost:3000/contatti` e un modo per interagire con la pagina (browser o driver).

### Release

È una decisione separata dall'audit. Oggi non c'è nessuna prova che l'invio funzioni né che sia rotto, e le regole MUST di questo flusso sono tutte NON VERIFICATO. Il percorso di invio va quindi considerato non verificato finché la prova non viene ripetuta con un click che arriva davvero alla pagina.
