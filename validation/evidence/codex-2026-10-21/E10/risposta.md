Il controllo rileva **un link difettoso**, nonostante tutti gli URL risultino HTTP 200.

- **FAIL — Privacy, gravità alta:** il link in `offerta.html:4` restituisce una **soft 404**: la `risposta salvata` dice «questa pagina non esiste». La casella obbligatoria richiede quindi di dichiarare letta un’informativa indisponibile. Rilievo pertinente a **C04 · MUST** sulla disponibilità delle informazioni prima della decisione. Correzione: ripristinare l’informativa oppure collegare il suo indirizzo corretto.
- **PASS sul contenuto salvato — Condizioni:** la destinazione contiene condizioni di vendita, coerenti con il collegamento.
- **PASS sul contenuto salvato — Contatti:** la destinazione contiene un modulo email. L’invio effettivo resta **NON VERIFICATO**.
- **NON VERIFICATO — Report di esempio:** il controllo registra HTTP 200, tipo `application/pdf` e 1.843.221 byte; manca il PDF tra le risposte salvate, quindi contenuto, apertura e pertinenza non sono verificabili.

Verifica completata sui file forniti, senza richieste live né modifiche. Raccomando di risolvere il link privacy prima della pubblicazione.