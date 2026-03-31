import Container from "../layout/Container";
import SectionFrame from "../layout/SectionFrame";
import { site } from "../../lib/site";

export default function FaqSection(): React.JSX.Element {
  const content = site.faq;

  return (
    <SectionFrame id={content.id}>
      <Container>
        <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
          <p className="text-lg font-medium text-slate-700 sm:text-xl">{content.eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="max-w-4xl text-xl leading-relaxed text-slate-800">
            {content.description}
          </p>
          <div className="space-y-6">
            {content.items.map((item) => (
              <article key={item.question} className="space-y-2 rounded-xl border border-slate-200 p-6">
                <h3 className="text-2xl font-medium leading-snug text-slate-900">
                  {item.question}
                </h3>
                <p className="text-xl leading-relaxed text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}
