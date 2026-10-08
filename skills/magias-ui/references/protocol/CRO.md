# Comprensione, fiducia e conversione

Magias UI Protocol · v0.2 · nucleo v0.2

L’obiettivo utente governa ogni pagina; commerciale solo se pertinente. Editoriale, legale, servizio pubblico e utility possono funzionare senza CTA o offerta. I vincoli di voce sono definiti nel contesto del progetto corrente.

## C01 · MUST

Definire un obiettivo utente per ogni pagina coinvolta; obiettivo commerciale solo se pertinente e compatibile con scelta informata.

- Ambito: Scopo della pagina.
- Eccezioni/limiti: Obiettivo commerciale non applicabile a editoriale, pubblico, legale e utilitario.
- Verifica: Documentare obiettivo utente; business solo se pertinente e compatibile.
- Automazione: H.

## C02 · MUST

Nelle pagine d’offerta chiarire offerta, destinatario e passo pertinente nel primo blocco utile; altre pagine chiariscono il proprio scopo senza CTA commerciale obbligatoria.

- Ambito: Pagine di offerta e ingresso commerciale.
- Eccezioni/limiti: Articoli, dati, errori e compiti utilitari chiariscono il proprio scopo.
- Verifica: Persona identifica scopo/offerta e passo pertinente.
- Automazione: H.

## C03 · SHOULD

Dare priorità alle azioni dove il compito lo richiede; mantenere neutrali scelte equivalenti e non favorire consenso mediante gerarchie ingannevoli.

- Ambito: Gruppo decisionale.
- Eccezioni/limiti: Confronto fra azioni equivalenti, scelta neutrale e strumenti.
- Verifica: Comprensione etichette e completamento; primaria solo se serve.
- Automazione: H.

## C04 · MUST

Rendere disponibili prima della decisione costi, vincoli e condizioni materiali; disclosure ammessa per dettagli opzionali e spiegazioni complete con riepilogo adeguato.

- Ambito: Decisioni con costi o vincoli.
- Eccezioni/limiti: Dettagli opzionali su richiesta; riepilogo completo dei fattori decisivi.
- Verifica: Percorso fino alla decisione con informazioni disponibili prima.
- Automazione: H.

## C05 · MUST

Usare prove autentiche e affermazioni supportate; registrare fonti, data e permessi. Fiction/demo/placeholder espliciti non sono prove di risultati reali.

- Ambito: Claim, prove e asset pubblici.
- Eccezioni/limiti: Fiction/demo/sintesi chiaramente etichettate, mai prove di risultati reali.
- Verifica: Registro claim→fonte→data→permessi e review editoriale.
- Automazione: S.

## C06 · SHOULD

Collocare prove pertinenti vicino alle promesse, indicando ruolo e limiti; se mancanti non inventarle per completare il layout.

- Ambito: Promessa e prova commerciale.
- Eccezioni/limiti: Portfolio nuovo senza casi; niente prova fittizia per completare layout.
- Verifica: Pertinenza, prossimità e limiti della prova.
- Automazione: H.

## C07 · SHOULD

Adottare copy comprensibile e concreto per il pubblico; persona grammaticale, tono e lessico sono vincoli del progetto, non universali.

- Ambito: Chiarezza del copy generale.
- Eccezioni/limiti: Voce narrativa, impersonale o plurale se coerente con progetto.
- Verifica: Review editoriale e comprensione; vincoli di voce nel contesto.
- Automazione: H.

## C08 · MUST

Mantenere label, obbligatorietà, errori e dati dopo fallimento; evitare invii doppi e fornire recupero. Confermare solo lo stato effettivamente garantito dal sistema.

- Ambito: Form e invii.
- Eccezioni/limiti: Form non presenti non applicabili; timeout ambiguo gestito senza duplicati.
- Verifica: Label, validazione, errori, conservazione, idempotenza e conferma reale.
- Automazione: S.

## C09 · SHOULD

Chiedere dati necessari alla finalità; motivare i campi e separare eventuali preferenze/consensi pertinenti. Nessuno schema campi universale.

- Ambito: Campi e primo contatto.
- Eccezioni/limiti: Preventivi, qualificazione e processi diversi con necessità esplicita.
- Verifica: Mappa campo→finalità e test completamento; consenso separato se presente.
- Automazione: S.

## C10 · MUST

Distinguere ipotesi e risultati; per ogni metrica definire evento, unità, denominatore, periodo, fonte, deduplica ed esclusioni. Dichiarare limiti di attribuzione e tracking; analytics non obbligatori.

- Ambito: Affermazioni e misure CRO.
- Eccezioni/limiti: Analytics assenti o vietati: non applicabili gli eventi, obbligatoria onestà sui limiti.
- Verifica: Evento, denominatore, periodo, fonte, unità, esclusioni e attribuzione.
- Automazione: S.

## C11 · SHOULD

Valutare comprensione/completamento e pianificare gli esperimenti con metriche e guardrail; non inferire uplift statistico da ricerca qualitativa o traffico insufficiente.

- Ambito: Esperimenti e valutazioni.
- Eccezioni/limiti: Traffico basso: ricerca qualitativa; A/B non obbligatorio.
- Verifica: Ipotesi, piano analisi, metrica e guardrail; nessun uplift inferito da pochi utenti.
- Automazione: H.

## C09.a · MUST

Separare eventuale consenso marketing dalle altre finalità; non preselezionarlo né accettarlo implicitamente tramite altra azione.

- Ambito: Form con marketing/consensi pertinenti.
- Eccezioni/limiti: NON APPLICABILE se tale finalità non è presente.
- Verifica: Controllo opzioni e stato reale in ambiente di prova.
- Automazione: S.

## C10.a · MUST

Non includere nomi, email o testo dei messaggi nei payload analitici; rispettare preferenze di tracking e minimizzazione previste dal progetto.

- Ambito: Analytics implementati.
- Eccezioni/limiti: NON APPLICABILE se analytics assenti; nessuna attribuzione inventata.
- Verifica: Ispezione payload con dati fittizi e verifica preferenze.
- Automazione: S.

