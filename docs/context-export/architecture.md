# Architektur (Ist-Zustand aus dem Code)

## Ordnerstruktur (Dominant)

```
(Root Next.js-App)
├── app/                 App Router: Seiten, Layout, API, globale CSS
├── components/          React: layout, sections, forms, ui (+ icons)
├── lib/                 `content.ts` — statische Geschäftsdaten und Inhalts-Arrays
├── public/              Statische Assets (z. B. Bilder)
├── scripts/             Node-Skripte für Checks (Health, Umlaute)
├── ai/                  Markdown für Agenten (`ai/agents/`) und Kontext (`ai/context/`)
├── docs/                Projektdokumentation (Markdown, teils .docx)
├── project-docs/        Duplikat/Spiegel mehrerer `docs/`-Dateien + .docx
├── designs/             Eigenständiges Vite-/UI-Bundle (exkludiert in Root-`tsconfig.json`)
└── (leeres) src/        Ordner vorhanden, keine produktive Next-App dort nach Tree-Scan
```

**Nicht vorhanden:** dedizierter `domain/`-Layer, `packages/`-Workspace, `apps/`-Split.

## Navigation (Website)

Definiert in `components/layout/Navbar.tsx`:

| Pfad        | Label (Nav)   |
|-------------|---------------|
| `/`         | Start         |
| `/services` | Leistungen    |
| `/pricing`  | Preise        |
| `/about`    | Über uns      |
| `/profil`   | Profil        |
| `/faq`      | FAQ           |
| `/contact`  | Kontakt (CTA) |

Zusätzliche rechtliche Seiten existieren als Routen, stehen aber **nicht** in der Hauptnavigationsliste: `/impressum`, `/datenschutz`.

## Domain Layer Struktur

Kein explizites Domain-Modul (keine `domain/`-Ordner, keine Entities außerhalb von TypeScript-Interfaces in `lib/content.ts`). Geschäftslogik ist auf **statische Daten** und die **API-Route** für Kontakt beschränkt.

## Datenmodelle (TypeScript, statisch)

Alles in `lib/content.ts`:

- `business` — Konstantobjekt (Name, Adresse, Kontakt, Website-URL, Steuernummer, Einzugsgebiet, …)
- `Service` — `id`, `title`, `description`, `details[]`
- `PricingTier` — `id`, `name`, `price`, `priceNote`, `description`, `features[]`, `highlighted`
- `Value` — `id`, `title`, `description`
- `FaqItem` — `question`, `answer`
- `ProcessStep` — `step`, `title`, `description`

Exportierte Arrays: `services`, `pricingTiers`, `values`, `faqs`, `processSteps`.

## Versioning System

- **npm-Paket:** `"version": "0.1.0"` im Root-`package.json`
- Kein eigenes Content-Package- oder Release-Versioningssystem im Quellcode (keine `version.json`, kein algorithmischer Release-Engine-Code gefunden)

## Release Engine

Nicht im Repository implementiert.

## Content-Struktur

| Bereich        | Ort |
|----------------|-----|
| Services       | `services[]` in `lib/content.ts` |
| Preise         | `pricingTiers[]` |
| FAQs           | `faqs[]` |
| Werte / Trust  | `values[]` |
| Prozess        | `processSteps[]` |

**Nicht vorhanden:** `medications/`, `algorithms/` o. ä. als fachliche Content-Bereiche im produktiven Next-Teil.

## Services (Laufzeit)

- **HTTP:** `POST /api/contact` — E-Mail-Versand über Resend (`app/api/contact/route.ts`)
- Keine weiteren API-Routen unter `app/api/` (außer `contact`)

## Entities / Policies

- **Entities:** keine ORM-/DB-Entities; nur die oben genannten TS-Typen und das `business`-Objekt
- **Policies:** keine RBAC-/Policy-Bibliothek; Rate-Limiting und Validierung sind **implementiert** in der Contact-Route (Zählung pro IP in `Map`, Grenzwerte als Konstanten im gleichen File)
