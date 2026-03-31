import Container from "../layout/Container";
import SectionFrame from "../layout/SectionFrame";
import { site } from "../../lib/site";

export default function CtaSection(): React.JSX.Element {
  const content = site.cta;

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
          <a
            href={content.cta.href}
            className="inline-flex min-h-12 items-center rounded-lg border border-slate-300 px-6 py-3 text-lg font-medium text-slate-900"
          >
            {content.cta.label}
          </a>
        </div>
      </Container>
    </SectionFrame>
  );
}
