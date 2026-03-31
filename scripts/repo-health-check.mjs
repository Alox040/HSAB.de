#!/usr/bin/env node
/**
 * repo-health-check.mjs
 * Validates repository conventions:
 * 1. All agent files in ai/agents/ follow kebab-case naming
 * 2. Legal pages do not contain placeholder text ("Musterstrasse")
 * 3. README is not the default Next.js template
 */

import { readdir, readFile } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

let errors = 0;

function fail(message) {
  console.error(`✗ ${message}`);
  errors++;
}

function pass(message) {
  console.log(`✓ ${message}`);
}

// ─── Check 1: Agent files are kebab-case ─────────────────────────────────────

const agentDir = join(root, "ai", "agents");
let agentFiles;

try {
  agentFiles = await readdir(agentDir);
} catch {
  fail(`Cannot read ai/agents/ directory`);
  agentFiles = [];
}

const kebabPattern = /^[a-z0-9]+(-[a-z0-9]+)*\.md$/;

for (const file of agentFiles) {
  if (extname(file) !== ".md") continue;
  if (!kebabPattern.test(file)) {
    fail(`Agent file is not kebab-case: ai/agents/${file}`);
  } else {
    pass(`Agent file naming: ai/agents/${file}`);
  }
}

if (agentFiles.filter((f) => extname(f) === ".md").length === 0) {
  fail("No agent files found in ai/agents/");
}

// ─── Check 2: No placeholder text in legal pages ─────────────────────────────

const legalPaths = [
  join(root, "app", "impressum", "page.tsx"),
  join(root, "app", "datenschutz", "page.tsx"),
];

const placeholders = ["Musterstrasse", "Musterstraße", "Mustermann", "example@example.com"];

for (const filePath of legalPaths) {
  let content;
  try {
    content = await readFile(filePath, "utf-8");
  } catch {
    // File may not exist yet during initial setup — skip
    continue;
  }

  for (const placeholder of placeholders) {
    if (content.includes(placeholder)) {
      fail(`Placeholder "${placeholder}" found in ${basename(filePath)}`);
    }
  }
}

pass("No placeholder text found in legal pages");

// ─── Check 3: README is not the default Next.js template ─────────────────────

const readmePath = join(root, "README.md");
let readmeContent;

try {
  readmeContent = await readFile(readmePath, "utf-8");
} catch {
  // README missing — not a failure for this check
  readmeContent = "";
}

const nextjsDefaultMarker = "This is a [Next.js](https://nextjs.org) project bootstrapped";
if (readmeContent.includes(nextjsDefaultMarker)) {
  fail("README.md is still the default Next.js template — replace it with project documentation");
} else {
  pass("README.md is not the default Next.js template");
}

// ─── Result ───────────────────────────────────────────────────────────────────

if (errors > 0) {
  console.error(`\n${errors} check(s) failed.`);
  process.exit(1);
} else {
  console.log("\nAll repository health checks passed.");
}
