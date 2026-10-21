Ho corretto il bordo delle card camera. In `materiale/RoomCard.tsx:4` ho sostituito `border-line` con `border-line-strong`, che è il token che `theme.css` riserva già ai "bordi di controlli e contenitori".

**Perché questa correzione**
- La card usava `--color-line` (stone-300), che `theme.css` definisce come colore per i "filetti decorativi". Su sabbia ha un contrasto di circa 1,35:1, ed è per questo che il bordo si vedeva appena.
- `--color-line-strong` (stone-500) esiste già nel sistema, quindi non ho introdotto colori nuovi.
- Ho cambiato solo la card, senza toccare il token condiviso. `Divider.tsx` continua a usare `border-line`, che lì è corretto perché è un filetto decorativo. Così il cambiamento non si estende a parti non coinvolte.
- Restano com'erano dati, struttura, link esteso a tutta la card, ombra all'hover e transizione.

**Verifica eseguita**
- Ho calcolato a mano, sui valori esadecimali dei due colori, il contrasto tra stone-500 e sand-100: viene circa **3,1:1**. Lo script di verifica non è partito perché non era autorizzato. Il valore supera la soglia di 3:1 prevista da WCAG 1.4.11 per gli elementi non testuali, ma con poco margine.
- Il commento in `theme.css:6` indica 3,4:1, ma il mio calcolo dà circa 3,1. Conviene ricontrollarlo con uno strumento oppure correggere il commento.

**Cosa non ho verificato**
- Non ho fatto build, render, screenshot né un confronto visivo prima/dopo. Il risultato a schermo resta NON VERIFICATO.

**Problemi trovati fuori dal perimetro (non toccati)**
- `theme.css` azzera tutti i colori con `--color-*: initial`, ma non definisce `--color-ink-soft`. Quindi `text-ink-soft` (`RoomCard.tsx:7`) probabilmente non applica nessun colore. Questo problema c'era già prima della mia modifica.
- Anche `shadow-2`, `rounded-media` e `type-*` non sono definiti nel file del tema che ho visto. Potrebbero essere in un altro file che non ho.
- Il link esteso a tutta la card non ha uno stile di focus visibile. Non ho potuto verificarlo da tastiera.
