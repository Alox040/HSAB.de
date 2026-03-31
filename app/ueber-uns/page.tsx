import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { business, values, ueberUns } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    `${ueberUns.person.name} — Gründer der Hanseatischen Senioren Alltagsbegleitung. Persönliche Seniorenbetreuung in Hamburg, die auf echtem Vertrauen beruht.`,
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage(): React.JSX.Element {
  return (
    <>
      {/* 1 — Einleitung */}
      <PageIntro
        badge={ueberUns.intro.badge}
        heading={ueberUns.intro.heading}
        description={ueberUns.intro.description}
      />

      {/* 2 — Person & Portrait */}
      <SectionContainer variant="white">
        <ContentContainer>
          <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:items-start">
            {/* Portrait */}
            <div className="flex justify-center lg:col-span-4 lg:justify-start">
              <div className="surface-card relative h-80 w-64 overflow-hidden sm:h-96 sm:w-72">
                <Image
                  src={ueberUns.person.portraitSrc}
                  alt={ueberUns.person.portraitAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8">
              <SectionHeader
                badge={ueberUns.person.role}
                heading={ueberUns.person.name}
              />
              <div className="mt-6 flex flex-col gap-4 text-[var(--text-muted)] leading-relaxed">
                {ueberUns.person.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* 3 — Arbeitsweise */}
      <SectionContainer variant="fog">
        <ContentContainer>
          <SectionHeader heading={ueberUns.arbeitsweise.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {ueberUns.arbeitsweise.items.map((item) => (
              <div
                key={item.id}
                className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* 4 — Werte */}
      <SectionContainer variant="white">
        <ContentContainer>
          <SectionHeader
            badge="Haltung"
            heading="Was uns leitet"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.id}
                className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <h3 className="mb-2 font-semibold text-[var(--primary)]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* 5 — Regionale Verankerung */}
      <SectionContainer variant="sand">
        <ContentContainer>
          <div className="max-w-2xl">
            <SectionHeader
              badge={ueberUns.region.badge}
              heading={ueberUns.region.heading}
            />
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              {ueberUns.region.text}
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--primary)]">
              {business.serviceArea} · Umkreis {business.serviceAreaRadius}
            </p>
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* 6 — Persönlicher Kontakt */}
      <SectionContainer variant="primary">
        <ContentContainer>
          <div className="max-w-xl">
            <SectionHeader
              heading={ueberUns.kontakt.heading}
              description={ueberUns.kontakt.text}
              light
            />
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-2 font-semibold text-white hover:underline"
              >
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 font-semibold text-white hover:underline"
              >
                {business.email}
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-base btn-lg inline-flex rounded-[var(--radius)] bg-white px-6 py-3 font-semibold text-[var(--primary)] hover:bg-white/90"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
