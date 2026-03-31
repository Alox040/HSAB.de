# REWRITE PLAN — Seniorenbetreuung Website

> Engineering-level rebuild plan. Critical assessment of what exists, what must change, and how to do it without repeating the same mistakes.

---

## IS A REWRITE JUSTIFIED?

**Short answer: No full rewrite. Targeted rebuild of the structure.**

The current project is a small static marketing site with one API route. The core feature set is correct. The tech choices (Next.js App Router, Tailwind v4, Resend, Vercel, TypeScript strict) are appropriate and should be kept.

The problems are structural, not conceptual:
- Folders are misused (data files inside component folders, empty stub directories)
- CI is broken and has been broken since at least the last two commits
- No test coverage anywhere
- ProfilePage content is corrupted from a binary import
- Dead code accumulates with no enforcement against it

A full rewrite wastes the working parts. A structural rebuild with aggressive cleanup is the correct approach.

---

## WHAT MUST BE PRESERVED

| Item | Reason |
|---|---|
| Tech stack: Next.js App Router, React 19, TypeScript strict, Tailwind v4, Resend | Correct choices for this project scope |
| `app/globals.css` design token system | CSS variable architecture is clean and complete — port as-is |
| `app/api/contact/route.ts` | Validation and HTML escaping logic is solid — keep the pattern |
| `components/shared/` primitives | `SectionContainer`, `ContentContainer`, `SectionHeader`, `DecorativeBackground` — reusable, well-structured |
| Maritime icon set (`components/shared/icons/`) | Thematically consistent; keep or move to new location |
| Vercel + GitHub Actions CI pipeline | Infrastructure works — fix the failing checks, don't replace the pipeline |
| Business data from `content.ts` | Source of truth for services, pricing, values, FAQs — migrate to `lib/content.ts` |
| Legal page content (Impressum, Datenschutz) | Real legal data is present — retain exactly |
| SEO metadata structure | Per-page metadata + OpenGraph + JSON-LD is implemented correctly — keep the pattern |

---

## WHAT MUST BE DISCARDED

| Item | Reason |
|---|---|
| `components/home/Footer.tsx` | Duplicate of `components/layout/Footer.tsx` — delete |
| `components/home/Testimonials.tsx` | Never imported, never used — delete |
| `components/sections/` | Empty directory — delete |
| `components/ui/` | Empty directory — delete |
| `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` | Default Create Next App scaffolding — delete |
| `ai-agents/drug-database-agent.md`, `ai-agents/medical-data-agent.md` | Completely irrelevant to this project — delete |
| `docs/Entwurd Website Informationen.docx` | Binary file that caused the encoding corruption in ProfilePage — should not be in the repo; store externally |
| Corrupted content in `ProfilePage.tsx` | Re-enter the profile text manually from the source document with correct UTF-8 encoding |

---

## WHAT SHOULD BE REDESIGNED

### 1. Folder Structure — Fix immediately
The current structure has data in component folders, empty stub directories, and unclear folder boundaries. This is the single most disorienting thing about the codebase.

**Current (broken):**
```
components/
├── home/           ← section components AND the data file AND an unused component AND a dead Footer
├── pages/          ← full-page wrapper components
├── layout/         ← global layout (this is fine)
├── shared/         ← primitives (this is fine)
├── sections/       ← EMPTY
└── ui/             ← EMPTY
```

**Target:**
```
components/
├── layout/         ← Navbar, Footer, PageIntro (global shell — unchanged)
├── sections/       ← All page section components (Hero, ServicesOverview, Trust, etc.)
├── forms/          ← ContactForm and any future form components
└── ui/             ← Shared primitives (SectionContainer, ContentContainer, SectionHeader, icons)

lib/
└── content.ts      ← All static data (services, pricing, FAQs, values, trust points)
```

- `components/home/` is eliminated. Its section components move to `components/sections/`.
- `components/pages/` is eliminated. Page composition moves directly into `app/*/page.tsx` (which is where Next.js expects it).
- `lib/content.ts` replaces `components/home/content.ts`.

### 2. Page Composition — Remove the redundant layer
Currently: `app/*/page.tsx` → imports from `components/pages/*Page.tsx` → which assembles sections.

The `components/pages/` layer adds a file and an import for no benefit. `app/*/page.tsx` can compose sections directly. In a project this size, two levels of indirection for page composition is overhead, not architecture.

**Exception:** Keep page composition components only if a page is long enough that the route file becomes unreadable. Evaluate per page.

### 3. ProfilePage Content — Fix encoding, use `next/image`
ProfilePage.tsx was populated by importing DOCX content, which introduced encoding artifacts. The fix is to:
1. Re-enter all German text manually with correct UTF-8 characters
2. Replace raw `<img>` with `next/image` for the portrait
3. Verify with `npm run check:umlauts` before committing

### 4. Contact Form — Add field-level validation
The current form validates only on submit. Users get no feedback until they try to send. Minimum improvement:
- Validate phone format on blur
- Validate email format on blur
- Keep server-side validation in the API unchanged

### 5. Fix CI — Both blocking checks must pass before anything else

**Fix 1: Rename agent files to kebab-case**
```
bugfixagent.md         → bugfix-agent.md
developeragent.md      → developer-agent.md
docsagent.md           → docs-agent.md
orchestratoragent.md   → orchestrator-agent.md
performanceagent.md    → performance-agent.md
refactoragent.md       → refactor-agent.md
researcheragent.md     → researcher-agent.md
securityagent.md       → security-agent.md
ui-reviewagent.md      → ui-review-agent.md
```

**Fix 2: Fix ProfilePage encoding**
Run `npm run check:umlauts` to identify exact locations, then re-enter affected strings with correct characters.

**Fix 3: Set `CONTACT_FROM_EMAIL` to a verified Resend sender domain**
The default `onboarding@resend.dev` is only valid in Resend's sandbox/test mode. Production emails will be rejected without a verified sender domain.

---

## RECOMMENDED V2 ARCHITECTURE

### Folder Structure
```
seniorenbetreuung/
├── app/
│   ├── layout.tsx              ← Root layout (unchanged)
│   ├── globals.css             ← Design tokens (unchanged)
│   ├── page.tsx                ← Landing page — composes sections directly
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── datenschutz/page.tsx
│   ├── faq/page.tsx
│   ├── impressum/page.tsx
│   ├── not-found.tsx           ← NEW: custom 404
│   ├── error.tsx               ← NEW: custom error boundary
│   ├── pricing/page.tsx
│   ├── profil/page.tsx
│   ├── services/page.tsx
│   └── api/
│       └── contact/route.ts    ← Unchanged
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Unchanged
│   │   ├── Footer.tsx          ← Unchanged (canonical)
│   │   └── PageIntro.tsx       ← Unchanged
│   │
│   ├── sections/               ← All page section components
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── Benefits.tsx
│   │   ├── Trust.tsx
│   │   ├── Process.tsx
│   │   ├── Pricing.tsx
│   │   ├── Faq.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── CallToAction.tsx
│   │   └── Testimonials.tsx    ← Keep only if actually used; delete otherwise
│   │
│   ├── forms/
│   │   └── ContactForm.tsx     ← Moved from components/home/
│   │
│   └── ui/                     ← Shared primitives
│       ├── SectionContainer.tsx
│       ├── ContentContainer.tsx
│       ├── SectionHeader.tsx
│       ├── DecorativeBackground.tsx
│       └── icons/
│           └── *.tsx
│
├── lib/
│   └── content.ts              ← Moved from components/home/content.ts
│
├── public/
│   └── images/
│       └── wolfgang-posdziech-portrait.jpg
│
├── ai-agents/                  ← Renamed to kebab-case
├── scripts/                    ← Unchanged
├── .github/                    ← Unchanged
├── project-docs/               ← This folder
└── [config files]              ← Unchanged
```

### What changes, what doesn't
| Area | Change |
|---|---|
| `app/api/contact/route.ts` | No change — logic is sound |
| `app/globals.css` | No change — design tokens are complete |
| `components/layout/` | No change |
| `components/shared/` → `components/ui/` | Rename only |
| `components/home/` → split | Sections → `components/sections/`; data → `lib/content.ts`; form → `components/forms/` |
| `components/pages/` | Eliminate — compose directly in `app/*/page.tsx` |
| CI | Fix naming violations + encoding; do not touch pipeline structure |
| `ProfilePage.tsx` | Re-encode content from scratch; add `next/image` |

---

## ADDITIONAL IMPROVEMENTS (not blockers)

### Add rate limiting to the contact API
The contact endpoint has no protection against automated abuse. At minimum, add IP-based rate limiting via Next.js middleware or Vercel Edge Config.

```typescript
// Minimal middleware approach
// middleware.ts at project root
import { NextRequest } from 'next/server'
// ... rate limit logic
```

Consider: `@upstash/ratelimit` with Vercel KV, or a simple in-memory counter behind a Vercel Edge Function.

### Add Zod for shared validation schema
Currently, validation logic exists only in the API. The ContactForm has no schema. A shared Zod schema eliminates the duplication risk when validation rules change.

```typescript
// lib/schemas/contact.ts
import { z } from 'zod'
export const contactSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(6).max(30).regex(/^[0-9+\-()./ ]+$/),
  email: z.string().email().max(254),
  city: z.string().max(120).optional(),
  message: z.string().max(2000).optional(),
})
```

### Add automated tests
Zero test coverage is a problem as soon as anyone else touches the API route or validation logic. Minimum viable test setup:

```
tests/
├── unit/
│   └── contact-validation.test.ts   ← Test validateContactPayload logic
└── e2e/
    └── contact-form.spec.ts         ← Playwright: submit form, verify email sent
```

Stack: Vitest (unit) + Playwright (e2e). Both integrate with Next.js without configuration overhead.

### Add `not-found.tsx` and `error.tsx`
Two files, 10 lines each. There is no reason to show Next.js defaults.

### Sitemap and robots.txt
`next-sitemap` or Next.js 13+ built-in sitemap generation. The domain is `seniorenbetreuung.de` — add canonical sitemap before SEO becomes a concern.

---

## 5-PHASE REBUILD ROADMAP

### Phase 1: Unblock CI (do this first — nothing else matters while CI is failing)
**Goal:** Every push passes all CI gates.

- Rename 8–9 agent files to kebab-case
- Delete `drug-database-agent.md` and `medical-data-agent.md`
- Fix encoding artifacts in `ProfilePage.tsx` (re-enter text manually)
- Set `CONTACT_FROM_EMAIL` in Vercel environment to a verified sender domain
- Verify: `npm run ci` exits 0 locally before pushing

**Success criteria:** CI workflow passes on push to main. `npm run ci` exits 0 locally.

---

### Phase 2: Structural Cleanup (eliminate technical debt)
**Goal:** Codebase has no dead files, no empty directories, no misplaced files.

- Delete: `components/home/Footer.tsx`, `components/home/Testimonials.tsx`
- Delete: `components/sections/`, `components/ui/` (empty stubs)
- Delete: `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`
- Move `components/home/content.ts` → `lib/content.ts`; update all imports
- Move `components/home/ContactForm.tsx` → `components/forms/ContactForm.tsx`; update imports
- Rename `components/home/` section components → `components/sections/`; update imports
- Eliminate `components/pages/` by inlining composition into `app/*/page.tsx`
- Rename `components/shared/` → `components/ui/`; update imports
- Remove `docs/Entwurd Website Informationen.docx` from git history (binary file, causes encoding risks)
- Replace `<img>` in ProfilePage with `next/image`

**Dependencies:** Phase 1 complete (CI must pass before and after this phase)

**Success criteria:** `npm run ci` still passes. No dead files. Folder map matches V2 architecture above.

---

### Phase 3: Quality and Missing States
**Goal:** Project handles failure cases; contact form has field-level feedback.

- Add `app/not-found.tsx` — custom 404 page matching site design
- Add `app/error.tsx` — custom error boundary matching site design
- Add field-level validation to `ContactForm.tsx` (blur events on phone and email)
- Add rate limiting to `app/api/contact/route.ts` (Vercel KV + Upstash, or middleware)
- Add `sitemap.ts` and `robots.ts` using Next.js built-in metadata file conventions

**Success criteria:** Custom 404 renders correctly. Form shows field errors on blur. Contact API rejects repeated submissions from same IP.

---

### Phase 4: Testing
**Goal:** Core business logic has test coverage before any further feature development.

- Install Vitest + Testing Library
- Write unit tests for `validateContactPayload` (all validation branches)
- Write unit tests for `escapeHtml`
- Install Playwright
- Write E2E test for successful contact form submission
- Write E2E test for form validation error states
- Add test step to CI pipeline after typecheck

**Success criteria:** `npm run test` passes in CI. Contact API validation has 100% branch coverage.

---

### Phase 5: Production Readiness
**Goal:** Site is production-safe, observable, and maintainable without a developer for routine changes.

- Verify Resend sender domain (DNS records) in production
- Add Vercel Analytics (privacy-respecting, built-in) — add cookie consent banner if required by GDPR legal assessment
- Add structured logging to the contact API (log success/failure with request ID, not payload content)
- Document all env vars in `.env.example`
- Review Impressum and Datenschutz with a German legal professional
- Deploy to production, run manual smoke tests:
  - Contact form submits and email is received
  - All 9 pages render without console errors
  - Lighthouse scores: Performance >90, Accessibility >90, SEO >90

**Success criteria:** Production smoke tests pass. Email delivery confirmed. Lighthouse scores documented.
