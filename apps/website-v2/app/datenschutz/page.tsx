import ContainerLayout from "../_components/ContainerLayout";
import SectionFrame from "../_components/SectionFrame";

export default function Page(): React.JSX.Element {
  return (
    <ContainerLayout>
      <SectionFrame>
        <div className="space-y-6 rounded-2xl bg-slate-50 p-8 text-slate-800">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Datenschutz
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-700">
            Wir behandeln persoenliche Daten verantwortungsvoll und nach den
            geltenden Datenschutzregeln.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Details zur Verarbeitung, zu Rechtsgrundlagen und zu Ihren Rechten
            werden hier in klarer Sprache bereitgestellt.
          </p>
        </div>
      </SectionFrame>
    </ContainerLayout>
  );
}
