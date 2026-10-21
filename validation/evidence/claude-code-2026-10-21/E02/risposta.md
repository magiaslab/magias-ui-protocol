# Review: `materiale/privacy.html` (Magias UI v0.2, Review Mode)

**Esito:** l'audit è completo per la sola pagina, con tre rilievi maggiori. Il browser non era autorizzato in questa sessione, quindi tutte le prove a runtime (rendering, tastiera, zoom, screen reader) restano **NON VERIFICATE**.

**Cosa ho controllato:** il sorgente HTML/CSS (11 righe) e i contrasti, calcolati a mano con la formula WCAG. Nel sandbox non c'è un file di contesto di progetto. Ho quindi assunto che sia una pagina legale e informativa, senza obiettivo commerciale e senza una CTA principale.

## Rilievi

| ID | Dove | Regola | Gravità | Stato | Effetto e correzione |
|---|---|---|---|---|---|
| **R01** | riga 1, `<head>` | L08, T04 (MUST) | maggiore | Difetto confermato nel sorgente, effetto su dispositivo non verificato | Manca `<meta name="viewport" content="width=device-width, initial-scale=1">`. Sui browser mobili la pagina viene impaginata a circa 980 px e poi rimpicciolita: i 17 px diventano circa 7 px effettivi e bisogna zoomare con le dita. **Correzione:** aggiungere il meta viewport. |
| **R02** | righe 7, 10, 11 | Contenuti reali (gate di ingresso) | maggiore, blocca la release | Confermato | I dati sono segnaposto: "Studio Esempio S.r.l.", "via delle Prove 1, 00100 Città", P.IVA `00000000000`. `privacy@esempio.test` usa un dominio riservato che non riceve posta, quindi l'unico canale per esercitare i diritti non funziona. **Correzione:** il titolare deve fornire i dati reali. |
| **R03** | righe 8–10 | L01 (SHOULD), informazioni decisive | maggiore | Ipotesi da far verificare a un legale | Rispetto ai contenuti tipici dell'art. 13 GDPR mancano: tempi di conservazione, destinatari e responsabili, eventuali trasferimenti extra-UE, obbligatorietà del conferimento, revoca del consenso, strumento di statistica usato e un eventuale DPO. Inoltre la pagina parla di "statistiche previo consenso" ma non offre alcun modo per gestire o revocare quel consenso. Questo non è un parere legale. |
| **R04** | righe 7, 10 | L01 (SHOULD) | minore | Confermato | Gli indirizzi email sono testo semplice. Un link `mailto:` riduce l'attrito per chi vuole scrivere al titolare. |
| **R05** | riga 10 | T07, L02 (SHOULD) | minore | Suggerimento | I diritti sono elencati come una frase unica con virgole. Una lista, con una riga di spiegazione per ogni diritto e il link al sito del Garante, renderebbe la sezione più facile da scorrere. |
| **R06** | riga 2 | T02 (SHOULD) | minore | Confermato | `font: … system-ui` non ha un font di riserva. Un browser che non supporta `system-ui` userà il serif di default. **Correzione:** `system-ui, sans-serif`. |
| **R07** | riga 3 | Destinazione dei link | minore | NON VERIFICATO | `href="/"` porta a una pagina che qui non si può verificare: va controllato che arrivi davvero alla home e non a una pagina d'errore. |

## Altri controlli

| Controllo | Stato | Prova e limite |
|---|---|---|
| A02 contrasto | **PASS** | Testo `#222` su bianco ≈ 15,9:1. Link `#0b5cad` su bianco ≈ 6,7:1. |
| T06 link riconoscibili senza colore | **PASS** (sorgente) | La sottolineatura di default non è stata rimossa. Il link ha solo ≈ 2,4:1 rispetto al testo, quindi la sottolineatura va mantenuta. |
| A06, T01 semantica | **PASS** (sorgente) | Presenti `lang="it"`, `<title>`, h1 seguito da h2, i landmark header/main/nav/footer e un `nav` con etichetta. Mancano i test a runtime. |
| Bypass (WCAG 2.4.1) | **PASS** (sorgente) | Non c'è uno skip link, ma l'header contiene un solo link e ci sono landmark e titoli. |
| L03 ordine di lettura e focus | **PASS** (sorgente) | Non c'è riordino visivo. |
| A03 tastiera e focus | NON VERIFICATO | L'outline di default non è soppresso; il percorso con la tastiera non è stato provato. |
| A04 reflow a 320 px, testo al 200% | NON VERIFICATO | Rischio basso: `max-width:68ch`, nessuna altezza fissa. |
| A12 text spacing | NON VERIFICATO | Rischio basso: non ci sono contenitori ad altezza fissa. |
| A05 dimensione dei target | NON VERIFICATO | Stima dal sorgente: righe alte ≈ 27 px, quindi oltre 24 px. |
| A11 screen reader | NON VERIFICATO | Nessun ambiente assistivo disponibile. |
| A01 conformità AA | NON VERIFICATO | Il registro WCAG non è compilato, quindi nessuna dichiarazione di conformità. |
| T05 lunghezza di riga | **PASS** (sorgente) | 68ch è una misura adatta alla prosa. |
| MAY `<time datetime>` per la data di aggiornamento | Assente | Non è un difetto. |
| Motion, CRO, A08 dialog e menu, A09 immagini | NON APPLICABILE | Il sorgente non contiene animazioni, moduli, offerte, dialog o immagini. |

## Release

Per me la pagina non va pubblicata così com'è, finché R02 non è risolto. Fa eccezione il caso in cui sia volutamente un fixture di prova: me lo confermi? Anche R01 andrebbe corretto prima della pubblicazione. R03 va affidato al titolare o a un consulente legale.

**Prossimi passi:**
1. Posso passare a Refactor Mode e correggere R01, R04 e R06. Sono modifiche piccole che non toccano identità né contenuti.
2. Se mi autorizzi ad aprire Chrome headless, posso chiudere i controlli NON VERIFICATI: 320 px, zoom, text spacing, focus e un'emulazione mobile prima e dopo R01.
