import Container from "../layout/Container";
import SectionFrame from "../layout/SectionFrame";
import { site } from "../../lib/site";

export default function HeroSection(): React.JSX.Element {
  const content = site.hero;

  return (
    <SectionFrame id={content.id}>
      <Container>
        <div className="space-y-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <p className="text-lg font-medium text-slate-700 sm:text-xl">{content.eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {content.title}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-800 sm:text-2xl">
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
