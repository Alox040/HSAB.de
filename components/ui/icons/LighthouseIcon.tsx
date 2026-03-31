interface IconProps {
  className?: string;
  size?: number;
}

export default function LighthouseIcon({ className = "", size = 24 }: IconProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L9 7 L15 7 Z" />
      <rect x="9" y="7" width="6" height="2" />
      <path d="M9 9 L7 22 L17 22 L15 9 Z" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="2" y1="22" x2="22" y2="22" />
    </svg>
  );
}
