La revisione di `privacy.html` rileva **due problemi da risolvere prima della pubblicazione**. Nessun file modificato.

1. **Priorità alta — Contatti e identità sono dimostrativi.**  
   Alle `righe 7–11` compaiono “Studio Esempio”, `privacy@esempio.test` e P.IVA `00000000000`. Il recapito indicato per esercitare i diritti non è un contatto pubblico utilizzabile.  
   **Regola:** T06, MUST — informazioni essenziali comprensibili e utilizzabili; rilievo sul compito informativo.  
   **Correzione:** inserire identità e recapiti reali verificati. Se è un prototipo, dichiarare esplicitamente che i dati sono dimostrativi.

2. **Priorità media — Manca la configurazione viewport mobile.**  
   Nell’`head` manca `<meta name="viewport" content="width=device-width, initial-scale=1">`. I browser mobili possono quindi usare una viewport virtuale desktop e mostrare testo e link rimpiccioliti.  
   **Regole:** L08 e A04, MUST. Assenza accertata nel sorgente; impatto visivo **NON VERIFICATO**.  
   **Correzione:** aggiungere il meta, poi verificare reflow a 320 CSS px e ridimensionamento testo al 200% separatamente.

Le verifiche sul sorgente danno questi risultati:

| Controllo | Esito ed evidenza |
|---|---|
| Lingua e struttura dei titoli | **PASS sul sorgente:** `lang="it"`, un H1 e sezioni H2 |
| Indice interno | **PASS sul sorgente:** tutte e quattro le destinazioni esistono |
| Contrasto | **NON VERIFICATO negli stati reali:** su bianco, testo 15,91:1 e link 6,67:1 |
| Ritorno al sito | **NON VERIFICATO:** destinazione `/` assente dal materiale disponibile |
| Tastiera, focus, screen reader, target touch | **NON VERIFICATO:** nessuna prova runtime eseguita |
| Reflow, zoom e text spacing | **NON VERIFICATO:** richiedono prove nel browser |
| Media, modali, form e movimento implementato | **NON APPLICABILE:** assenti nella pagina |

La struttura essenziale è coerente con una pagina di consultazione: indice, titoli e colonna di lettura non richiedono un redesign.

**Gate Review:** completato nello scope di analisi del sorgente, con i limiti indicati. **Release:** da rinviare finché contatti e comportamento mobile non sono risolti e verificati. Questa revisione non attesta conformità WCAG AA né completezza giuridica dell’informativa.