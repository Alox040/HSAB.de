# Website-Status (Next.js)

## Vorhanden

Ja — die Hauptanwendung ist eine **Next.js-App** im **App Router** unter `app/`.

## Next.js-Struktur

| Element | Pfad / Befund |
|---------|----------------|
| Root-Layout | `app/layout.tsx` (Fonts: Merriweather, `metadata`, `Navbar`, `main`, `Footer`) |
| Globale Styles | `app/globals.css` |
| Startseite | `app/page.tsx` |
| Dynamische API | `app/api/contact/route.ts` (`POST`) |
| Fehler | `app/error.tsx`, `app/not-found.tsx` |

**Build-Ausgabe (Abgleich):** Routen u. a. `/`, `/about`, `/contact`, `/datenschutz`, `/faq`, `/impressum`, `/pricing`, `/profil`, `/services`; `/api/contact` als dynamische Route.

## Sections (Startseite)

Aus `app/page.tsx` importiert und gerendert:

1. `Hero`
2. `ServicesOverview`
3. `Benefits`
4. `Trust`
5. `Process`
6. `Pricing`
7. `Faq`
8. `ServiceArea`
9. `CallToAction`
10. Kontakt-Sektion mit `ContactForm` (`id="kontakt"`)

## Routing

- File-based Routing unter `app/`
- `metadata` und `alternates.canonical` auf der Startseite gesetzt (`app/page.tsx`)
- Rechtstexte: `app/impressum/page.tsx`, `app/datenschutz/page.tsx`

## Umfragen-Integration

Im Quellcode der Root-App (`app/`, `components/`, `lib/`) wurde **keine** Einbindung von Umfrage-Tools (z. B. Typeform, embedding URLs, „Umfrage“-Komponenten) gefunden. Suche nach `Umfrage`/`survey` in diesen Bereichen: ohne Treffer (außerhalb von `node_modules`).

## CTA Buttons

- Navbar: Link **Kontakt** → `/contact`
- Section `CallToAction`: Links **Kostenlos anfragen** → `/contact`, Telefon-Link `tel:…` aus `business.phone`
- Weitere CTAs können in Section-Komponenten vorkommen — Muster: Links zu `/contact` und `tel:` ist konsistent mit `CallToAction` und Navbar

## Deployment (Vercel)

- **Lokal im Workspace:** `.vercel/project.json` mit `projectName`: `hsade` (wird von `.gitignore` ignoriert).
- **`vercel.json`:** im Repo-Root **nicht** vorhanden.
- **Produktion:** letzter Deploy-Status / Domain-Verifikation liegen **nicht** im Git-Repository.

## Bekannte UI-Probleme

Aus dem Code allein **keine** automatisch verifizierbaren offenen UI-Bugs dokumentiert. Eine manuelle oder visuelle Prüfung ist nicht erfolgt.

## Bekannte Encoding-Probleme

- Skript `scripts/check-german-umlauts.mjs` prüft `app/` und `components/`; **lokaler Lauf:** keine Transliterations-Funde.
- `docs/REWRITE_PLAN.md` erwähnt historisch korrigierte/korrupte Profil-Inhalte; **aktuelle** `app/profil/page.tsx` nutzt `next/image` und lesbaren deutschen Fließtext (keine automatische DOCX-Korruptionsprüfung durch diesen Export).
