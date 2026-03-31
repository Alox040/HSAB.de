# Repository-Struktur (Übersicht)

Baum **ohne** `node_modules/` und `.next/`. Kurzbeschreibung je sichtbarem Top-Level-Bereich bzw. logischer Gruppe.

```
HSA.de/
├── .claude/              Cursor/Claude lokale Einstellungen (kein App-Code)
├── .github/              CODEOWNERS, PR-Template, Workflows (CI + Scheduled Audit)
├── .vercel/              Lokale Vercel-Link-Metadaten (in .gitignore; nicht committen)
├── ai/
│   ├── agents/           Markdown-Definitionen für KI-Agenten (kebab-case, von repo-health geprüft)
│   └── context/          Projekt-Kontext, Blaupause, Rewrite-Plan, Referenz; teils .docx
├── app/                  Next.js App Router: pages, layout, API contact, globals.css, error boundaries
├── components/           React-UI: layout, sections, forms, ui inkl. icons
├── designs/              Eigenständiges Vite/Figma-nahes Paket; nicht in Root-Typecheck eingebunden
├── docs/                 Markdown-Dokumentation + Binärdateien (.docx)
├── lib/                  `content.ts` — zentrale statische Geschäftsdaten
├── project-docs/         Spiegel/Duplikat zentraler Docs + .docx
├── public/               Statische Web-Assets
├── scripts/              Node: Repo-Health, Umlaut-Check
├── src/                  Leerer bzw. unbenutzter Ordner für die Root-Next-App (keine app-Reexports dort)
├── eslint.config.mjs
├── next.config.ts        Minimale Next-Konfiguration (leeres options-Objekt)
├── package.json / package-lock.json
├── postcss.config.mjs
├── README.md             Leer (Stand Export)
└── tsconfig.json         TS strict; path `@/*` → Root; `designs` exkludiert
```

## Erwartete aber fehlende Strukturen (Template-Vergleich)

| Erwartung (aus Analyse-Vorlage) | Ist |
|----------------------------------|-----|
| `apps/` | **Nicht vorhanden** |
| `packages/` | **Nicht vorhanden** |
| `docs/context-export/` | **Neu angelegt** (dieser Export) |

## Unterordner `designs/` (Kurz)

Eigenes Paket mit `src/app/` (Komponenten/Pages im Vite-Kontext), `vite.config.ts`, UI-Bibliothek-ähnlichen Dateien — **parallel** zur Haupt-Website, nicht der deployte Next.js-Entry.
