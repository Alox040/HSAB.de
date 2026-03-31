import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { business } from "@/lib/content";

export default function AnsprechpartnerSection(): React.JSX.Element {
  return (
    <SectionContainer variant="white" id="ansprechpartner">
      <ContentContainer>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--border-soft)] bg-[var(--secondary-soft)]">
            <Image
              src="/images/wolfgang-posdziech-portrait.jpg"
              alt="Porträt von Wolfgang Posdziech"
              width={760}
              height={860}
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>

          <div>
            <SectionHeader
              badge="Ihr Ansprechpartner"
              heading={business.owner}
              description="Persönliche Betreuung in Hamburg mit direkter Erreichbarkeit ohne Umwege."
              serif
            />
            <div className="mt-6 space-y-3 text-base leading-relaxed text-[var(--text-muted)]">
              <p>
                Ich begleite Familien in {business.serviceArea} bei der passenden
                Alltagsbetreuung - ruhig, verbindlich und mit Blick auf die
                individuelle Situation.
              </p>
              <p>
                Wenn Sie anrufen, sprechen Sie direkt mit mir. So entstehen klare
                Absprachen und Vertrauen von Anfang an.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${business.phone}`} className="btn-base btn-secondary">
                Telefon
              </a>
              <Link href="#kontakt" className="btn-base btn-primary">
                Erstgespräch
              </Link>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
