import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/layout/PageIntro";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import CallToAction from "@/components/sections/CallToAction";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Profil – Wolfgang Posdziech",
  description:
    "Lernen Sie Wolfgang Posdziech kennen — Gründer von HSA und Ihr persönlicher Ansprechpartner für Seniorenbetreuung in Hamburg.",
};

export default function ProfilPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="Profil"
        heading={business.owner}
        description="Gründer der Hanseatischen Senioren Alltagsbegleitung und Ihr persönlicher Ansprechpartner."
      />

      <SectionContainer variant="white">
        <ContentContainer>
          <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:items-start">
            {/* Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="surface-card relative h-80 w-64 overflow-hidden sm:h-96 sm:w-72">
                <Image
                  src="/images/wolfgang-posdziech-portrait.jpg"
                  alt={`Porträt von ${business.owner}`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8">
              <SectionHeader
                badge="Über mich"
                heading={business.owner}
                description="Gründer & Inhaber von HSA"
              />

              <div className="mt-6 flex flex-col gap-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  Als Gründer der Hanseatischen Senioren Alltagsbegleitung bringe ich
                  langjährige Erfahrung in der Begleitung und Vermittlung von
                  Betreuungspersonen für Senioren mit. Meine Arbeit ist geprägt von
                  dem Wunsch, älteren Menschen ein würdevolles, selbstbestimmtes Leben
                  in ihrer vertrauten Umgebung zu ermöglichen.
                </p>
                <p>
                  Ich glaube fest daran, dass gute Pflege und Betreuung zuallererst
                  menschlich sein muss — mit echtem Interesse an der Person, mit
                  Respekt vor ihrer Geschichte und mit der Bereitschaft, wirklich
                  zuzuhören.
                </p>
                <p>
                  Jede Betreuungsperson, die ich vermittle, lerne ich persönlich kennen.
                  Ich überzeuge mich von ihrer Qualifikation und — was mir ebenso
                  wichtig ist — von ihrem Charakter. Denn Betreuung ist Vertrauenssache.
                </p>
                <p>
                  Wenn Sie mit mir sprechen möchten, rufen Sie mich an oder schreiben
                  Sie mir. Ich beantworte alle Anfragen persönlich.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  <p className="font-semibold text-[var(--primary)]">
                    Persönliche Erreichbarkeit
                  </p>
                  <p className="mt-1">
                    Sie sprechen direkt mit {business.owner}, nicht mit einem Callcenter.
                  </p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-[var(--border-soft)] bg-white p-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  <p className="font-semibold text-[var(--primary)]">
                    Regionale Verankerung
                  </p>
                  <p className="mt-1">
                    Schwerpunkt in {business.serviceArea} und Umgebung – kurze Wege und
                    verlässliche Kontakte.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
                >
                  {business.phoneDisplay}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
                >
                  {business.email}
                </a>
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>

      <CallToAction />
    </>
  );
}
