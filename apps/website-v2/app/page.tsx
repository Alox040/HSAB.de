import {
  AblaufSection,
  CtaSection,
  FaqSection,
  HeroSection,
  LeistungenSection,
  PreiseSection,
  VertrauenSection,
  VorteileSection,
} from "../components/sections";

export default function Page(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <LeistungenSection />
      <VorteileSection />
      <AblaufSection />
      <VertrauenSection />
      <PreiseSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
