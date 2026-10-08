# Uso con GPT / Codex

In Codex, usare `skills/magias-ui` come skill tramite il meccanismo supportato dal proprio ambiente. Invocazione di esempio: «Usa $magias-ui in Refactor Mode per correggere il problema descritto.»

Per una chat GPT che non dispone di accesso alle cartelle o di un runtime skills, fornire SKILL.md e i riferimenti pertinenti come materiale di contesto. Un prompt non installa una skill e non dà al modello accesso ai file mancanti. Per l’API con supporto skills seguire la documentazione del runtime; nessun endpoint, account o caricamento è configurato qui.

Le capacità disponibili determinano quali prove si possono eseguire. Non dichiarare compatibilità runtime validata dalla sola struttura dei file.

Fonti verificate l’8 ottobre 2026:
- https://developers.openai.com/plugins/concepts/skills
- https://developers.openai.com/api/docs/guides/tools-skills
