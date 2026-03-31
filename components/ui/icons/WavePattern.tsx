interface WavePatternProps {
  className?: string;
  fill?: string;
}

export default function WavePattern({
  className = "",
  fill = "currentColor",
}: WavePatternProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1440 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 C240 60 480 0 720 30 C960 60 1200 0 1440 30 L1440 60 L0 60 Z"
        fill={fill}
      />
    </svg>
  );
}
