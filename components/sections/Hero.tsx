import Link from "next/link";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] pb-24 pt-20 sm:pb-32 sm:pt-28">
      <ContentContainer className="relative">
        <div className="grid items-center gap-[var(--gap-grid)] lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--secondary-soft)] px-3 py-1.5 text-sm font-medium text-[var(--primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {business.serviceArea} · Senioren Alltagsbegleitung
            </span>

            <h1 className="mb-6 font-serif text-[clamp(2.25rem,5.2vw,4.25rem)] font-bold leading-[1.1] text-[var(--primary)]">
              Professionelle Betreuung für Ihre Angehörigen —
              <span className="mt-2 block font-normal italic text-[var(--text-muted)]">
                zuhause, mit Würde.
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
              {business.name} vermittelt erfahrene Betreuungspersonen für Senioren in{" "}
              {business.city}. Persönlich ausgewählt, zuverlässig begleitet,
              vertrauenswürdig — für Ihre Familie.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-base btn-primary">
                Kostenloses Erstgespräch
              </Link>
              <Link href="/services" className="btn-base btn-secondary">
                Leistungen ansehen
              </Link>
            </div>

            <div className="mt-4 text-sm text-[var(--text-muted)]">
              Oder direkt anrufen:{" "}
              <a
                href={`tel:${business.phone}`}
                className="font-semibold text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                {business.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                <span className="h-10 w-10 rounded-full border-2 border-[var(--background)] bg-[var(--secondary-soft)]" />
                <span className="h-10 w-10 rounded-full border-2 border-[var(--background)] bg-[var(--secondary-soft)]" />
                <span className="h-10 w-10 rounded-full border-2 border-[var(--background)] bg-[var(--secondary-soft)]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="fill-[var(--accent)] text-[var(--accent)]"
                      aria-hidden="true"
                    >
                      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.4l1.1-6.5-4.7-4.6 6.5-.9L12 2.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm text-[var(--text-muted)]">Von Familien empfohlen</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--text-muted)]">
              <span>✓ Persönliche Beratung</span>
              <span>✓ Sorgfältig geprüfte Betreuungspersonen</span>
              <span>✓ {business.city} &amp; Umgebung</span>
            </div>
          </div>

          <div className="mt-10 lg:col-span-6 lg:mt-0">
            <div className="surface-card h-[320px] bg-[var(--secondary-soft)] sm:h-[380px] lg:h-[520px]" />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
