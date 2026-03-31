import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
  {
    icon: "🏠",
    title: "Vertraute Umgebung",
    description:
      "Ihr Angehöriger bleibt zuhause — in der gewohnten Umgebung, mit den eigenen Erinnerungen und dem eigenen Rhythmus.",
  },
  {
    icon: "👤",
    title: "Persönliche Auswahl",
    description:
      "Wir wählen jede Betreuungsperson sorgfältig aus und stellen sicher, dass sie menschlich und fachlich passt.",
  },
  {
    icon: "🤝",
    title: "Verlässliche Begleitung",
    description:
      "Wolfgang Posdziech begleitet jeden Betreuungsfall persönlich und steht Ihnen als Ansprechpartner zur Seite.",
  },
  {
    icon: "📋",
    title: "Transparente Kommunikation",
    description:
      "Regelmäßige Rückmeldungen halten Sie immer informiert. Keine Überraschungen — nur klare, offene Kommunikation.",
  },
];

export default function Benefits(): React.JSX.Element {
  return (
    <SectionContainer variant="surface" id="vorteile">
      <ContentContainer>
        <SectionHeader
          badge="Warum HSA"
          heading="Ihre Vorteile auf einen Blick"
          description="Wir verstehen, dass Sie das Beste für Ihre Familie wollen. Hier ist, was HSA von anderen unterscheidet."
        />

        <div className="grid gap-[var(--gap-grid)] md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="surface-card flex h-full flex-col gap-4 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-2xl">
                  <span aria-hidden="true">{benefit.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--primary)]">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
