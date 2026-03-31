import { Anchor, Shield, Handshake, Quote, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      
      {/* Editorial Header Section */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Anchor className="w-10 h-10 text-[#A84A33] mb-8" />
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#0f2a3a] mb-6 leading-tight">
              Pflege braucht <br/>einen Heimathafen.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Wir sind kein anonymer Konzern. Hanseatische Senioren ist ein regional verankertes Unternehmen, das Familien in einer der schwersten Lebensphasen begleitet.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500 border-t border-slate-200 pt-6">
              <MapPin className="w-5 h-5 text-[#0f2a3a]" />
              Gegründet und ansässig in Hamburg
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747941576984-45ce29967288?auto=format&fit=crop&q=80&w=1200"
                alt="Norddeutsche Küste"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-[#fcfbf9] p-8 lg:p-10 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-[#0f2a3a] mb-4">Unser hanseatischer Kompass</h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  Der Pflegemarkt ist oft unübersichtlich und emotional aufgeladen. Als wir dieses Unternehmen gründeten, stand ein Gedanke im Vordergrund: <strong>Ein Handschlag muss wieder etwas gelten.</strong>
                </p>
                <p>
                  Das bedeutet für uns: Wir versprechen keine Wunder. Wenn eine 24-Stunden-Betreuung für Ihre Situation nicht ausreicht oder rechtlich nicht machbar ist, sagen wir Ihnen das offen. Wir arbeiten nicht auf Provision um jeden Preis, sondern auf Vertrauensbasis für langfristige Lösungen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values - Asymmetric Design */}
      <section className="py-24 bg-[#0f2a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="text-[#A84A33] font-bold uppercase tracking-wider text-sm mb-4 block">Werteversprechen</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold max-w-2xl leading-tight">
              Daran lassen wir uns messen. <br/>Jeden Tag.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="border-t border-white/10 pt-8 relative">
              <div className="absolute top-0 right-0 p-4 -mt-8 bg-[#0f2a3a] text-white/20">
                <Shield className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                <span className="text-[#A84A33]">01.</span> Absolute Legalität
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Schwarzarbeit in der Pflege ist ein massives Problem. Wir distanzieren uns davon strikt. Jede von uns vermittelte Kraft ist sozialversicherungspflichtig angestellt und verfügt über eine gültige A1-Bescheinigung. Wir prüfen das bei jedem Einsatz.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8 relative md:mt-16">
              <div className="absolute top-0 right-0 p-4 -mt-8 bg-[#0f2a3a] text-white/20">
                <Handshake className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                <span className="text-[#A84A33]">02.</span> Faire Bedingungen
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Gute Pflege braucht Menschen, die unter guten Bedingungen arbeiten. Wir kooperieren nur mit Partneragenturen in Osteuropa, die faire Gehälter zahlen und Erholungszeiten respektieren. Ausbeutung hat bei uns keinen Platz.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8 relative">
              <div className="absolute top-0 right-0 p-4 -mt-8 bg-[#0f2a3a] text-white/20">
                <Quote className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                <span className="text-[#A84A33]">03.</span> Offene Kommunikation
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Wenn Menschen zusammenleben, kann es zu Spannungen kommen. Das ist normal. Wichtig ist, wie man damit umgeht. Wir verschweigen Probleme nicht, sondern moderieren sie aktiv als neutraler Ansprechpartner zwischen Familie und Pflegekraft.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founder / Team Note (Mocked) */}
      <section className="py-24 bg-[#fcfbf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Unser Anspruch</h3>
            <blockquote className="text-2xl lg:text-3xl font-serif text-[#0f2a3a] leading-relaxed mb-8 border-l-4 border-[#A84A33] pl-6">
              „Wir vermitteln keine Arbeitskräfte, wir vermitteln Menschen, die mit Menschen leben. Das erfordert Fingerspitzengefühl, Erfahrung und manchmal auch den Mut, 'Nein' zu sagen, wenn es nicht passt.“
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=11`} alt="Geschäftsführung" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <p className="font-bold text-[#0f2a3a]">Das Team der Hanseatischen Senioren</p>
                <p className="text-sm text-slate-500">Ihre Pflegeberater in Norddeutschland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
