import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function SectionProcess() {
  const steps = [
    { num: "01", title: "Bedarf klären", text: "In einem ausführlichen Telefonat analysieren wir Ihre Pflegesituation." },
    { num: "02", title: "Profile erhalten", text: "Wir schlagen Ihnen sorgfältig geprüfte Betreuungskräfte vor." },
    { num: "03", title: "Kennenlernen", text: "Auf Wunsch organisieren wir ein Video-Gespräch mit der Favoritin." },
    { num: "04", title: "Sichere Anreise", text: "Wir koordinieren die Anreise und bleiben dauerhafter Ansprechpartner." }
  ];

  return (
    <section className="py-24 bg-[#0f2a3a] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#A84A33] font-medium tracking-wider uppercase text-sm mb-4 block">Der Ablauf</span>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold leading-tight">
              Von der ersten Frage bis zur Ankunft – wir organisieren das.
            </h2>
          </div>
          <Link to="/so-funktionierts" className="text-[#A84A33] hover:text-white transition-colors flex items-center gap-2 font-medium shrink-0 group">
            Prozess im Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-serif font-bold text-white/10 mb-6 group-hover:text-[#A84A33]/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                {step.title}
                {i < 3 && <ArrowRight className="w-4 h-4 text-white/30 hidden lg:block absolute -right-6 top-20" />}
              </h3>
              <p className="text-slate-400 leading-relaxed pr-4">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
