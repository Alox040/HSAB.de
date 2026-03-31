import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt zu HSA auf. Kostenloses Erstgespräch — wir beraten Sie unverbindlich zur Seniorenbetreuung in Hamburg.",
};

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Kontakt"
        heading="Sprechen Sie mit uns"
        description="Ein kostenloses Erstgespräch — ohne Verpflichtungen. Wir hören zu und zeigen Ihnen, was möglich ist."
      />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:items-start">
            {/* Contact info */}
            <div className="lg:col-span-5">
              <SectionHeader
                badge="Direktkontakt"
                heading="Wir sind für Sie da"
                description="Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wolfgang Posdziech antwortet persönlich."
              />

              <address className="mt-8 flex flex-col gap-6 not-italic">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Telefon
                  </p>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-lg font-semibold text-[var(--primary)] hover:underline"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    E-Mail
                  </p>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-lg font-semibold text-[var(--primary)] hover:underline"
                  >
                    {business.email}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Adresse
                  </p>
                  <p className="text-[var(--foreground)]">
                    {business.owner}
                    <br />
                    {business.address}
                    <br />
                    {business.zip} {business.city}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Einsatzgebiet
                  </p>
                  <p className="text-[var(--foreground)]">
                    {business.serviceArea} und Umland bis {business.serviceAreaRadius}
                  </p>
                </div>
              </address>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              <div className="surface-card flex flex-col gap-5 p-6">
                <SectionHeader
                  badge="Formular"
                  heading="Anfrage senden"
                  description="Schildern Sie uns kurz Ihre Situation. Wir melden uns zeitnah und besprechen in Ruhe, welche Unterstützung passend sein kann."
                />
                <div className="text-sm leading-relaxed text-[var(--text-muted)]">
                  <p>
                    Ihre Anfrage landet direkt bei {business.owner}. In der Regel
                    erhalten Sie innerhalb von ein bis zwei Werktagen eine persönliche
                    Rückmeldung.
                  </p>
                </div>
                <div className="pt-2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
