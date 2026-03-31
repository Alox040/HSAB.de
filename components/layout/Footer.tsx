import Link from "next/link";
import { business } from "@/lib/content";

const serviceLinks = [
  { href: "/services", label: "Leistungen" },
  { href: "/pricing", label: "Preise" },
  { href: "/faq", label: "Häufige Fragen" },
];

const companyLinks = [
  { href: "/about", label: "Über uns" },
  { href: "/profil", label: "Profil" },
  { href: "/contact", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--footer-bg)] text-white">
      <div className="site-shell py-12">
        <div className="grid gap-[var(--gap-grid)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand / Trust */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-bold text-white">
                H
              </span>
              <div>
                <p className="text-base font-semibold">{business.name}</p>
                <p className="text-xs text-white/60">
                  Senioren Alltagsbegleitung in {business.city}
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Persönliche Betreuung und Entlastung für Familien – regional verankert
              in {business.serviceArea}.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2 text-sm" role="list">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
                Rechtliches
              </h3>
              <ul className="flex flex-col gap-2 text-sm" role="list">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
              Kontakt
            </h3>
            <address className="flex flex-col gap-2 not-italic text-sm text-white/80">
              <p className="font-semibold text-white">
                {business.owner}
              </p>
              <p>
                {business.address}
                <br />
                {business.zip} {business.city}
              </p>
              <a
                href={`tel:${business.phone}`}
                className="mt-2 font-semibold text-white hover:text-white/80"
              >
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="text-white hover:text-white/80"
              >
                {business.email}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/55">
            © {currentYear} {business.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
