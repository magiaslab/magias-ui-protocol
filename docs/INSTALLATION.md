# Installazione

Una sola cartella sorgente: `skills/magias-ui`. Copiarla interamente, conservando SKILL.md, references e assets. Non installare soltanto il file di ingresso. Prima dell’installazione verificare se esiste già una skill con lo stesso nome e preservare le personalizzazioni.

## Codex

Per un progetto, collocare la cartella in `.agents/skills/magias-ui/` dalla radice del progetto. Per uso personale, la posizione documentata è `~/.agents/skills/magias-ui/`. Avviare una sessione nell’ambiente pertinente e verificare che la skill sia disponibile; invocarla con `$magias-ui`.

[Documentazione ufficiale Codex](https://learn.chatgpt.com/docs/build-skills), consultata l’8 ottobre 2026. Percorsi e supporto sono proprietà del prodotto, non del modello GPT in astratto.

## Claude Code

Per un progetto, collocare la cartella in `.claude/skills/magias-ui/`; per uso personale, in `~/.claude/skills/magias-ui/`. Avviare una sessione e invocare `/magias-ui`. Verificare caricamento e accesso ai riferimenti prima di considerare riuscita l’installazione.

[Documentazione ufficiale Claude Code](https://code.claude.com/docs/en/skills), consultata l’8 ottobre 2026. L’installazione personale locale non implica disponibilità in tutti gli altri prodotti Claude.

## Claude.ai

Usare lo ZIP della sola skill creato dal confezionamento, con `magias-ui/` come cartella radice. Caricarlo tramite la gestione delle skill disponibile nel proprio account e abilitarlo. Non caricare lo ZIP della repository come se fosse una singola skill.

[Guida ufficiale al confezionamento](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills), consultata l’8 ottobre 2026.

## Chat GPT e API

Una chat senza runtime skills non legge una cartella sul computer: fornire SKILL.md e i soli riferimenti necessari come contesto. Questo non equivale a installazione nativa. Per API che supportano Skills seguire la [documentazione del runtime](https://developers.openai.com/api/docs/guides/tools-skills); nessun account o caricamento API è configurato dal pacchetto.

## Prova iniziale

Eseguire uno scenario anonimo in una cartella di prova, senza pubblicazione o dati reali. Verificare tre cose separatamente: discovery della skill, lettura dei riferimenti pertinenti e qualità della risposta. Registrare prodotto, versione, modalità e limiti in validation/RESULTS.md. Non estendere il risultato da un prodotto a un altro.
