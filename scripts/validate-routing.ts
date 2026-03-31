#!/usr/bin/env node
/**
 * validate-routing.ts
 *
 * Prüft alle definierten Routen der Next.js App auf:
 *   1. Existenz der page.tsx-Datei
 *   2. Default-Export (Seitenkomponente)
 *   3. Metadata-Export (SEO) — Warnung, kein Fehler
 *   4. Pflicht-Infrastruktur (layout.tsx, error.tsx, not-found.tsx)
 *
 * Exit 0 = alle Checks bestanden
 * Exit 1 = mindestens ein Fehler (Warnung blockiert nicht)
 */

import { existsSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ─── Route-Definitionen ───────────────────────────────────────────────────────

interface RouteCheck {
  route: string;
  file: string;
}

const ROUTES: RouteCheck[] = [
  { route: "/",            file: "app/page.tsx" },
  { route: "/about",       file: "app/about/page.tsx" },
  { route: "/services",    file: "app/services/page.tsx" },
  { route: "/pricing",     file: "app/pricing/page.tsx" },
  { route: "/faq",         file: "app/faq/page.tsx" },
  { route: "/contact",     file: "app/contact/page.tsx" },
  { route: "/impressum",   file: "app/impressum/page.tsx" },
  { route: "/datenschutz", file: "app/datenschutz/page.tsx" },
];

const INFRASTRUCTURE: string[] = [
  "app/layout.tsx",
  "app/not-found.tsx",
  "app/error.tsx",
];

// ─── Reporter ─────────────────────────────────────────────────────────────────

let errors = 0;
let warnings = 0;

function fail(message: string): void {
  console.error(`  ✗ ${message}`);
  errors++;
}

function warn(message: string): void {
  console.warn(`  ⚠ ${message}`);
  warnings++;
}

function pass(label: string, detail?: string): void {
  const suffix = detail ? `  (${detail})` : "";
  console.log(`  ✓ ${label}${suffix}`);
}

// ─── Checks ───────────────────────────────────────────────────────────────────

function checkInfrastructure(): void {
  console.log("\nInfrastruktur:");

  for (const file of INFRASTRUCTURE) {
    if (existsSync(resolve(ROOT, file))) {
      pass(file);
    } else {
      fail(`${file} fehlt`);
    }
  }
}

function checkRoute({ route, file }: RouteCheck): void {
  const absPath = resolve(ROOT, file);

  if (!existsSync(absPath)) {
    fail(`${route.padEnd(18)} Datei nicht gefunden: ${file}`);
    return;
  }

  const content = readFileSync(absPath, "utf-8");

  const hasDefaultExport = /export\s+default\s+/.test(content);
  if (!hasDefaultExport) {
    fail(`${route.padEnd(18)} Kein Default-Export in ${file}`);
    return;
  }

  const hasMetadata =
    /export\s+const\s+metadata\b/.test(content) ||
    /export\s+(async\s+)?function\s+generateMetadata\b/.test(content);

  if (!hasMetadata) {
    // Metadata fehlt — Warnung (kein CI-Blocker), Route selbst ist gültig
    warn(`${route.padEnd(18)} Kein metadata-Export (SEO) in ${file}`);
  } else {
    pass(route.padEnd(18), file);
  }
}

function checkRoutes(): void {
  console.log("\nRouten:");

  for (const route of ROUTES) {
    checkRoute(route);
  }
}

// ─── API-Route ────────────────────────────────────────────────────────────────

function checkApiRoutes(): void {
  console.log("\nAPI:");

  const apiRoute = "app/api/contact/route.ts";
  const absPath = resolve(ROOT, apiRoute);

  if (!existsSync(absPath)) {
    fail(`${apiRoute} fehlt`);
    return;
  }

  const content = readFileSync(absPath, "utf-8");
  const hasPOST = /export\s+(async\s+)?function\s+POST\b/.test(content);

  if (!hasPOST) {
    fail(`${apiRoute}: kein POST-Handler gefunden`);
  } else {
    pass("/api/contact", apiRoute);
  }
}

// ─── Zusammenfassung ──────────────────────────────────────────────────────────

function printSummary(): void {
  const total = ROUTES.length;
  const routeErrors = errors; // Fehler die Routen betreffen (ungefähr)
  const passed = total - Math.min(routeErrors, total);

  console.log(`\n${"─".repeat(50)}`);
  console.log(`Routen geprüft: ${total}`);
  console.log(`Bestanden:      ${passed}/${total}`);

  if (warnings > 0) {
    console.warn(`Warnungen:      ${warnings} (blockieren CI nicht)`);
  }

  if (errors > 0) {
    console.error(`Fehler:         ${errors}`);
    console.error("\nRouting-Validierung fehlgeschlagen.");
    process.exit(1);
  } else {
    console.log("\nAlle Routing-Checks bestanden.");
  }
}

// ─── Ausführung ───────────────────────────────────────────────────────────────

checkInfrastructure();
checkRoutes();
checkApiRoutes();
printSummary();
