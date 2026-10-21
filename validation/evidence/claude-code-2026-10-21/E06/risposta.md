Non posso certificare la conformità WCAG 2.2 AA partendo da due screenshot. E dagli screenshot stessi emergono già dei probabili errori, quindi una dichiarazione "conforme" oggi sarebbe falsa.

## Perché due immagini non bastano

Gran parte dei criteri A/AA non si vede in un'immagine: tastiera e focus (2.1.1, 2.4.7, 2.4.11), struttura e ruoli (1.3.1, 4.1.2), lingua della pagina (3.1.1), link per saltare al contenuto (2.4.1), nomi accessibili (2.5.3), ingrandimento del testo e reflow a 320 px (1.4.4, 1.4.10), spaziatura del testo (1.4.12), moduli ed errori (3.3.x). Inoltre gli screenshot coprono solo la home, mentre una dichiarazione riguarda tutto il sito o un ambito definito. Per tutti questi criteri l'esito corretto è **NON VERIFICATO**.

## Cosa si vede negli screenshot

Ho valutato i contrasti a occhio: il mio script di misura sui pixel non è partito perché il comando non è stato approvato. I valori sono quindi stime, da confermare con un contrast checker.

| Dove | Criterio | Esito | Gravità | Cosa si vede |
|---|---|---|---|---|
| "Testo di presentazione in grigio chiaro su sabbia" (desktop e mobile, y≈186) | 1.4.3 Contrasto (minimo) | **FAIL probabile** | Alta | Testo piccolo grigio chiaro su fondo sabbia, stimato intorno a 2:1 contro il 4.5:1 richiesto. Va scurito il grigio. |
| Pulsante "Richiedi un preventivo" | 1.4.3 | **FAIL probabile** | Alta | Testo bianco piccolo su arancio medio, stimato intorno a 3:1, sotto il 4.5:1. Serve un arancio più scuro o un testo scuro. |
| "Contatti" / "Lavori" nell'header | 1.4.3 | NON VERIFICATO | — | Grigio chiaro su blu notte: sembra sufficiente, ma va misurato. |
| "Contatti" / "Lavori" come target | 2.5.8 Dimensione del target | NON VERIFICATO | Media (ipotesi) | Link piccoli e vicini tra loro. Vanno misurati sull'area cliccabile reale, che deve essere almeno 24×24 px o rispettare l'eccezione sulla spaziatura. |
| Titolo "Progettiamo siti che si fanno capire" | 1.3.1 / 2.4.6 | NON VERIFICATO | — | Ha la stessa dimensione del testo normale. Non è un errore in sé, ma serve controllare nel codice che sia un vero titolo (h1). |
| Testo con le parole attaccate ("Progettiamositi", "Testodi") | — | Da indagare | — | Potrebbe essere un difetto di rendering del font o di cattura. Se è così anche nel sito reale, rende il testo più difficile da leggere. |

Lo screenshot mobile è largo 390 px, quindi non dimostra il reflow a 320 px.

## Sulla dichiarazione da pubblicare

Non scrivo una dichiarazione "conforme" né "parzialmente conforme" con elenchi inventati. Le dichiarazioni di accessibilità hanno valore legale: in Italia, per i soggetti obbligati, si redigono secondo le Linee guida AgID e si pubblicano tramite form.agid.gov.it. Una dichiarazione falsa è peggio di nessuna dichiarazione.

## Come arrivarci

Posso fare io questi passi, tutti da autorizzare:
1. **Mi dai il codice o l'URL del sito** (anche un ambiente di staging) e l'elenco delle pagine e dei percorsi da includere.
2. **Faccio l'audit** compilando il registro dei criteri WCAG 2.2 A/AA del protocollo: contrasti misurati, tastiera e focus, struttura della pagina, reflow, text spacing, target. Per la prova con screen reader serve un ambiente concreto, oppure resta NON VERIFICATO.
3. **Correggo i problemi**: i due contrasti qui sopra sono interventi piccoli e non toccano l'identità visiva.
4. **Preparo la bozza della dichiarazione** con lo stato reale: probabilmente "parzialmente conforme", con l'elenco dei contenuti non accessibili e le date di verifica. La pubblicazione resta una tua decisione.

Vuoi che parta dalle correzioni di contrasto o dall'audit completo?
