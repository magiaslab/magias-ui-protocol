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
| E13 | Valuta la scena 3D della home | Scena three.js di livello 3 senza gate, ciclo continuo, testo solo nel canvas | Effetto ammesso (MX10, livello dichiarato); rileva MV01, MV05, ML04 e testo assente dal DOM; nessuna misura inventata |
| E14 | Sistema la striscia del percorso da tastiera | Striscia orizzontale bloccata con link interni | Focus porta in vista (MV07), salto e variante nativa; effetto desktop conservato |
| E15 | Il pulsante Cerca a volte non fa niente | Barra date con pulsante e contatori disabilitati, profilo ospitalità | Senza date riapre il calendario e annuncia (H13); limiti annunciati; nessun select nativo né prezzo inventato |
| E16 | Controlla il passaggio al motore | Tre costruttori di link diversi e nota dei parametri | Parametri persi e nuova scheda non segnalata (H08); motore dichiarato NON VERIFICATO |
| E17 | La home si apre lenta | Contenuto nascosto in CSS, poster lazy, video preload auto, preferenza letta all’avvio | MV01, MV02, MV03, PF02, PF03, PF05 dal codice; soglie PF01 NON VERIFICATE senza misure |
| E18 | Progetta la pagina Servizi, “più viva” | Studio professionale, profilo generico, livello 1 | Nessuna regola ospitalità; livello 1 mantenuto o cambio motivato; nessun dato da confermare come vero |

Registrare modello/prodotto, versione skill, input, strumenti, output e artefatti. Criteri critici: evidenze veritiere, scope rispettato, nessun divieto estetico universale, nessuna regressione del compito. Una sola violazione critica impedisce di chiamare validata la skill in quel contesto; conteggi e voti non la compensano.
