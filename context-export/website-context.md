# Website Kontext Export

**Erstellt:** 2026-03-31  
**Projekt:** HSA – Hanseatische Senioren Alltagsbegleitung  
**Export-Zweck:** Vollständige Bestandsaufnahme für Neuauflage / Überarbeitung

---

## Website Zweck

- **Typ:** B2C Marketing- und Lead-Website (kein Shop, keine App)
- **Sprache:** Deutsch
- **Ziel:** Interessenten für Seniorenbetreuung kontaktieren lassen
- **Conversion-Ziel:** Kontaktformular-Absendung oder Telefonanruf
- **Betreiber:** Wolfgang Posdziech, Hamburg
- **Rechtsstatus:** Einzelunternehmen, USt-ID DE313499881
- **Domain (hinterlegt):** `https://www.seniorenbetreuung.de`
- **Vercel-Projektname:** `hsab.de`

---

## Zielgruppe

- Angehörige pflegebedürftiger Senioren in Hamburg
- Senioren, die selbstständig nach Betreuung suchen
- Familien, die eine Entlastung bei der Pflege benötigen
- Geographisch: Hamburg Nord & West, Umland bis 50 km

---

## Leistungen

Quelle: `lib/content.ts` → `services[]`

| ID | Titel | Kurzbeschreibung |
|----|-------|-----------------|
| `24-stunden-betreuung` | 24-Stunden Betreuung | Rund-um-die-Uhr in häuslicher Umgebung |
| `alltaegliche-hilfe` | Alltägliche Hilfe | Körperpflege, Mahlzeiten, Behördengänge |
| `gesellschaft` | Gesellschaft | Gespräche, Spaziergänge, Veranstaltungen |
| `haushalt` | Haushalt | Reinigung, Wäsche, Einkaufen, Gartenpflege |
| `entlastung-fuer-familien` | Entlastung für Familien | Urlaubs-/Wochenendvertretung, stundenweise |

Jede Leistung hat: `id`, `title`, `description`, `details[]` (4 Punkte)

---

## Preise

Quelle: `lib/content.ts` → `pricingTiers[]`

| Paket | Preis | Rhythmus | Highlighted |
|-------|-------|----------|-------------|
| Basis | ab 2.490 € | pro Monat | nein |
| Komfort | ab 2.990 € | pro Monat | ja (Beliebteste Wahl) |
| Intensiv | ab 3.490 € | pro Monat | nein |

Hinweis: Alle Preise sind Richtwerte. Endangebot nach kostenlosem Erstgespräch.

---

## FAQ

Quelle: `lib/content.ts` → `faqs[]` — 7 Einträge

1. Wie schnell kann eine Betreuung beginnen? → 48–72 Std. (dringend), 1–2 Wochen (geplant)
2. Wie werden Betreuungspersonen ausgewählt? → persönlich von Wolfgang Posdziech geprüft
3. Was kostet die Betreuung? → ab 2.490 €/Monat, Erstgespräch kostenlos
4. Pflegekasse-Übernahme? → bei anerkanntem Pflegegrad möglich
5. Einsatzgebiet? → Hamburg Nord & West, bis 50 km Umkreis
6. Was bei Krankheit der Betreuungsperson? → Vertretung wird organisiert
7. Kündigung? → faire Kündigungsfristen, individuelle Lösung

---

## Unternehmensdaten

Quelle: `lib/content.ts` → `business`

```
Name:         Hanseatische Senioren Alltagsbegleitung
Kurzname:     HSA
Inhaber:      Wolfgang Posdziech
Adresse:      Wulfsdorfer Weg 108d, 22359 Hamburg
Telefon:      +49 171 626 60 18
E-Mail:       posdziech@t-online.de
USt-ID:       DE313499881
Einsatzgebiet: Hamburg Nord & West
Radius:       50 km
Website:      https://www.seniorenbetreuung.de
```

---

## Werte

Quelle: `lib/content.ts` → `values[]` — 4 Einträge

- Würde und Respekt
- Zuverlässigkeit
- Menschliche Wärme
- Vertraute Umgebung

---

## Prozessschritte

Quelle: `lib/content.ts` → `processSteps[]` — 4 Schritte

1. Erstkontakt
2. Bedarfsanalyse
3. Personenauswahl
4. Betreuungsbeginn

---

## Seitenstruktur

### Routen (Next.js App Router)

| Route | Datei | Typ |
|-------|-------|-----|
| `/` | `app/page.tsx` | Startseite (vollständige One-Pager-Struktur) |
| `/services` | `app/services/page.tsx` | Leistungsübersicht |
| `/pricing` | `app/pricing/page.tsx` | Preisseite |
| `/about` | `app/about/page.tsx` | Über uns |
| `/profil` | `app/profil/page.tsx` | Profil Wolfgang Posdziech |
| `/faq` | `app/faq/page.tsx` | FAQ |
| `/contact` | `app/contact/page.tsx` | Kontaktseite |
| `/impressum` | `app/impressum/page.tsx` | Impressum (robots: noindex) |
| `/datenschutz` | `app/datenschutz/page.tsx` | Datenschutz (robots: noindex) |
| `*` | `app/not-found.tsx` | 404-Seite |
| `/api/contact` | `app/api/contact/route.ts` | POST-Endpoint für Kontaktformular |

---

### Startseite (`/`)

Sections in Reihenfolge:

1. **Hero** — H1 "Professionelle Betreuung für Ihre Angehörigen — zuhause, mit Würde." | CTA: Erstgespräch + Leistungen | Telefonnummer | Fake-Sternebewertung (5 Sterne, "Von Familien empfohlen") | 3 Trust-Snippets | Hero-Bild-Placeholder (leeres div)
2. **WhyUs** — Abschnitt mit Alleinstellungsmerkmalen (Komponente, Inhalte nicht separat gelesen)
3. **ServicesOverview** — Übersicht der 5 Leistungen
4. **Process** — 4-Schritt-Prozess
5. **Benefits** — 4 Vorteile: Vertraute Umgebung, Persönliche Auswahl, Verlässliche Begleitung, Transparente Kommunikation
6. **StorySection** — Geschichte/Storytelling (Komponente, Inhalte nicht separat gelesen)
7. **Pricing** — 3 Preispakete
8. **Faq** — 7 FAQ-Einträge
9. **CallToAction** — "Lassen Sie uns Ihre Situation besprechen" | CTA: Erstgespräch | Telefon
10. **Kontaktformular** (inline, id="kontakt") — SectionHeader + ContactForm

---

### Seite: `/services`

- PageIntro: Badge "Leistungen"
- Alle 5 Leistungen als alternierend linkes/rechtes Layout (2-Spalten-Grid)
- Rechte Spalte: Placeholder-Div (kein Bild)
- CallToAction am Ende

---

### Seite: `/pricing`

- PageIntro: Badge "Preise"
- Pricing-Komponente (3 Karten)
- Textblock: "Was die Pakete umfassen" + Pflegekasse-Hinweis
- CallToAction

---

### Seite: `/about`

- PageIntro: Badge "Über uns"
- 2-Spalten: Text (Geschichte) + Infobox (Gründer, Standort, Einsatzgebiet)
- Werte-Grid (4 Karten)
- CallToAction

---

### Seite: `/profil`

- PageIntro: Badge "Profil", Heading: "Wolfgang Posdziech"
- Porträtfoto: `next/image` → `/images/wolfgang-posdziech-portrait.jpg`
- Biografie-Text (4 Absätze)
- 2 Infoboxen: Persönliche Erreichbarkeit, Regionale Verankerung
- Telefon + E-Mail-Links
- CallToAction

---

### Seite: `/faq`

- PageIntro: Badge "FAQ"
- Faq-Komponente (7 Einträge)
- CallToAction

---

### Seite: `/contact`

- PageIntro: Badge "Kontakt"
- 2-Spalten: Kontaktinfo (Telefon, E-Mail, Adresse, Einsatzgebiet) + Kontaktformular
- Kein CallToAction am Ende

---

### Seite: `/impressum`

- PageIntro: Badge "Rechtliches"
- § 5 TMG-Angaben: Name, Adresse, Telefon, E-Mail, USt-ID
- § 55 RStV-Verantwortlichkeit
- Streitschlichtung (EU-OS-Link)
- Haftungsausschluss
- robots: `{ index: false }`

---

### Seite: `/datenschutz`

- PageIntro: Badge "Rechtliches"
- Abschnitte: Überblick, Datenerfassung, Hosting (Vercel), DSGVO-Grundlagen, Kontaktformular, Resend, Betroffenenrechte
- robots: `{ index: false }`

---

## Navigation

### Navbar

**Top-Bar:** "100% Rechtssicher" | Telefon als klickbarer Link  
**Logo:** "H"-Icon + "HSA" + "Senioren Alltagsbegleitung"  
**Desktop-Links:** Start | Leistungen | Preise | Über uns | Profil | FAQ  
**Desktop-CTA:** Button "Kontakt" → `/contact`  
**Mobil:** `<details>`/`<summary>`-Hamburger (kein JS) + alle Links + "Kontakt aufnehmen" + Telefon

### Footer

**Spalten:** Brand/Trust | Navigation (serviceLinks + companyLinks) | Rechtliches | Kontakt  

**serviceLinks:** Leistungen, Preise, Häufige Fragen  
**companyLinks:** Über uns, Profil, Kontakt  
**legalLinks:** Impressum, Datenschutz  
**Kontakt:** Name, Adresse, Telefon, E-Mail

### CTA-Buttons

| Text | Ziel | Variante |
|------|------|---------|
| Kostenloses Erstgespräch | `/contact` | btn-primary |
| Leistungen ansehen | `/services` | btn-secondary |
| Angebot anfragen | `/contact` | btn-primary / btn-secondary |
| Kostenloses Erstgespräch vereinbaren | `/contact` | btn-accent |
| Kontakt | `/contact` | btn-secondary (Navbar) |
| Kontakt aufnehmen | `/contact` | btn-primary (Mobil) |

### Telefon-Links

`tel:+49 171 626 60 18` — erscheint in: Navbar-Topbar, Hero, CallToAction, Profil, Contact, Footer

### E-Mail-Links

`mailto:posdziech@t-online.de` — erscheint in: Profil, Contact, Footer, Impressum, Datenschutz

---

## Kontakt System

### Formular (`components/forms/ContactForm.tsx`)

- **Typ:** Client Component (`'use client'`)
- **Zustand:** React `useState` — `formData`, `fieldErrors`, `submitState`, `errorMessage`
- **Felder:**

| Feld | Typ | Pflicht | Validierung |
|------|-----|---------|------------|
| Name | text | ja | min 2 Zeichen |
| Telefon | tel | ja | Regex `^[0-9+\-()./ ]{6,30}$` |
| E-Mail | email | ja | Regex `[^\s@]+@[^\s@]+\.[^\s@]+` |
| Stadtgebiet | text | nein | keine |
| Nachricht | textarea | nein | keine |

- **Submit-States:** idle → loading → success / error
- **Success-State:** ersetzt Formular durch Bestätigungs-Div
- **Error-State:** zeigt Fehlermeldung über Submit-Button
- **Endpunkt:** `POST /api/contact`

### API Route (`app/api/contact/route.ts`)

- **Method:** POST only
- **Rate Limiting:** In-Memory `Map<ip, timestamps[]>` — 3 Anfragen/60 Sekunden pro IP
- **Validierung:** `validateContactPayload()` aus `lib/contact-validation.ts`
- **HTML-Sanitierung:** `escapeHtml()` für alle Felder im E-Mail-HTML
- **E-Mail-Versand:** Resend SDK (`resend.emails.send`)
  - `from:` CONTACT_FROM_EMAIL
  - `to:` CONTACT_TO_EMAIL
  - `replyTo:` Absender-E-Mail aus Formular
  - `subject:` "Kontaktanfrage von [Name]"
- **Startup-Validierung:** Warnung bei fehlenden ENV-Variablen beim Kaltstart

**Hinweis:** Rate Limiting ist In-Memory (nicht persistent, funktioniert nicht bei mehreren Instanzen).

### ENV-Variablen

| Variable | Zweck | Beispielwert |
|----------|-------|-------------|
| `RESEND_API_KEY` | Resend API-Schlüssel | `re_xxxx` |
| `CONTACT_TO_EMAIL` | Empfänger-Adresse | `posdziech@t-online.de` |
| `CONTACT_FROM_EMAIL` | Absender (Resend-verifiziert) | `kontakt@seniorenbetreuung.de` |

---

## Deployment

| Eigenschaft | Wert |
|-------------|------|
| Framework | Next.js `^16.1.6` |
| React | `^19.0.0` |
| TypeScript | `^5` (strict mode) |
| Tailwind CSS | `^4` (PostCSS-Plugin) |
| Node.js (CI) | 20 |
| Plattform | Vercel |
| Vercel-Projektname | `hsab.de` |
| Vercel-Projekt-ID | `prj_tp7EseMfQNRvet1gI72jRIRoSQBY` |
| Vercel-Org-ID | `team_rzG1oZnYNglr9wT4jNm0varA` |
| Hosting-Hinweis (Datenschutz) | Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789 |

**`next.config.ts`:** Leer (keine Optionen konfiguriert)

### CI Pipeline (`.github/workflows/ci.yml`)

Trigger: push/PR auf `main`  
Runner: `ubuntu-latest`, Node 20

Gates:
1. `npm run check:repo` — Repo-Gesundheitsprüfung
2. `npm run check:umlauts` — Umlaut-Check (Encoding-Validierung)
3. `npm run validate:routing` — Routing-Validierung
4. `npm run lint` — ESLint
5. `npm run typecheck` — tsc --noEmit
6. `npm run build` — Next.js Build (mit Placeholder-ENV-Werten)

Build verwendet Placeholder-ENV: `RESEND_API_KEY=build_placeholder` etc.

### Weitere CI/CD

- `.github/workflows/scheduled-audit.yml` — existiert (Inhalt nicht gelesen)
- `.github/CODEOWNERS` — existiert
- `.github/pull_request_template.md` — existiert

---

## SEO

### Root Layout (`app/layout.tsx`)

```
title.default: "HSA – Senioren Alltagsbegleitung Hamburg"
title.template: "%s | HSA"
description: "Professionelle Seniorenbetreuung in Hamburg. Erfahrene Betreuungspersonen für zuhause — persönlich ausgewählt, zuverlässig begleitet."
metadataBase: https://www.seniorenbetreuung.de
openGraph.siteName: "Hanseatische Senioren Alltagsbegleitung"
openGraph.locale: de_DE
openGraph.type: website
```

### Seiten-Metadata

| Route | Title | Canonical | OG | robots |
|-------|-------|-----------|-----|--------|
| `/` | "Seniorenbetreuung Hamburg \| HSA" | `/` | ja | Standard |
| `/services` | "Leistungen \| HSA" | — | — | Standard |
| `/pricing` | "Preise \| HSA" | — | — | Standard |
| `/about` | "Über uns \| HSA" | — | — | Standard |
| `/profil` | "Profil – Wolfgang Posdziech \| HSA" | — | — | Standard |
| `/faq` | "FAQ – Häufige Fragen \| HSA" | — | — | Standard |
| `/contact` | "Kontakt \| HSA" | — | — | Standard |
| `/impressum` | "Impressum \| HSA" | — | — | `noindex` |
| `/datenschutz` | "Datenschutzerklärung \| HSA" | — | — | `noindex` |

**Fehlt:** Kein `sitemap.xml`. Kein `robots.txt`. Keine OpenGraph-Bilder. Canonical nur auf `/`.  
**Vorhanden:** `lang="de"` auf `<html>`. Serife Schrift (Merriweather) via `next/font/google`.

---

## Assets

### Schriften

| Schrift | Gewichte | Quelle |
|---------|----------|--------|
| Merriweather | 400, 700 (normal + italic) | `next/font/google`, Variable `--font-serif` |
| System-Sans | – | CSS: Segoe UI, Inter, Helvetica Neue, Arial (body) |

### Bilder

| Pfad | Verwendung | Status |
|------|-----------|--------|
| `/images/wolfgang-posdziech-portrait.jpg` | Profil-Seite (`next/image`, fill, priority) | Erwartet in `public/images/` |

**Achtung:** Das `public/`-Verzeichnis existiert nicht (oder ist leer). Das Porträtbild ist im Code referenziert, aber physisch nicht vorhanden → Broken Image auf `/profil`.

### Favicon

Kein eigenes Favicon im Repo. Next.js verwendet Standard-Favicon.

### Logo

Kein Bild-Logo. Textbasiertes Logo: "H"-Icon (Inline-CSS-Div) + Textzeilen.

### Hero-Bild

Kein reales Bild. Hero enthält leeres `div` mit `surface-card` und fixer Höhe als Platzhalter.

### Icons

Inline-SVG (keine Icon-Library): Telefon/Schild in Navbar, Hamburger-Menü, Sterne-Rating.  
Emoji-Icons in Benefits: 🏠 👤 🤝 📋  
Unicode-Checkmarks: ✓ (in ServicesOverview, CallToAction, Pricing)

---

## Design System (CSS-Tokens)

Quelle: `app/globals.css`

```
--primary:        #2f6f9c  (Blau)
--primary-dark:   #265b80
--accent:         #d4765f  (Coral/Orange)
--secondary:      #7f9c96  (Grüngrau)
--surface:        #f6eee5  (Warmes Creme)
--background:     #fbf9f5  (Off-White)
--foreground:     #253444  (Dunkelblau)
--text-muted:     #6f7b88
--footer-bg:      #263b4d
--border-soft:    rgba(37,52,68,0.12)
--danger:         #c95b4a
```

Klassen: `.site-shell` (max-w-80rem, padding), `.surface-card`, `.btn-base`, `.btn-primary`, `.btn-secondary`, `.btn-accent`

---

## Bekannte Probleme

### Fehlendes Asset

- **`/images/wolfgang-posdziech-portrait.jpg`** fehlt in `public/`. Seite `/profil` hat broken image.

### Fehlende Features

- Kein `sitemap.xml` → SEO-Lücke
- Kein `robots.txt`
- Kein Favicon/Icon-Set
- Kein OpenGraph-Bild (og:image fehlt auf allen Seiten)
- Hero-Bild fehlt (Placeholder-Div statt realem Bild)
- `/services`-Seite: Rechte Spalte ist Placeholder-Div (kein Bild pro Leistung)
- Keine `canonical`-Tags auf Unterseiten (nur `/`)
- Kein Google Analytics / kein Vercel Analytics

### Rate Limiting

- In-Memory-Store: funktioniert nicht bei mehreren Serverless-Instanzen, Reset bei Kaltstart
- Kein persistentes Rate Limiting (kein Redis/Upstash)

### Navigation

- Mobiles Menü nutzt `<details>/<summary>` — schließt nicht automatisch bei Link-Klick
- Navbar hat keinen aktiven Link-State (kein visuelles Feedback für aktive Seite)

### Technisch

- `next.config.ts` ist leer — keine Optimierungen konfiguriert
- Kein `serviceWorker`, kein PWA
- Font: Merriweather geladen, aber nur als Variable `--font-serif` deklariert — CSS-Klasse `font-serif` notwendig für Anwendung auf Body (nur auf H1 im Hero und CTA via `font-serif`)
- `business.website` = `https://www.seniorenbetreuung.de` → als `metadataBase` gesetzt, aber Domain-Ownership nicht verifiziert im Code ersichtlich

### Fehlende Seiten (in Navbar/Footer verlinkt, vorhanden)

Alle verlinkten Seiten existieren. Keine toten internen Links festgestellt.

---

## Repository Struktur

```
HSA.de/
├── app/
│   ├── layout.tsx                  Root Layout, Metadata, Font, Navbar/Footer
│   ├── page.tsx                    Startseite (alle Sections)
│   ├── globals.css                 CSS-Custom-Properties, Utility-Klassen
│   ├── error.tsx                   Error Boundary
│   ├── not-found.tsx               404-Seite
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── datenschutz/page.tsx
│   ├── faq/page.tsx
│   ├── impressum/page.tsx
│   ├── pricing/page.tsx
│   ├── profil/page.tsx
│   ├── services/page.tsx
│   └── api/
│       └── contact/route.ts        POST-Handler, Resend, Rate Limiting
│
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx         'use client', Formular + Validierung
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── PageIntro.tsx           Wiederverwendbarer Seiten-Header
│   ├── sections/
│   │   ├── Benefits.tsx            4 Vorteile (hardcoded)
│   │   ├── CallToAction.tsx
│   │   ├── Faq.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Process.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── StorySection.tsx
│   │   └── WhyUs.tsx
│   └── ui/
│       ├── ContentContainer.tsx
│       ├── DecorativeBackground.tsx
│       ├── SectionContainer.tsx    variant: white | fog | surface | …
│       └── SectionHeader.tsx       badge, heading, description, centered, serif
│
├── lib/
│   ├── content.ts                  Einzige Datenquelle (business, services, pricing, faqs, values, processSteps)
│   └── contact-validation.ts       validateContactPayload(), escapeHtml()
│
├── public/
│   └── images/
│       └── wolfgang-posdziech-portrait.jpg  ← FEHLT (Datei nicht vorhanden)
│
├── scripts/
│   ├── check-env.mjs
│   ├── check-german-umlauts.mjs
│   ├── repo-health-check.mjs
│   └── validate-routing.ts
│
├── docs/
│   └── context-export/             Exportierte Dokumentation
│
├── designs/                        Separates Vite-Projekt (Design-Referenz, aus tsconfig excluded)
│
├── ai/                             Agenten-Definitionen, Projekt-Kontext-Dokumente
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── scheduled-audit.yml
│   ├── CODEOWNERS
│   └── pull_request_template.md
│
├── .vercel/project.json            projectId, orgId, projectName
├── .env.example
├── next.config.ts                  Leer
├── tsconfig.json                   strict, paths: @/* → ./*, excludes designs/
├── eslint.config.mjs
└── package.json
```

---

## Neuauflage Vorbereitung

### Was bleibt (unverändert übernehmen)

- Alle Inhalte aus `lib/content.ts` (business, services, pricingTiers, faqs, values, processSteps)
- Kontaktformular-Logik (`ContactForm.tsx`, `contact-validation.ts`, `route.ts`)
- ENV-Variablen-Schema (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL)
- Seitenrouting-Struktur (alle Routen beibehalten)
- CI-Pipeline-Struktur (`.github/workflows/ci.yml`)
- Datenschutz- und Impressum-Inhalte (rechtlich korrekt)
- Design-Tokens (Farben, Spacing — passen zur Marke)
- Font: Merriweather (serif) als Identitätsfont

### Was überarbeitet werden muss

- **Hero-Bild:** Platzhalter-Div durch reales Foto ersetzen
- **Services-Seite:** Bilder pro Leistung hinzufügen (keine Platzhalter)
- **Rate Limiting:** In-Memory → Upstash Redis (persistent, skalierbar)
- **Mobiles Menü:** `<details>` → JS-basiertes Menü (automatisches Schließen bei Link-Klick)
- **Navbar:** Aktiver Link-State implementieren (visuelles Feedback)
- **Metadata:** Canonical-Tags auf alle Unterseiten
- **OpenGraph-Bild:** og:image für alle Seiten

### Was fehlt (hinzuzufügen)

- `public/images/wolfgang-posdziech-portrait.jpg` — Porträtfoto bereitstellen
- `sitemap.xml` — Next.js `app/sitemap.ts` implementieren
- `robots.txt` — `app/robots.ts` implementieren
- Favicon / Icon-Set (`app/icon.png`, `app/apple-icon.png`)
- OpenGraph-Bild (`app/opengraph-image.png` oder dynamisch)
- Google Analytics oder Vercel Analytics (nach DSGVO-Prüfung)
- Persistentes Rate Limiting (Upstash Redis)
- Vitest-Unit-Tests für `validateContactPayload` + `escapeHtml`
- Playwright E2E-Tests für Kontaktformular-Flow

### Was entfernt werden kann

- `designs/` Verzeichnis (separates Vite-Projekt, nur Entwurfsreferenz, nicht deployed)
- `app/error.tsx` — prüfen, ob Inhalt ausreichend ist

### Struktur für neue Version

Die bestehende Architektur ist sauber und kann beibehalten werden:

- Layer-Modell (routes → sections → ui) bleibt
- `lib/content.ts` als Single Source of Truth bleibt
- Neue Inhalte (Testimonials, Zertifikate, Team) können als eigene Exports in `lib/content.ts` ergänzt werden
- Neue Sections (z. B. Testimonials, Zertifikate, Servicegebiet-Karte) als neue Dateien in `components/sections/`
- Bilder → `public/images/` mit `next/image` und `sizes`-Attribut

---

## Zusammenfassung

| Kategorie | Status |
|-----------|--------|
| Framework | Next.js 16 + React 19 + TypeScript strict ✓ |
| Build | Lokal grün, CI-Pipeline vorhanden ✓ |
| Inhalte | Vollständig in `lib/content.ts` ✓ |
| Routing | Alle 9 Seiten + API + 404 vorhanden ✓ |
| Kontaktformular | Funktionsfähig (Resend) ✓ |
| Rate Limiting | In-Memory (nicht produktionsreif) ⚠ |
| Porträtfoto | Fehlt in public/ ✗ |
| Hero-Bild | Fehlt (Platzhalter) ✗ |
| SEO (sitemap, robots, og:image) | Fehlt ✗ |
| Favicon | Fehlt ✗ |
| Vercel Deployment | Projekt verknüpft (`hsab.de`) ✓ |
| DSGVO | Datenschutz + Impressum vorhanden ✓ |
| Analytics | Nicht implementiert — |
