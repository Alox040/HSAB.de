import Link from "next/link";
import { business } from "@/lib/content";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/pricing", label: "Preise" },
  { href: "/about", label: "Über uns" },
  { href: "/profil", label: "Profil" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar(): React.JSX.Element {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[var(--primary)]">
        <div className="site-shell flex items-center justify-between py-2 text-xs text-white/85">
          <div className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3z" />
              <path d="M9 12.5l2 2 4-4" />
            </svg>
            <span>100% Rechtssicher</span>
          </div>
          <a
            href={`tel:${business.phone}`}
            className="font-medium text-white transition-colors hover:text-white/80"
          >
            {business.phone}
          </a>
        </div>
      </div>

      <header className="border-b border-[var(--border-soft)] bg-white/95 backdrop-blur-sm">
        <nav className="site-shell flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 leading-tight no-underline"
            aria-label={`${business.shortName} – Startseite`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)] font-bold text-white transition-colors hover:bg-[var(--accent)]">
              H
            </span>
            <span className="flex flex-col">
              <span className="text-lg font-bold text-[var(--primary)]">
                {business.shortName}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Senioren Alltagsbegleitung
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="btn-base btn-secondary hidden px-4 py-2 text-sm md:block"
          >
            Kontakt
          </Link>

          <details className="md:hidden">
            <summary
              className="cursor-pointer list-none rounded-md p-2 text-[var(--foreground)] hover:bg-[var(--fog-light)]"
              aria-label="Menü öffnen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </summary>
            <div className="absolute left-0 right-0 top-full border-b border-[var(--border-soft)] bg-white px-[var(--space-container)] py-4 shadow-lg">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--fog-light)] hover:text-[var(--primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2 border-t border-[var(--border-soft)] pt-2">
                  <Link
                    href="/contact"
                    className="btn-base btn-primary block px-3 py-2 text-center text-sm"
                  >
                    Kontakt aufnehmen
                  </Link>
                </li>
                <li>
                  <a
                    href={`tel:${business.phone}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--primary)] hover:bg-[var(--fog-light)]"
                  >
                    {business.phone}
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </nav>
      </header>
    </div>
  );
}
