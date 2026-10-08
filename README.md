# Magias UI Protocol

**Italiano** · [English](README.en.md)

Un protocollo e una skill per progettare, revisionare e correggere interfacce web con agenti AI, preservando identità, accessibilità e compiti delle persone.

**Beta 0.1.0-beta.1 · nucleo regole v0.2 · licenza MIT.** La skill è indipendente dal framework e usa le capacità disponibili nell’ambiente. Una prova documentale in Codex ha dato risultati coerenti; le altre prove restano dichiarate nello [stato di validazione](validation/RESULTS.md).

## La filosofia di partenza: iki

Magias UI Protocol nasce da una lettura contemporanea di **iki**: un’eleganza capace di attrarre con misura, mantenere carattere e lasciare libertà alla persona. È il punto di partenza del nostro modo di progettare, non una formula da applicare a ogni interfaccia.

Dalla riflessione di Kuki Shūzō riprendiamo tre tensioni come ispirazione, traducendole in scelte progettuali nostre:

- **Bitai — attrazione:** suscitare interesse attraverso contenuti, immagini e interazioni pertinenti.
- **Ikiji — carattere:** mantenere un’identità riconoscibile e una voce autonoma.
- **Akirame — distacco:** rinunciare a ciò che non serve e rispettare la possibilità della persona di scegliere, interrompere o proseguire.

Nel protocollo affianchiamo a iki tre lenti complementari: **ma** per il ritmo fra spazio, tempo e contenuto; **kire** per separazioni e passaggi che chiariscono la struttura; **yūgen** per una profondità suggerita che invoglia a esplorare. Sono nostre interpretazioni operative: le informazioni decisive restano esplicite e accessibili.

La misura può emergere da una composizione densa, da una fotografia o da una transizione espressiva. Non significa imporre minimalismo o immobilità: ogni gesto deve essere coerente con contenuto, identità e compito. La filosofia orienta le scelte; UX, accessibilità e prove ne verificano gli effetti.

[Principi e interpretazioni](skills/magias-ui/references/protocol/PRINCIPLES.md) · [Fonti e limiti di attribuzione](skills/magias-ui/references/protocol/SOURCES.md). Il riferimento culturale è introdotto tramite fonti secondarie; non presentiamo queste traduzioni UI come la teoria originale di Kuki.

<details>
<summary>English — the starting philosophy</summary>

## The starting philosophy: iki

Magias UI Protocol starts from a contemporary reading of **iki**: an elegance that attracts with restraint, retains character and leaves people free to choose. It is the starting point of our approach to design, rather than a formula for every interface.

We draw inspiration from three tensions in Kuki Shūzō’s account, translating them into our own design choices:

- **Bitai — attraction:** invite interest through relevant content, imagery and interaction.
- **Ikiji — character:** retain a recognisable identity and an independent voice.
- **Akirame — detachment:** let go of what does not serve the task and respect people’s ability to choose, stop or continue.

The protocol brings three complementary lenses alongside iki: **ma** for rhythm between space, time and content; **kire** for separations and transitions that clarify structure; **yūgen** for suggested depth that invites exploration. These are our operational interpretations: information needed for decisions remains explicit and accessible.

Restraint can emerge from a dense composition, a photograph or an expressive transition. It does not require minimalism or stillness: each gesture should fit the content, identity and task. The philosophy guides choices; UX, accessibility and evidence test their effects.

[Principles and interpretations](skills/magias-ui/references/protocol/PRINCIPLES.md) · [Sources and attribution limits](skills/magias-ui/references/protocol/SOURCES.md). Our cultural reference is introduced through secondary sources; these UI interpretations are not presented as Kuki’s original theory.

</details>

## Tre modi di lavoro

| Modalità | Scopo | Risultato |
|---|---|---|
| **Design** | Definire gerarchia, layout, stati, responsive e movimento | Specifica pronta, con piano di verifica |
| **Review** | Analizzare un’interfaccia e localizzare problemi | Audit nello scope, con evidenze e priorità |
| **Refactor** | Correggere un problema preservando comportamento e identità | Modifica verificata nello scope |

Un audit completo può contenere FAIL. Una specifica pronta non dimostra il funzionamento dell’implementazione. La decisione di release resta distinta: [quality gate](skills/magias-ui/references/protocol/QUALITY-GATES.md).

## Cosa contiene

- **77 regole** con ID, forza MUST/SHOULD/MAY, ambito, eccezioni, metodo di verifica e livello di automazione.
- Moduli per principi, layout, tipografia, movimento, CRO e accessibilità.
- Contratto del movimento con pausa manuale, sospensione durante un compito, preferenza ridotta e condizioni di ripresa.
- Template per contesto, decisioni, audit e registro WCAG 2.2 A/AA.
- Scenari anonimi e prove osservate, separati dai risultati attesi.

Il [registro canonico](skills/magias-ui/references/protocol/rules.json) governa la [matrice delle regole](skills/magias-ui/references/protocol/RULE-MATRIX.csv). I segnali anti-pattern indicano cosa indagare: la presenza di una card, un carousel o un effetto non produce automaticamente un difetto.

## Installa la skill

Copia **l’intera cartella** `skills/magias-ui`, conservando `SKILL.md`, `references`, `assets` e `LICENSE`.

| Ambiente | Destinazione nel progetto | Invocazione |
|---|---|---|
| Codex | `.agents/skills/magias-ui/` | `$magias-ui` |
| Claude Code | `.claude/skills/magias-ui/` | `/magias-ui` |
| Claude.ai | Carica lo ZIP della sola skill nella gestione Skills | Richiedi l’applicazione del protocollo |

Leggi la [guida di installazione](docs/INSTALLATION.md) per uso personale, confezionamento, API e limiti dei diversi ambienti. Prima di copiare, verifica che non esista già una skill omonima con personalizzazioni.

Esempio per Codex:

```text
Usa $magias-ui in Review Mode sul calendario di prenotazione.
Verifica date, focus, stati e movimento. Dichiara quali prove hai
eseguito e quali restano aperte; preserva l’identità esistente.
```

Altri esempi per Design e Refactor: [guida d’uso](docs/USAGE.md).

## Verifica e confeziona

Con Python 3.10 o successivo, senza dipendenze aggiuntive:

```sh
python3 scripts/validate.py
python3 scripts/build_release.py
```

Il confezionamento produce in `dist/` lo ZIP della skill, lo ZIP del progetto, il manifest dei contenuti e `SHA256SUMS`. Gli archivi includono la licenza e sono verificati byte per byte. [Procedura di release](docs/RELEASE.md).

## Stato e limiti

I controlli strutturali sono superati. Una prova documentale anonima in **Codex CLI 0.160.0** ha prodotto decisioni coerenti con il protocollo. La prova in **Claude Code 2.1.226** è stata bloccata dall’autenticazione; Claude.ai e API non sono stati provati. Non estendere il risultato di un campione ad altri modi di lavoro o runtime.

Il protocollo adotta WCAG 2.2 AA come obiettivo tecnico, ma una checklist o uno scanner non certificano conformità. Screenshot e sorgenti non sostituiscono tutti i test d’interazione. Il pacchetto non promette miglioramenti di conversione senza misurazioni.

[Risultati e limiti delle prove](validation/RESULTS.md) · [Scenari da eseguire](validation/SCENARIOS.md).

## Contribuisci

Proponi correzioni con contesto, evidenza, effetto e criterio di verifica. Conserva esempi anonimi e registra le deviazioni motivate dalle raccomandazioni. [Guida contributi](CONTRIBUTING.md) · [Changelog](CHANGELOG.md).

## Licenza

[MIT](LICENSE). La licenza è inclusa anche nella cartella skill; i testi delle fonti esterne mantengono i propri termini. [Attribuzioni e provenienza](docs/LICENSING.md).
