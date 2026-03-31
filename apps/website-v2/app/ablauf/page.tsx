import ContainerLayout from "../_components/ContainerLayout";
import SectionFrame from "../_components/SectionFrame";

export default function Page(): React.JSX.Element {
  return (
    <ContainerLayout>
      <SectionFrame>
        <div className="space-y-6 rounded-2xl bg-slate-50 p-8 text-slate-800">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Ablauf
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-700">
            Der Ablauf ist klar, ruhig und transparent.
          </p>
          <ol className="space-y-3 text-lg leading-relaxed text-slate-700">
            <li>1. Erstes Telefonat zum Kennenlernen</li>
            <li>2. Persoenliches Gespraech bei Ihnen vor Ort</li>
            <li>3. Start mit passender Alltagsbegleitung</li>
          </ol>
        </div>
      </SectionFrame>
    </ContainerLayout>
  );
}
