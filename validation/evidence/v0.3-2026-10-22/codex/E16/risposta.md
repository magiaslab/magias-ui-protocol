La review rileva quattro problemi:

- **Alta — Contesto perso:** barra mobile e scheda camera non trasmettono date e ospiti. La scheda forza l’italiano; la barra omette la lingua.
- **Alta — Attribuzione incompleta:** soltanto la home invia `src=sito`.
- **Media — Nuova scheda senza avviso:** entrambi i pulsanti usano `target="_blank"` senza segnalarlo.
- **Media — Camera non verificata:** il parametro `room` non è documentato dal fornitore; la promessa “Prenota questa camera” resta da confermare.

La home prepara tutti i parametri documentati, ma questo non prova il comportamento all’arrivo.

`Audit completo con evidenze e correzioni` (`REVIEW-PRENOTAZIONE.md`).

Verifica statica completata; prezzo, accessibilità e attribuzione fino al pagamento restano **NON VERIFICATI**. Nessun componente modificato. Raccomando di correggere i tre problemi accertati e chiarire `room` prima della release.
