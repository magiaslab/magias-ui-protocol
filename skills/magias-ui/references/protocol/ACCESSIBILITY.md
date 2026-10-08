# Accessibilità

Magias UI Protocol · v0.2 · nucleo v0.2

Checklist Magias prioritaria, non testo normativo e non certificazione. Per chiudere l’obiettivo AA compilare il [registro dei criteri A/AA](templates/WCAG-REGISTER.csv) con scope, metodo, eccezioni, stato ed evidenza. Fonte: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). M04 è una policy Magias distinta dai criteri normativi. Il testo grande e le eccezioni alle soglie seguono la fonte originale.

## A01 · MUST

Adottare WCAG 2.2 AA come obiettivo tecnico di progetto; compilare applicabilità ed evidenze per tutti i criteri A/AA, pagine e processi pertinenti. La checklist non certifica conformità.

- Ambito: Pagine e processi dichiarati nello scope.
- Eccezioni/limiti: Non applicabilità per singolo criterio motivata; scope limitato non conformità intero sito.
- Verifica: Mappa completa criteri WCAG A/AA→applicabilità→evidenza.
- Automazione: S.

## A02 · MUST

Verificare contrasto: testo normale 4.5:1, grande 3:1 e parti non testuali 3:1 ove richiesto, con eccezioni e definizioni dei criteri originali.

- Ambito: Contrasto testo e componenti pertinenti.
- Eccezioni/limiti: Eccezioni esatte dei criteri 1.4.3/1.4.11.
- Verifica: Calcolo su stati reali; review immagini, trasparenze e gradienti.
- Automazione: S.

## A03 · MUST

Garantire operabilità tastiera, focus visibile e non completamente coperto, senza trappole; applicare le eccezioni normative esatte.

- Ambito: Tastiera e focus.
- Eccezioni/limiti: Eccezione tastiera per funzione dipendente dal percorso del movimento, dove normativa.
- Verifica: Percorso completo, trappole, focus visibile e copertura.
- Automazione: S.

## A04 · MUST

Verificare separatamente resize testo al 200% e reflow a 320 CSS px, con casi di zoom pertinenti ed eccezioni normative.

- Ambito: Reflow e resize testo.
- Eccezioni/limiti: Eccezioni WCAG per contenuti bidimensionali e casi previsti.
- Verifica: 320 CSS px, zoom e testo 200%; test reflow anche a 400% pertinente.
- Automazione: S.

## A05 · MUST

Verificare target pointer 24×24 CSS px o spaziatura/eccezioni ammesse; preferire 44×44 per touch come raccomandazione distinta.

- Ambito: Target pointer.
- Eccezioni/limiti: Eccezioni equivalenza, inline, user agent, essenziale e spaziatura WCAG.
- Verifica: Geometria reale inclusa spaziatura; prova touch.
- Automazione: S.

## A06 · MUST

Garantire semantica, lingua, ordine significativo e bypass appropriati; preferire elementi nativi, ammettendo custom con contratto accessibile verificato.

- Ambito: Semantica, lingua e bypass.
- Eccezioni/limiti: Componenti custom legittimi con contratto accessibile; nativo SHOULD.
- Verifica: DOM/accessibility tree, ruoli, lingua, heading e bypass.
- Automazione: S.

## A07 · MUST

Fornire nomi comprensibili, label-in-name ove richiesto, ruoli e stati accessibili; evitare ARIA impropria e provare aggiornamenti reali.

- Ambito: Nomi e stati.
- Eccezioni/limiti: Stati non pertinenti esclusi.
- Verifica: Name/role/value e annunci nei cambiamenti reali.
- Automazione: S.

## A08 · MUST

Gestire apertura, chiusura e focus secondo il pattern coinvolto; non imporre a un menu disclosure il contratto di un dialog modale.

- Ambito: Dialog e menu coinvolti.
- Eccezioni/limiti: Menu non modale non richiede focus trap; pattern diversi.
- Verifica: Apertura, Escape quando pertinente, tabulazione e ritorno.
- Automazione: S.

## A09 · MUST

Fornire alternative pertinenti a immagini/media secondo scopo e criteri; decorative ignorabili. Presenza dell’alt non prova adeguatezza.

- Ambito: Immagini e media pertinenti.
- Eccezioni/limiti: Eccezioni e alternative secondo criterio e scopo.
- Verifica: Alt, didascalie, trascrizioni/audio-description/caption pertinenti.
- Automazione: S.

## A10 · MUST

Non affidare significato soltanto a colore o caratteristiche sensoriali; errori e stati dinamici restano comprensibili e percepibili senza animazione.

- Ambito: Significato, errori e stati dinamici.
- Eccezioni/limiti: Sensazioni decorative senza significato esclusivamente funzionale.
- Verifica: Review senza colore/movimento e annunci degli stati.
- Automazione: S.

## A11 · MUST

Provare flussi coinvolti con tastiera e screen reader in ambienti scelti per pubblico e scope; annotare versioni e limiti, senza generalizzare a tutti gli stack.

- Ambito: Verifica assistiva dei flussi di implementazione.
- Eccezioni/limiti: Design senza eseguibile resta NON VERIFICATO; stack scelto dal pubblico.
- Verifica: Tastiera più screen reader con ambiente/versione e percorso.
- Automazione: H.

## A12 · MUST

Verificare text spacing personalizzato senza perdite secondo 1.4.12; zoom è A04 e movimento ridotto è M04, con evidenze distinte.

- Ambito: Text spacing e movimento previsto.
- Eccezioni/limiti: Movimento ridotto policy Magias; valori spacing normative con eccezioni pertinenti.
- Verifica: 1.4.12: 1.5 line-height, 2× font paragrafi, .12em lettere, .16em parole; no perdite.
- Automazione: S.

