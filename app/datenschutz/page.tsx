import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Hanseatischen Senioren Alltagsbegleitung.",
  robots: { index: false },
};

export default function DatenschutzPage(): React.JSX.Element {
  return (
    <>
      <PageIntro badge="Rechtliches" heading="Datenschutzerklärung" />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="mx-auto max-w-2xl prose prose-sm text-[var(--foreground)]">
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
              {" "}{business.owner}, {business.address}, {business.zip} {business.city}.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei Vercel gehostet. Anbieter ist die Vercel Inc.,
              340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p>
              Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr
              ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {business.owner}
              <br />
              {business.address}
              <br />
              {business.zip} {business.city}
              <br />
              Telefon: {business.phoneDisplay}
              <br />
              E-Mail: {business.email}
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
              b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich
              ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
              Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3>E-Mail-Versand über Resend</h3>
            <p>
              Für den Versand von E-Mails über das Kontaktformular nutzen wir den Dienst
              Resend. Anbieter ist die Resend Inc. Ihre Daten werden zum Zweck des
              E-Mail-Versands an Resend übermittelt.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung
              dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
              Daten können Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
