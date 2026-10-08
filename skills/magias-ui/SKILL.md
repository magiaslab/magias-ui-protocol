---
name: magias-ui
license: MIT
description: Progetta, implementa e revisiona interfacce web con il Magias UI Protocol, preservando identità del progetto, accessibilità, contenuti e compiti. Usa per design, review e refactor UI; non per assegnare uno stile estetico universale.
---

# Magias UI

Applica il protocollo v0.2 come processo decisionale. Il progetto corrente determina voce, densità, componenti e carattere; i principi culturali sono lenti facoltative. Animazioni, transizioni, card, simmetria e composizioni dense restano ammesse quando coerenti con il compito.

## Ingresso e modalità

Identifica intento, superficie interessata, contenuti disponibili, vincoli e strumenti. Leggi il contesto reale del progetto e [i gate](references/protocol/QUALITY-GATES.md). Non inferire il contesto da altri esempi. Se manca, proponi assunzioni esplicite e avanza sul lavoro indipendente; chiedi solo le informazioni decisive.

- **Design:** definisci una soluzione o specifica. Leggi [design](references/design.md).
- **Review:** analizza il materiale esistente e produci rilievi. Leggi [review](references/review.md).
- **Refactor:** correggi il problema autorizzato preservando comportamento e identità. Leggi [refactor](references/refactor.md).

Una richiesta può attraversare più modalità: dichiara il passaggio senza imporre un redesign. Per una modifica minuta usa solo i controlli interessati e le dipendenze condivise, evitando un audit globale automatico.

## Regole ed evidenze

Il registro canonico è [rules.json](references/protocol/rules.json); la [matrice](references/protocol/RULE-MATRIX.csv) offre ambito, eccezioni e metodo. MUST pertinente è vincolante nel gate applicabile; SHOULD ammette deviazioni motivate; MAY è opzionale. Gravità del problema e forza della regola sono campi distinti. I segnali anti-pattern indicano cosa indagare, non difetti automatici.

Carica soltanto i moduli necessari:

- Scelte culturali e compositive: [principi](references/protocol/PRINCIPLES.md), [layout](references/protocol/LAYOUT.md), [tipografia](references/protocol/TYPOGRAPHY.md).
- Movimento: [motion](references/protocol/MOTION.md) e [contratto](references/motion.md).
- Offerte, moduli, acquisti o prenotazioni: [CRO](references/protocol/CRO.md).
- Interazione e barriere: [accessibilità](references/protocol/ACCESSIBILITY.md).
- Pattern sospetti: [anti-pattern](references/protocol/ANTI-PATTERNS.md).

PASS richiede una prova eseguita sul materiale e nell’ambiente dichiarati. Sorgenti, screenshot e albero accessibile hanno limiti diversi; non sostituiscono test runtime o screen reader. Assenza di strumenti produce NON VERIFICATO, non NON APPLICABILE. Un timeout del driver non prova un bug del prodotto. Non affermare miglioramenti CRO, conformità AA o attribuzioni culturali senza evidenza appropriata.

## Consegna

Comunica risultato, motivazione, prove eseguite e limiti. Usa i template solo quando utili; per un rilievo indica posizione, regola, effetto, gravità, evidenza e correzione. Una specifica pronta non è implementazione verificata; un audit completo può contenere FAIL. Mantieni la decisione di release separata. La skill non estende autorizzazioni a installazioni, pubblicazione o servizi esterni.
