import { ArrowRight, CheckCircle2, Info, MapPin } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Die kostenlose Erstanalyse",
      time: "Tag 1",
      desc: "Alles beginnt mit einem ehrlichen Gespräch. Wir klären Ihre Anforderungen, die gesundheitliche Situation der zu pflegenden Person und die räumlichen Gegebenheiten. Sie erfahren sofort, ob unser Modell das richtige für Sie ist.",
      highlights: ["Telefonisch oder vor Ort", "Kostenlos und unverbindlich", "Ehrliche Machbarkeitseinschätzung"]
    },
    {
      num: "02",
      title: "Passgenaue Profilvorschläge",
      time: "Tag 2-4",
      desc: "Basierend auf der Analyse suchen wir in unserem Netzwerk nach geeigneten Betreuungskräften. Sie erhalten 2-3 detaillierte Profile von Pflegekräften, die sowohl fachlich als auch menschlich zu Ihnen passen.",
      highlights: ["Geprüfte Qualifikationen", "Transparente Sprachkenntnisse", "Fokus auf persönliche Passung"]
    },
    {
      num: "03",
      title: "Kennenlernen & Entscheidung",
      time: "Tag 4-6",
      desc: "Sie entscheiden sich in aller Ruhe für eine Betreuungskraft. Auf Wunsch organisieren wir vorab ein kurzes Video- oder Telefongespräch (mit Übersetzungshilfe), damit Sie einen ersten Eindruck gewinnen können.",
      highlights: ["Kein Entscheidungsdruck", "Optionales Videogespräch", "Klare Vertragsbedingungen"]
    },
    {
      num: "04",
      title: "Sichere Anreise & Start",
      time: "Tag 7-10",
      desc: "Wir übernehmen die gesamte Logistik. Die Betreuungskraft reist sicher direkt bis an Ihre Haustür an. Wir begleiten die ersten Tage intensiv und moderieren bei Bedarf.",
      highlights: ["Organisation der Anreise", "Begleitung der ersten Tage", "Dauerhafter Ansprechpartner"]
    }
  ];

  return (
    <div className="flex flex-col flex-1 w-full bg-[#fcfbf9]">
      
      {/* Editorial Header */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#A84A33] font-medium tracking-wider uppercase text-sm mb-4 block">Der Ablauf</span>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#0f2a3a] mb-6 leading-tight">
            Schritt für Schritt zur <br className="hidden sm:block"/> passenden Betreuung.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pflege zu organisieren ist oft stressig genug. Deshalb haben wir unseren Prozess so einfach, transparent und verlässlich wie möglich gestaltet.
          </p>
        </motion.div>
      </section>

      {/* Modern Asymmetric Timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          {/* subtle line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-px bg-slate-200"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 lg:gap-16 group">
                
                {/* Number & Time Side */}
                <div className="flex items-start gap-6 md:w-1/4 shrink-0 z-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:border-[#0f2a3a] transition-colors">
                    <span className="text-xl md:text-2xl font-serif font-bold text-[#0f2a3a]">{step.num}</span>
                  </div>
                  <div className="pt-2 md:pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Dauer</span>
                    <span className="text-sm font-medium text-[#A84A33] bg-orange-50 px-2.5 py-1 rounded-md">{step.time}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/4 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-serif font-bold text-[#0f2a3a] mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {step.desc}
                  </p>
                  
                  <div className="bg-[#fcfbf9] rounded-2xl p-6 border border-slate-50">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Auf einen Blick</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-[#A84A33] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Info Box instead of generic CTA */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#0f2a3a] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
             <MapPin className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-4 text-[#A84A33]">
              <Info className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-sm">Wichtig zu wissen</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Muss es mal ganz schnell gehen?</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Nach einem plötzlichen Krankenhausaufenthalt oder Ausfall von Angehörigen ist oft Eile geboten. In sogenannten "Notfällen" können wir den gesamten Prozess auf <strong>3 bis 5 Tage</strong> verkürzen, ohne Abstriche bei der Qualität zu machen.
            </p>
            <p className="text-sm text-slate-400">Gilt für den Großraum Hamburg und Schleswig-Holstein.</p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              to="/kontakt"
              className="bg-white text-[#0f2a3a] px-8 py-4 rounded-xl font-bold transition-all hover:bg-slate-100 flex items-center justify-center gap-3 w-full"
            >
              Express-Anfrage stellen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
