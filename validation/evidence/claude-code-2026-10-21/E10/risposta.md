Ho controllato quattro link. Il controllo automatico dice 4 su 4 OK (status 200), ma uno porta a una pagina che non esiste e un altro non si può verificare.

## Esito per link

| Link | Controllo automatico | Esito | Prova |
|---|---|---|---|
| `/privacy` | 200 | **FAIL** | La risposta salvata `risposte/privacy.html` è la pagina "Pagina non trovata · Ops, questa pagina non esiste". Il server risponde 200 a una pagina che non c'è. |
| `/condizioni` | 200 | **PASS** | La pagina c'è e quello che dice torna con l'offerta: prezzi IVA esclusa, pagamento alla consegna. In più indica il recesso entro 14 giorni. |
| `/contatti` | 200 | **PASS**, con un'osservazione | La pagina c'è. Il form però non ha `action` e il campo email non ha `name`, quindi probabilmente non invia nulla. Non l'ho provato: **NON VERIFICATO**. |
| `/esempio-report.pdf` | 200, `application/pdf`, 1,8 MB | **NON VERIFICATO** | Ci sono solo i dati di risposta (tipo e dimensione), il file non è stato salvato. Non posso confermare che si apra né che sia davvero un report di esempio. |

## Il problema serio: `/privacy`

- **Dove:** `offerta.html`, nel form d'acquisto, link "informativa privacy" dentro l'etichetta della casella obbligatoria.
- **Regola:** N02 (MUST), che vieta di nascondere le condizioni, applicata alle scelte commerciali e al consenso.
- **Effetto:** per comprare bisogna spuntare "Ho letto l'informativa privacy", ma l'informativa non esiste. Chi compra dichiara di aver letto un testo che non può leggere. Il rischio è sia di fiducia sia legale. Inoltre il server risponde 200 anche alle pagine mancanti, quindi i controlli automatici basati sullo status non trovano link rotti come questo, né adesso né in futuro.
- **Gravità:** alta. Blocca la release della pagina d'offerta, ma la decisione finale spetta a voi.
- **Correzione:**
  1. Pubblicare l'informativa a `/privacy`, oppure correggere il link se esiste a un altro indirizzo.
  2. Far rispondere il server con 404 alle pagine inesistenti.
  3. Aggiungere al controllo automatico una verifica sul contenuto, per esempio sul titolo della pagina, oltre allo status.

## Cosa ho verificato e cosa no

Ho letto i file statici: `offerta.html`, `controllo-link.json` e le tre risposte salvate. Non ho fatto richieste live, quindi le risposte potrebbero essere diverse da quelle attuali del sito. Non ho aperto il PDF, non ho inviato il form contatti e non ho controllato l'endpoint `/acquista`, che non era nel controllo.

Posso aggiornare lo script di controllo in modo che riconosca le pagine "non trovata" anche quando lo status è 200.
