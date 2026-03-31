import Link from "next/link";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export default function CallToAction(): React.JSX.Element {
  return (
    <section id="kontakt-cta" className="bg-white py-[var(--space-section)]">
      <ContentContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline-page mb-4 font-serif font-bold text-[var(--primary)]">
            Lassen Sie uns Ihre Situation in Ruhe besprechen
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-[var(--text-muted)]">
            Kostenlos, unverbindlich und persoenlich. Wir hoeren zu und klaeren mit
            Ihnen die naechsten sinnvollen Schritte.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#kontakt" className="btn-base btn-primary w-full sm:w-auto">
              Erstgespraech
            </Link>
            <a href={`tel:${business.phone}`} className="btn-base btn-secondary w-full sm:w-auto">
              Telefon
            </a>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
