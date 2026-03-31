interface IconProps {
  className?: string;
  size?: number;
}

export default function ShipWheelIcon({ className = "", size = 24 }: IconProps): React.JSX.Element {
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
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
      <line x1="5.64" y1="5.64" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="18.36" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="14.83" y2="9.17" />
      <line x1="9.17" y1="14.83" x2="5.64" y2="18.36" />
    </svg>
  );
}
