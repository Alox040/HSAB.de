import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import Pricing from "@/components/sections/Pricing";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Betreuungspreise bei HSA. Drei Pakete ab 2.490 €/Monat — individuelles Angebot nach kostenlosem Erstgespräch.",
};

export default function PricingPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Preise"
        heading="Transparente Betreuungskosten"
        description="Faire Preise, keine versteckten Kosten. Das individuelle Angebot erstellen wir nach dem kostenlosen Erstgespräch."
      />

      <Pricing />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge="Was ist inbegriffen?"
              heading="Was die Pakete umfassen"
            />
            <div className="mt-6 flex flex-col gap-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Alle Pakete beinhalten die persönliche Auswahl und Vermittlung einer
                geeigneten Betreuungsperson sowie die laufende Begleitung durch
                Wolfgang Posdziech.
              </p>
              <p>
                Bei anerkanntem Pflegegrad können Leistungen der Pflegekasse für
                bestimmte Betreuungsangebote in Anspruch genommen werden. Wir beraten
                Sie gerne zu den Möglichkeiten.
              </p>
              <p>
                Alle genannten Preise sind Richtwerte. Das endgültige Angebot hängt von
                Ihren individuellen Bedürfnissen und dem genauen Betreuungsumfang ab.
              </p>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>

      <CallToAction />
    </>
  );
}
