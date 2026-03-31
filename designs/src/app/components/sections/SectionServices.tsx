import { Clock, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent } from "../ui/Card";

export function SectionServices() {
  const services = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Wirkliche Entlastung im Alltag",
      desc: "Die Betreuungskraft lebt mit im Haushalt. Sie übernimmt hauswirtschaftliche Aufgaben, unterstützt bei der Grundpflege und leistet Gesellschaft."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "100% Rechtssicher & Transparent",
      desc: "Wir vermitteln ausschließlich Personal über das bewährte Entsendemodell (A1-Bescheinigung). Alle Steuern und Sozialabgaben werden korrekt abgeführt."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Persönliche Ansprechpartner",
      desc: "Wir sind keine anonyme Hotline. Unser Büro in Hamburg ist Ihr direkter Anlaufpunkt. Wir moderieren und organisieren bei Bedarf sofort."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0f2a3a] mb-6">
              Warum wir anders arbeiten.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Der Pflegemarkt ist unübersichtlich. Wir setzen auf hanseatische Klarheit: Keine versteckten Gebühren, klare rechtliche Rahmenbedingungen und eine persönliche Betreuung.
            </p>
            <Link to="/leistungen" className="inline-flex items-center gap-2 text-[#A84A33] font-medium hover:text-[#8B3D2A] transition-colors group">
              Unsere Leistungen im Detail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            {services.map((item, idx) => (
              <Card key={idx} className="group transition-all hover:border-[#A84A33]/20 hover:shadow-md">
                <CardContent className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white border border-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-[#0f2a3a] shrink-0 shadow-sm group-hover:bg-[#0f2a3a] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f2a3a] mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
