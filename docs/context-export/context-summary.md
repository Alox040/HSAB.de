# Kontext-Zusammenfassung (für externe Analyse)

## Aktueller Stand

Das Repository ist primär eine **deutschsprachige Marketing-Website** für **HSA** (Hanseatische Senioren Alltagsbegleitung) auf **Next.js 16** mit **React 19**, **Tailwind 4** und **TypeScript**. Inhalte liegen statisch in `lib/content.ts`; die einzige serverseitige Funktion ist **`POST /api/contact`** (Resend, Validierung, Rate-Limit im Speicher).

Es gibt **kein** Monorepo mit `apps/`/`packages/`, **keine** Medikamenten-/Algorithmus-Domäne und **keine** Expo-App in diesem Code.

## Was funktioniert (nachweisebar)

- Vollständiger `npm run ci`-Durchlauf im Workspace: Health-Check, Umlaut-Check, ESLint, `tsc`, **`next build`** erfolgreich.
- Mehrseitige Site mit SEO-Metadaten, Sektionen auf der Startseite, Profil mit `next/image`, rechtlichen Seiten.
- Kontaktformular mit Client-Validierung; API mit serverseitiger Validierung und HTML-Escaping.

## Was fehlt / Lücken

- **Automatisierte Tests** im Root-`package.json` nicht vorgesehen (kein Test-Script sichtbar).
- **README** ist leer.
- **Projektdoku** (`docs/STARTER_BLUEPRINT.md`) steht teils im Widerspruch zum aktuellen Code (z. B. „CI broken“, obwohl lokaler CI-Lauf grün und Rate-Limit existiert).
- **Umfrage-/Survey-Integration** in der produktiven App nicht gefunden.
- **Vercel-Produktionsstatus** (Deployment-URL, Domain, Env in der Cloud) aus Git allein nicht verifizierbar.

## Höchste Priorität (für Workflow-Planung außerhalb dieses Repos)

Sinnvolle nächste Schritte ergeben sich aus Lücken, **ohne** sie hier zu implementieren:

1. Doku und `package.json`-Version mit dem **realen** Ist-Zustand synchronisieren (inkl. README).
2. Entscheiden, ob **`designs/`** weiter gepflegt oder vom Hauptprodukt entkoppelt dokumentiert wird (eigenes Build/CI).
3. **Resend/ENV** in Zielumgebung verifizieren; Rate-Limit-In-Memory für skalierte Serverless-Instanzen ggf. strategisch hinterfragen (Architekturfrage, nicht aus Messungen im Repo).
4. Teststrategie (Unit für Payload-Validierung, E2E für Formular) — in Blaupause genannt, im Build noch nicht abgebildet.

## Hinweis zum Export-Umfang

Die vom Nutzer genannten Begriffe (Medication Flow, Expo, Content-Package-Schema, …) sind im **vorliegenden** Repository **nicht** belegt; der Export markiert das explizit statt Platzhalter zu erfinden.
