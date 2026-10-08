#!/usr/bin/env python3
"""Build deterministic local archives; never push, upload or publish."""
from pathlib import Path
import hashlib, json, zipfile
from validate import ROOT, SKILL, package_files, validate

def archive(path, items):
    with zipfile.ZipFile(path, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as bundle:
        for source, name in items:
            info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            bundle.writestr(info, source.read_bytes())
    with zipfile.ZipFile(path) as bundle:
        for source, name in items:
            if bundle.read(name) != source.read_bytes():
                raise ValueError("Archive content mismatch: " + name)

def build():
    validate()
    version = (ROOT / "VERSION").read_text().strip()
    dist = ROOT / "dist"
    dist.mkdir(exist_ok=True)
    files = list(package_files())
    skill_items = [(p, "magias-ui/" + str(p.relative_to(SKILL))) for p in files if p.is_relative_to(SKILL)]
    repo_items = [(p, "magias-ui-protocol/" + str(p.relative_to(ROOT))) for p in files]
    skill_zip = dist / ("magias-ui-" + version + ".zip")
    repo_zip = dist / ("magias-ui-protocol-" + version + ".zip")
    archive(skill_zip, skill_items)
    archive(repo_zip, repo_items)
    manifest = dist / ("manifest-" + version + ".json")
    manifest.write_text(json.dumps({str(p.relative_to(ROOT)): hashlib.sha256(p.read_bytes()).hexdigest() for p in files}, indent=2, sort_keys=True) + "\n")
    artifacts = [skill_zip, repo_zip, manifest]
    (dist / "SHA256SUMS").write_text("".join(hashlib.sha256(p.read_bytes()).hexdigest() + "  " + p.name + "\n" for p in artifacts))
    print("Built and byte-verified " + str(len(files)) + " files; two archives, manifest and checksums")

if __name__ == "__main__":
    build()
