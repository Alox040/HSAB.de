# Projektüberblick

Exportstand: aus dem Repository **HSA.de** (Workspace-Pfad) abgeleitet. Keine Annahmen; nur im Code und in eingecheckten Dateien belegte Fakten.

## Projektname

- **npm-Paketname:** `hsa-seniorenbetreuung` (`package.json`)
- **Marke / Inhalt:** Hanseatische Senioren Alltagsbegleitung (**HSA**) — Marketing-Website für Seniorenbetreuung in Hamburg (`lib/content.ts`, Metadaten in `app/layout.tsx`)

## Ziel des Projekts

Laut `docs/STARTER_BLUEPRINT.md` (und Duplikat in `project-docs/`):

1. Dienstleistungen, Preise, Profil und Vertrauenssignale präsentieren  
2. Leads per Kontaktformular erfassen (Name, Telefon, E-Mail, optional Stadt und Nachricht)  
3. Leads per E-Mail an den Inhaber senden (Resend über `app/api/contact/route.ts`)

Es gibt **keine** Authentifizierung, **keine** Datenbank und **kein** CMS im Code; Inhalte sind statisch in `lib/content.ts` und den Seiten.

## Aktuelle Phase

- **Versionskennzeichnung im Code:** `0.1.0` in `package.json`  
- **Einordnung in der Projektdoku:** In `docs/STARTER_BLUEPRINT.md` wird von einem **MVP** und „v0.1.1“ gesprochen; die Zahl **0.1.1** ist dort beschrieben, im Root-`package.json` jedoch nicht gesetzt — für den Ist-Stand gilt **0.1.0** aus `package.json`.

## Kurzer Status

- **Lokal / CI:** `npm run ci` wurde im Workspace erfolgreich ausgeführt (Health-Check, Umlaut-Check, Lint, Typecheck, `next build`).
- **Produktions-Deployment:** Nicht aus dem Code ableitbar (kein Deploy-Log im Repo). Ein Verzeichnis `.vercel/` mit `project.json` (Projektname `hsade`) existiert lokal im Workspace; `.gitignore` ignoriert `.vercel` — typisch für eine lokale Vercel-Verknüpfung.

## Architekturüberblick

- **Next.js App Router:** Routen unter `app/`, Root-Layout in `app/layout.tsx`, globale Styles und Design-Tokens in `app/globals.css`.
- **UI:** React-Komponenten in `components/` (layout, sections, forms, ui).
- **Statische Inhalte:** zentrale Datei `lib/content.ts`.
- **Server-API:** eine Route `POST` unter `app/api/contact/route.ts` (Validierung, HTML-Escaping, Rate-Limiting im Speicher, Resend).
- **Zusätzliches Unterprojekt:** Ordner `designs/` mit eigenem `package.json` und Vite-Setup — **nicht** der produktive Next.js-Einstieg; TypeScript schließt `designs` per `tsconfig.json` `exclude` aus.

## Verwendete Technologien (Root-App)

| Bereich        | Technologie (aus `package.json` / Build-Log) |
|----------------|-----------------------------------------------|
| Framework      | Next.js **16.1.6** (Build-Log: Turbopack)     |
| UI             | React **19**                                  |
| Sprache        | TypeScript (strict laut `tsconfig.json`)       |
| Styling        | Tailwind CSS **4** (`@tailwindcss/postcss`)   |
| E-Mail (API)   | **resend** ^4                                 |
| Lint           | ESLint 9 + `eslint-config-next`, typescript-eslint |
| CI             | GitHub Actions (Node 20, `npm ci`)          |

## Monorepo-Struktur

**Kein** klassisches Monorepo mit `apps/` und `packages/` (wie Turborepo/pnpm workspaces). Es gibt:

- eine **einzige** ausführbare Next.js-Anwendung im Repository-Root
- den **separaten** Ordner `designs/` (eigenes Paket, Figma/Vite-Kontext)

## Apps + Packages Übersicht

| Einheit              | Rolle |
|----------------------|--------|
| Root (`package.json`) | Produktive Next.js-Website |
| `designs/`           | Separates Frontend/Beispielprojekt (`@figma/my-make-file`, Vite laut `designs/vite.config.ts`) |
| `src/`               | Im Workspace als Ordner vorhanden; **keine** untergeordneten Quelldateien bei der Baum-Erstellung sichtbar (leer bzw. ohne genutzte App-Dateien für die Root-App) |

## Wichtigste Features (implementiert)

- Startseite mit Sektionen: Hero, Leistungen, Nutzen, Vertrauen, Ablauf, Preise, FAQ, Einzugsgebiet, CTA, Kontaktbereich mit Formular (`app/page.tsx`)
- Routen: `/about`, `/services`, `/pricing`, `/faq`, `/profil`, `/contact`, `/impressum`, `/datenschutz` (jeweils `app/*/page.tsx`)
- Globale Navigation und Footer (`components/layout/Navbar.tsx`, `Footer.tsx`)
- Kontaktformular mit clientseitiger Feldvalidierung (u. a. Blur) (`components/forms/ContactForm.tsx`)
- API `POST /api/contact` mit Resend, serverseitiger Validierung, HTML-Escape für E-Mail-Body, einfachem In-Memory-Rate-Limit (`app/api/contact/route.ts`)
- Fehlerseiten: `app/error.tsx`, `app/not-found.tsx`
- CI-Skripte: Repository-Health (`scripts/repo-health-check.mjs`), deutscher Umlaut-Check (`scripts/check-german-umlauts.mjs`)

## Geplante / dokumentierte Features (nur wo im Repo nachweisbar)

In `docs/STARTER_BLUEPRINT.md` u. a. genannt (Zielbild, teils bereits im Code umgesetzt — Abgleich per Code empfohlen):

- CI dauerhaft grün (aktuell lokal grün)
- Keine toten/ redundanten Strukturen
- Trennung Daten/UI (vorhanden: `lib/content.ts`)
- Komposition in `app/*/page.tsx` (vorhanden)
- **Unit-Tests** für Validierungslogik — im Root-`package.json` ist **kein** `test`-Script definiert
- **E2E** für Kontaktflow — nicht im `package.json` sichtbar

Keine im Code gefundenen Pläne für Medikamente, Algorithmen, native Apps oder ähnliche Domänen.

## Bekannte Punkte (nachweisebar)

- `README.md` im Repository-Root ist **leer** (Datei existiert, Inhalt 0 Zeichen laut früherer Einlesung).
- `docs/STARTER_BLUEPRINT.md` beschreibt u. a. einen früheren Zustand („CI broken“, fehlendes Rate-Limit); der **aktuelle** Code enthält Rate-Limiting und **lokaler CI-Lauf war erfolgreich** — die Blaupause ist teilweise **veraltet** relativ zum Code.
