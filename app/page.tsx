import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import AnsprechpartnerSection from "@/components/sections/AnsprechpartnerSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import RegionalSection from "@/components/sections/RegionalSection";
import CallToAction from "@/components/sections/CallToAction";
import SectionContainer from "@/components/ui/SectionContainer";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: `Seniorenbetreuung Hamburg | ${business.shortName}`,
  description:
    "Hanseatische Senioren Alltagsbegleitung – professionelle Betreuung für Senioren in Hamburg zuhause. Persönlich, würdevoll, verlässlich.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Seniorenbetreuung Hamburg | ${business.shortName}`,
    description:
      "Professionelle Seniorenbetreuung in Hamburg. Erfahrene Betreuungspersonen für zuhause — persönlich ausgewählt, zuverlässig begleitet.",
    url: "/",
  },
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <WhyUs />
      <AnsprechpartnerSection />
      <ServicesOverview />
      <Process />
      <Pricing />
      <Faq />
      <RegionalSection />
      <CallToAction />

      <SectionContainer variant="white" id="kontakt">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="space-y-5">
              <SectionHeader
                badge="Kontakt"
                heading="Sprechen Sie direkt mit uns"
                description="Telefonisch oder per E-Mail. Wir melden uns zeitnah und persoenlich."
                serif
              />
              <div className="space-y-4 text-lg leading-relaxed text-[var(--text-muted)]">
                <p>
                  <span className="mr-2 font-semibold text-[var(--primary)]">Telefon:</span>
                  <a href={`tel:${business.phone}`} className="font-semibold text-[var(--primary)]">
                    {business.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="mr-2 font-semibold text-[var(--primary)]">E-Mail:</span>
                  <a href={`mailto:${business.email}`} className="text-[var(--primary)]">
                    {business.email}
                  </a>
                </p>
                <p>
                  <span className="mr-2 font-semibold text-[var(--primary)]">Region:</span>
                  {business.serviceArea}
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
