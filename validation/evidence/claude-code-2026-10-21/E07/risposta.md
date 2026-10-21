Non ho modificato niente: la copia locale non corrisponde a ciò che è online, quindi correggerla non sistemerebbe il sito pubblicato.

**La copia non è la sorgente del sito online.** Confrontando `materiale/copia-locale/index.html` con `materiale/online-2026-10-21.html`, cambia tutta la pagina, non solo il pulsante:

| | Copia locale | Online (21/10/2026) |
|---|---|---|
| Titolo / H1 | "Camere e cucina di campagna" | "Vacanze tra gli olivi" |
| Testo | Sei camere | Otto camere, ristorante e piscina |
| Classe della hero | `.hero` | `.hero-v2` (grid) |
| Pulsante principale | `.cta`, `#e8a33c`, "Prenota" → `/prenota` | `.btn-primary`, `#c9782a`, "Verifica disponibilità" → `/booking` |
| Secondo link | — | "Prenota un tavolo" → `/ristorante` |

Se correggessi la copia e poi la pubblicassi, il sito tornerebbe alla versione vecchia: sei camere, niente piscina e ristorante, link `/prenota` invece di `/booking`. Correggere il pulsante della copia non sistema quello online, che ha un altro colore e un'altra classe.

**Il problema di contrasto c'è in tutte e due le versioni.** Ho calcolato i valori a mano con la formula WCAG, perché il comando Python per verificarli non è stato approvato. Il testo del pulsante è bianco a dimensione normale, quindi la soglia AA è 4.5:1.
- Online: bianco su `#c9782a` ≈ **3.4:1**, non passa.
- Copia: bianco su `#e8a33c` ≈ **2.2:1**, non passa.

**Correzione pronta per la sorgente online** (va applicata sul file di `.btn-primary`):

```css
.btn-primary{background:#a8601f;color:#fff;padding:.8rem 1.4rem}
```

Questo colore mantiene la stessa tonalità ambra, più scura, e arriva a circa **4.8:1**. Se preferite non cambiare il colore del marchio, l'alternativa è tenere `#c9782a` e mettere il testo scuro (`color:#1a1a1a`), che arriva a circa 5.1:1.

**Cosa non è verificato:**
- I rapporti sono calcolati a mano, non con uno strumento.
- Non ho controllato hover, focus, font effettivo e resa nel browser.
- Non posso pubblicare io la modifica.

**Per andare avanti ho bisogno di una di queste due cose:**
1. Il sorgente da cui viene davvero la versione online (repository, CMS o tema), così applico lì la correzione e la verifico.
2. La tua conferma esplicita che la copia locale va riallineata alla versione online. In quel caso la aggiorno con l'HTML di oggi più la correzione.
