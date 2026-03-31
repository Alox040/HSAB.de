import Container from "../layout/Container";
import SectionFrame from "../layout/SectionFrame";
import { site } from "../../lib/site";

export default function ProblemSection(): React.JSX.Element {
  const content = site.problem;

  return (
    <SectionFrame id={content.id}>
      <Container>
        <div className="space-y-4 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <p className="text-base font-medium text-slate-700 sm:text-lg">{content.eyebrow}</p>
          <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
            {content.title}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-800 sm:text-xl">
            {content.description}
          </p>
        </div>
      </Container>
    </SectionFrame>
  );
}
