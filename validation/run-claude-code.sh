#!/usr/bin/env bash
# Esegue uno scenario di validation/SCENARIOS.md in Claude Code, in una cartella isolata.
# Uso: validation/run-claude-code.sh E01 [cartella-sandbox] [cartella-esiti]
set -u
ID=$1
ROOT=$(cd "$(dirname "$0")/.." && pwd)
SB=${2:-$(mktemp -d)}/$ID
OUT=${3:-$ROOT/validation/evidence/claude-code-local}/$ID
rm -rf "$SB"; mkdir -p "$SB/.claude/skills" "$OUT"
cp -r "$ROOT/validation/fixtures/scenari/$ID/materiale" "$SB/materiale"
cp -r "$ROOT/skills/magias-ui" "$SB/.claude/skills/magias-ui"
cd "$SB"
claude -p "$(cat "$ROOT/validation/fixtures/scenari/$ID/richiesta.txt")" \
  --setting-sources project --strict-mcp-config --no-session-persistence \
  --allowedTools "Read,Glob,Grep,Edit,Write,Skill" --permission-mode acceptEdits \
  --output-format json < /dev/null > "$OUT/risposta.json"
diff -ruN "$ROOT/validation/fixtures/scenari/$ID/materiale" "$SB/materiale" > "$OUT/modifiche.diff"
