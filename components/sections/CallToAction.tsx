import Link from "next/link";
import ContentContainer from "@/components/ui/ContentContainer";
import { business } from "@/lib/content";

export default function CallToAction(): React.JSX.Element {
  return (
    <section className="bg-white py-[var(--space-section)]">
      <ContentContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline-page mb-4 font-serif font-bold text-[var(--primary)]">
            Lassen Sie uns Ihre Situation besprechen.
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-[var(--text-muted)]">
            Keine Verpflichtungen, kein Druck. Erzählen Sie uns von Ihrer Situation —
            wir hören zu und zeigen Ihnen, was möglich ist.
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/contact" className="btn-base btn-accent w-full px-8 py-4 sm:w-auto">
              Kostenloses Erstgespräch vereinbaren
            </Link>
            <p className="text-sm text-[var(--text-muted)]">
              Oder direkt anrufen:{" "}
              <a
                href={`tel:${business.phone}`}
                className="font-semibold text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                {business.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
