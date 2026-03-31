# Deployment & Build

## Vercel Setup

- Im Workspace existiert `.vercel/project.json` mit:
  - `projectId`
  - `orgId`
  - `projectName`: `hsade`
- `.gitignore` enthält `/.vercel` — das Verzeichnis ist für Git ausgeschlossen, kann aber lokal nach `vercel link` vorhanden sein.
- Keine `vercel.json` im Repository-Root.

## Expo Setup

**Nicht vorhanden** in der Root-Anwendung (keine Expo-Konfiguration, keine Expo-Dependencies in Root-`package.json`).

## Build Commands (Root)

Aus `package.json`:

| Script | Befehl |
|--------|--------|
| Entwicklung | `next dev` |
| Produktion | `next build` |
| Start (nach build) | `next start` |
| Lint | `eslint .` |
| Typecheck | `tsc --noEmit --incremental false` |
| CI-Pipeline (lokal) | `npm run ci` → `check:repo` → `check:umlauts` → `lint` → `typecheck` → `build` |

## Weitere Scripts

- `npm run check:repo` → `scripts/repo-health-check.mjs`
- `npm run check:umlauts` → `scripts/check-german-umlauts.mjs`

## CI-Logik (GitHub Actions)

**`.github/workflows/ci.yml`**

- Trigger: `push` / `pull_request` auf Branch `main`
- Läufer: `ubuntu-latest`, Node **20**, Cache npm
- Schritte: Checkout → `npm ci` → `check:repo` → `check:umlauts` → `lint` → `typecheck` → `build`
- Beim Build werden Platzhalter-Env-Variablen gesetzt:  
  `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (siehe Workflow-Kommentar: Kontakt-Mail zur Laufzeit ohne echte Keys nicht nutzbar)

**`.github/workflows/scheduled-audit.yml`**

- Schedule: montags 08:00 UTC + `workflow_dispatch`
- Schritte: `npm ci` → `check:repo` → `check:umlauts` → `npm audit --audit-level=high`

## Ignore Steps / path excludes

- **Kein** explizites „ignore path“ oder Job-Skipping in den Workflow-YAMLs wie bei manchen Monorepos (z. B. `paths-ignore` für Docs-only) — **nicht** konfiguriert; jeder Push auf `main` / PR führt die volle CI aus.

## Umgebungsvariablen (Kontakt)

`.env.example` definiert:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Ohne diese Variablen antwortet die API mit Fehler (siehe `app/api/contact/route.ts`).

## Bekannte Deploy-Probleme (aus Repo-Dokumentation + Code)

- **`docs/STARTER_BLUEPRINT.md`** warnt: `CONTACT_FROM_EMAIL` darf nicht dauerhaft auf Sandbox-Adressen stehen, wenn Resend in Produktion ohne Verifizierung ablehnt — **Verifikation erfolgt in Resend/Vercel-Dashboard**, nicht im Code.
- **`designs/`:** separates Paket; Root-CI baut es **nicht** automatisch mit (nicht in der Workflow-Datei referenziert).
