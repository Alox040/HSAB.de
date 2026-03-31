import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    label: "Weniger Alltagsstress",
    value: "spürbar",
    description: "Familie kann wieder eigene Termine wahrnehmen.",
  },
  {
    label: "Mehr Verlässlichkeit",
    value: "planbar",
    description: "Klare Absprachen zu Zeiten und Aufgaben.",
  },
  {
    label: "Mehr Zeit füreinander",
    value: "bewusst",
    description: "Besuche werden wieder entspannter erlebt.",
  },
] as const;

export default function StorySection(): React.JSX.Element {
  return (
    <SectionContainer variant="sand" id="beispiel">
      <ContentContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="Ein Beispiel aus der Praxis"
            heading="Wie Betreuung den Alltag entlasten kann"
            description="Jede Familie ist anders – und doch ähneln sich viele Situationen. Ein Beispiel, wie eine passende Betreuungssituation entstehen kann."
            serif
          />
        </div>

        <div className="mt-10 grid gap-[var(--gap-grid)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="surface-card flex flex-col gap-4 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Familie S., Hamburg
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-[var(--primary)]">
                  Vorher
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Die Tochter besucht ihren Vater mehrmals pro Woche, organisiert
                  Einkäufe, Termine und Haushalt. Neben Beruf und eigener Familie
                  wird der Alltag zunehmend anstrengend und unübersichtlich.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-[var(--primary)]">
                  Heute
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Eine feste Betreuungsperson unterstützt den Vater im Alltag,
                  begleitet zu Terminen und sorgt für Struktur. Die Tochter bleibt
                  eingebunden, kann ihre Besuche aber wieder ruhiger und bewusster
                  gestalten.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Ob Ihre Situation ähnlich ist oder ganz anders: Im persönlichen
              Gespräch klären wir gemeinsam, welche Unterstützung sinnvoll und
              realistisch ist.
            </p>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

