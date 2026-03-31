# Bekannte Punkte und Diskrepanzen (evidenzbasiert)

Nur Einträge, die sich aus **Repository-Inhalten** oder dem **lokalen CI-Lauf** begründen lassen — keine Vermutungen über externes Hosting.

## Build-Fehler

- **Aktuell:** `npm run ci` im Workspace **ohne Fehler** beendet (inkl. `next build`).
- Dauerhafter Build-Fehler ist damit **nicht** als Ist-Zustand dokumentiert.

## Navigation

- **Impressum** / **Datenschutz** stehen in `components/layout/Footer.tsx` unter `legalLinks`, erscheinen aber **nicht** in der Hauptnavigationsliste von `components/layout/Navbar.tsx` (Desktop/Mobile-`navLinks`).

## Expo

- Kein Expo-Projekt → **keine** Expo-spezifischen Konflikte im Root-Package nachweisbar.

## SDK-Konflikte

- Keine expliziten Angaben zu SDK-Konflikten im Repo. Root nutzt Next 16 / React 19 — eventuelle Peer-Warnungen bei `npm install` wurden in diesem Export nicht protokolliert.

## Routing

- Keine Routing-Fehler aus dem Build berichtet; dynamische Route `/api/contact` und statische Seiten wie in der Build-Route-Tabelle gelistet.

## Encoding

- `check:umlauts` **grün** beim CI-Lauf durch `app/` und `components/`.
- Historisch: `docs/REWRITE_PLAN.md` und `docs/STARTER_BLUEPRINT.md` erwähnen DOCX-bedingte Probleme am Profil — **aktueller Code** der Profilseite nutzt normale String-Literale und `next/image`.

## Deployment-Warnungen

- `.env.example` und CI setzen Build-Platzhalter für Resend — **Produktions-Mail** funktioniert nur mit echten Secrets (siehe `app/api/contact/route.ts` und `.github/workflows/ci.yml`).
- `designs/` wird von Root-`tsconfig` exkludiert und ist **nicht** Teil der Root-Next-CI — parallele Wartung/Drift möglich.

## Dokumentation vs. Code

- **`docs/STARTER_BLUEPRINT.md`** listet u. a. „CI broken“ und fehlendes Rate-Limit als **bekannte Fehler** — der **aktuelle** Stand im Code enthält Rate-Limiting, und lokaler **CI-Lauf war erfolgreich**. Diese Datei ist **teilweise veraltet**.
- **`README.md`** im Root ist **leer**; trägt wenig zur Einarbeitung bei (Health-Check besteht, weil nicht der Default-Next.js-README-Text).

## Tests

- Kein `npm test` / keine Testrunner-Dependencies im Root-`package.json` — **keine** automatisierten Tests im Standard-Workflow sichtbar.
