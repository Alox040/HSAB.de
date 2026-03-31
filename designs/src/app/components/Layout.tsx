import { Outlet, Link, useLocation } from "react-router";
import { Phone, Menu, X, Shield, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(clsx(classes));
}

const navLinks = [
  { name: "Leistungen", path: "/leistungen" },
  { name: "Ablauf", path: "/so-funktionierts" },
  { name: "Philosophie", path: "/ueber-uns" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll state for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf9] text-slate-800 font-sans selection:bg-[#A84A33] selection:text-white">
      
      {/* Utility Bar - Minimalist */}
      <div className="bg-[#0f2a3a] text-slate-300 px-4 py-2 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 100% Rechtssicher</span>
            <span className="hidden md:inline border-l border-slate-600 pl-4">A1-Bescheinigung garantiert</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:0800123456" className="text-white hover:text-[#A84A33] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 0800 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3" : "bg-white border-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-[#0f2a3a] text-white rounded-lg flex items-center justify-center font-serif font-bold text-xl group-hover:bg-[#A84A33] transition-colors">
              H
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-serif font-bold text-[#0f2a3a]">Hanseatische Senioren</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide mt-1">ALLTAGSBEGLEITUNG</span>
            </div>
          </Link>

          {/* Desktop Nav - Asymmetric to right */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors relative py-2",
                  location.pathname === link.path
                    ? "text-[#0f2a3a]"
                    : "text-slate-500 hover:text-[#0f2a3a]"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#A84A33]" />
                )}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            <Link
              to="/kontakt"
              className="text-sm font-semibold text-[#0f2a3a] border border-[#0f2a3a] px-5 py-2.5 rounded-md hover:bg-[#0f2a3a] hover:text-white transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#0f2a3a]"
            >
              Beratung anfragen
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#0f2a3a] -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <span className="font-serif font-bold text-[#0f2a3a]">Menü</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:bg-slate-50 rounded-md">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col p-6 gap-6">
                <Link to="/" className={cn("text-xl font-serif", location.pathname === "/" ? "text-[#A84A33]" : "text-[#0f2a3a]")}>
                  Startseite
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-xl font-serif",
                      location.pathname === link.path ? "text-[#A84A33]" : "text-[#0f2a3a]"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">Fragen zur Betreuung?</p>
                <Link
                  to="/kontakt"
                  className="w-full flex items-center justify-between bg-[#0f2a3a] text-white px-6 py-4 rounded-xl font-medium"
                >
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full relative">
        <Outlet />
      </main>

      {/* Sophisticated Footer Grid */}
      <footer className="bg-[#0b1d28] text-slate-400 py-16 lg:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand - Span 4 cols */}
            <div className="md:col-span-12 lg:col-span-4 lg:pr-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-serif font-bold">H</div>
                <span className="text-lg font-serif font-bold text-white">Hanseatische Senioren</span>
              </div>
              <p className="text-sm leading-relaxed mb-8">
                Wir machen würdevolles Altern im eigenen Zuhause möglich. Vermittlung von qualifizierten Betreuungskräften aus Osteuropa – legal, transparent und menschlich.
              </p>
              <a href="tel:0800123456" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-md transition-colors text-sm font-medium border border-white/10">
                <Phone className="w-4 h-4" /> 0800 - 123 456
              </a>
            </div>

            {/* Links - Span 3 cols each */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">Leistungen</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/leistungen" className="hover:text-white transition-colors">24-Stunden-Betreuung</Link></li>
                <li><Link to="/leistungen" className="hover:text-white transition-colors">Demenzbetreuung</Link></li>
                <li><Link to="/leistungen" className="hover:text-white transition-colors">Hauswirtschaftliche Hilfen</Link></li>
                <li><Link to="/so-funktionierts" className="hover:text-white transition-colors">Ablauf der Vermittlung</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">Unternehmen</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Unsere Philosophie</Link></li>
                <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt & Anfahrt</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Karriere intern</a></li>
              </ul>
            </div>

            {/* Legal - Span 2 cols */}
            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">Rechtliches</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie-Einstellungen</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Hanseatische Senioren – Alltagsbegleitung.</p>
            <p>Ein Hamburger Unternehmen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
