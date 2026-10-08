# Layout e responsive

Magias UI Protocol · v0.2 · nucleo v0.2

Scegliere struttura e densità per compito e contenuti. Card, bento, simmetria, più azioni e composizioni dense sono legittime. I valori numerici sono in [esempi](examples/STARTING-VALUES.md), fuori dal gate.

## L01 · SHOULD

Collegare sezioni a compito, orientamento o funzione narrativa/espressiva; la domanda utente è un’euristica.

- Ambito: Sezioni informative.
- Eccezioni/limiti: Arte, gioco, esplorazione e atmosfera con funzione dichiarata.
- Verifica: Collegare sezione a compito, orientamento o espressione.
- Automazione: H.

## L02 · SHOULD

Scegliere componenti per unità informative e interazioni; card, liste e griglie sono alternative, senza blacklist.

- Ambito: Scelta componenti.
- Eccezioni/limiti: Card anche per raggruppamento, stato e contenuto asincrono.
- Verifica: Confrontare alternative e riconoscibilità delle unità.
- Automazione: H.

## L03 · MUST

Preservare ordine significativo di lettura e focus quando varia la composizione; il riordino visivo non è vietato in sé.

- Ambito: Ordine significativo e focus.
- Eccezioni/limiti: Riordino visivo ammesso quando il significato e il focus restano corretti.
- Verifica: DOM, lettura e navigazione tastiera nelle varianti.
- Automazione: S.

## L04 · MAY

Scegliere composizione e dominanti secondo il compito, senza quota di variazioni né divieto di simmetria.

- Ambito: Composizione.
- Eccezioni/limiti: Simmetria, più gerarchie e confronto multiplo ammessi.
- Verifica: Review del compito e scansione della pagina.
- Automazione: H.

## L05 · SHOULD

Valutare competizione visiva per gruppo decisionale e fase del compito; non imporre conteggi di attrazioni o una sola CTA per viewport.

- Ambito: Gruppi decisionali commerciali.
- Eccezioni/limiti: Dashboard, mappe, confronto, monitoraggio e compiti multipli.
- Verifica: Annotazioni screenshot e task test; quote solo indizio.
- Automazione: H.

## L06 · SHOULD

Usare token semantici coerenti; scegliere valori dopo contenuti, vincoli, identità e densità reali.

- Ambito: Token di spazio.
- Eccezioni/limiti: Valori e unità dipendono da densità, brand, contenuti e accessibilità.
- Verifica: Inventario token e resa con testi reali, zoom e viewport basso.
- Automazione: S.

## L07 · MUST

Evitare testo tagliato, controlli irraggiungibili e perdite funzionali nei contenitori; altezze fisse e scroll locale sono ammessi se accessibili.

- Ambito: Contenitori con testo/controlli.
- Eccezioni/limiti: Altezza fissa ammessa se adattamento o scroll accessibile evitano perdite.
- Verifica: Overflow, zoom, testi lunghi e raggiungibilità controlli.
- Automazione: S.

## L08 · MUST

Preservare possibilità essenziali nel responsive e specificare ordine, immagini, navigazione e azioni; testare campioni motivati e casi estremi.

- Ambito: Responsive nel cambiamento.
- Eccezioni/limiti: Schema breve per piccoli refactor; dispositivi scelti dal contesto.
- Verifica: Ordine, crop, navigazione, parità funzionale; resize continuo e casi estremi.
- Automazione: S.

## L09 · MUST

Definire e provare stati e transizioni applicabili di ogni componente coinvolto; escludere con motivo quelli non pertinenti.

- Ambito: Stati interattivi applicabili.
- Eccezioni/limiti: Stati non pertinenti esplicitamente esclusi; nessun success artificiale.
- Verifica: Inventario stati e prove di transizione, errore e recupero.
- Automazione: S.

## L10 · SHOULD

Usare token di colore e profondità coerenti; più accenti, temi e serie dati sono legittimi con semantica e contrasto adeguati.

- Ambito: Token colore e profondità.
- Eccezioni/limiti: Brand pluricromatico, serie dati, temi e sistemi preesistenti.
- Verifica: Contrasto stati, semantica e coerenza; più accenti se motivati.
- Automazione: S.

