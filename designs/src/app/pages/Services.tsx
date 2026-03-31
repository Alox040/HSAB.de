import { ShieldCheck, HeartPulse, Coffee, UserCheck, ArrowRight, FileText, Anchor } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export default function Services() {
  const serviceCategories = [
    {
      id: "grundpflege",
      title: "Grundpflege & Hygiene",
      desc: "Würdevolle Unterstützung bei den intimsten Aufgaben des Alltags. Unsere Betreuungskräfte gehen behutsam und professionell vor.",
      icon: <HeartPulse className="w-6 h-6" />,
      items: [
        "Hilfe beim Waschen, Duschen und Baden",
        "Unterstützung beim An- und Auskleiden",
        "Hilfe bei Toilettengang und Inkontinenz",
        "Mund-, Zahn- und Haarpflege"
      ]
    },
    {
      id: "hauswirtschaft",
      title: "Hauswirtschaft",
      desc: "Damit das Zuhause sauber und gemütlich bleibt. Die Betreuungskraft übernimmt die wesentlichen Aufgaben im Haushalt.",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        "Einkaufen und Besorgungen",
        "Frisches, altersgerechtes Kochen",
        "Wohnung reinigen und Ordnung halten",
        "Wäschepflege (Waschen und Bügeln)"
      ]
    },
    {
      id: "aktivierung",
      title: "Alltagsbegleitung",
      desc: "Gegen die Einsamkeit. Die soziale und kognitive Aktivierung ist ein wesentlicher Bestandteil der 24-Stunden-Betreuung.",
      icon: <UserCheck className="w-6 h-6" />,
      items: [
        "Gemeinsame Spaziergänge",
        "Begleitung zu Ärzten oder Friseur",
        "Gesellschaft (Vorlesen, Spiele, Gespräche)",
        "Strukturierung des Tagesablaufs"
      ]
    }
  ];

  return (
    <div className="flex flex-col flex-1 w-full bg-[#fcfbf9]">
      
      {/* Editorial Hero with Split Layout */}
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5"
          >
            <span className="text-[#A84A33] font-medium tracking-wider uppercase text-sm mb-4 block">Leistungsportfolio</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#0f2a3a] mb-6 leading-tight">
              Was die 24-Stunden-Betreuung <span className="text-slate-500 italic font-normal">wirklich</span> bedeutet.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Der Begriff "24-Stunden-Betreuung" ist oft missverständlich. Es bedeutet nicht, dass jemand 24 Stunden am Stück arbeitet, sondern dass immer jemand da ist. Eine echte Alternative zum Pflegeheim.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500 bg-white p-4 rounded-xl border border-slate-100 shadow-sm inline-flex">
              <ShieldCheck className="w-5 h-5 text-[#A84A33]" />
              Streng nach deutschem Arbeitszeitgesetz.
            </div>
          </motion.div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764006145420-df3006edf060?auto=format&fit=crop&q=80&w=1200"
                alt="Betreuungskraft hilft Senioren beim Spaziergang"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0f2a3a] rounded-full mix-blend-multiply opacity-5 blur-2xl hidden md:block"></div>
          </div>
          
        </div>
      </section>

      {/* Detailed Services Grid - Asymmetric Cards */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-[#0f2a3a] mb-4">Individuelle Unterstützung</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Die genauen Aufgaben werden individuell in einem Betreuungsvertrag festgehalten. Im Fokus steht immer die Entlastung der Angehörigen und der Erhalt der Lebensqualität der Senioren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="bg-[#fcfbf9] rounded-3xl p-8 lg:p-10 border border-slate-100 flex flex-col h-full hover:border-[#eef3f6] hover:shadow-md transition-all">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center text-[#0f2a3a] mb-8 shadow-sm border border-slate-100">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0f2a3a] mb-4">{cat.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                  {cat.desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-200">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#0f2a3a] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A84A33] mt-2 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Clarification Section */}
      <section className="py-24 bg-[#0f2a3a] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5">
              <FileText className="w-16 h-16 text-[#A84A33] mb-6 opacity-80" />
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Was wir <span className="italic font-normal">nicht</span> dürfen.</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Ehrlichkeit ist unser hanseatischer Ansatz. Deshalb kommunizieren wir auch klar die gesetzlichen Grenzen der 24-Stunden-Betreuung.
              </p>
            </div>
            
            <div className="md:col-span-7 bg-white/5 p-8 lg:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">Medizinische Behandlungspflege</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Tätigkeiten der medizinischen Behandlungspflege (SGB V) dürfen rechtlich <strong>ausschließlich</strong> von examinierten Pflegekräften (z.B. einem lokalen Pflegedienst) durchgeführt werden.
              </p>
              <ul className="space-y-3">
                {[
                  "Verabreichung von Injektionen (Spritzen)",
                  "Setzen oder Wechseln von Kathetern",
                  "Wundversorgung und Verbandswechsel",
                  "Stellen von Medikamenten (Gabe nach Box ist erlaubt)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="text-red-400 font-bold">✕</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 text-sm text-slate-400 flex items-start gap-3">
                <Anchor className="w-5 h-5 shrink-0 text-[#A84A33]" />
                <p>In der Praxis arbeiten unsere Betreuungskräfte oft Hand in Hand mit lokalen ambulanten Pflegediensten, die morgens für diese spezifischen Aufgaben vorbeikommen.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience / Qualification */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0f2a3a] mb-6">
            Passt dieses Modell zu Ihnen?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Ob eine 24-Stunden-Betreuung die richtige Lösung ist, hängt stark von der individuellen Wohn- und Pflegesituation ab. Ein eigenes Zimmer für die Betreuungskraft ist beispielsweise zwingende Voraussetzung.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-[#A84A33] hover:bg-[#8B3D2A] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-sm"
          >
            Kostenlos beraten lassen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
