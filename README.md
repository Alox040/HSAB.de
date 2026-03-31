# HSA.de — Hanseatische Senioren Alltagsbegleitung

Marketing- und Lead-Generierungs-Website für einen Hamburger Seniorenbetreuungs-Vermittlungsservice.

---

## Tech Stack

| Schicht | Technologie | Version |
|---------|-------------|---------|
| Framework | Next.js (App Router) | ^16.1.6 |
| Sprache | TypeScript (strict) | ^5 |
| UI | React | ^19.0.0 |
| Styling | Tailwind CSS | ^4 |
| E-Mail | Resend | ^4.0.0 |
| Linting | ESLint (Flat Config) | ^9 |
| Node.js | LTS | 20 |
| Deployment | Vercel | — |

---

## Ordnerstruktur

```
.
├── app/                        # Next.js App Router
│   ├── page.tsx                # Startseite (/)
│   ├── layout.tsx              # Root-Layout, globale Metadata
│   ├── globals.css             # Design-Tokens, Tailwind-Imports
│   ├── error.tsx               # Error Boundary
│   ├── not-found.tsx           # 404-Seite
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── profil/page.tsx
│   ├── datenschutz/page.tsx
│   ├── impressum/page.tsx
│   └── api/contact/route.ts    # POST-Endpoint → Resend
│
├── components/
│   ├── layout/                 # Navbar, Footer, PageIntro
│   ├── sections/               # Hero, Benefits, Trust, Process, Pricing, Faq, …
│   ├── forms/                  # ContactForm (Client Component)
│   └── ui/                     # SectionContainer, SectionHeader, Icons
│
├── lib/
│   └── content.ts              # Einzige Datenquelle für alle statischen Inhalte
│
├── scripts/
│   ├── repo-health-check.mjs   # CI: Kebab-Case, Platzhalter, README-Check
│   └── check-german-umlauts.mjs# CI: ae/oe/ue-Transliteration erkennen
│
├── ai/
│   └── agents/                 # AI-Rollen-Definitionen für Claude
│
├── designs/                    # Separater Vite-Prototyp (nicht im Prod-Build)
│
├── docs/                       # Projekt-Kontext-Exporte und Blueprint-Dokumente
│
└── .github/
    └── workflows/
        ├── ci.yml              # CI: push/PR auf main
        └── scheduled-audit.yml # Wöchentlicher Audit (npm audit + health)
```

**Verbotene Verzeichnisse:** `components/home/`, `components/pages/`  
**Datendatei:** Kein Hardcoding in Komponenten — ausschließlich `lib/content.ts` verwenden.

---

## Build Commands

```bash
# Entwicklung
npm run dev

# Produktions-Build
npm run build

# Produktions-Server (nach Build)
npm start

# Linting
npm run lint

# Typprüfung
npm run typecheck

# Repository-Gesundheitsprüfung
npm run check:repo

# Umlaut-Prüfung (ae/oe/ue in Quellcode)
npm run check:umlauts

# Vollständige CI-Pipeline (alle 5 Gates)
npm run ci
```

### CI-Gates (Reihenfolge)

```
check:repo → check:umlauts → lint → typecheck → build
```

---

## Deployment

Automatisches Deployment via GitHub Actions → Vercel.

- **Preview:** Jeder Push auf einen Feature-Branch → Preview-URL
- **Production:** Merge auf `main` → automatisches Vercel-Deployment

**CI-Build ohne Secrets:** Der GitHub-Actions-Workflow übergibt Platzhalterwerte für
`RESEND_API_KEY`, `CONTACT_TO_EMAIL` und `CONTACT_FROM_EMAIL` beim Build-Schritt.
Das Kontaktformular schlägt zur Laufzeit fehl, wenn die echten Variablen nicht gesetzt sind.

---

## Umgebungsvariablen

Vorlage: `.env.example`

| Variable | Erforderlich | Beschreibung |
|----------|-------------|--------------|
| `RESEND_API_KEY` | Ja | Resend API-Schlüssel (`re_…`) |
| `CONTACT_TO_EMAIL` | Ja | Empfängeradresse für Kontaktanfragen |
| `CONTACT_FROM_EMAIL` | Ja (Produktion) | Absenderadresse — muss in Resend domain-verifiziert sein |

```bash
# Lokale Entwicklung
cp .env.example .env.local
# Werte eintragen
```

> `CONTACT_FROM_EMAIL` auf `onboarding@resend.dev` funktioniert nur in der Resend-Sandbox.
> Für Produktion ist eine verifizierte Domain erforderlich.

---

## Projektstatus

**Version:** 0.1.0  
**Phase:** 1 abgeschlossen — Produktion ausstehend

| Gate | Status |
|------|--------|
| `check:repo` | ✅ |
| `check:umlauts` | ✅ |
| `lint` | ✅ |
| `typecheck` | ✅ |
| `build` | ✅ |

**Seiten (9):** `/` `/about` `/services` `/pricing` `/faq` `/contact` `/profil` `/impressum` `/datenschutz`

Kein CMS, keine Datenbank, keine Authentifizierung. Alle Inhalte in `lib/content.ts`.

---

## Roadmap

### Phase 0 — Konzept & Architektur ✅
- Architektur definiert (`docs/STARTER_BLUEPRINT.md`)
- Ordnerstruktur, Naming-Conventions, CI-Regeln festgelegt
- Design-System-Prototyp in `designs/` erstellt (Vite, nicht im Prod-Build)

### Phase 1 — Bootstrap ✅
- Vollständiges Next.js-Projekt aufgesetzt
- Alle 9 Seiten mit Inhalten befüllt
- Kontaktformular mit Resend-E-Mail-Integration
- CI-Pipeline (5 Gates) grün
- GitHub Actions + Vercel-Deployment konfiguriert

### Phase 2 — Stabilisierung
- [ ] Rate Limiting auf `POST /api/contact` (Upstash Redis)
- [ ] Unit-Tests (Vitest) für `validateContactPayload` + `escapeHtml`
- [ ] E2E-Tests (Playwright) für Kontaktformular-Flow
- [ ] Sitemap-Generierung
- [ ] GDPR-Assessment vor Analytics-Integration
- [ ] Produktions-Smoke-Tests

---

## Lokale Einrichtung

```bash
git clone <repo-url>
cd HSA.de
npm install
cp .env.example .env.local
# .env.local mit echten Werten befüllen
npm run dev
```
