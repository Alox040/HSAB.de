interface RopePatternProps {
  className?: string;
}

export default function RopePattern({ className = "" }: RopePatternProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 100 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 4 C10 0 20 8 30 4 C40 0 50 8 60 4 C70 0 80 8 90 4 C95 2 98 3 100 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
