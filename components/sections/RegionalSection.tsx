import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";

export default function RegionalSection(): React.JSX.Element {
  return (
    <SectionContainer variant="sand" id="regional">
      <ContentContainer>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            badge="Regional in Hamburg"
            heading="Persoenlich vor Ort statt Vermittlungsagentur"
            description="Wir arbeiten in Hamburg Nord und West - mit direktem Ansprechpartner und kurzen Wegen."
            serif
          />

          <div className="mt-7 space-y-4 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              Die Betreuung wird nicht aus einem entfernten Callcenter gesteuert.
              Sie haben einen festen Kontakt, der Ihre Situation kennt und
              Entscheidungen nachvollziehbar begleitet.
            </p>
            <p>
              Regionale Naehe bedeutet fuer Familien: schnelle Abstimmung,
              persoenliche Erreichbarkeit und eine Betreuung, die zu Ihrem Alltag
              in Hamburg passt.
            </p>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
