import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Hanseatischen Senioren Alltagsbegleitung.",
  robots: { index: false },
};

export default function ImpressumPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Rechtliches"
        heading="Impressum"
        description="Angaben zum Anbieter dieser Website und zu den verantwortlichen Kontaktstellen."
      />

      <SectionContainer variant="white">
        <ContentContainer>
          <article className="surface-card mx-auto flex max-w-3xl flex-col gap-8 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
              <Link href="/datenschutz" className="hover:text-[var(--primary)] hover:underline">
                Zur Datenschutzerklärung
              </Link>
            </div>

            <div className="prose prose-sm max-w-none text-[var(--foreground)] prose-headings:font-semibold prose-headings:text-[var(--primary)] prose-p:leading-relaxed prose-a:text-[var(--primary)]">
              <h2>Angaben gemäß § 5 TMG</h2>

              <p>
                {business.owner}
                <br />
                {business.name}
                <br />
                {business.address}
                <br />
                {business.zip} {business.city}
              </p>

              <h2>Kontakt</h2>

              <p>
                Telefon: <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                <br />
                E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>

              <h2>Umsatzsteuer-ID</h2>

              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                <br />
                {business.ustId}
              </p>

              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>

              <p>
                {business.owner}
                <br />
                {business.address}
                <br />
                {business.zip} {business.city}
              </p>

              <h2>Streitschlichtung</h2>

              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2>Haftung für Inhalte</h2>

              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
          </article>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
