#!/usr/bin/env python3
"""Static integrity checks only; no model or product-quality claims."""
from pathlib import Path
import csv, json, re
ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills/magias-ui"

def require(condition, message):
    if not condition:
        raise ValueError(message)

def package_files():
    for path in sorted(ROOT.rglob("*")):
        relative = path.relative_to(ROOT)
        if any(part in {".git", "dist", "__pycache__"} for part in relative.parts):
            continue
        require(not path.is_symlink(), "Package contains a symlink: " + str(relative))
        if path.is_file() and path.name != ".DS_Store":
            yield path

def validate():
    entry = (SKILL / "SKILL.md").read_text()
    front = re.match(r"^---\n(.*?)\n---\n", entry, re.S)
    require(front is not None, "Missing frontmatter")
    metadata = {}
    for line in front[1].splitlines():
        require(": " in line, "Expected simple scalar frontmatter")
        key, value = line.split(": ", 1)
        require(key not in metadata and ": " not in value, "Invalid scalar frontmatter")
        metadata[key] = value
    require(set(metadata) == {"name", "description", "license"}, "Unexpected metadata")
    require(metadata["name"] == SKILL.name, "Skill folder and name differ")
    require(re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", metadata["name"]), "Invalid skill name")
    require(len(metadata["name"]) <= 64, "Skill name too long")
    require(0 < len(metadata["description"]) <= 1024, "Invalid description length")
    require(not any(x in metadata["description"] for x in "<>"), "Invalid description")
    require(metadata["license"] == "MIT", "License metadata mismatch")
    require((ROOT / "LICENSE").read_bytes() == (SKILL / "LICENSE").read_bytes(), "Skill license mismatch")
    require(re.fullmatch(r"\d+\.\d+\.\d+(?:-[a-z0-9.]+)?", (ROOT / "VERSION").read_text().strip()), "Invalid package version")
    proto = SKILL / "references/protocol"
    data = json.loads((proto / "rules.json").read_text())
    rules = data["rules"]
    require(len(rules) == len({r["id"] for r in rules}), "Duplicate rule IDs")
    require(len(rules) == 77 and data["protocol_version"] == "0.2", "Unexpected protocol version/coverage")
    with (proto / "RULE-MATRIX.csv").open(newline="") as handle:
        rows = list(csv.DictReader(handle))
    require(len(rows) == len(rules) and {r["id"] for r in rows} == {r["id"] for r in rules}, "Matrix coverage mismatch")
    by_id = {r["id"]: r for r in rules}
    for row in rows:
        for key, value in row.items():
            require(value == str(by_id[row["id"]][key]), "Matrix differs: " + row["id"] + "/" + key)
    for rule in rules:
        require(rule["strength"] in {"MUST", "SHOULD", "MAY"}, "Invalid rule strength")
        for key in ["assertion", "scope", "exceptions", "method", "automation"]:
            require(bool(rule[key]), "Missing rule field: " + rule["id"] + "/" + key)
        require((proto / rule["source"]).is_file(), "Missing module: " + rule["source"])
    for path in package_files():
        require(not path.name.startswith(".env"), "Environment file in package")
        if path.suffix != ".md":
            continue
        for href in re.findall(r"\]\(([^)]+)\)", path.read_text()):
            if href.startswith(("http:", "https:", "#")):
                continue
            target = (path.parent / href.split("#")[0]).resolve()
            require(target.is_relative_to(ROOT), "Link escapes package: " + href)
            require(target.exists(), "Broken link in " + str(path.relative_to(ROOT)) + ": " + href)
    print("PASS: metadata, license, 77 rules, matrix, modules and local links")

if __name__ == "__main__":
    validate()
