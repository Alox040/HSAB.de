import ContactInfoBox from "../../components/contact/ContactInfoBox";
import ContactForm from "../../components/forms/ContactForm";
import Container from "../../components/layout/Container";
import SectionFrame from "../../components/layout/SectionFrame";
import { CtaSection } from "../../components/sections";
import { site } from "../../lib/site";

export default function Page(): React.JSX.Element {
  const content = site.kontakt;

  return (
    <>
      <SectionFrame id={content.id}>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <ContactInfoBox
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              phone={content.phone}
              email={content.email}
              area={content.area}
              notes={content.notes}
            />
            <ContactForm
              title={content.formTitle}
              description={content.formDescription}
              labels={content.formLabels}
              placeholders={content.formPlaceholders}
            />
          </div>
        </Container>
      </SectionFrame>
      <CtaSection />
    </>
  );
}
