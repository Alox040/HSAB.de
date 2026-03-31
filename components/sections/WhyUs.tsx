import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@/components/ui/icons/ServiceIcons";

const trustCards = [
  {
    icon: UsersIcon,
    title: "Persönlich geführt",
    description: "Direkter Ansprechpartner statt anonymem Vermittlungsprozess.",
  },
  {
    icon: HomeIcon,
    title: "Lokal in Hamburg",
    description: "Regional in Hamburg Nord und West mit kurzen Wegen.",
  },
  {
    icon: HeartIcon,
    title: "Individuelle Betreuung",
    description: "Unterstützung wird passend zu Ihrer Lebenssituation geplant.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Kostenlose Beratung",
    description: "Erstgespräch unverbindlich, ruhig und persönlich geführt.",
  },
] as const;

export default function WhyUs(): React.JSX.Element {
  return (
    <SectionContainer variant="surface" id="warum-wir">
      <ContentContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="Vertrauen"
            heading="Werte, auf die Familien bauen können"
            description="Ruhige, persönliche Betreuung mit klarer Kommunikation und regionaler Nähe in Hamburg."
            serif
          />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:gap-8">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="surface-card flex h-full flex-col gap-4 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white text-[var(--primary)]">
                  <Icon />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--primary)]">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

