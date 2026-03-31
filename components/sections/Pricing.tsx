import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { pricingTiers } from "@/lib/content";

export default function Pricing(): React.JSX.Element {
  return (
    <SectionContainer variant="fog" id="preise">
      <ContentContainer>
        <SectionHeader
          badge="Preise"
          heading="Transparente Betreuungskosten"
          description="Drei Pakete für unterschiedliche Bedürfnisse — alle Preise sind Richtwerte, das individuelle Angebot erstellen wir nach dem Erstgespräch."
          centered
          serif
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex h-full flex-col rounded-[var(--radius-card)] border p-6 ${
                  tier.highlighted
                    ? "border-[var(--primary)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(10,24,40,0.06)]"
                    : "border-[var(--border-soft)] bg-white shadow-sm"
                }`}
              >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                  Beliebteste Wahl
                </span>
              )}

              <div className="mb-6">
                <h3
                  className="mb-1 text-lg font-bold text-[var(--primary)]"
                >
                  {tier.name}
                </h3>
                <p
                  className="text-sm text-[var(--text-muted)]"
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className="text-3xl font-bold text-[var(--primary)]"
                >
                  {tier.price}
                </span>
                <span
                  className="ml-1 text-sm text-[var(--text-muted)]"
                >
                  {tier.priceNote}
                </span>
              </div>

              <ul className="mb-8 flex flex-grow flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-[var(--accent)]" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`btn-base block w-full text-sm font-semibold ${
                  tier.highlighted
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                Angebot anfragen
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
          Alle Preise sind Richtwerte. Das endgültige Angebot erstellen wir nach einem kostenlosen Erstgespräch.
        </p>
      </ContentContainer>
    </SectionContainer>
  );
}
