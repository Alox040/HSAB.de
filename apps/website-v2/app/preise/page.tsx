import ContainerLayout from "../_components/ContainerLayout";
import SectionFrame from "../_components/SectionFrame";

export default function Page(): React.JSX.Element {
  return (
    <ContainerLayout>
      <SectionFrame>
        <div className="space-y-6 rounded-2xl bg-slate-50 p-8 text-slate-800">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Preise
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-700">
            Die Kosten richten sich nach Dauer und Umfang der Betreuung.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Sie erhalten vor Beginn eine ruhige und verstaendliche Uebersicht
            ohne versteckte Punkte.
          </p>
        </div>
      </SectionFrame>
    </ContainerLayout>
  );
}
