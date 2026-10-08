# Quality gate per modalità

Magias UI Protocol · v0.2

## Ingresso comune

Versione, modalità, scope, revisione del materiale, fonti disponibili, compito, vincoli, profilo, integrazioni e accessi. Dati sconosciuti restano dichiarati; nessuna lettura/test/modifica inventata. Scope e superficie d’impatto governano la copertura.

## Design Mode

Uscita: **specifica pronta**. Architettura e contenuti reali/proposti distinti; informazioni decisive e azioni disponibili; schema responsive proporzionato; stati pertinenti; profili motion per fase; contratto di preferenza ridotta, interruzione e fallback; registro applicabilità e piano prove.

Blocca: fatti inventati, informazioni materiali omesse, barriere insite nella proposta o incognite decisive senza trattamento. Test runtime possono restare NON VERIFICATI. Specifica pronta non equivale a implementazione verificata.

## Review Mode

Uscita: **audit completo nello scope**. Rilievi localizzati, ID, evidenza/limite, effetto, gravità e azione. Ogni controllo ha esito e applicabilità. Raccomandazione sulla release separata.

Un audit con FAIL può essere completo. Blocca il completamento dell’audit: prove inventate, scope non coperto senza dichiarazione, falsi PASS o conflitti nascosti. Non rimuovere automaticamente movimento/card perché mancano strumenti di verifica.

## Refactor Mode

Uscita: **modifica verificata nello scope**. Baseline e comportamento da preservare; diff; problema corretto; contenuti, semantica, identità e compiti preservati; test del cambiamento e dipendenze condivise; recupero proporzionato.

Blocca: MUST pertinente fallito/non verificato per questo gate, regressione introdotta o perdita senza decisione. Difetti preesistenti fuori scope sono registrati, senza falsa conformità globale né redesign automatico. Cambiamenti condivisi estendono la superficie di test.

## Decisione

| Stato/forza | Conseguenza |
|---|---|
| MUST applicabile + FAIL | Gate che richiede quel requisito non superato |
| MUST applicabile + NON VERIFICATO | Gate implementativo pertinente aperto; audit/specifica possono essere completi con limite |
| NON APPLICABILE | Motivo legato a criterio/scope, mai alla sola assenza di strumenti |
| SHOULD soddisfatto | PASS con evidenza proporzionata |
| SHOULD deviato | DEVIAZIONE MOTIVATA, con ragione e verifica |
| MAY assente | Nessun difetto |
| Evidenza riusata | Versione e contesto compatibili documentati |

Conformità AA richiede registro completo dei criteri pertinenti, pagine e processi; uno scanner non chiude il gate. Duplicazioni di uno stesso problema non aumentano il numero di difetti.

## Movimento nel gate

Osservare prima/durante/dopo, scroll rapido/inverso, input ripetuti, focus e movimento ridotto. Durante acquisto/prenotazione preservare target, dati autorevoli e condizioni; il feedback non deve ritardare l’azione. Espressione e slideshow restano ammessi. Correggere l’interferenza conservando carattere quando possibile.

## Release separata

Implementazione verificata sulla copertura della release, processi completi pertinenti, preview/diff, recupero e ambiente previsti. Pubblicazione solo se autorizzata nella sessione. La confezione documentale di questo pacchetto non autorizza né prova rilascio di alcun sito.
