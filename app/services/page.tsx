import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import CallToAction from "@/components/sections/CallToAction";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Betreuungsleistungen im Überblick: 24-Stunden-Betreuung, Alltagshilfe, Gesellschaft, Haushalt und Familienentlastung in Hamburg.",
};

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Leistungen"
        heading="Unsere Betreuungsleistungen"
        description="Von der stundenweisen Hilfe bis zur Rund-um-die-Uhr-Betreuung — wir bieten das passende Angebot für jede Lebenssituation."
      />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div>
                  <SectionHeader heading={service.title} />
                  <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-[var(--foreground)]"
                      >
                        <span
                          className="mt-0.5 flex-shrink-0 text-[var(--secondary)]"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-center rounded-[var(--radius-card)] bg-[var(--fog-light)] p-12">
                  <p className="text-center text-sm text-[var(--text-muted)] italic">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      <CallToAction />
    </>
  );
}
