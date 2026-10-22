# Review del passaggio al motore

Magias UI Protocol v0.3 · Review Mode · 22 ottobre 2026.

Scope: i tre sorgenti in `materiale/`, `contesto.md` e `nota-motore.md`, nello stato fornito. Profilo ospitalità, sito IT/EN/DE, movimento dichiarato 1. Obiettivo: arrivare alla ricerca disponibilità mantenendo il contesto dell'ospite e l'attribuzione dichiarata. Nessuna modifica ai componenti.

## Rilievi

### R1 — Contesto di ricerca non trasmesso — Alta

**Posizione:** `BarraMobile.tsx:7`, `SchedaCamera.tsx:4`. **Regola:** H08, MUST. **Esito:** FAIL per la costruzione dei link.

La barra mobile apre l'URL base senza parametri; la scheda camera invia soltanto `room` e `lang=it`. Entrambe omettono date, adulti, bambini ed età. La barra mobile omette anche la lingua; la scheda forza l'italiano anche negli ingressi EN/DE. I componenti non ricevono lo stato della ricerca. La nota conferma che senza date il motore apre il calendario odierno. Un ingresso iniziale senza date può essere legittimo: il difetto riguarda la mancata possibilità di conservare una selezione già effettuata. Non sono stati osservati i default di ospiti e lingua del motore.

**Correzione:** condividere un costruttore di URL e alimentare tutti gli ingressi con stato corrente e lingua pubblicata. Stabilire esplicitamente il comportamento quando la ricerca non è ancora compilata; non inventare date.

### R2 — Attribuzione assente in due ingressi — Alta

**Posizione:** `BarraMobile.tsx:7`, `SchedaCamera.tsx:4`; confronto con `BarraPrenota.tsx:8`. **Regola:** H08, MUST; limite di misura da dichiarare secondo C10, MUST. **Esito:** FAIL sull'invio di `src`.

Solo la home invia `src=sito`. Il contesto dichiara che l'attribuzione delle prenotazioni dipende da questo parametro, conservato fino al pagamento secondo la nota. Gli altri ingressi non inizializzano l'attribuzione prevista. Non è dimostrato che ogni prenotazione risulti priva di attribuzione: eventuali sessioni o meccanismi alternativi del fornitore non sono documentati.

**Correzione:** applicare `src=sito` a ogni link tramite il costruttore condiviso. Verificare separatamente con il fornitore la persistenza fino al pagamento e le regole di attribuzione; un click in uscita non prova una prenotazione.

### R3 — Nuova scheda non annunciata nei componenti — Media

**Posizione:** `BarraMobile.tsx:7`, `SchedaCamera.tsx:4-5`. **Regola:** H08, MUST. **Esito:** FAIL nel markup fornito.

Entrambi i link impostano `target="_blank"`, ma i testi sono soltanto “Prenota” e “Prenota questa camera”, senza avviso visibile o accessibile locale. Il cambio di contesto non è anticipato. Eventuali spiegazioni globali non sono incluse nel materiale e non sono verificate.

**Correzione:** mantenendo la nuova scheda, aggiungere un avviso visibile e accessibile tradotto nelle lingue del sito. In alternativa valutare la navigazione nella stessa scheda preservando il recupero della ricerca. `rel="noopener"` non costituisce un annuncio per l'ospite.

### R4 — Selezione della camera non supportata dalla documentazione fornita — Media

**Posizione:** `SchedaCamera.tsx:4-5`, `nota-motore.md`. **Regola:** H08, MUST, e coerenza fra azione e destinazione. **Esito:** NON VERIFICATO.

La CTA promette “questa camera”, ma `room` non figura fra i parametri documentati. Non è prova che il motore lo ignori: manca un contratto verificabile per codice e selezione. Inoltre `codice` è interpolato senza codifica; se contiene `&` o `#`, cambia la struttura dell'URL. Non sono disponibili i codici reali per stabilire l'esposizione effettiva.

**Correzione:** chiedere al fornitore supporto, nome del parametro e mappatura dei codici, quindi verificare la tipologia all'arrivo. Se supportato, serializzare anche questo parametro con `URLSearchParams`. Se non supportato, usare una CTA che descriva la ricerca generale.

## Copertura, prove e limiti

- **PASS limitato al controllo statico del contratto home:** `BarraPrenota.tsx:4-10` costruisce tutti i sette parametri documentati; usa `URLSearchParams`, date con `representation: 'date'` ed età unite da virgole. Lettura dei tre sorgenti e controllo Python delle chiavi/URL effettivamente eseguiti. Non è un PASS end-to-end di H08.
- **H08 complessiva: FAIL**, con parti NON VERIFICATE: prezzo, lingua effettivamente resa, accessibilità del motore e persistenza di `src` fino al pagamento. Nessun prezzo o tariffa compare nel materiale; nessun parametro prezzo è documentato. Non aggiungere un parametro inventato o un totale non autorevole.
- **C08, H13: NON VERIFICATO** per validazione, errori, ricerca incompleta e recupero. Il solo helper home non dimostra come i chiamanti gestiscano date invalide, partenza precedente all'arrivo o numero di età incoerente con i bambini. Non si attribuiscono questi difetti all'intero sito senza i chiamanti.
- **H01, H07 e accessibilità A01–A07, A10–A12: NON VERIFICATO** per gli aspetti pertinenti al percorso. Mancano pagina eseguibile, CSS e strumenti assistivi: nessun test di viewport, tastiera, focus, reflow, contrasto, touch, annunci o copertura della barra. Il posizionamento fisso da solo non prova sovrapposizioni.
- **Movimento: NON VERIFICATO nel percorso reale.** Nei tre frammenti non è implementata animazione; livello 1 dichiarato dal contesto. Nessun risultato su movimento ridotto o interferenze della pagina completa.
- **NON APPLICABILE ai frammenti:** dialog/menu (A08), media (A09), consenso marketing (C09.a), prezzi e tariffe mostrati (H02–H03), slideshow (H06), extra (H12). Non sono giudizi sulle pagine complete o sul motore.
- Nessun test HTTP/browser sul dominio `.test`, nessuna esecuzione TSX/date-fns, nessuna prenotazione o prova di pagamento. La nota del motore è una fonte documentale, non una prova runtime. Nessuna misura di conversione, stima di perdita o dichiarazione di conformità AA.

## Verifica da eseguire dopo la correzione

Provare ciascuno dei tre ingressi in IT/EN/DE con una ricerca già compilata (per esempio 10–13 giugno 2027, due adulti, due bambini di 4 e 9 anni) e senza ricerca precedente. Confrontare URL e stato effettivo nel motore: date, composizione ed età, lingua, eventuale camera e `src`. Controllare annuncio della nuova scheda, ritorno alla ricerca e dati conservati. Per il prezzo confrontare lo stesso soggiorno e la stessa tariffa con il riepilogo autorevole, se il sito li mostra. Concordare col fornitore un ambiente di prova per attribuzione al pagamento e verifica assistiva del percorso, senza assumere accesso al codice o alle impostazioni.

**Gate Review:** audit completo nello scope documentale dichiarato, con FAIL e limiti espliciti. **Release:** non raccomandata per questi ingressi finché R1–R3 non sono corretti e verificati e R4 non è chiarito; nessun giudizio di conformità o di release dell'intero sito.
