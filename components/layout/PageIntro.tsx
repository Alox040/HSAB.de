interface PageIntroProps {
  heading: string;
  description?: string;
  badge?: string;
}

export default function PageIntro({
  heading,
  description,
  badge,
}: PageIntroProps): React.JSX.Element {
  return (
    <div className="bg-[var(--primary)] py-16 text-white sm:py-20">
      <div className="site-shell">
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {badge}
          </span>
        )}
        <h1 className="headline-page font-bold">
          {heading}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
