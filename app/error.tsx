"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-2 text-7xl font-bold text-[var(--primary)]">!</p>
      <h1 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
        Ein Fehler ist aufgetreten
      </h1>
      <p className="mb-8 max-w-md text-[var(--text-muted)]">
        Leider ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es
        erneut oder kehren Sie zur Startseite zurück.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="btn-base btn-primary"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="btn-base btn-secondary"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
