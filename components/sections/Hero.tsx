import Link from "next/link";
import Image from "next/image";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] pb-20 pt-20 sm:pb-24 sm:pt-24">
      <ContentContainer className="relative">
        <div className="grid items-center gap-[var(--gap-grid)] lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--secondary-soft)] px-4 py-2 text-base font-medium text-[var(--primary)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {business.serviceArea} · Senioren Alltagsbegleitung
            </span>

            <h1 className="mb-7 font-serif text-[clamp(2.4rem,5.4vw,4.3rem)] font-bold leading-[1.12] text-[var(--primary)]">
              Verlässliche Betreuung im eigenen Zuhause.
              <span className="mt-2 block font-normal italic text-[var(--text-muted)]">
                Persönlich. Ruhig. In Hamburg.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-[var(--text-muted)]">
              Wir unterstützen Seniorinnen und Senioren im Alltag und entlasten
              Familien mit einer Betreuung, die zu Ihrer Situation passt.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link href="#kontakt" className="btn-base btn-primary">
                Kostenloses Erstgespräch
              </Link>
              <Link href="#leistungen" className="btn-base btn-secondary">
                Leistungen ansehen
              </Link>
            </div>

            <div className="mt-8 text-lg text-[var(--text-muted)]">
              Telefonisch erreichbar unter{" "}
              <a
                href={`tel:${business.phone}`}
                className="font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-dark)]"
              >
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="mt-10 lg:col-span-6 lg:mt-0">
            <div className="overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--border-soft)] bg-[var(--secondary-soft)]">
              <Image
                src="/images/hero-senior-betreuung.jpg"
                alt="Seniorin und Betreuungskraft in ruhiger Alltagssituation zuhause"
                width={920}
                height={620}
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[520px]"
                priority
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
