import type { JSX, ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconBase({
  className,
  children,
}: IconProps & { children: ReactNode }): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ClockIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

export function HeartIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M20.8 8.2a4.8 4.8 0 0 0-8.8-2.6 4.8 4.8 0 0 0-8.8 2.6c0 5.2 8.8 10.6 8.8 10.6s8.8-5.4 8.8-10.6z" />
    </IconBase>
  );
}

export function UsersIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9.5" cy="7.5" r="3.5" />
      <path d="M22 20v-1a4 4 0 0 0-3-3.9" />
      <path d="M16.5 4.8a3.5 3.5 0 0 1 0 5.4" />
    </IconBase>
  );
}

export function HomeIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M10 21v-5h4v5" />
    </IconBase>
  );
}

export function ShieldCheckIcon({ className }: IconProps): JSX.Element {
  return (
    <IconBase className={className}>
      <path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3z" />
      <path d="M9 12.5l2 2 4-4" />
    </IconBase>
  );
}
