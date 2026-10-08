# Movimento e prestazioni

Magias UI Protocol · v0.2 · nucleo v0.2

Feedback, spiegazione, orientamento, racconto e identità sono scopi ammessi. Nessun default fermo universale e nessuna quota di effetti. Una stessa pagina può usare profili diversi per racconto, confronto e prenotazione. [Profili per fase](profiles/MOTION-PROFILES.md) · [Scheda effetto](templates/MOTION-CONTRACT.md).

## M01 · SHOULD

Motivare il movimento per feedback, spiegazione, orientamento, racconto o identità, anche a livello di famiglia di effetti.

- Ambito: Movimento funzionale, esplicativo, narrativo e identitario.
- Eccezioni/limiti: Nessun obbligo di animare; espressione ammessa con controlli e accesso preservati.
- Verifica: Obiettivo e contesto, costo/beneficio osservabile e variante ridotta.
- Automazione: H.

## M02 · SHOULD

Scegliere transizioni proporzionate al contesto, interrompibili e senza ritardi cosmetici dell’azione; nessun default fermo universale.

- Ambito: Transizioni e feedback secondo contesto.
- Eccezioni/limiti: Durate libere se non bloccano accesso/azione; feedback immediato indipendente dalla fine della transizione.
- Verifica: Interruzione, ripetizione, risposta immediata e nessuna dipendenza da fine animazione.
- Automazione: S.

## M03 · MUST

Preservare controllo dell’interazione e accesso al compito; pinning e scroll-linked ammessi senza percorso coercitivo. Definire degrado appropriato se script/animazione falliscono.

- Ambito: Contenuti e interazioni essenziali.
- Eccezioni/limiti: Scroll-linked e pinning ammessi se mantengono controllo, accesso diretto e percorso equivalente; app JS con degrado dichiarato.
- Verifica: Scroll veloce/inverso, ancore, focus e fail script; nessuna lettura/azione coercitiva.
- Automazione: S.

## M04 · MUST

Rispettare la preferenza di movimento ridotto mediante riduzione, sostituzione o rimozione appropriata, conservando contenuti, stati e funzioni.

- Ambito: Preferenze movimento.
- Eccezioni/limiti: Ridurre, sostituire o rimuovere secondo effetto; movimento essenziale con alternativa appropriata.
- Verifica: Verificare preferenza: testi, funzioni e stati equivalenti, animazioni ridotte e nessuna scomparsa.
- Automazione: S.

## M05 · SHOULD

Valutare interferenza fra movimenti durante il compito; effetti coordinati multipli ammessi senza tetto numerico universale.

- Ambito: Competizione fra movimenti durante un compito.
- Eccezioni/limiti: Più effetti coordinati ammessi; niente tetto numerico universale.
- Verifica: Leggibilità durante movimento, controllabilità loop/media e stabilità del task.
- Automazione: S.

## M06 · MUST

Offrire accesso alle informazioni e azioni essenziali con input pertinenti; hover è arricchimento e non accesso esclusivo.

- Ambito: Parità fra input.
- Eccezioni/limiti: Interazioni possono differire; stesse possibilità essenziali.
- Verifica: Hover/focus/touch; contenuti dismissible, hoverable e persistent se pertinenti.
- Automazione: S.

## M07 · SHOULD

Misurare costo e regressioni della variante animata negli ambienti del progetto; scegliere primitive o librerie secondo necessità e riuso.

- Ambito: Prestazioni e dipendenze.
- Eccezioni/limiti: Librerie esistenti o necessarie; budget del progetto.
- Verifica: Baseline ripetibile rete/dispositivo e regressioni di caricamento/interazione.
- Automazione: S.

## MX01 · SHOULD

Definire intento del movimento: feedback, spiegazione, identità, narrazione o orientamento

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Nessun effetto obbligatorio; motivazione di gruppo per effetti coerenti.
- Verifica: Collegare effetto a contenuto/compito senza pretendere uplift.
- Automazione: H.

## MX02 · MUST

Preservare informazione materiale e azioni durante transizioni

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Suspense narrativa ammessa su contenuti non decisivi.
- Verifica: Scroll/focus prima-durante-dopo; fallback e informazioni al momento utile.
- Automazione: S.

## MX03 · MUST

Conservare controllo della persona, input e interruzione

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Movimento essenziale al compito con controlli/alternativa appropriati.
- Verifica: Scroll inverso/rapido, Escape, navigazione, input ripetuti e ritorno.
- Automazione: S.

## MX04 · MUST

Rispettare preferenza ridotta con riduzione/sostituzione/rimozione appropriata

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Nessuna perdita di funzioni; movimento essenziale gestito esplicitamente.
- Verifica: Variante ridotta vs standard: parità dei contenuti, risultati e azioni.
- Automazione: S.

## MX05 · MUST

Valori transazionali e stati finali autorevoli indipendenti dall’interpolazione

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Conteggi dimostrativi ammessi se chiaramente illustrativi.
- Verifica: Ultimo input→dato finale; payload corretto; annunci senza cifre fittizie.
- Automazione: S.

## MX06 · MUST

Evitare bersagli mobili o focus perso durante un’azione

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Movimento controllato del componente se non compromette input/accesso.
- Verifica: Tastiera/touch/pointer; resize, apertura overlay e aggiornamenti.
- Automazione: S.

## MX07 · SHOULD

Valutare competizione dei movimenti sul compito

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Più effetti coordinati possibili; nessun tetto universale.
- Verifica: Review durante lettura/decisione, non solo frame statico.
- Automazione: H.

## MX08 · SHOULD

Verificare costo della variante animata e sospendere lavoro invisibile non utile

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Media/processi che devono continuare per lo scopo.
- Verifica: Stesso ambiente: scrolling/input, background/offscreen e regressioni.
- Automazione: S.

## MX09 · MUST

Offrire controlli pausa/stop e alternative dove i criteri pertinenti li richiedono

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Eccezioni normative specifiche, non generico beneficio estetico.
- Verifica: Durata/autoplay, pausa, ripresa, contenuto equivalente e focus.
- Automazione: S.

## MX10 · MAY

Usare scroll-linked, pinning, parallax, canvas, carousel o transizioni espressive

- Ambito: Movimento nella fase del compito.
- Eccezioni/limiti: Tutti i MUST indipendenti rispettati; contesto può limitarli.
- Verifica: MX02–MX09 e task test; presenza dell’effetto mai FAIL automatico.
- Automazione: H.

## M02.a · MUST

Non ritardare azioni e feedback essenziali per completare una transizione cosmetica.

- Ambito: Interazioni e invii.
- Eccezioni/limiti: Tempi necessari al compito ammessi con stato autentico.
- Verifica: Azione/interruzione/input ripetuti prima-durante-dopo.
- Automazione: S.

