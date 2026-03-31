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
        <div className="grid gap-[var(--gap-grid)] lg:grid-cols-12 lg:gap-10">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeader
              badge="Leistungen"
              heading="Was wir für Sie tun."
              description="Übersichtlich, ruhig und auf den Alltag Ihrer Familie abgestimmt."
              serif
            />
            <div className="mt-8">
              <Link href="/services" className="btn-base btn-secondary inline-flex">
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7 lg:col-start-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div
                  key={service.id}
                  className="border-b border-[var(--border-soft)] pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-[var(--secondary-soft)] text-[var(--primary)]">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="mb-3 text-2xl font-semibold text-[var(--primary)]">
                        {service.title}
                      </h3>
                      <p className="mb-5 text-base leading-relaxed text-[var(--text-muted)]">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-base text-[var(--foreground)]"
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
