# App-Status (Mobile / Medikamente / Algorithmen)

Dieses Repository enthält **keine** Expo- oder React-Native-App, **keinen** Ordner `apps/mobile` und **keine** Abhängigkeiten zu Expo in der Root-`package.json`.

Die folgende Tabelle belegt den **tatsächlichen** Ist-Zustand für die im Export-Template genannten Punkte:

| Thema | Status im Repo |
|--------|----------------|
| **Screens vorhanden** | Nicht zutreffend als „App-Screens“. Es gibt **Website-Seiten** (Next.js `app/*/page.tsx`): Start, About, Services, Pricing, FAQ, Profil, Contact, Impressum, Datenschutz. |
| **Navigation Flow** | Nur Web: `Navbar` + Verlinkung zwischen Seiten; kein App-Navigator. |
| **Medication Flow** | **Nicht vorhanden** (kein Medikamenten-Domain-Code in der Root-App). |
| **Algorithm Flow** | **Nicht vorhanden**. |
| **Search Flow** | Keine dedizierte Suchfunktion oder Such-Route im `app/`-Baum gefunden. |
| **Detail Screens Status** | Keine generischen „Detail-Screens“ außer den statischen Marketing-Unterseiten. |
| **Mock Data vs. echte Daten** | Inhalte sind **statisch** in `lib/content.ts`; Kontakt-Mail ist **echte** Integration über Resend, sofern Umgebungsvariablen gesetzt sind. |
| **Offline Support** | Nicht als PWA/Service-Worker o. ä. aus dem geprüften `app/`-Setup ersichtlich. |
| **Expo Status** | **Nicht im Projekt** (keine `expo`/`app.json`-basierte App im Root). |
| **Build Status** | **Next.js:** `npm run build` / `npm run ci` lokal erfolgreich. **designs/:** eigenes Vite-Projekt — separater Build (`designs/package.json`), nicht mit Root-CI gekoppelt sichtbar. |

**Kurzfassung:** Der exportierte „App“-Anteil ist die **Next.js-Marketing-Website**. Alles, was Medikation, Algorithmen, native App-Flows oder Expo betrifft, müsste in **anderen** Repositories liegen oder ist **nicht** Teil dieses Codes.
