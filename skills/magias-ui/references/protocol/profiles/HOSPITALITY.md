# Profilo ospitalità

Magias UI Protocol · v0.3 · profilo

Per hotel, ville, agriturismi, campeggi e strutture simili. Estende il [profilo generico](GENERIC.md). Le regole vengono dal confronto fra le pratiche dei siti di settore, le ricerche pubbliche sull'usabilità delle prenotazioni e le norme europee su prezzi e accessibilità. Non sono un parere legale: dove una regola tocca una norma, la verifica legale resta separata.

Spesso la prenotazione avviene su un motore di terzi. In quel caso il sito risponde del passaggio (H08) e l'audit dichiara cosa del motore non si può verificare o correggere.

<!-- regole -->

## H01 · MUST

Nelle pagine di una struttura la ricerca disponibilità (date e ospiti) è raggiungibile nella prima schermata a 375 e 1366 px, senza movimenti che la coprano o la spostino.

- Ambito: Pagine di struttura ricettiva.
- Eccezioni/limiti: Pagine informative o legali senza prenotazione.
- Verifica: Viewport 375 e 1366, caricamento e prime interazioni.
- Automazione: S.

## H02 · MUST

Il prezzo mostrato prima della scelta è il totale del soggiorno con tasse e oneri obbligatori; il prezzo a notte è secondario; l'imposta di soggiorno pagata in struttura è dichiarata accanto. Uno sconto mostra il prezzo più basso dei 30 giorni precedenti.

- Ambito: Prezzi mostrati sul sito.
- Eccezioni/limiti: Se il motore non espone il totale si scrive cosa manca, senza prezzo inventato.
- Verifica: Confronto fra prezzo mostrato e totale al pagamento per un soggiorno di prova.
- Automazione: H.

## H03 · MUST

Ogni tariffa riporta le condizioni di cancellazione con data e ora limite prima della scelta.

- Ambito: Tariffe.
- Eccezioni/limiti: Tariffe gestite interamente dal motore esterno: si verifica e si dichiara.
- Verifica: Lettura delle tariffe e del riepilogo.
- Automazione: H.

## H04 · MUST

Il calendario distingue date non disponibili e date valide solo per la partenza, si usa da tastiera, accetta date digitate e non richiede trascinamento.

- Ambito: Selettori di date.
- Eccezioni/limiti: Motore esterno: si verifica e si dichiara.
- Verifica: Tastiera, lettore di schermo, touch e digitazione.
- Automazione: S.

## H05 · SHOULD

Le schede camera usano gli stessi campi nello stesso ordine (m², letti, occupazione, bagno, vista, accessibilità, servizi), dati fissi prima del racconto e foto della tipologia reale.

- Ambito: Schede camera.
- Eccezioni/limiti: Strutture con una sola unità.
- Verifica: Confronto fra schede.
- Automazione: H.

## H06 · SHOULD

Lo slideshow della prima schermata non avanza da solo su mobile e si ferma quando si interagisce con la ricerca disponibilità.

- Ambito: Prima schermata con slideshow.
- Eccezioni/limiti: Slideshow fermo o avviato dalla persona.
- Verifica: Viewport mobile e interazione con la ricerca.
- Automazione: S.

## H07 · SHOULD

Su mobile l'azione Prenota resta raggiungibile in una barra con spazio riservato, area sicura rispettata, senza coprire il campo attivo né il banner del consenso; telefono e messaggi restano nello stesso posto in tutte le pagine.

- Ambito: Mobile.
- Eccezioni/limiti: Strutture senza prenotazione online.
- Verifica: Scroll e compilazione su mobile, banner del consenso aperto.
- Automazione: S.

## H08 · MUST

Il passaggio al motore di prenotazione mantiene date, ospiti, lingua e prezzo, segnala l'apertura in una nuova scheda e conserva l'attribuzione; se il motore è di terzi, accessibilità, prezzo e lingua del motore si verificano e i limiti si dichiarano nell'audit.

- Ambito: Collegamento al motore di prenotazione.
- Eccezioni/limiti: Motore integrato nel sito: valgono le regole del flusso.
- Verifica: Percorso completo fino al motore con parametri, lingua e misura dell'attribuzione.
- Automazione: S.

## H09 · SHOULD

La posizione si legge senza aprire la mappa: indirizzo testuale, distanze dai punti utili e link alla mappa; la mappa interattiva si carica dopo il consenso.

- Ambito: Posizione e mappe.
- Eccezioni/limiti: Nessuna.
- Verifica: Pagina senza mappa caricata e prima del consenso.
- Automazione: S.

## H10 · SHOULD

Le informazioni di accessibilità della struttura sono misure concrete (gradini, larghezza porte, doccia, parcheggio), non etichette generiche.

- Ambito: Informazioni sulla struttura.
- Eccezioni/limiti: Dati non disponibili: si dichiarano mancanti.
- Verifica: Lettura delle informazioni.
- Automazione: H.

## H11 · MUST

I vantaggi della prenotazione diretta sono concreti e veri alla data; nessun miglior prezzo garantito senza verifica.

- Ambito: Promesse di prenotazione diretta.
- Eccezioni/limiti: Nessuna.
- Verifica: Confronto con i canali esterni alla data, con fonte.
- Automazione: H.

## H12 · SHOULD

Extra e richieste speciali sono facoltativi, vengono dopo la scelta della camera e aggiornano subito il totale.

- Ambito: Extra e richieste.
- Eccezioni/limiti: Pacchetti venduti come tali.
- Verifica: Percorso con e senza extra; totale aggiornato.
- Automazione: S.

## H13 · SHOULD

Se mancano le date, il pulsante di ricerca non si disabilita: riapre il calendario e annuncia cosa manca; i contatori degli ospiti annunciano il limite invece di diventare inattivi.

- Ambito: Barra date e ospiti.
- Eccezioni/limiti: Nessuna.
- Verifica: Invio senza date, contatori al limite, lettore di schermo.
- Automazione: S.

## H14 · SHOULD

Le recensioni mostrate riportano fonte e data e rimandano all'originale; nessun punteggio senza fonte.

- Ambito: Recensioni.
- Eccezioni/limiti: Citazioni con permesso documentato.
- Verifica: Confronto con la fonte.
- Automazione: H.

## H15 · SHOULD

Ogni lingua ha uno stato pubblicato o bozza; il selettore mostra solo le lingue pubblicate, con il nome della lingua scritto per esteso.

- Ambito: Siti multilingua.
- Eccezioni/limiti: Siti in una lingua.
- Verifica: Selettore, link alternati e pagine per lingua.
- Automazione: S.
