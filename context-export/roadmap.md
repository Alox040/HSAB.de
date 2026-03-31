# Roadmap (aus Repo-Inhalten ableitbar)

## Aktuelle Phase

- **Technisch:** Version `0.1.0` (`package.json`), einsetzbare Next.js-Marketing-Site mit Kontakt-API.
- **Konzeptionell:** In `docs/STARTER_BLUEPRINT.md` als **MVP** beschrieben; Zielversion dort teils als „v0.1.1“ benannt (Abweichung zur `package.json`-Version beachten).

## Nächste Schritte / Zielbild (aus `docs/STARTER_BLUEPRINT.md`)

Dort explizit als angestrebter Zustand genannt (Auszug, ohne Bewertung ob erledigt):

- CI auf jedem Push grün (lokal: `npm run ci` erfolgreich — externe GitHub-Prüfung nicht Teil dieses Exports)
- Keine toten Strukturen / klare Trennung Daten/UI (strukturell weitgehend umgesetzt laut aktueller Ordnerstruktur)
- Direkte Seitenkomposition in `app/*/page.tsx`
- Kontaktformular mit **Feld-Level-Validierung** (im Code vorhanden: Blur-Validierung im `ContactForm`)
- Custom 404 und Fehlerseiten (vorhanden: `not-found.tsx`, `error.tsx`)
- **Rate limiting** auf Contact-API (vorhanden: In-Memory in `route.ts`)
- **Unit-Tests** für Validierung — im Root-`package.json` aktuell **kein** Test-Script
- **E2E** für Kontaktflow — nicht in `package.json` konfiguriert
- Profilseite mit korrektem UTF-8 (Profilseite existiert mit `next/image`; inhaltlicher Abgleich mit Quelldokument: manuell)

Zusätzlich `docs/REWRITE_PLAN.md`: strukturelle Bereinigungen, Vermeidung von Duplikaten und irrelevanten Agent-Dateien — teils Historie, teils Checkliste; nicht Zeile für Zeile mit dem aktuellen Tree verglichen in diesem Export.

## Offene TODOs / priorisierte Tasks

**Automatisch aus dem Code nicht extrahierbar** (kein zentrales `TODO`-Ticket-System im Repo). Prioritäten müssen aus Issues/externem PM kommen.

Inhaltlich naheliegend aus der Blaupause:

1. Test-Suite (Unit/E2E) ergänzen, falls Qualitätstor gewünscht  
2. README und Blaupause mit Ist-Code synchronisieren  
3. Resend-/E-Mail-Umgebungsvariablen in allen Deployments verifizieren  

## MVP-Definition (laut `docs/STARTER_BLUEPRINT.md`)

Kernumfang: statische Präsentation der Leistungen, Lead-Erfassung, E-Mail-Zustellung — **ohne** DB, Auth, CMS, Mehrsprachigkeit (es sei denn, explizit angefordert).

## Phase-1-Planung

**Nicht** als einheitliches „Phase 1“-Dokument im Code gefunden. `REWRITE_PLAN.md` beschreibt eher eine **strukturelle Nacharbeitsphase** als Roadmap-„Phase 1“ mit Features.
