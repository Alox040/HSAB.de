interface DecorativeBackgroundProps {
  variant?: "wave" | "dots" | "none";
  className?: string;
}

export default function DecorativeBackground({
  variant = "wave",
  className = "",
}: DecorativeBackgroundProps): React.JSX.Element | null {
  if (variant === "none") return null;

  if (variant === "dots") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
          fill="var(--background)"
        />
      </svg>
    </div>
  );
}
