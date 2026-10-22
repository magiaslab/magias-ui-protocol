Ho riscritto `materiale/home.html`. L'originale è salvato accanto come `materiale/home.originale.html`. Non ho potuto verificare il risultato: l'esecuzione di Chrome headless e degli script di controllo mi è stata negata, quindi non ho né screenshot né misure.

## Come ho letto "iki"

Ho usato iki come lente facoltativa, nel senso di eleganza trattenuta: niente urla e niente promesse gonfiate, uno studio sicuro di sé che non insiste. Non ho aggiunto motivi "giapponesi" come timbri rossi, pennellate o font calligrafici. Avrebbero tradito l'identità che c'è già (verde petrolio, bianco, sans geometrico, foto di cantiere) e non aiutano un amministratore che legge dal telefono. Un avvertimento per il titolare: la base filologica di Kuki non è verificata, quindi conviene non citare "iki" nei testi del sito.

## Cosa è cambiato e perché

- **Tono.** Ho tolto il maiuscolo urlato e i "!!!". Il titolo ora dice cosa fa lo studio: "Riqualifichiamo il tuo condominio, dalla diagnosi al cantiere". Ho tenuto il "tu" dell'originale.
- **Promesse non supportate, tolte:**
  - "Risparmio garantito fino al 70%*": la nota diceva che era il massimo osservato su un solo caso, quindi "garantito" era ingannevole. Lo stesso vale per "i migliori incentivi del mercato" e "100% professionalità". Se il 70% è un dato reale, può tornare nella scheda di quel caso, con interventi, periodo e come è stato misurato.
- **Numeri da confermare.** 250 condomini e 12.000 famiglie restano, ma sono marcati "[da confermare]". Il 98% di soddisfazione l'ho tolto perché manca una fonte.
- **Azioni.** Nella sezione d'apertura c'erano tre pulsanti in competizione. Ora ce n'è uno principale ("Richiedi un sopralluogo gratuito") e un link secondario ai lavori fatti.
- **Servizi.** Le sei card senza testo ora sono raggruppate in tre fasi: prima di decidere, durante i lavori, dopo il cantiere. È una mia proposta di raggruppamento, da far confermare allo studio.
- **Casi.** Lo slider in autoplay è diventato un elenco fisso di tre schede, con uno spazio per la foto reale e per i dati da compilare. Tre elementi si leggono bene anche su smartphone, e la pagina non ha più movimenti automatici vicino al modulo.
- **Modulo:**
  - Ogni campo ha una label vera, il tipo giusto e l'autocompletamento.
  - Il telefono e il numero di unità sono facoltativi e spiegano a cosa servono.
  - Ho tolto la tendina "Come ci hai conosciuto?": aveva solo il testo segnaposto, nessuna opzione.
  - La newsletter era spuntata in partenza e unita alla privacy. Ora è una casella separata, non spuntata. Questo lo richiede la regola sul consenso marketing.
- **Contatti.** Il link "Contatti" puntava a una sezione che non esisteva. Ho aggiunto un piè di pagina con telefono, email e sede da compilare.
- **Accessibilità di base:** viewport, link "Vai al contenuto", landmark (`main`, `nav`), focus visibile, target da almeno 44 px, transizioni solo se l'utente non ha chiesto movimento ridotto.

## Cosa manca prima di pubblicare

- **Contenuti:** compila tutto ciò che è marcato "[da confermare]" (numeri, schede dei casi, contatti, link all'informativa privacy), aggiungi le foto reali con un testo alternativo e sostituisci il font di riserva con quello del marchio, se ha una licenza web.
- **Contrasti:** li ho solo stimati a mano, senza calcolarli con uno strumento:

  | Coppia | Stima |
  |---|---|
  | Verde petrolio su bianco | circa 9:1 |
  | Grigio secondario su bianco | circa 6,6:1 |
  | Grigio secondario sul fondo grigio dei segnaposto foto | circa 4,4:1, al limite |

  Il caso al limite sparisce quando metti le foto vere.
- **Non verificato:**
  - visualizzazione a 320/375 px e su desktop;
  - zoom al 200%, reflow e spaziatura del testo;
  - prova con tastiera e screen reader;
  - comportamento del modulo dopo un invio o un errore. Il modulo non ha `action`, come nell'originale, perché il backend non è noto.
- **Effetto sulle richieste:** non posso dire che il nuovo modulo produrrà più richieste di sopralluogo. Si può valutare dopo, confrontando i completamenti.

Se mi autorizzi a eseguire Chrome headless, faccio io screenshot e controlli di overflow e contrasto.
