import Link from "next/link";
import { business } from "@/lib/content";

const serviceLinks = [
  { href: "/services", label: "Leistungen" },
  { href: "/pricing", label: "Preise" },
  { href: "/faq", label: "FAQ" },
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
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-base" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
              Kontakt
            </h3>
            <address className="flex flex-col gap-2 not-italic text-base text-white/85">
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

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Rechtliches
            </h3>
            <ul className="flex flex-col gap-2 text-base" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
