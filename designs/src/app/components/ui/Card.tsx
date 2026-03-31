import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(clsx(classes));
}

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "flat";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-[#fcfbf9] border border-slate-100",
    elevated: "bg-white shadow-md border border-slate-50",
    flat: "bg-white"
  };

  return (
    <div className={cn("rounded-2xl overflow-hidden", variants[variant], className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 sm:p-8", className)}>{children}</div>;
}
