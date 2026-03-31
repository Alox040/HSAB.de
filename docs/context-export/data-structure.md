# Datenstrukturen

Alles hier bezieht sich auf **tatsächlich im Code definierte** Typen und Konstanten. Es gibt **keine** JSON-Schemas, **keine** Medikamenten-/Leitlinien-**Schemas** und **keine** Release-**Schemas** im Sinne eines Content-Pakets.

## Medication schema

**Nicht vorhanden** im produktiven Next.js-Teil des Repositories.

## Algorithm schema

**Nicht vorhanden.**

## Guideline schema

**Nicht vorhanden** als strukturiertes Datenmodell.

- Im Ordner `designs/guidelines/Guidelines.md` kann Konzepttext liegen — das ist **keine** im App-Code verwendete Schema-Definition.

## Content package schema

**Nicht vorhanden** (kein versioniertes Content-Paket mit manifest o. ä. in der App).

## Version schema

- Nur die npm-Felddefinition: `"version": "0.1.0"` in Root-`package.json`.
- Keine separate Versionierungsdatei für Inhalte.

## Release schema

**Nicht vorhanden.**

---

## Tatsächliche Modelle (`lib/content.ts`)

### `business`

Konstantes Objekt mit u. a.: `name`, `shortName`, `owner`, Adressfelder, `phone`, `email`, `ustId`, `serviceArea`, `serviceAreaRadius`, `website`.

### `Service`

- `id: string`
- `title: string`
- `description: string`
- `details: string[]`

### `PricingTier`

- `id: string`
- `name: string`
- `price: string`
- `priceNote: string`
- `description: string`
- `features: string[]`
- `highlighted: boolean`

### `Value`

- `id: string`
- `title: string`
- `description: string`

### `FaqItem`

- `question: string`
- `answer: string`

### `ProcessStep`

- `step: number`
- `title: string`
- `description: string`

### API-Payload (`app/api/contact/route.ts`)

Internes Interface `ContactPayload`:

- `name`, `phone`, `email` (Pflichtstrings nach Validierung)
- `city?`, `message?` (optional)

Dies ist **Request/Response-Logik**, kein persistentes Datenmodell.
