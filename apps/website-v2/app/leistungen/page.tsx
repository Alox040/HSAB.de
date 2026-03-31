import Container from "../../components/layout/Container";
import SectionFrame from "../../components/layout/SectionFrame";
import { CtaSection } from "../../components/sections";
import { site } from "../../lib/site";

export default function Page(): React.JSX.Element {
  const content = site.leistungenPage;

  return (
    <>
      <SectionFrame id={content.id}>
        <Container>
          <div className="space-y-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="space-y-6">
              <p className="text-lg font-medium text-slate-700 sm:text-xl">
                {content.eyebrow}
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                {content.title}
              </h1>
              <p className="max-w-4xl text-xl leading-relaxed text-slate-800 sm:text-2xl">
                {content.intro}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Uebersicht aller Leistungsbereiche
              </h2>
              <ul className="grid gap-x-10 gap-y-4 text-xl leading-relaxed text-slate-800 sm:grid-cols-2">
                {content.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {content.sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
                    {section.title}
                  </h3>
                  <p className="max-w-5xl text-xl leading-relaxed text-slate-700">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </SectionFrame>
      <CtaSection />
    </>
  );
}
