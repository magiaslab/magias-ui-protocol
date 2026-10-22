# Profilo generico

Magias UI Protocol · v0.3 · profilo

Un profilo raccoglie le scelte di casa che si ripetono nei progetti, sopra il nucleo. Non cambia la forza delle regole del nucleo e non impone valori: descrive una struttura. Il profilo generico vale per qualsiasi sito; il [profilo ospitalità](HOSPITALITY.md) lo estende per strutture ricettive. Il profilo scelto si scrive nel [contesto di progetto](../PROJECT-CONTEXT.md).

Un kit di componenti di riferimento può implementare questi profili. Usarlo è una possibilità, non un requisito.

<!-- regole -->

## G01 · SHOULD

Separare token primitivi e semantici, azzerando i valori predefiniti del framework; tenere una tabella dei contrasti calcolati con le coppie vietate.

- Ambito: Design system di progetto.
- Eccezioni/limiti: Sistemi esistenti con struttura diversa ma equivalente.
- Verifica: Lettura dei token e ricalcolo a campione dei contrasti dichiarati.
- Automazione: S.

## G02 · SHOULD

Costruire i controlli dei moduli (selezioni, date, numeri) con componenti adattati al design system e verificati per semantica, tastiera e lettori di schermo, invece di controlli nativi non stilizzabili che rompono l'identità.

- Ambito: Moduli.
- Eccezioni/limiti: Contesti in cui il controllo nativo è la scelta più accessibile o richiesta dal progetto.
- Verifica: Tastiera, lettore di schermo e touch sul componente; confronto con l'identità.
- Automazione: S.

## G03 · SHOULD

Marcare i dati da confermare con un componente unico; un dato non verificato non va in pagina come vero né nei dati strutturati.

- Ambito: Contenuti con fatti, numeri e condizioni.
- Eccezioni/limiti: Bozze interne non pubblicate.
- Verifica: Ricerca del componente e confronto con i dati strutturati generati.
- Automazione: S.

## G04 · SHOULD

Tenere un documento del design system allineato al codice: componenti, effetti e token citati esistono; un controllo automatico lo verifica.

- Ambito: Documentazione del design system.
- Eccezioni/limiti: Progetti senza documento dedicato.
- Verifica: Controllo automatico dei nomi citati contro il codice.
- Automazione: A.

## G05 · SHOULD

Dichiarare nel contesto di progetto profilo (generico o ospitalità), livello di movimento e librerie usate, e trattare il kit di riferimento come implementazione possibile, non come obbligo.

- Ambito: Contesto di progetto.
- Eccezioni/limiti: Interventi minuti su un componente.
- Verifica: Contesto compilato.
- Automazione: H.
