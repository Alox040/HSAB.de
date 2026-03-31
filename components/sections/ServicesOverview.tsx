import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ClockIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@/components/ui/icons/ServiceIcons";
import { services } from "@/lib/content";

const serviceIcons = [
  ClockIcon,
  HeartIcon,
  UsersIcon,
  HomeIcon,
  ShieldCheckIcon,
] as const;

export default function ServicesOverview(): React.JSX.Element {
  return (
    <SectionContainer variant="white" id="leistungen">
      <ContentContainer>
        <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionHeader
              badge="Leistungen"
              heading="Was wir für Sie tun."
              description="Von der täglichen Unterstützung bis zur 24-Stunden-Betreuung — wir finden die passende Lösung für Ihre Familie."
              serif
            />
            <div className="mt-8">
              <Link
                href="/services"
                className="btn-base btn-secondary inline-flex"
              >
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div
                  key={service.id}
                  className="surface-card group flex h-full flex-col p-6 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white shadow-sm text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-[var(--primary)] transition-colors group-hover:text-white">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)] transition-colors group-hover:text-white/85">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm text-[var(--foreground)] transition-colors group-hover:text-white/90"
                          >
                            <span
                              className="mt-0.5 flex-shrink-0 text-[var(--accent)]"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
