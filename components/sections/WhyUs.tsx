import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";

const usps = [
  {
    icon: "🤝",
    title: "Sorgfältige Auswahl",
    description:
      "Jede Betreuungsperson wird persönlich kennengelernt und auf fachliche Eignung sowie menschliche Zuverlässigkeit geprüft.",
  },
  {
    icon: "👂",
    title: "Persönliche Begleitung",
    description:
      "Ihr Ansprechpartner bleibt während der gesamten Betreuung an Ihrer Seite und stimmt die Unterstützung auf Ihre Situation ab.",
  },
  {
    icon: "📍",
    title: "Nähe und Erreichbarkeit",
    description:
      "Wir sind in Hamburg und Umgebung tätig und für Familien gut erreichbar – telefonisch und persönlich.",
  },
  {
    icon: "✔️",
    title: "Rechtlich auf sicherem Boden",
    description:
      "Transparente Abläufe und nachvollziehbare Vereinbarungen geben Ihnen Orientierung und Sicherheit.",
  },
] as const;

export default function WhyUs(): React.JSX.Element {
  return (
    <SectionContainer variant="surface" id="warum-wir">
      <ContentContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="Warum wir"
            heading="Warum Familien sich für HSA entscheiden"
            description="Eine vertrauensvolle Betreuung entsteht durch klare Abläufe, persönliche Begleitung und erfahrene Betreuungspersonen."
            serif
          />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:gap-8">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="surface-card flex h-full flex-col gap-3 p-6"
            >
              <span className="text-3xl" aria-hidden="true">
                {usp.icon}
              </span>
              <h3 className="text-lg font-semibold text-[var(--primary)]">
                {usp.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

