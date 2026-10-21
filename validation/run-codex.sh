#!/bin/zsh
# Esegue uno scenario di validation/SCENARIOS.md in Codex CLI, in una cartella isolata.
# Prima: copiare validation/fixtures/scenari e skills/magias-ui in $B/src/.
# Uso: run-codex.sh E01
ID=$1
B=/tmp/magias-codex
C=${CODEX:-codex}
SB=$B/sandbox/$ID; OUT=$B/esiti/$ID
rm -rf $SB; mkdir -p $SB/.agents/skills $OUT
cp -R $B/src/scenari/$ID/materiale $SB/materiale
cp -R $B/src/magias-ui $SB/.agents/skills/magias-ui
PROMPT=$(sed 's|^/magias-ui|$magias-ui|' $B/src/scenari/$ID/richiesta.txt)
cd $SB
start=$(date -u +%FT%TZ)
$C exec --skip-git-repo-check --ephemeral --ignore-user-config -s workspace-write -C $SB \
  -o $OUT/risposta.md --json "$PROMPT" < /dev/null > $OUT/eventi.jsonl 2> $OUT/stderr.txt
code=$?
diff -ruN $B/src/scenari/$ID/materiale $SB/materiale > $OUT/modifiche.diff
echo "{\"id\":\"$ID\",\"start\":\"$start\",\"end\":\"$(date -u +%FT%TZ)\",\"exit\":$code}" > $OUT/run.json
