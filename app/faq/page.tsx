import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";
import Faq from "@/components/sections/Faq";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen",
  description:
    "Antworten auf häufige Fragen zur Seniorenbetreuung bei HSA: Kosten, Ablauf, Verfügbarkeit und mehr.",
};

export default function FaqPage(): React.JSX.Element {
  return (
    <>
      <PageIntro
        badge="FAQ"
        heading="Häufig gestellte Fragen"
        description="Alles, was Sie über unsere Betreuungsleistungen wissen möchten — klar und verständlich beantwortet."
      />

      <Faq />

      <CallToAction />
    </>
  );
}
