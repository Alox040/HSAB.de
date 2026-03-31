# PROJECT REFERENCE — Seniorenbetreuung Website

> Complete technical audit of the current codebase. Authoritative reference before any rebuild or major change. Evidence-based — inferences are marked explicitly.

---

## 1. PROJECT IDENTITY

| Field | Value |
|---|---|
| **Project name** | Hanseatische Senioren Alltagsbegleitung (HSA) |
| **Website domain** | seniorenbetreuung.de |
| **Project type** | German-language marketing & lead-generation website |
| **Owner** | Wolfgang Posdziech, Hamburg |
| **Version** | 0.1.1 |
| **Main purpose** | Present senior home-care placement services and capture contact leads via a form |
| **Target users** | Families in Hamburg seeking professional daily support or 24h care for elderly relatives |
| **Primary use case** | Visitor learns about services → fills contact form → owner receives email → follow-up call |
| **Secondary use cases** | Legal compliance display (Impressum, Datenschutz); trust-building via profile, pricing, FAQ |
| **Language** | German (de_DE) exclusively |

---

## 2. CURRENT STATE SUMMARY

**Maturity: MVP / nearly production-ready (~90% complete)**

### What works
- All 9 public pages render and build correctly
- Contact form submits to API, validates input, sends email via Resend
- Responsive design (mobile-first, Tailwind CSS v4)
- SEO metadata and JSON-LD structured data on all pages
- CI/CD pipeline configured (GitHub Actions → Vercel)
- TypeScript strict mode enabled

### What does not work
- **CI currently fails on two gates:**
  1. `check:repo` — 8 files in `ai-agents/` violate the enforced kebab-case naming rule
  2. `check:umlauts` — `components/pages/ProfilePage.tsx` contains umlaut encoding artifacts (mojibake from DOCX import)
- `CONTACT_FROM_EMAIL` defaults to `onboarding@resend.dev` which Resend rejects in production unless that domain is verified — contact emails will silently fail without setting a verified sender

### What is unfinished
- No custom 404 or 500 error pages (Next.js defaults shown)
- No analytics or visitor tracking
- `Testimonials.tsx` component exists but is never imported
- `components/sections/` and `components/ui/` directories exist but are empty stubs
- Design system (`design/` Vite workspace) has comprehensive components not integrated into the main app

### What is inconsistent
- `Footer.tsx` exists in both `components/home/` and `components/layout/` — the layout version is canonical; the home version is likely dead code
- Agent files mix kebab-case and concatenated naming despite CI enforcing kebab-case only
- `drug-database-agent.md` and `medical-data-agent.md` have no relevance to a senior care marketing website

---

## 3. FEATURE INVENTORY

| Feature | Status | Relevant Files | Notes |
|---|---|---|---|
| Landing page | **Implemented** | `app/page.tsx`, `components/home/`, `components/pages/LandingPage.tsx` | Clean section composition |
| Navigation | **Implemented** | `components/layout/Navbar.tsx` | Native `<details>` for mobile — zero JS dependency |
| Footer | **Implemented** | `components/layout/Footer.tsx` | Duplicate in `components/home/Footer.tsx` (unused) |
| About page | **Implemented** | `app/about/page.tsx`, `components/pages/AboutPage.tsx` | |
| Services page | **Implemented** | `app/services/page.tsx`, `components/pages/ServicesPage.tsx` | |
| Pricing page | **Implemented** | `app/pricing/page.tsx`, `components/pages/PricingPage.tsx` | Prices hardcoded in `content.ts` |
| FAQ page | **Implemented** | `app/faq/page.tsx`, `components/pages/FaqPage.tsx` | |
| Contact page | **Implemented** | `app/contact/page.tsx`, `components/pages/ContactPage.tsx`, `components/home/ContactForm.tsx` | |
| Contact API | **Implemented** | `app/api/contact/route.ts` | Strong validation + HTML escaping; Resend delivery |
| Profile page | **Implemented (broken content)** | `app/profil/page.tsx`, `components/pages/ProfilePage.tsx` | Encoding artifacts from DOCX import — fails umlaut CI check |
| Impressum | **Implemented** | `app/impressum/page.tsx` | Real address and USt-ID present |
| Datenschutz | **Implemented** | `app/datenschutz/page.tsx` | |
| SEO metadata + OpenGraph | **Implemented** | `app/layout.tsx`, each page file | JSON-LD on home page only |
| Structured data (JSON-LD) | **Partial** | `app/page.tsx` | Home only; inner pages lack it |
| CI/CD pipeline | **Implemented** | `.github/workflows/ci.yml`, `scheduled-audit.yml` | Currently failing on 2 gates |
| Repo health checks | **Broken** | `scripts/repo-health-check.mjs` | Fails due to 8 naming violations in `ai-agents/` |
| Umlaut CI check | **Broken** | `scripts/check-german-umlauts.mjs` | Fails on ProfilePage.tsx mojibake |
| Design system workspace | **Partial** | `design/` | Vite project — not in prod build |
| Testimonials section | **Unused** | `components/home/Testimonials.tsx` | File exists, never imported |
| Error pages (404/500) | **Missing** | — | Next.js defaults |
| Analytics | **Missing** | — | Not planned or stubbed |
| Rate limiting / CAPTCHA | **Missing** | — | API has input validation but no bot protection |
| Lead persistence (DB/CRM) | **Missing** | — | Submissions go to email only |
| i18n | **Missing** | — | German only |
| Automated tests | **Missing** | — | No test framework or test files anywhere |

---

## 4. TECH STACK ANALYSIS

### Core Stack
| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 | NOT Pages Router — critical distinction |
| UI library | React | 19.2.3 | |
| Language | TypeScript | ^5 | Strict mode enabled |
| Styling | Tailwind CSS | ^4 | `@tailwindcss/postcss` plugin; v4 syntax differs from v3 |
| Email | Resend | ^6.9.3 | Only used in API route |
| Deployment | Vercel | ^50.28.0 CLI | Project OIDC-connected |

### Build & Dev Tooling
| Tool | Purpose |
|---|---|
| ESLint 9 (flat config) | `eslint-config-next` + TypeScript rules |
| PostCSS | Tailwind v4 compilation |
| `tsc --noEmit` | Type-checking without emit |
| GitHub Actions | CI on push/PR + weekly security audit |

### External Services
| Service | Role | Required Env Vars |
|---|---|---|
| Resend | Transactional email for contact form | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (optional) |
| Vercel | Hosting + auto-deployment | `VERCEL_OIDC_TOKEN` (local dev only — not committed) |

### Dependency Assessment
| Dependency | Assessment |
|---|---|
| `resend ^6.9.3` | Appropriate — lightweight, purpose-built |
| `tailwindcss ^4` | Cutting edge; syntax change from v3 is significant |
| `next 16.1.6` | Pinned exact minor — stable |
| `vercel ^50.28.0` | In devDependencies for CLI only — not needed in CI runners |
| `@types/node ^20` | Node 20 types; CI uses Node 22 — minor mismatch, acceptable |
| No Zod | Input validation done manually in API — works but not shared with frontend |
| No testing library | No test framework at all |

---

## 5. ARCHITECTURE REVIEW

### App Structure
```
Next.js App Router
├── app/                    Route segments + API handler
└── components/
    ├── home/               Section-level components (landing page primarily)
    ├── pages/              Full-page wrapper components (one per route)
    ├── layout/             Global layout elements (Navbar, Footer, PageIntro)
    ├── shared/             Reusable primitives (containers, headers, icons)
    ├── sections/           EMPTY STUB — unused
    └── ui/                 EMPTY STUB — unused
```

### Component Hierarchy (typical inner page)
```
RootLayout (app/layout.tsx)
├── Navbar
├── [route]/page.tsx
│     └── [Page]Page.tsx (components/pages/)
│           ├── PageIntro
│           ├── SectionContainer
│           │     └── ContentContainer
│           │           └── SectionHeader + content sections
│           └── CallToAction
└── Footer
```

### Data Architecture
- All static content in `components/home/content.ts` — single source of truth for all marketing data
- No database, CMS, or external data fetching at runtime
- Contact flow: client form → POST `/api/contact` → validate → sanitize → Resend → owner email
- All pages statically generated at build time (SSG)

### Rendering Strategy
| Route | Type |
|---|---|
| `/`, `/about`, `/services`, `/pricing`, `/faq`, `/contact`, `/profil`, `/impressum`, `/datenschutz` | SSG (static) |
| `/api/contact` | Dynamic API route (Node/Edge) |

### What is architecturally clean
- Clear four-layer component separation: layout / page wrappers / sections / shared primitives
- `content.ts` as single data source — copy updates don't touch component logic
- API route: validation, sanitization, and delivery are fully isolated functions
- CSS variables cover all design tokens — no magic values scattered in JSX
- `SectionContainer` + `ContentContainer` + `SectionHeader` prevent layout duplication

### What is problematic
- `content.ts` lives inside `components/home/` — data is not a UI component; belongs in `lib/` or `data/`
- Duplicate `Footer.tsx` in two folders — ambiguous canonical source
- `ContactForm.tsx` is in `components/home/` but consumed by `ContactPage.tsx` — blurry folder boundary
- Empty `components/sections/` and `components/ui/` directories suggest abandoned migration
- No error boundaries, no route-level `error.tsx`, no `not-found.tsx`
- No shared validation schema between frontend form and backend API

---

## 6. FOLDER AND FILE MAP

```
seniorenbetreuung/
├── app/
│   ├── layout.tsx                ← Root layout, global metadata, Navbar+Footer wiring
│   ├── page.tsx                  ← / — Landing page + JSON-LD structured data
│   ├── globals.css               ← Design tokens (CSS vars) + Tailwind v4 import
│   ├── favicon.ico
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── datenschutz/page.tsx
│   ├── faq/page.tsx
│   ├── impressum/page.tsx
│   ├── pricing/page.tsx
│   ├── profil/page.tsx
│   ├── services/page.tsx
│   └── api/contact/route.ts      ← Only server-side logic; all validation + email here
│
├── components/
│   ├── home/
│   │   ├── content.ts            ← All static marketing data [SHOULD MOVE to lib/ or data/]
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── Benefits.tsx
│   │   ├── Trust.tsx
│   │   ├── Testimonials.tsx      ← UNUSED (dead code — never imported)
│   │   ├── Process.tsx
│   │   ├── Pricing.tsx
│   │   ├── Faq.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── ContactForm.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx            ← DUPLICATE (likely dead; layout/Footer.tsx is canonical)
│   │
│   ├── pages/                    ← Full-page wrapper components (one per route)
│   │   ├── LandingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── LegalPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── ProfilePage.tsx       ← Contains mojibake encoding artifacts (CI fails)
│   │   └── ServicesPage.tsx
│   │
│   ├── layout/                   ← Global layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx            ← CANONICAL footer (used in root layout)
│   │   └── PageIntro.tsx
│   │
│   ├── shared/                   ← Reusable UI primitives
│   │   ├── SectionContainer.tsx
│   │   ├── ContentContainer.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── DecorativeBackground.tsx
│   │   └── icons/
│   │       ├── AnchorIcon.tsx
│   │       ├── CompassIcon.tsx
│   │       ├── LighthouseIcon.tsx
│   │       ├── RopePattern.tsx
│   │       ├── ShipWheelIcon.tsx
│   │       └── WavePattern.tsx
│   │
│   ├── sections/                 ← EMPTY STUB (unused, likely abandoned migration)
│   └── ui/                       ← EMPTY STUB (unused, likely abandoned migration)
│
├── ai-agents/                    ← AI agent role definitions (15 .md files)
│   └── *.md                      ← 8 files fail kebab-case CI check; 2 are irrelevant
│
├── design/                       ← Separate Vite+React prototyping workspace
│   ├── package.json              ← Independent project with Radix/shadcn-style deps
│   └── src/                      ← NOT in production build (excluded from tsconfig + ESLint)
│
├── public/
│   ├── favicon.ico
│   ├── next.svg, vercel.svg, file.svg, globe.svg, window.svg  ← Default Next.js scaffolding assets
│   └── images/
│       └── wolfgang-posdziech-portrait.jpg
│
├── scripts/
│   ├── repo-health-check.mjs     ← Validates agent names, legal content placeholders
│   └── check-german-umlauts.mjs  ← Detects ae/oe/ue transliterations in source files
│
├── docs/
│   └── Entwurd Website Informationen.docx  ← Source material for profile page (binary, not in CI)
│
├── .github/
│   ├── CODEOWNERS                ← @Alox040 owns workflows, ai-agents, app/api/*
│   ├── pull_request_template.md
│   └── workflows/
│       ├── ci.yml                ← Push/PR: health + umlauts + lint + typecheck + build
│       └── scheduled-audit.yml  ← Weekly: health + umlauts + npm audit (prod deps, high severity)
│
├── package.json                  ← v0.1.1; scripts include ci, check:repo, check:umlauts
├── tsconfig.json                 ← Strict; excludes design/ from compilation
├── next.config.ts                ← Minimal — no custom rewrites, headers, or plugins
├── eslint.config.mjs             ← Flat config ESLint 9; ignores .next/, design/
├── postcss.config.mjs            ← { "@tailwindcss/postcss": {} }
├── README.md
└── AUTOMATION.md
```

**Central files for understanding the app:**
- `app/layout.tsx` — global entry point and wiring
- `app/globals.css` — entire design token system
- `components/home/content.ts` — all static marketing data
- `app/api/contact/route.ts` — only server-side logic in the project

**Files that should be removed or fixed:**
- `components/home/Testimonials.tsx` — unused; either implement or delete
- `components/home/Footer.tsx` — duplicate of `components/layout/Footer.tsx`; delete
- `components/sections/` and `components/ui/` — empty stubs; delete
- `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` — default scaffolding; delete
- `ai-agents/drug-database-agent.md`, `ai-agents/medical-data-agent.md` — irrelevant; delete or replace
- 8 agent files with incorrect naming — rename to kebab-case

---

## 7. DATA FLOW AND LOGIC FLOW

### Static Content Rendering
```
components/home/content.ts (arrays: services, values, trustPoints, faqs, pricingPlans)
  → imported by section components at build time
  → Next.js SSG renders static HTML
  → Served from Vercel CDN — zero runtime data fetching
```

### Contact Form Submission
```
User fills ContactForm.tsx ("use client" component)
  → fetch POST /api/contact with JSON body
  → app/api/contact/route.ts:
      1. validateContactPayload(body)
         - name: required, ≤100 chars
         - phone: required, 6–30 chars, regex /^[0-9+\-()./ ]+$/
         - email: required, ≤254 chars, basic regex
         - city: optional, ≤120 chars
         - message: optional, ≤2000 chars
      2. escapeHtml() on all fields before HTML assembly
      3. Resend.emails.send() → CONTACT_TO_EMAIL
         - replyTo set to submitter's email
         - Both plain text and HTML variants sent
      4. Returns JSON { success: true } or { success: false, error: "..." }
  → ContactForm renders success message or inline error state
```

### CI/CD Pipeline
```
git push to main / PR opened
  → GitHub Actions ci.yml (Node 22):
      1. npm run check:repo     → kebab-case agent names + no legal placeholders
      2. npm run check:umlauts  → no ae/oe/ue transliterations in app/, components/, design/src/
      3. npm run lint           → ESLint
      4. npm run typecheck      → tsc --noEmit
      5. npm run build          → next build
  → Vercel auto-deploys on successful merge to main

Weekly (Monday 6 AM UTC):
  → check:repo + check:umlauts + npm audit --omit=dev --audit-level=high
```

---

## 8. UI / UX STRUCTURE

### Pages and User Journey
```
/ (Landing)
  ├── Hero → primary CTA: "Jetzt Beratung anfragen" → /contact
  ├── ServicesOverview (3 of 5 services)
  ├── Trust (4 metrics: 15+ Jahre, 24/7, 500+ Familien, 100% Regional + testimonial quote)
  └── CallToAction → /contact

/services → Full 5-service detail list with descriptions
/pricing  → 3-tier table: Basis (2.490€) / Komfort (2.990€, highlighted) / Intensiv (3.490€)
/faq      → 4 collapsible accordion questions
/about    → 4 values + process steps
/contact  → Contact form (name, phone, email, city, message)
/profil   → Owner biography + company background + portrait photo
/impressum, /datenschutz → German legal pages (required by law)
```

### Major UI Components
| Component | Role | Notes |
|---|---|---|
| `Navbar` | Top navigation + mobile menu | Native `<details>` — no JS; keyboard accessible |
| `Hero` | First impression + primary CTA | Maritime decorative background |
| `SectionContainer` | Background + vertical rhythm wrapper | white/fog/gradient variants |
| `ContentContainer` | Max-width + horizontal padding | narrow/default/wide sizes |
| `SectionHeader` | Badge + heading + description | left/center aligned |
| `PageIntro` | Page-level header block | Reused on all inner pages |
| `CallToAction` | Bottom-of-page CTA card | Consistent conversion prompt across all pages |
| `ContactForm` | Lead capture | "use client", loading state, success/error feedback |
| `DecorativeBackground` | Maritime SVG decoration | hero/grid/waves/lines variants |
| `icons/` | SVG icon components | Anchor, Compass, Lighthouse, Rope, ShipWheel, Wave |

### Design System Tokens (from globals.css)
| Token | Value | Role |
|---|---|---|
| `--primary` | `#1e3a5f` | Navy blue — brand primary |
| `--primary-dark` | `#152a45` | Hover/active states |
| `--secondary` | `#7f9c96` | Sage green — accent |
| `--sand` | `#e8d5c4` | Warm background accents |
| `--background` | `#f2f4f7` | Page background |
| `--foreground` | `#1f2a36` | Body text |
| `--text-muted` | `#6b7885` | Secondary text |
| `--space-section` | `clamp(5rem, 8vw, 8rem)` | Vertical section padding |
| Container max-width | `1200px` | Via `.container-shell` |
| Card radius | `1rem` | `--radius-card` |
| Font stack | Segoe UI / Inter / Helvetica Neue / Arial | System fonts |

### UX Weaknesses
- No inline field-level validation — errors shown only on submit
- No loading spinner/skeleton during form submission
- No dedicated confirmation page after submission — only inline state change
- Mobile menu uses `<details>` — functional but visually unconventional
- No breadcrumb navigation on inner pages
- Pricing bullets do not clarify inclusions/exclusions
- No cookie consent banner (required before any tracking is added)

### Missing States
- Custom 404 page — Next.js default shown
- Custom 500/error page — Next.js default shown
- Offline detection — not applicable for static site, but form should handle network errors

---

## 9. CODE QUALITY REVIEW

### Strengths
- TypeScript strict mode — no observable `any` types
- API route: validation fully typed, isolated into pure functions (`validateContactPayload`, `escapeHtml`, `clean`, `isRecord`, `jsonUtf8`)
- XSS prevention: all user input passed through `escapeHtml()` before HTML email assembly
- CSS variables used consistently — no magic color values in component JSX
- Component props typed throughout with explicit interfaces
- CI pipeline enforces quality gates before any deployment

### Issues

| Issue | Severity | Location |
|---|---|---|
| CI fails: 8 agent files violate kebab-case naming | **Critical** | `ai-agents/*.md` |
| CI fails: ProfilePage.tsx has umlaut encoding artifacts (mojibake from DOCX) | **High** | `components/pages/ProfilePage.tsx` |
| `CONTACT_FROM_EMAIL` default `onboarding@resend.dev` rejected by Resend in production | **High** | `app/api/contact/route.ts:21` |
| No rate limiting or spam protection on contact API | **High** | `app/api/contact/route.ts` |
| Dead code: `Testimonials.tsx` never imported | Low | `components/home/Testimonials.tsx` |
| Duplicate Footer component | Medium | `components/home/Footer.tsx` vs `components/layout/Footer.tsx` |
| `content.ts` in wrong folder (is data, not a component) | Low | `components/home/content.ts` |
| Empty stub directories | Low | `components/sections/`, `components/ui/` |
| Default Next.js scaffolding assets still present | Low | `public/next.svg`, `vercel.svg`, etc. |
| No field-level validation in ContactForm | Medium | `components/home/ContactForm.tsx` |
| No `next/image` — raw `<img>` tag for portrait | Low | `components/pages/ProfilePage.tsx` |
| No error boundaries on any route | Medium | All page routes |
| No automated tests | **High** | Project-wide |
| Irrelevant agent files | Low | `ai-agents/drug-database-agent.md`, `medical-data-agent.md` |

### Performance Notes
- No `next/image` optimization for the portrait image
- System font stack — no web font loading overhead (intentional, good)
- All pages static at build time — optimal for CDN delivery
- No code splitting configuration needed beyond Next.js defaults

---

## 10. RISK AREAS

| Risk | Severity | Description |
|---|---|---|
| CI failure blocks all merges | **Critical** | 8 agent naming violations + ProfilePage encoding artifacts both fail CI |
| Contact emails silently not delivered in production | **High** | Default `onboarding@resend.dev` sender rejected; must use verified domain |
| No spam/bot protection on contact API | **High** | Can be abused for email spam via owner's Resend quota |
| Content updates require developer | Medium | All copy is hardcoded — no CMS or admin interface |
| GDPR analytics gap | Medium | Adding any tracking later requires cookie consent implementation from scratch |
| Pricing data drift | Medium | Prices in `content.ts` must be manually kept in sync with actual pricing |
| Design system divergence | Low | `design/` workspace may drift from production components |
| Missing error UX | Medium | Users hitting 404 see generic Next.js default |
| No lead audit trail | Medium | Contact submissions exist only in email — no history, no backup |

---

## 11. BUSINESS REFERENCE

### Contact Details
| Field | Value |
|---|---|
| Company | Hanseatische Senioren Alltagsbegleitung (HSA) |
| Owner | Wolfgang Posdziech |
| Address | Wulfsdorfer Weg 108d, 22359 Hamburg |
| Phone | +49 171 626 60 18 |
| Email | posdziech@t-online.de |
| USt-ID | DE313499881 |
| Service area | Hamburg North & West, ~20 km radius (expanding to 50 km metro) |
| Partner | Der PflegeKönig (24h care placement partner) |

### Services (from content.ts)
1. **24-Stunden Betreuung** — placement of live-in care workers
2. **Alltägliche Hilfe** — personal care, hygiene, daily routines
3. **Gesellschaft** — social companionship, outings, cultural events
4. **Haushalt** — shopping, cooking, household structure
5. **Entlastung für Familien** — family coordination and communication

### Pricing (from content.ts)
| Plan | Price | Target |
|---|---|---|
| Basis | ab 2.490 EUR/month | Stable care situations |
| Komfort | ab 2.990 EUR/month | Most common needs (highlighted as recommended) |
| Intensiv | ab 3.490 EUR/month | High support requirements |

### Core Values (from content.ts)
1. Würde und Respekt
2. Zuverlässigkeit
3. Menschliche Wärme
4. Vertraute Umgebung
