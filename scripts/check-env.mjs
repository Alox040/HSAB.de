#!/usr/bin/env node
/**
 * check-env.mjs
 *
 * Prüft die ENV-Konfiguration auf drei Ebenen:
 *   1. .env.example vollständig (Pflicht-Datei)
 *   2. Alle process.env.* Verwendungen im Code sind in .env.example dokumentiert
 *   3. Alle dokumentierten Variablen sind im aktuellen Prozess gesetzt (Warnung)
 *
 * Fehler   → Exit 1 (blockiert CI)
 * Warnungen → Exit 0 (nur Hinweis, z. B. fehlende .env.local)
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");

const IS_CI = !!process.env.CI;

let errors = 0;
let warnings = 0;

function fail(msg) {
  console.error(`  ✗ ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`  ⚠ ${msg}`);
  warnings++;
}

function pass(msg) {
  console.log(`  ✓ ${msg}`);
}

// ─── 1. .env.example parsen ───────────────────────────────────────────────────

console.log("\n.env.example:");

const envExamplePath = join(ROOT, ".env.example");
const documentedVars = new Map(); // varName → default-value

if (!existsSync(envExamplePath)) {
  fail(".env.example nicht gefunden — Pflichtdatei");
} else {
  const lines = readFileSync(envExamplePath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (key) documentedVars.set(key, value);
  }
  pass(`.env.example gefunden — ${documentedVars.size} Variable(n) dokumentiert`);
}

// ─── 2. Quellcode auf process.env.* scannen ───────────────────────────────────

const SOURCE_DIRS = ["app", "lib", "components"];
const SOURCE_EXTS = new Set([".ts", ".tsx", ".mjs", ".js"]);
const ENV_USAGE_RE = /process\.env\.([A-Z_][A-Z0-9_]*)/g;
// Ignore Next.js internals and Node built-ins
const IGNORED_VARS = new Set(["NODE_ENV", "NEXT_PUBLIC_", "CI", "PATH", "HOME"]);

/** Rekursiv alle Quellcode-Dateien nach process.env.VARNAME durchsuchen */
function scanDir(dirPath) {
  const usages = new Map(); // varName → Set<relPath>
  let entries;
  try {
    entries = readdirSync(dirPath);
  } catch {
    return usages;
  }
  for (const entry of entries) {
    if (entry.startsWith(".") || entry === "node_modules") continue;
    const full = join(dirPath, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      for (const [k, v] of scanDir(full)) {
        if (!usages.has(k)) usages.set(k, new Set());
        for (const f of v) usages.get(k).add(f);
      }
    } else if (SOURCE_EXTS.has(extname(entry))) {
      const content = readFileSync(full, "utf-8");
      const rel = full.replace(ROOT + "/", "").replace(ROOT + "\\", "");
      let m;
      ENV_USAGE_RE.lastIndex = 0;
      while ((m = ENV_USAGE_RE.exec(content)) !== null) {
        const varName = m[1];
        // Überspringe bekannte Next.js / Node-Interna
        if ([...IGNORED_VARS].some((ig) => varName.startsWith(ig))) continue;
        if (!usages.has(varName)) usages.set(varName, new Set());
        usages.get(varName).add(rel);
      }
    }
  }
  return usages;
}

const usedVars = new Map();
for (const dir of SOURCE_DIRS) {
  for (const [k, v] of scanDir(join(ROOT, dir))) {
    if (!usedVars.has(k)) usedVars.set(k, new Set());
    for (const f of v) usedVars.get(k).add(f);
  }
}

console.log(`\nVerwendungen im Code (${usedVars.size}):`);

for (const [varName, files] of [...usedVars].sort()) {
  const relFiles = [...files].join(", ");
  if (documentedVars.has(varName)) {
    pass(`${varName.padEnd(30)} dokumentiert  (${relFiles})`);
  } else {
    fail(`${varName.padEnd(30)} NICHT in .env.example  →  ${relFiles}`);
  }
}

if (usedVars.size === 0) {
  pass("Keine process.env.*-Verwendungen gefunden");
}

// ─── 3. Gesetzte Variablen prüfen ─────────────────────────────────────────────

console.log(`\nLaufzeit-Werte (${documentedVars.size}):`);

const missingVars = [];
for (const varName of documentedVars.keys()) {
  const isSet = !!process.env[varName];
  if (isSet) {
    pass(`${varName.padEnd(30)} gesetzt`);
  } else {
    missingVars.push(varName);
    if (IS_CI) {
      // In CI sind alle Vars Pflicht
      fail(`${varName.padEnd(30)} nicht gesetzt (CI)`);
    } else {
      warn(`${varName.padEnd(30)} nicht gesetzt — .env.local prüfen`);
    }
  }
}

// Hinweis auf .env.local falls lokal und Variablen fehlen
if (!IS_CI && missingVars.length > 0) {
  const envLocalPath = join(ROOT, ".env.local");
  if (!existsSync(envLocalPath)) {
    console.log("\n  Hinweis: .env.local nicht gefunden.");
    console.log("  → cp .env.example .env.local  und Werte eintragen");
  }
}

// ─── Ergebnis ─────────────────────────────────────────────────────────────────

console.log(`\n${"─".repeat(50)}`);

if (errors > 0) {
  console.error(`ENV-Check fehlgeschlagen: ${errors} Fehler, ${warnings} Warnung(en)`);
  process.exit(1);
} else if (warnings > 0) {
  console.warn(`ENV-Check bestanden mit ${warnings} Warnung(en) (lokal: .env.local setzen)`);
} else {
  console.log("Alle ENV-Checks bestanden.");
}
