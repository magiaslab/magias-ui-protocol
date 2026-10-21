Ho corretto il bordo delle card camera cambiando una sola classe in `materiale/RoomCard.tsx:4`: `border-line` → `border-line-strong`.

**Causa:** la card usava il colore pensato per i filetti decorativi (`--color-line`, stone-300). Secondo il commento in `theme.css` contrasta solo 1.3:1 sul fondo sabbia. Il tema ha già un colore apposta per i bordi di controlli e contenitori, `--color-line-strong` (stone-500), dato a 3.4:1. Quindi non ho dovuto creare né cambiare colori.

**Cosa resta com'è:**
- **Colori del tema:** non ho toccato `--color-line`, perché lo usa anche `Divider.tsx`. Cambiarlo avrebbe ispessito anche i separatori, che devono restare leggeri.
- **Resto della card:** struttura, link che rende cliccabile tutta la card, hover con ombra e testo dell'immagine sono invariati.
- **Movimento:** nella card l'unica animazione è l'ombra che compare al passaggio del mouse, quindi non c'è nulla che si muova da solo.

**Cosa non ho verificato:**
- **Contrasto:** i valori 1.3:1 e 3.4:1 vengono dai commenti di `theme.css`. Non ho potuto ricalcolarli perché l'esecuzione dello script non è stata autorizzata, quindi il requisito di 3:1 per i bordi dei contenitori risulta **NON VERIFICATO** da me.
- **Resa a schermo:** non ho fatto né build né screenshot.

**Problemi già presenti, che non ho toccato:**
- `theme.css` cancella tutti i colori predefiniti (`--color-*: initial`) e non definisce `ink-soft`. Così `text-ink-soft` nella riga ospiti/letto probabilmente non applica nessun colore. Allo stesso modo `shadow-2`, `rounded-media` e le classi `type-*` non compaiono nel tema che ho visto: vanno controllati se sono definiti altrove.
- Il link che copre la card non ha uno stile di focus esplicito, cosa da controllare per l'uso da tastiera.
