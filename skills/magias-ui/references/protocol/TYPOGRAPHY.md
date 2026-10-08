# Tipografia

Magias UI Protocol · v0.2 · nucleo v0.2

La leggibilità è un risultato da verificare; scala, numero di font, maiuscolo e unità CSS sono mezzi contestuali. I font utilizzati devono avere diritti compatibili con l’uso: requisito distinto T02.a, esplicitato sotto. [Esempi](examples/STARTING-VALUES.md).

## T01 · MUST

Preservare struttura semantica e relazioni del testo indipendentemente dalla scala visiva; documentare i ruoli usati.

- Ambito: Struttura semantica del testo.
- Eccezioni/limiti: Ruoli visivi variabili; non serve documentare ruoli non usati.
- Verifica: Titoli, relazioni e leggibilità indipendenti dalla scala.
- Automazione: S.

## T02 · SHOULD

Scegliere famiglie, pesi e fallback leggibili per lingue e contenuti reali; verificare copertura, caricamento e diritti di utilizzo.

- Ambito: Font e caricamento.
- Eccezioni/limiti: Più famiglie, alfabeti e fallback multilingue quando utili.
- Verifica: Licenza, copertura glifi, fallback, caricamento e leggibilità.
- Automazione: S.

## T03 · SHOULD

Rendere riconoscibili i ruoli mediante scala, peso, posizione e spazio; scale compatte sono ammesse.

- Ambito: Gerarchia tipografica.
- Eccezioni/limiti: UI dense e confronti numerici possono usare scale ravvicinate.
- Verifica: Distinzione dei ruoli con scala, peso, posizione e spazio.
- Automazione: H.

## T04 · MUST

Rispettare zoom, preferenze e contenuti estremi senza perdita di testo o funzioni; fluidità e specifiche unità CSS sono scelte tecniche.

- Ambito: Ridimensionamento e contenuti estremi.
- Eccezioni/limiti: Misure fisse accessibili ammesse; fluidità non obbligatoria.
- Verifica: Zoom, preferenze, lingue, URL e parole lunghe.
- Automazione: S.

## T05 · SHOULD

Valutare lunghezza di riga e a capo sui testi reali; gli intervalli per la prosa sono riferimenti, non soglie di conformità.

- Ambito: Prosa continua desktop.
- Eccezioni/limiti: Codice, tabelle, poesia, lingue e schermi richiedono altri criteri.
- Verifica: Misura righe reali e lettura; overflow e a capo.
- Automazione: S.

## T06 · MUST

Rendere leggibili le informazioni essenziali e riconoscibili i link anche senza il solo colore; rispettare le eccezioni normative per immagini di testo. Maiuscolo e tracking non sono vietati in sé.

- Ambito: Informazioni essenziali e link.
- Eccezioni/limiti: Maiuscolo e tracking ammessi se leggibili; immagini di testo con eccezioni WCAG.
- Verifica: Contrasto, identificazione link, zoom e comprensione.
- Automazione: S.

## T07 · SHOULD

Usare enfasi selettiva e supporto esplicativo dove il compito lo richiede; voce poetica/editoriale ammessa.

- Ambito: Enfasi e aperture commerciali.
- Eccezioni/limiti: Poesia, editoriale, campagne e interfacce operative.
- Verifica: Review del testo e comprensione per lo scopo.
- Automazione: H.

## T02.a · MUST

Usare font con licenza compatibile con impiego e distribuzione reali.

- Ambito: Font incorporati/distribuiti.
- Eccezioni/limiti: Licenza compatibile o permesso valido, non preferenza estetica.
- Verifica: Documento licenza, fonte, uso e modalità di distribuzione.
- Automazione: H.

