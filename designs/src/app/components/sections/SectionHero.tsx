import { motion } from "motion/react";
import { ArrowRight, Phone, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ButtonLink } from "../ui/Button";

export function SectionHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-5 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0f2a3a] text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#A84A33]"></span>
            Verfügbare Betreuungskräfte in Norddeutschland
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-[#0f2a3a] mb-6">
            Geborgenheit <br className="hidden sm:block"/>
            <span className="text-slate-500 italic font-normal">im eigenen</span> Zuhause.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Die vertraute Umgebung bewahren. Wir vermitteln erfahrene osteuropäische Betreuungskräfte für eine liebevolle, rechtssichere 24-Stunden-Betreuung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <ButtonLink to="/kontakt" variant="primary" size="lg" className="group w-full sm:w-auto relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Kostenlose Erstanalyse
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </ButtonLink>
            
            <div className="flex flex-col pl-2 sm:pl-4 border-l-2 border-slate-200">
              <span className="text-sm text-slate-500 font-medium">Direkter Kontakt</span>
              <a href="tel:0800123456" className="text-[#A84A33] font-bold hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> 0800 123 456
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#fcfbf9] bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Kunde" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#A84A33]">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium text-slate-600 mt-0.5">Von 200+ Familien empfohlen</span>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-6 xl:col-span-7 relative h-[500px] lg:h-[650px] w-full mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute top-0 right-0 w-[85%] h-[90%] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761073777670-6f1556b8f35a?auto=format&fit=crop&q=80&w=1200"
              alt="Seniorenpaar beim Tee"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
