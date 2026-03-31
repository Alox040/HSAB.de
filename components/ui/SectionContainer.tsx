interface SectionContainerProps {
  children: React.ReactNode;
  /** white   — #fcfbf9 (page base)
   *  warm    — #F5F1E7 (warm sand surface, UI8 Testimonials bg)
   *  fog     — #e6eaf0 (cool light gray)
   *  sand    — #f5ece1 (soft sand)
   *  primary — #0f2a3a navy (dark sections: Process, CTA)
   *  surface — alias for warm (legacy) */
  variant?: "white" | "fog" | "sand" | "primary" | "surface" | "warm";
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  variant = "white",
  className = "",
  id,
}: SectionContainerProps): React.JSX.Element {
  const variantStyles: Record<string, string> = {
    white: "bg-white",
    warm: "bg-[var(--surface)]",
    surface: "bg-[var(--surface)]",
    fog: "bg-[var(--fog-light)]",
    sand: "bg-[var(--sand-soft)]",
    primary: "bg-[var(--primary)] text-white",
  };

  return (
    <section
      id={id}
      className={`py-[var(--space-section)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
