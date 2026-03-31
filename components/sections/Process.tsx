import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/content";

export default function Process(): React.JSX.Element {
  return (
    <SectionContainer variant="primary" id="ablauf">
      <ContentContainer>
        <SectionHeader
          badge="So funktioniert es"
          heading="Ihr Weg zur passenden Betreuung"
          description="Einfach, transparent, persönlich — so begleiten wir Sie von der ersten Anfrage bis zum Betreuungsbeginn."
          centered
          light
          serif
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-4 text-base text-white/80">
            <p>
              Der Ablauf ist bewusst einfach gehalten. In jedem Schritt haben Sie
              einen klaren Ansprechpartner und genügend Zeit für Ihre Fragen.
            </p>
            <p>
              Von der ersten Kontaktaufnahme bis zum Start der Betreuung begleiten
              wir Sie persönlich und stimmen alles in Ruhe mit Ihnen ab.
            </p>
          </div>

          <ol className="relative mt-4 space-y-8 border-l border-white/15 pl-6 lg:mt-0">
            {processSteps.map((step) => (
              <li key={step.step} className="relative pl-2">
                <div className="absolute -left-4 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-base font-semibold text-[var(--primary)] shadow-sm">
                  {step.step}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-white/80">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
