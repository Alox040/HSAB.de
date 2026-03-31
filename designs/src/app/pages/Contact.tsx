import { Phone, Mail, MapPin, Send, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    requestConsultation: false
  });
  
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = "Bitte geben Sie entweder eine E-Mail oder Telefonnummer an.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Simulate 10% chance of error to show error state
      if (Math.random() > 0.9) {
        setFormState('error');
      } else {
        setFormState('success');
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    // Clear error when user types
    if (errors[name] || errors.contact) {
      setErrors({});
    }
    if (formState === 'error') setFormState('idle');
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-[#fcfbf9]">
      <section className="pt-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#0f2a3a] mb-6">
            Lassen Sie uns sprechen.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Kein Callcenter, keine Warteschleifen. Bei uns sprechen Sie direkt mit Pflegeberatern, die den Markt und die Herausforderungen kennen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Info - Asymmetric Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="space-y-8">
              <div className="group flex items-start gap-5">
                <div className="bg-white border border-slate-200 p-3 rounded-xl shrink-0 text-[#0f2a3a] transition-colors group-hover:border-[#0f2a3a]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-1">Kostenfreie Hotline</h3>
                  <a href="tel:0800123456" className="text-2xl font-serif font-bold text-[#0f2a3a] hover:text-[#A84A33] transition-colors">
                    0800 123 456
                  </a>
                  <p className="text-slate-500 mt-1">Mo-Fr: 08:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="bg-white border border-slate-200 p-3 rounded-xl shrink-0 text-[#0f2a3a] transition-colors group-hover:border-[#0f2a3a]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-1">E-Mail</h3>
                  <a href="mailto:beratung@hanseatische-senioren.de" className="text-lg font-medium text-[#0f2a3a] hover:text-[#A84A33] transition-colors">
                    beratung@hanseatische-senioren.de
                  </a>
                  <p className="text-slate-500 mt-1">Antwort i.d.R. innerhalb von 24h</p>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="bg-white border border-slate-200 p-3 rounded-xl shrink-0 text-[#0f2a3a] transition-colors group-hover:border-[#0f2a3a]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-1">Büro & Beratung</h3>
                  <p className="text-lg text-[#0f2a3a] leading-relaxed">
                    Speicherstadt 1<br />
                    20457 Hamburg
                  </p>
                  <p className="text-slate-500 mt-1 text-sm">Termine nach Vereinbarung</p>
                </div>
              </div>
            </div>

            <div className="bg-[#eef3f6] p-6 rounded-2xl border border-blue-100 mt-auto hidden lg:block">
              <h4 className="font-bold text-[#0f2a3a] mb-2">Im Notfall schnell handeln</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Bei plötzlicher Pflegebedürftigkeit nach einem Krankenhausaufenthalt können wir eine Betreuung oft innerhalb von 4-5 Tagen organisieren. Sprechen Sie uns darauf an.
              </p>
            </div>
          </div>

          {/* Form - Asymmetric Right Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
              <AnimatePresence mode="wait">
                
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#0f2a3a] mb-3">Anfrage erfolgreich versendet</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                      Vielen Dank für Ihr Vertrauen. Einer unserer Berater wird sich schnellstmöglich bei Ihnen melden, um Ihr Anliegen zu besprechen.
                    </p>
                    <button 
                      onClick={() => { setFormState('idle'); setFormData({name: "", email: "", phone: "", message: "", requestConsultation: false}); }}
                      className="text-sm font-medium text-slate-500 hover:text-[#0f2a3a] underline underline-offset-4"
                    >
                      Weitere Nachricht senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    noValidate
                  >
                    <div className="mb-8 border-b border-slate-100 pb-6">
                      <h2 className="text-xl font-bold text-[#0f2a3a]">Ihre Kontaktdaten</h2>
                      <p className="text-sm text-slate-500 mt-1">Wir behandeln Ihre Daten streng vertraulich.</p>
                    </div>

                    {errors.contact && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>{errors.contact}</p>
                      </div>
                    )}

                    {formState === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Vor- und Nachname <span className="text-slate-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={clsx(
                          "w-full px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white outline-none transition-colors",
                          errors.name ? "border-red-300 focus:border-red-500 ring-1 ring-red-500/20" : "border-slate-200 focus:border-[#0f2a3a] focus:ring-1 focus:ring-[#0f2a3a]/20"
                        )}
                        placeholder="z.B. Maria Musterfrau"
                      />
                      {errors.name && <p className="text-red-600 text-sm mt-1.5">{errors.name}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Telefonnummer
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0f2a3a] focus:ring-1 focus:ring-[#0f2a3a]/20 outline-none transition-colors"
                          placeholder="Für einen Rückruf"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          E-Mail Adresse
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={clsx(
                            "w-full px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white outline-none transition-colors",
                            errors.email ? "border-red-300 focus:border-red-500 ring-1 ring-red-500/20" : "border-slate-200 focus:border-[#0f2a3a] focus:ring-1 focus:ring-[#0f2a3a]/20"
                          )}
                          placeholder="ihre@email.de"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="pt-4">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Ihre Situation (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0f2a3a] focus:ring-1 focus:ring-[#0f2a3a]/20 outline-none transition-colors resize-none"
                        placeholder="Kurze Beschreibung der Pflegesituation oder besondere Anforderungen..."
                      ></textarea>
                      <p className="text-xs text-slate-500 mt-2">
                        Je mehr Details Sie uns vorab geben, desto gezielter können wir Sie im Erstgespräch beraten.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <div className="flex items-center h-6 mt-0.5">
                        <input
                          id="requestConsultation"
                          name="requestConsultation"
                          type="checkbox"
                          checked={formData.requestConsultation}
                          onChange={handleChange}
                          className="w-5 h-5 text-[#0f2a3a] border-slate-300 rounded focus:ring-[#0f2a3a] cursor-pointer"
                        />
                      </div>
                      <label htmlFor="requestConsultation" className="text-sm text-slate-700 cursor-pointer leading-snug">
                        Ich wünsche einen zeitnahen, kostenlosen telefonischen Rückruf für eine Erstanalyse meiner Situation.
                      </label>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-8">
                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full sm:w-auto bg-[#0f2a3a] hover:bg-[#1a3b4f] disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                      >
                        {formState === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            Nachricht sicher senden
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
