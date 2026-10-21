Ho modificato i due file, ma non ho potuto verificarli: in `materiale/` non ci sono `package.json`, dipendenze o un'app da avviare. Non ho fatto né typecheck né build né test runtime, e non ho installato nulla. Per il protocollo la modifica resta **NON VERIFICATA**.

## Il problema principale: lo slideshow non si ferma mentre si scelgono le date
Il pannello sta sopra lo slideshow, che continuava a cambiare foto ogni 6 secondi, con dissolvenze di 1,8 s, anche mentre la persona sceglieva le date (M05/MX07, SHOULD).

**`HeroSlider.tsx`**
- **Sospensione durante il compito:** ho aggiunto `useSospensioneCarosello(attiva)`. Ogni componente che lo usa ferma l'autoplay finché è attivo, e più componenti possono sospenderlo insieme.
- **Pausa manuale separata:** la sospensione non cambia il pulsante Pausa/Riprendi. A compito finito lo slideshow riparte da zero (6 s pieni) e solo se la persona non l'aveva messo in pausa.
- **Movimento ridotto (M04, MUST, prima ignorato):** con `prefers-reduced-motion` lo slideshow parte fermo e le foto cambiano senza dissolvenza. Chi vuole può comunque farlo partire con "Riprendi".

## La selezione date (`PannelloPrenota.tsx`)
- **Ferma lo slideshow** mentre il calendario è aperto o il focus è dentro il pannello.
- **Calendario in italiano** (`locale={it}`): mesi e giorni in italiano, settimana che inizia di lunedì.
- **Un mese solo sotto i 640 px:** prima mostrava sempre due mesi, che non entrano su un telefono.
- **Etichette più chiare:** il campo ha l'etichetta visibile "Date del soggiorno". Il pulsante mostra "Arrivo mer 21 ott – Partenza …".
- **Indicazioni nel calendario:** un testo annunciato agli screen reader dice cosa fare ("Seleziona la data di arrivo", poi "di partenza", poi "3 notti"). C'è anche un pulsante "Fatto".
- **Chiusura automatica** quando l'intervallo è completo, ma non mentre si ritocca un intervallo già scelto.
- **Niente soggiorni di zero notti:** un intervallo con lo stesso giorno di arrivo e partenza non conta come completo.
- **Le date vengono davvero inviate (C08, MUST):** prima il form non le trasmetteva. Ora ci sono i campi nascosti `arrivo` e `partenza` in formato `AAAA-MM-GG`, calcolati sul giorno locale per evitare lo slittamento di fuso orario che darebbe `toISOString()`.
- **Errore se mancano le date:** l'invio si blocca, compare un messaggio annunciato con `role="alert"` e collegato al campo, e il focus torna sul selettore.

## Da controllare quando integri
- **Percorso dell'import:** `PannelloPrenota` importa da `./HeroSlider`. Se nel progetto vero i file stanno in cartelle diverse, va corretto.
- **Versione di react-day-picker:** ho usato `date-fns/locale`, che va bene con le v8 e v9. Va controllato che il `Calendar` di shadcn accetti `locale` e che `PopoverTrigger` accetti `ref` nella versione installata.
- **Prove ancora da fare:** typecheck, uso da tastiera (aprire, scegliere, Esc, ritorno del focus), screen reader, mobile e movimento ridotto. Va anche osservato che lo slideshow si fermi davvero mentre si scelgono le date.

## Problemi già presenti che non ho toccato
- Il pulsante Pausa cambia sia il testo sia `aria-pressed`, quindi lo stato viene comunicato due volte. Basta tenere un'etichetta fissa oppure togliere `aria-pressed`.
- Il pulsante Pausa non ha stile e il contrasto sopra le foto non è garantito.
- `alt=""` va bene solo se le foto sono puramente decorative.
