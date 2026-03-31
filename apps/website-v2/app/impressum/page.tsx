import ContainerLayout from "../_components/ContainerLayout";
import SectionFrame from "../_components/SectionFrame";

export default function Page(): React.JSX.Element {
  return (
    <ContainerLayout>
      <SectionFrame>
        <div className="space-y-6 rounded-2xl bg-slate-50 p-8 text-slate-800">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Impressum
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-700">
            Angaben gemaess gesetzlicher Vorgaben zur Anbieterkennzeichnung.
          </p>
          <div className="space-y-2 text-lg leading-relaxed text-slate-700">
            <p>Hanseatische Senioren-Alltagsbetreuung</p>
            <p>Musterstrasse 1, 20095 Hamburg</p>
            <p>E-Mail: kontakt@hanseatische-alltagsbetreuung.de</p>
          </div>
        </div>
      </SectionFrame>
    </ContainerLayout>
  );
}
