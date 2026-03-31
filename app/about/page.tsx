import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import CallToAction from "@/components/sections/CallToAction";
import { business, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    `Lernen Sie ${business.shortName} und Wolfgang Posdziech kennen — Seniorenbetreuung in Hamburg mit Herz und Erfahrung.`,
};

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Über uns"
        heading="Wer wir sind"
        description="Hanseatische Senioren Alltagsbegleitung — gegründet mit dem Ziel, Senioren in Hamburg ein würdevolles Leben zuhause zu ermöglichen."
      />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                badge="Unsere Geschichte"
                heading="Entstanden aus Überzeugung"
              />
              <div className="mt-6 flex flex-col gap-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  {business.name} wurde von Wolfgang Posdziech in {business.city} gegründet.
                  Nach Jahren in der Sozial- und Betreuungsbranche entstand die Überzeugung:
                  Senioren verdienen es, in ihrer vertrauten Umgebung zu bleiben — mit
                  professioneller Unterstützung und echter menschlicher Wärme.
                </p>
                <p>
                  Wir vermitteln keine anonymen Dienstleister. Jede Betreuungsperson wird
                  persönlich von Wolfgang Posdziech kennengelernt, geprüft und ausgewählt.
                  Jede Betreuung wird persönlich begleitet.
                </p>
                <p>
                  Unser Einzugsgebiet ist {business.serviceArea} und der Hamburger Umkreis.
                  Wir sind bewusst regional — so können wir die Qualität sichern, die wir
                  versprechen.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="surface-card flex h-full flex-col justify-between gap-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    Auf einen Blick
                  </p>
                  <p className="mt-2 text-base font-semibold text-[var(--primary)]">
                    {business.shortName} in {business.city}
                  </p>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-medium text-[var(--foreground)]">Gründer</dt>
                    <dd>{business.owner}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-medium text-[var(--foreground)]">Standort</dt>
                    <dd>{business.city}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-medium text-[var(--foreground)]">Einsatzgebiet</dt>
                    <dd>
                      {business.serviceArea} · bis {business.serviceAreaRadius} Umkreis
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>

      <SectionContainer variant="fog">
        <ContentContainer>
          <SectionHeader
            badge="Unsere Werte"
            heading="Was uns leitet"
            description="Diese Werte bestimmen, wie wir arbeiten und wie wir mit Menschen umgehen."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.id}
                className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-[var(--primary)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      <CallToAction />
    </>
  );
}
