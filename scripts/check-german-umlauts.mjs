#!/usr/bin/env node
/**
 * check-german-umlauts.mjs
 * Detects transliterated German umlauts (ae, oe, ue instead of ä, ö, ü)
 * in source files under app/ and components/.
 *
 * Specifically looks for German words where ae/oe/ue appear as substitutes
 * for umlauts, not as legitimate English digraphs.
 */

import { readdir, readFile, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

const TARGET_DIRS = [
  join(root, "app"),
  join(root, "components"),
];

const EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js"]);

// Patterns that indicate transliterated umlauts in German context
// These are common German words where ae/oe/ue should be ä/ö/ü
const PATTERNS = [
  // ae substitutions
  /\bAenderung(en)?\b/,
  /\baenderung(en)?\b/,
  /\bUebersicht\b/,
  /\buebersicht\b/,
  /\bOeffnungszeiten\b/,
  /\boeffnungszeiten\b/,
  /\bfrueher\b/,
  /\bFrueher\b/,
  /\bfuer\b(?!\s*\()/,  // "fuer" but not in JSX comments
  /\bFuer\b/,
  /\bueberpruefen\b/,
  /\bUeberpruefen\b/,
  /\bmuessen\b/,
  /\bMuessen\b/,
  /\bkoennen\b/,
  /\bKoennen\b/,
  /\bmoechten\b/,
  /\bMoechten\b/,
  /\bschoener?\b/,
  /\bSchoener?\b/,
  /\bgroesser?\b/,
  /\bGroesser?\b/,
  /\bzurueck\b/,
  /\bZurueck\b/,
  /\bueber\b/,
  /\bUeber\b/,
  /\buebrig\b/,
  /\bUebrig\b/,
  // Transliterated ß -> ss is acceptable; ae/oe/ue in contexts below are flagged
  /\bStrasse\b(?![\w])/,  // Strasse instead of Straße (but allow "Strassennamen")
];

let errors = 0;
let filesChecked = 0;

async function getFiles(dir) {
  const results = [];
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    let stats;
    try {
      stats = await stat(fullPath);
    } catch {
      continue;
    }

    if (stats.isDirectory()) {
      const nested = await getFiles(fullPath);
      results.push(...nested);
    } else if (EXTENSIONS.has(extname(entry))) {
      results.push(fullPath);
    }
  }

  return results;
}

for (const dir of TARGET_DIRS) {
  const files = await getFiles(dir);

  for (const file of files) {
    let content;
    try {
      content = await readFile(file, "utf-8");
    } catch {
      continue;
    }

    filesChecked++;
    const lines = content.split("\n");
    let fileHasErrors = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip comments and imports
      if (line.trim().startsWith("//") || line.trim().startsWith("*")) continue;

      for (const pattern of PATTERNS) {
        if (pattern.test(line)) {
          const relativePath = file.replace(root + "\\", "").replace(root + "/", "");
          console.error(`✗ Possible umlaut transliteration at ${relativePath}:${i + 1}`);
          console.error(`  ${line.trim()}`);
          errors++;
          fileHasErrors = true;
          break;
        }
      }
    }

    if (!fileHasErrors) {
      // Silent pass — only report issues
    }
  }
}

if (errors > 0) {
  console.error(
    `\n${errors} umlaut transliteration(s) found in ${filesChecked} files checked.`
  );
  console.error("Replace ae/oe/ue with proper German characters: ä/ö/ü/Ä/Ö/Ü");
  process.exit(1);
} else {
  console.log(`✓ No umlaut transliterations found in ${filesChecked} files.`);
}
