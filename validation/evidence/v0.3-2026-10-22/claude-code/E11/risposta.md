Ho corretto il bordo delle card camera.

**Cosa ho cambiato:** in `materiale/RoomCard.tsx:5` il bordo usa ora `border-line-strong` (stone-500) al posto di `border-line` (stone-300). Nessun'altra modifica.

**Perché così:** `theme.css` distingue già due token. `line` è per i filetti decorativi (1.3:1 sul sabbia), `line-strong` per i bordi di controlli e contenitori (3.4:1). La card è un contenitore cliccabile: tutta l'area è un link grazie a `after:absolute after:inset-0`. Quindi il token giusto è quello forte. Il valore 3.4:1 supera la soglia di 3:1 per i contorni non testuali. Non ho modificato `--color-line` perché è usato anche da `Divider.tsx`, che resta un filetto decorativo. Cambiarlo avrebbe reso più pesanti tutti i divisori del sito.

**Cosa resta uguale:** struttura, link, hover con ombra, raggio, padding e contenuti.

**Prove e limiti:**
- **Contrasto:** i valori 1.3:1 e 3.4:1 vengono dai commenti di `theme.css`. Non li ho ricalcolati: lo script di calcolo richiedeva un'approvazione che non ho ottenuto. Lo stato è NON VERIFICATO.
- **Resa a schermo:** non ho fatto build né screenshot. Non ho verificato il risultato nel browser né su altri sfondi oltre il sabbia. Se le card stanno su uno sfondo diverso da `surface`, il rapporto va ricontrollato lì.

**Problemi esistenti che non ho toccato:**
- `--color-*: initial` cancella tutti i colori predefiniti, ma `text-ink-soft` non è definito nel `@theme` che ho visto. È probabile che il testo "ospiti · letto" erediti il colore senza la tinta prevista. Se il token sta in un altro file, va ignorato.
- Nel `@theme` visibile non trovo nemmeno `shadow-2`, `rounded-media` e le classi `type-*`. Anche questi potrebbero essere definiti altrove: va verificato.
- Il link non ha uno stile di focus visibile dichiarato e coprendo tutta la card l'indicatore va controllato da tastiera. È fuori dal perimetro di questa modifica, ma vale la pena verificarlo.
