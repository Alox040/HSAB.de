interface SectionHeaderProps {
  badge?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  serif?: boolean;
  /** "plain" = accent-colored overline text (UI8 editorial style, default)
   *  "pill"  = rounded badge with background (legacy pill style) */
  badgeVariant?: "plain" | "pill";
}

export default function SectionHeader({
  badge,
  heading,
  description,
  centered = false,
  light = false,
  serif = false,
  badgeVariant = "plain",
}: SectionHeaderProps): React.JSX.Element {
  const align = centered ? "text-center items-center" : "";
  const mutedColor = light ? "text-white/70" : "text-[var(--text-muted)]";

  const badgeClass =
    badgeVariant === "pill"
      ? light
        ? "inline-block rounded-full bg-white/20 border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
        : "inline-block rounded-full bg-[var(--secondary-soft)] border border-[var(--border-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]"
      : light
        ? "block text-sm font-medium uppercase tracking-wider text-white/60"
        : "block text-sm font-medium uppercase tracking-wider text-[var(--accent)]";

  return (
    <div className={`flex flex-col gap-[var(--gap-stack)] ${align}`}>
      {badge && <span className={badgeClass}>{badge}</span>}
      <h2
        className={`headline-section font-bold ${serif ? "font-serif" : ""} ${light ? "text-white" : "text-[var(--primary)]"}`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg leading-relaxed ${mutedColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
