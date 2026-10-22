# Review: passaggio degli ospiti al motore di prenotazione

**Modalità:** Review · **Gate:** Review · **Profilo:** ospitalità · **Movimento:** livello 1
**Scope:** il passaggio dal sito al motore. Ho letto `BarraPrenota.tsx`, `BarraMobile.tsx`, `SchedaCamera.tsx`, `nota-motore.md` e `contesto.md`.
**Metodo:** solo lettura dei sorgenti, confrontati con la nota del motore. Non ho fatto prove nel browser, non ho controllato gli URL generati né l'attribuzione nel motore, e non ho usato un lettore di schermo.
**Esito:** l'audit dello scope è completo, ma **la regola H08 (MUST) fallisce**. Il problema principale è che i tre link al motore sono costruiti in tre modi diversi. Solo `hrefMotore` segue la nota del fornitore.

## Rilievi

| ID | Posizione | Regola | Gravità | Stato | Effetto | Correzione |
|---|---|---|---|---|---|---|
| R1 | `BarraMobile.tsx:7`, `SchedaCamera.tsx:4` | H08 attribuzione, C10 | **bloccante** | FAIL | Il parametro `src` c'è solo nella barra date della home. Le prenotazioni dalla barra mobile e dalle schede camera arrivano al motore senza `src`. Il dato che usate per l'attribuzione conta quindi solo una parte delle prenotazioni del sito, e in modo non uniforme. La barra mobile è probabilmente l'ingresso principale da telefono. | Aggiungere `src=sito` a tutti i link. Per i dati già raccolti, dichiarare che l'attribuzione è sottostimata. |
| R2 | `SchedaCamera.tsx:4` (`lang=it` fisso), `BarraMobile.tsx:7` (nessun `lang`) | H08 lingua, A06 | **maggiore** | FAIL | Chi naviga in inglese o tedesco arriva al motore in italiano se parte da una scheda camera. Dalla barra mobile arriva nella lingua predefinita del motore, che non è documentata. | Passare la lingua attiva della pagina, limitata ai valori `it`, `en`, `de`. |
| R3 | `SchedaCamera.tsx:4` | H08 date/ospiti | **maggiore** | FAIL | Se l'ospite ha già scelto date e persone, la scheda camera non le passa al motore. Il motore riapre il calendario sulla data di oggi, come dice la nota, e l'ospite deve ripetere la scelta. Lo stesso vale per la barra mobile, se le date sono già state scelte nella pagina. | Ricavare tutti i link dallo stesso stato della ricerca. Senza date, il comportamento attuale va bene. |
| R4 | `SchedaCamera.tsx:4` (`room=`) | H08 | maggiore (ipotesi) | NON VERIFICATO | `room` non compare tra i parametri della nota del fornitore. È probabile che il motore lo ignori: il pulsante "Prenota questa camera" porterebbe alla ricerca generica, non a quella camera. | Chiedere conferma al fornitore. Se il parametro non esiste, cambiare l'etichetta o la destinazione del pulsante. Intanto non promettere la preselezione della camera. |
| R5 | `BarraMobile.tsx:7`, `SchedaCamera.tsx:4`; `BarraPrenota.tsx` non mostra dove viene usato l'href | H08 nuova scheda | maggiore | FAIL (2 link), NON VERIFICATO (barra home) | I link usano `target="_blank"` senza avvisare. Chi usa un lettore di schermo, o chi è su mobile, si trova in un'altra scheda senza saperlo, e il tasto Indietro non funziona. | Aggiungere un'indicazione visibile e leggibile da tecnologie assistive (icona più testo "si apre in una nuova scheda"), oppure aprire il motore nella stessa scheda. |
| R6 | `BarraMobile.tsx:6-7` | lingua del sito | minore | FAIL | Le etichette "Chiama" e "Prenota" sono scritte fisse in italiano, quindi compaiono in italiano anche sulle pagine EN e DE. | Usare le traduzioni del sito. |
| R7 | `BarraMobile.tsx:6` | C05 | da verificare | NON VERIFICATO | Il numero `+390000000000` sembra un segnaposto. In produzione il pulsante "Chiama" non funzionerebbe. | Controllare il numero reale. |
| R8 | `BarraPrenota.tsx:7` | robustezza | minore | NON VERIFICATO | Senza bambini il link contiene `children_ages=` vuoto. Niente garantisce che il numero di età sia uguale a `bambini`, né che la partenza venga dopo l'arrivo. `formatISO` usa il fuso orario locale: va bene se il selettore crea le date a mezzanotte locale. | Omettere `children_ages` quando è vuoto. Validare età e date prima di costruire il link. Provare l'URL nel motore. |
| R9 | `SchedaCamera.tsx:4` | igiene | minore | FAIL | Il codice camera è inserito nell'URL senza codifica. Manca `rel="noopener"`, che i browser moderni comunque applicano da soli con `_blank`. | Usare `URLSearchParams`, che arriva gratis con R10. |

## Correzione strutturale consigliata (R10)

Tenere **un solo costruttore del link**, `hrefMotore`, estendendolo con date e ospiti facoltativi e con un `room` facoltativo (se il fornitore lo conferma). Le tre superfici ricevono la lingua attiva e lo stato della ricerca. Così R1, R2, R3 e R9 si chiudono insieme e non si ripresentano quando qualcuno aggiunge un nuovo pulsante Prenota.

## Esiti H08 per sotto-controllo

| Sotto-controllo | Barra home | Barra mobile | Scheda camera |
|---|---|---|---|
| Date e ospiti | PASS (dalla lettura del codice) | FAIL se esiste già una ricerca | FAIL |
| Lingua | PASS se `lang` vale `it`, `en` o `de` (NON VERIFICATO) | FAIL | FAIL |
| Attribuzione `src` | PASS (dalla lettura del codice) | FAIL | FAIL |
| Avviso nuova scheda | NON VERIFICATO | FAIL | FAIL |
| Prezzo | NON VERIFICATO | NON VERIFICATO | NON VERIFICATO |

Il prezzo non viaggia nel link: il motore non ha un parametro per il prezzo. Bisogna confrontare il prezzo del sito con il totale mostrato dal motore su un soggiorno di prova (H02).

## Cosa non si può verificare o correggere (motore di terzi)

Non avete accesso al codice né alle impostazioni del motore, quindi restano da provare o da chiedere al fornitore:
- se accetta davvero i parametri e gestisce `children_ages` vuoto;
- se `src` arriva fino al pagamento;
- se il calendario è accessibile (H04);
- se il motore mostra il totale e le condizioni di cancellazione (H02, H03);
- quale lingua usa quando `lang` manca.

## Prossime prove

1. Generare un URL da ognuna delle tre superfici, in tutte e tre le lingue, con e senza date, e aprirlo nel motore.
2. Fare una prenotazione di prova (o arrivare fino al pagamento) per controllare `src` e il prezzo.
3. Controllare con tastiera e lettore di schermo l'avviso della nuova scheda.

**Release:** la decisione resta separata e spetta a voi. R1–R3 e R5 sono i MUST aperti che bloccherebbero un gate di Refactor su questo passaggio.
