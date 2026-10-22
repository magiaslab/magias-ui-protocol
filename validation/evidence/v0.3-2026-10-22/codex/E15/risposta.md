Corretto `BarraPrenota.tsx` (`materiale/BarraPrenota.tsx`):

- “Cerca” resta attivo: se mancano date, apre il calendario e spiega cosa completare.
- Blocca intervalli non validi.
- Offre un collegamento alternativo se la nuova scheda non si apre.
- Conserva le scelte in caso di errore.

Test della logica superati con dipendenze simulate. Verifica nel browser, screen reader e motore reale non eseguibile con i soli file forniti.
