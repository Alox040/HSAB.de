import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import StorySection from "@/components/sections/StorySection";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
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
      <ServicesOverview />
      <Process />
      <Benefits />
      <StorySection />
      <Pricing />
      <Faq />
      <CallToAction />

      {/* Contact form section */}
      <SectionContainer variant="white" id="kontakt">
        <ContentContainer>
          <div className="mx-auto max-w-2xl">
            <div className="surface-card flex flex-col gap-5 p-6">
              <SectionHeader
                badge="Kontakt"
                heading="Jetzt unverbindlich anfragen"
                description="Erzählen Sie uns von Ihrer Situation. Wir melden uns zeitnah und besprechen gemeinsam die nächsten Schritte."
                centered
              />
              <div className="text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  Ihre Nachricht wird persönlich gelesen. Es entstehen Ihnen durch die
                  Anfrage keine Verpflichtungen.
                </p>
              </div>
              <div className="pt-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
