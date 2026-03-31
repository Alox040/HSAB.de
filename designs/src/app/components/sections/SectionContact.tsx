import { ButtonLink } from "../ui/Button";

export function SectionContact() {
  return (
    <section className="py-24 bg-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#0f2a3a] mb-6">
          Lassen Sie uns Ihre Situation besprechen.
        </h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Nutzen Sie unser Angebot für eine kostenfreie und absolut unverbindliche Erstanalyse. Wir sagen Ihnen ehrlich, ob und wie wir helfen können.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <ButtonLink to="/kontakt" variant="secondary" size="lg" className="w-full sm:w-auto">
            Beratung anfordern
          </ButtonLink>
          <ButtonLink to="/leistungen" variant="ghost" size="lg" className="w-full sm:w-auto bg-slate-50">
            Details zu den Leistungen
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
