import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound(): React.JSX.Element {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-2 text-7xl font-bold text-[var(--primary)]">404</p>
      <h1 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
        Diese Seite wurde nicht gefunden
      </h1>
      <p className="mb-8 max-w-md text-[var(--text-muted)]">
        Die gesuchte Seite existiert nicht oder wurde verschoben.
        Bitte kehren Sie zur Startseite zurück.
      </p>
      <Link
        href="/"
        className="btn-base btn-primary"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
