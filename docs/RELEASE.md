# Preparazione e pubblicazione

Versione pacchetto/skill: VERSION. Versione del nucleo normativo: protocol_version in rules.json. Sono versioni distinte. Cambiare il nucleo richiede migrazione e aggiornamento dei moduli, della matrice e degli scenari.

## Preparazione locale

Eseguire `python3 scripts/validate.py` e `python3 scripts/build_release.py`. Il secondo comando confeziona:

- ZIP autocontenuto della skill;
- ZIP della repository senza .git, dist, cache o file ambiente;
- manifest dei contenuti e SHA256SUMS degli artefatti.

Verificare le prove comportamentali negli ambienti che si vuole dichiarare supportati. NON VERIFICATO è un esito legittimo nella beta; non trasformarlo in compatibilità validata.

## Prima release pubblica

Richiede licenza confermata e inserita, istruzioni coerenti, integrità degli archivi, esempi anonimi, provenienza delle fonti e risultati delle prove realmente eseguite. Gli eventuali ambienti non testati vanno indicati. Il gate non richiede che ogni sito costruito con il protocollo sia conforme: la qualità del pacchetto e dei prodotti sono verifiche separate.

Creare il repository GitHub sull’account/organizzazione scelto dal titolare. Con autorizzazione esplicita alla pubblicazione, usare un tag corrispondente a VERSION e una prerelease per la beta, allegando gli artefatti prodotti e una descrizione dei limiti.

Nessuno script o workflow qui crea repository remoti, cambia visibilità, effettua push o pubblica release. Queste azioni restano separate dalla preparazione.
