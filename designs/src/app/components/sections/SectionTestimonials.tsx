import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function SectionTestimonials() {
  return (
    <section className="py-32 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677087776419-123ebe919c84?auto=format&fit=crop&q=80&w=800"
                  alt="Kunde im Portrait"
                  className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0f2a3a] text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden sm:block">
                <p className="font-medium text-sm leading-relaxed">„Eine riesige Erleichterung für die ganze Familie.“</p>
              </div>
            </div>

            <div>
              <Quote className="w-12 h-12 text-[#A84A33] mb-8 opacity-40" />
              <blockquote className="text-2xl lg:text-3xl font-serif text-[#0f2a3a] leading-relaxed mb-8">
                Seitdem Maria bei meiner Mutter wohnt, kann ich nachts endlich wieder beruhigt durchschlafen. Die Vermittlung war transparent, ohne leere Versprechungen und sehr professionell.
              </blockquote>
              <div>
                <div className="font-bold text-[#0f2a3a] text-lg">Dr. Thomas Schmidt</div>
                <div className="text-slate-500">Angehöriger aus Hamburg-Winterhude</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
