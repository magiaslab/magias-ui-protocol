# Magias UI Protocol

[Italiano](README.md) · **English**

A protocol and skill for AI-assisted web interface design, review and refactoring, preserving identity, accessibility and people’s tasks.

**Beta 0.1.0-beta.1 · rule core v0.2 · MIT license.** The skill is framework-independent and works with the capabilities available in its environment. One documentary trial in Codex produced consistent decisions; remaining checks are declared in the [validation record](validation/RESULTS.md).

## The starting philosophy: iki

Magias UI Protocol starts from a contemporary reading of **iki**: an elegance that attracts with restraint, retains character and leaves people free to choose. It is the starting point of our approach to design, rather than a formula for every interface.

We draw inspiration from three tensions in Kuki Shūzō’s account, translating them into our own design choices:

- **Bitai — attraction:** invite interest through relevant content, imagery and interaction.
- **Ikiji — character:** retain a recognisable identity and an independent voice.
- **Akirame — detachment:** let go of what does not serve the task and respect people’s ability to choose, stop or continue.

The protocol brings three complementary lenses alongside iki: **ma** for rhythm between space, time and content; **kire** for separations and transitions that clarify structure; **yūgen** for suggested depth that invites exploration. These are our operational interpretations: information needed for decisions remains explicit and accessible.

Restraint can emerge from a dense composition, a photograph or an expressive transition. It does not require minimalism or stillness: each gesture should fit the content, identity and task. The philosophy guides choices; UX, accessibility and evidence test their effects.

[Principles and interpretations](skills/magias-ui/references/protocol/PRINCIPLES.md) · [Sources and attribution limits](skills/magias-ui/references/protocol/SOURCES.md). Our cultural reference is introduced through secondary sources; these UI interpretations are not presented as Kuki’s original theory.

## Three working modes

| Mode | Purpose | Output |
|---|---|---|
| **Design** | Define hierarchy, layout, states, responsive behaviour and motion | A ready specification with a verification plan |
| **Review** | Inspect an interface and locate problems | A scoped audit with evidence and priorities |
| **Refactor** | Fix an authorised problem while preserving behaviour and identity | A change verified within its scope |

A complete audit may contain FAIL results. A ready specification does not prove runtime behaviour. Release decisions are separate: [quality gates](skills/magias-ui/references/protocol/QUALITY-GATES.md).

## What is included

- 77 rules with IDs, MUST/SHOULD/MAY strength, scope, exceptions, verification methods and automation levels.
- Principles, layout, typography, motion, CRO and accessibility modules.
- A motion contract covering manual pause, task suspension, reduced-motion preferences and resumption.
- Context, decision, audit and WCAG 2.2 A/AA register templates.
- Anonymous scenarios and recorded observations, separate from expected results.

The [canonical register](skills/magias-ui/references/protocol/rules.json) governs the [rule matrix](skills/magias-ui/references/protocol/RULE-MATRIX.csv). Anti-pattern signals prompt investigation; a card, carousel or visual effect is not automatically a defect.

## Install the skill

Copy the entire `skills/magias-ui` folder, including SKILL.md, references, assets and LICENSE. Check for an existing customised skill before copying.

| Environment | Project location | Explicit invocation |
|---|---|---|
| Codex | `.agents/skills/magias-ui/` | `$magias-ui` |
| Claude Code | `.claude/skills/magias-ui/` | `/magias-ui` |
| Claude.ai | Upload the standalone skill ZIP in Skills management | Ask to apply the protocol |

See the [installation guide](docs/INSTALLATION.md) for personal installation, packaging, APIs and environment differences. Operational references currently use Italian.

Example for Codex:

```text
Use $magias-ui in Review Mode on the booking calendar.
Check dates, focus, states and motion. Declare which tests you ran
and which remain open; preserve the existing identity.
```

More examples: [usage guide](docs/USAGE.md).

## Validate and package

With Python 3.10 or later, without additional dependencies:

```sh
python3 scripts/validate.py
python3 scripts/build_release.py
```

Packaging creates standalone skill and project ZIPs, a content manifest and SHA256SUMS in `dist/`. Archives include the license and are checked byte for byte. [Release procedure](docs/RELEASE.md).

## Status and limits

Structural checks pass. One anonymous documentary trial in Codex CLI 0.160.0 produced decisions consistent with the protocol. The Claude Code 2.1.226 trial was blocked by authentication; Claude.ai and APIs have not been tested. Do not generalise a single trial to other modes or runtimes.

WCAG 2.2 AA is the technical target, but a checklist or scanner does not certify compliance. Screenshots and source code do not replace all interaction tests. No conversion improvement is claimed without measurement.

[Observed results and limits](validation/RESULTS.md) · [Evaluation scenarios](validation/SCENARIOS.md).

## Contribute and license

Propose changes with context, evidence, effects and verification criteria. Preserve anonymous fixtures and document justified deviations. [Contributing](CONTRIBUTING.md) · [Changelog](CHANGELOG.md).

[MIT license](LICENSE), also included in the skill folder. External source texts retain their own terms. [Attribution and provenance](docs/LICENSING.md).
