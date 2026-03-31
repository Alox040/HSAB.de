# STARTER BLUEPRINT — Seniorenbetreuung Website

**This file is written for AI coding assistants.**
Read this before touching any file. Do not improvise core architecture without checking this file first.

If you are about to create a new folder, add a new dependency, change the component structure, or modify how pages are composed — stop and check whether this document already defines the correct approach.

---

## WHAT THIS PROJECT IS

A German-language marketing website for **Hanseatische Senioren Alltagsbegleitung (HSA)**, a one-person senior home-care placement service in Hamburg, Germany. Owner: Wolfgang Posdziech.

The site does exactly three things:
1. Presents services, pricing, company profile, and trust signals to potential clients
2. Captures leads via a contact form (name, phone, email, city, message)
3. Delivers those leads as emails to the owner via Resend

There is no user authentication. There is no database. There is no admin panel. There is no CMS. All content is static. The only dynamic element is the contact form API route.

---

## WHAT THIS PROJECT IS SUPPOSED TO BECOME

The current version (v0.1.1) is an MVP with structural problems. The target state is:

- CI passes on every push (currently broken)
- No dead code or empty stub directories
- Data separated from UI components
- Page composition logic lives in `app/*/page.tsx` directly, not in a redundant `components/pages/` layer
- Contact form has field-level validation
- Custom 404 and error pages
- Rate limiting on the contact API
- Unit tests covering validation logic
- E2E test covering the contact form flow
- ProfilePage has correct UTF-8 encoded German text (no encoding artifacts)

The project scope does not expand beyond this. Do not add a CMS, a database, authentication, or multi-language support unless explicitly requested by the user.

---

## CURRENT KNOWN FAILURES (fix these before anything else)

1. **CI is broken.** Two gates fail on every push:
   - `check:repo` fails because 8+ files in `ai-agents/` do not follow kebab-case naming
   - `check:umlauts` fails because `components/pages/ProfilePage.tsx` has encoding artifacts from a DOCX import
2. **Contact emails will fail in production.** `CONTACT_FROM_EMAIL` defaults to `onboarding@resend.dev`, which Resend rejects unless that domain is verified. The Vercel environment variable must be set to a verified sender address.

**Do not start any other work until CI passes.**

---

## WHAT MUST NOT BE REPEATED FROM THE PREVIOUS VERSION

These are mistakes made in the current codebase. Do not reproduce them.

| Mistake | What to do instead |
|---|---|
| Putting `content.ts` (a data file) inside `components/home/` | Data files belong in `lib/content.ts` — separate from UI |
| Creating `components/pages/` as a middle layer between route files and sections | Compose sections directly in `app/*/page.tsx` |
| Creating empty directories (`components/sections/`, `components/ui/`) that signal planned-but-never-done work | Only create a directory when it will immediately contain files |
| Having two `Footer.tsx` components in different folders | One component, one location — `components/layout/Footer.tsx` |
| Importing DOCX content directly into a component file | Content must be entered as UTF-8 strings; never import binary documents |
| Adding AI agent files irrelevant to the project (`drug-database-agent.md`, `medical-data-agent.md`) | Agent files describe real roles used in this project only |
| Leaving dead code (`Testimonials.tsx` — never imported) | Remove unused files; do not leave them for later |
| No tests | All new validation logic must have unit tests |
| No rate limiting on the contact API | Rate limiting is a requirement, not an optimization |
| Default scaffolding assets left in `public/` (`next.svg`, `vercel.svg`, etc.) | Delete them on project initialization |

---

## PREFERRED ARCHITECTURE

### Stack (do not change without a documented reason)
- **Framework:** Next.js App Router (NOT Pages Router)
- **Language:** TypeScript strict mode — no `any`, no type assertions without justification
- **Styling:** Tailwind CSS v4 with CSS custom properties for design tokens — defined in `app/globals.css`
- **Email:** Resend — only in `app/api/contact/route.ts`
- **Deployment:** Vercel
- **CI:** GitHub Actions — `.github/workflows/ci.yml`

### Layer model
```
app/*/page.tsx              ← Route definition + metadata + section composition
components/layout/          ← Navbar, Footer, PageIntro — global shell only
components/sections/        ← Page section components (Hero, ServicesOverview, etc.)
components/forms/           ← Form UI components
components/ui/              ← Shared layout primitives (SectionContainer, ContentContainer, etc.)
lib/content.ts              ← All static data (services, pricing, values, FAQs, trust points)
app/api/contact/route.ts    ← Only server-side logic in the project
```

### Rules for each layer

**`app/*/page.tsx`:**
- Defines metadata (`export const metadata`)
- Imports section components and composes the page
- Does not contain business logic
- Does not contain data — import from `lib/content.ts`

**`components/layout/`:**
- Global elements that appear on every page: Navbar, Footer, PageIntro
- Do not put page-specific components here

**`components/sections/`:**
- One file per named page section (Hero, ServicesOverview, Pricing, etc.)
- Stateless where possible — receive data as props from the page or from `lib/content.ts`
- No API calls, no side effects

**`components/forms/`:**
- Client components (`"use client"`) for interactive form UI
- Handles local state, loading, and user feedback
- Does not own validation logic — shares schema with API via `lib/schemas/`

**`components/ui/`:**
- Purely structural: `SectionContainer`, `ContentContainer`, `SectionHeader`, `DecorativeBackground`, icon SVGs
- No business logic, no content data
- Props-driven only

**`lib/content.ts`:**
- Single source of truth for all static marketing content
- Exported as typed arrays/objects
- No UI imports

**`app/api/contact/route.ts`:**
- Validates input (type-safe, explicit checks)
- Sanitizes before building HTML (escapeHtml)
- Calls Resend
- Returns typed JSON responses
- Never logs user data; only logs success/failure status

---

## PREFERRED CODING STYLE

### TypeScript
- Strict mode is non-negotiable — `tsconfig.json` already enforces it
- Explicit return types on all functions that are not single-expression arrow functions
- No `as` type assertions — fix the types instead
- No `// @ts-ignore` or `// @ts-expect-error` without a comment explaining why
- Use discriminated unions for result types: `{ ok: true; data: X } | { ok: false; error: string }`

### React / JSX
- Functional components only — no class components
- Props interfaces defined explicitly above the component
- No inline objects in JSX (`style={{ ... }}`) — use Tailwind or CSS variables
- `"use client"` only on components that genuinely need it (event handlers, `useState`, `useEffect`)
- Page route files (`app/*/page.tsx`) are server components — keep them server components

### CSS / Tailwind
- Design tokens live in CSS variables in `app/globals.css` — do not hardcode colors or spacing in JSX
- Use `var(--token-name)` via `[color:var(--primary)]` Tailwind syntax for custom tokens
- Do not write separate CSS files for components — use Tailwind utilities
- Do not use `@apply` in CSS files — defeats the purpose of Tailwind
- Responsive design: mobile-first (`sm:`, `md:`, `lg:` prefixes)

### API Routes
- Validate every field before using it — treat all input as hostile
- Use explicit validation functions, not one-liners
- Escape all user input before including it in HTML
- Environment variables must be checked for existence before use — fail with a clear error message if missing
- Never return stack traces or internal errors to the client

### Naming Conventions
- Files: `kebab-case.tsx` — no exceptions
- Components: PascalCase matching the filename
- Functions: camelCase
- CSS variables: `--kebab-case`
- Constants and exported data: camelCase for arrays, PascalCase for types/interfaces

---

## PREFERRED FOLDER STRUCTURE

```
seniorenbetreuung/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── not-found.tsx           ← Required
│   ├── error.tsx               ← Required
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── datenschutz/page.tsx
│   ├── faq/page.tsx
│   ├── impressum/page.tsx
│   ├── pricing/page.tsx
│   ├── profil/page.tsx
│   ├── services/page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageIntro.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── Benefits.tsx
│   │   ├── Trust.tsx
│   │   ├── Process.tsx
│   │   ├── Pricing.tsx
│   │   ├── Faq.tsx
│   │   ├── ServiceArea.tsx
│   │   └── CallToAction.tsx
│   ├── forms/
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── SectionContainer.tsx
│       ├── ContentContainer.tsx
│       ├── SectionHeader.tsx
│       ├── DecorativeBackground.tsx
│       └── icons/
│           ├── AnchorIcon.tsx
│           ├── CompassIcon.tsx
│           ├── LighthouseIcon.tsx
│           ├── RopePattern.tsx
│           ├── ShipWheelIcon.tsx
│           └── WavePattern.tsx
│
├── lib/
│   └── content.ts              ← All static data
│
├── ai-agents/                  ← All filenames must be kebab-case
├── scripts/
│   ├── repo-health-check.mjs
│   └── check-german-umlauts.mjs
├── .github/workflows/
│   ├── ci.yml
│   └── scheduled-audit.yml
├── project-docs/               ← This folder
├── public/
│   └── images/
│       └── wolfgang-posdziech-portrait.jpg
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── README.md
└── AUTOMATION.md
```

**Forbidden directories:**
- `components/home/` — eliminated; do not recreate
- `components/pages/` — eliminated; do not recreate
- Empty directories of any kind

---

## FEATURE PRIORITIES

Implement in this order. Do not skip ahead.

1. **Fix CI** — `npm run ci` must exit 0 before any other work
   - Rename agent files to kebab-case
   - Fix ProfilePage encoding artifacts

2. **Structural cleanup** — remove dead code and reorganize folders per V2 structure
   - Delete dead files and empty directories
   - Move `content.ts` to `lib/content.ts`
   - Reorganize component folders

3. **Error pages** — `app/not-found.tsx` and `app/error.tsx`

4. **Field-level form validation** — ContactForm shows errors on blur, not just on submit

5. **Rate limiting** — Contact API must reject repeated submissions

6. **Unit tests** — `validateContactPayload` and `escapeHtml` test coverage

7. **E2E test** — Playwright contact form submission test

8. **Sitemap** — `app/sitemap.ts` using Next.js built-in generation

9. **Analytics** — only after GDPR assessment and cookie consent implementation

**Do not implement anything not on this list without explicit user instruction.**

---

## IMPLEMENTATION CONSTRAINTS

- **Language:** All user-visible text must be in German. Do not introduce English strings in the UI.
- **Content scope:** Do not expand the content structure (pages, routes, data fields) without explicit instruction.
- **Dependencies:** Do not add npm packages without a clear, specific reason. Every new dependency must have a stated purpose.
  - If you need form validation: use Zod
  - If you need rate limiting: use `@upstash/ratelimit` or Vercel middleware
  - If you need tests: use Vitest (unit) and Playwright (e2e)
  - Do not add component libraries (Radix, shadcn, MUI) to the production app — the design system in `design/` is a prototype only
- **Images:** Use `next/image` for all images — never raw `<img>` tags
- **Fonts:** System font stack only — no web font loading (`Segoe UI`, `Inter`, `Helvetica Neue`, `Arial`)
- **Secrets:** Never hardcode API keys, email addresses, or tokens. All secrets via environment variables. Document in `.env.example` with placeholders.
- **CI gates:** Every commit must pass `npm run ci` locally before push. If CI fails, fix the root cause — do not bypass gates.
- **German characters:** All German text must use proper Unicode characters (ä, ö, ü, Ä, Ö, Ü, ß). Never use ae, oe, ue as substitutes. The CI umlaut check will catch violations.

---

## REFACTORING RULES

When refactoring existing code:

1. **Never break CI.** Run `npm run ci` before and after every refactor. If it passes before and fails after, revert and try again.

2. **Move files by updating all imports.** Do not leave orphaned imports. TypeScript strict mode will catch them — use `npm run typecheck` to verify.

3. **Delete dead code immediately.** If a component is unused, delete it in the same commit that identifies it as unused. Do not leave it "for later."

4. **Do not change what you are not fixing.** If the task is to rename a file, rename the file and update imports — nothing else. Do not improve surrounding code in the same commit.

5. **Data location is non-negotiable.** If you find content or data in a component file, move it to `lib/content.ts`. Do not add new data anywhere else.

6. **The `components/pages/` folder is eliminated.** If you are working on an older version of the codebase that still has this folder: inline all page composition into `app/*/page.tsx` and delete `components/pages/`.

7. **Validate imports after structural changes.** Run `npm run build` after any file move or delete to confirm no broken imports remain.

---

## DESIGN TOKEN REFERENCE

All tokens are defined in `app/globals.css`. Use them — do not hardcode values.

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#1e3a5f` | Brand navy — buttons, headings, key UI |
| `--primary-dark` | `#152a45` | Hover and active states |
| `--primary-light` | `#2d4d7a` | Lighter accents |
| `--secondary` | `#7f9c96` | Sage green — secondary accents |
| `--secondary-soft` | `#e7ecef` | Light sage backgrounds |
| `--sand` | `#e8d5c4` | Warm section backgrounds |
| `--sand-soft` | `#f5ece1` | Lighter warm backgrounds |
| `--fog-gray` | `#c4c9cd` | Borders, dividers |
| `--fog-light` | `#e6eaf0` | Light backgrounds |
| `--background` | `#f2f4f7` | Page background |
| `--foreground` | `#1f2a36` | Body text |
| `--text-muted` | `#6b7885` | Secondary text |
| `--border-soft` | `rgba(42,58,74,0.14)` | Subtle borders |
| `--space-section` | `clamp(5rem, 8vw, 8rem)` | Vertical section padding |
| `--space-container` | `clamp(1.5rem, 4vw, 3rem)` | Horizontal container padding |
| `--radius-card` | `1rem` | Card border radius |

---

## BUSINESS CONTENT REFERENCE

Do not invent or paraphrase business information. Use exact values.

| Field | Value |
|---|---|
| Company | Hanseatische Senioren Alltagsbegleitung (HSA) |
| Owner | Wolfgang Posdziech |
| Address | Wulfsdorfer Weg 108d, 22359 Hamburg |
| Phone | +49 171 626 60 18 |
| Email | posdziech@t-online.de |
| USt-ID | DE313499881 |
| Service area | Hamburg North & West |

Services (exact titles from `lib/content.ts`):
1. 24-Stunden Betreuung
2. Alltägliche Hilfe
3. Gesellschaft
4. Haushalt
5. Entlastung für Familien

Pricing (exact):
- Basis: ab 2.490 EUR/month
- Komfort: ab 2.990 EUR/month (recommended)
- Intensiv: ab 3.490 EUR/month

---

## ENVIRONMENT VARIABLES

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend email service authentication |
| `CONTACT_TO_EMAIL` | Yes | Recipient email for contact form submissions |
| `CONTACT_FROM_EMAIL` | Yes (production) | Verified sender address — must be a domain verified in Resend |

The contact API will return a 500 error if `RESEND_API_KEY` or `CONTACT_TO_EMAIL` are missing. It will silently fail to deliver emails in production if `CONTACT_FROM_EMAIL` is unset or set to an unverified domain.

---

## CI GATE REFERENCE

All gates run in sequence via `npm run ci`. All must pass before any push.

| Gate | Command | What it checks |
|---|---|---|
| Repository health | `npm run check:repo` | Agent files are kebab-case; no "Musterstrasse" placeholder in legal pages; README is not the default Next.js template |
| Umlaut check | `npm run check:umlauts` | No ae/oe/ue transliterations in `app/`, `components/`, `design/src/` |
| Lint | `npm run lint` | ESLint with Next.js + TypeScript rules |
| Typecheck | `npm run typecheck` | TypeScript strict mode — no errors |
| Build | `npm run build` | Production build succeeds |

If any gate fails, investigate and fix the root cause. Do not bypass, skip, or add exceptions to the check scripts.
