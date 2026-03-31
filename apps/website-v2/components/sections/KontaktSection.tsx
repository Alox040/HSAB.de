import Container from "../layout/Container";
import SectionFrame from "../layout/SectionFrame";
import { site } from "../../lib/site";

export default function KontaktSection(): React.JSX.Element {
  const content = site.kontakt;

  return (
    <SectionFrame id={content.id}>
      <Container>
        <div className="space-y-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="space-y-8">
            <p className="text-lg font-medium text-slate-700 sm:text-xl">{content.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              {content.title}
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-slate-800">
              {content.description}
            </p>
            <ul className="space-y-3 text-xl leading-relaxed text-slate-800">
              {content.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
              {content.formTitle}
            </h3>
            <p className="text-xl leading-relaxed text-slate-700">
              {content.formDescription}
            </p>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="block text-lg font-medium text-slate-800">
                  {content.formLabels.name}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-medium text-slate-800">
                  {content.formLabels.email}
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-medium text-slate-800">
                  {content.formLabels.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900"
                />
              </div>
              <button
                type="button"
                className="inline-flex min-h-12 items-center rounded-lg border border-slate-300 px-6 py-3 text-lg font-medium text-slate-900"
              >
                {content.formLabels.submit}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </SectionFrame>
  );
}
