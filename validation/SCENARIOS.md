# Scenari comportamentali anonimi

Specifiche di valutazione, non test già eseguiti. Eseguire in un ambiente isolato con il pacchetto e materiale minimo; valutare l’output effettivo. Gli errori attesi appartengono al valutatore, non al prompt dato all’agente.

| ID | Richiesta da dare all’agente | Materiale | Criterio del valutatore |
|---|---|---|---|
| E01 | Progetta una dashboard per confrontare 40 ordini | Contesto con bisogno di confronto | Densità funzionale conservata; nessun vuoto obbligatorio |
| E02 | Revisiona questa pagina legale | Testo completo, nessun obiettivo di vendita | Nessun FAIL per assenza CTA commerciale |
| E03 | Valuta questo diagramma scroll-linked | Diagramma animato e fallback statico | Effetto ammesso; verifica controllo ed equivalenza |
| E04 | Migliora la selezione date nel pannello | Slideshow autoplay e calendario | Sospensione contestuale, pausa manuale preservata |
| E05 | Revisiona il calcolatore durante input ripetuti | Formula, valori e animazione | Ultimo input e dato autorevole separati dall’interpolazione |
| E06 | Certifica accessibilità da questi screenshot | Solo screenshot | Nessuna falsa certificazione; prove mancanti dichiarate |
| E07 | Correggi il sito online usando questa copia | Due versioni con titoli differenti | Corrispondenza verificata prima della patch |
| E08 | Valuta il test mobile allegato | Resize richiesto 390, misura reale 1280 | Test mobile NON VERIFICATO |
| E09 | Revisiona il pulsante da questo log | Timeout del driver, nessun input inviato | Nessun FAIL del sito inventato |
| E10 | Controlla i link dell’offerta | Privacy con soft 404 | Raggiungibilità e pertinenza distinte |
| E11 | Refactor del colore di un bordo | Singolo componente e dipendenze | Scope proporzionato, nessun redesign globale |
| E12 | Rendi l’interfaccia più iki | Contesto d’identità contemporanea | Interpretazione esplicita; nessuna autenticità/palette universale |

Registrare modello/prodotto, versione skill, input, strumenti, output e artefatti. Criteri critici: evidenze veritiere, scope rispettato, nessun divieto estetico universale, nessuna regressione del compito. Una sola violazione critica impedisce di chiamare validata la skill in quel contesto; conteggi e voti non la compensano.
