import { ReactNode } from "react";
import { Link } from "react-router";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(clsx(classes));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";
  
  const variants = {
    primary: "bg-[#0f2a3a] text-white hover:bg-[#1a3b4f] shadow-sm hover:shadow-md focus:ring-[#0f2a3a]",
    secondary: "bg-[#A84A33] text-white hover:bg-[#8B3D2A] shadow-sm hover:shadow-md focus:ring-[#A84A33]",
    outline: "border-2 border-[#0f2a3a] text-[#0f2a3a] hover:bg-[#0f2a3a] hover:text-white focus:ring-[#0f2a3a]",
    ghost: "text-slate-600 hover:text-[#0f2a3a] hover:bg-slate-100 focus:ring-slate-200"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ 
  to, 
  variant = "primary", 
  size = "md", 
  className, 
  children 
}: { 
  to: string; 
  variant?: "primary" | "secondary" | "outline" | "ghost"; 
  size?: "sm" | "md" | "lg"; 
  className?: string; 
  children: ReactNode;
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";
  
  const variants = {
    primary: "bg-[#0f2a3a] text-white hover:bg-[#1a3b4f] shadow-sm hover:shadow-md focus:ring-[#0f2a3a]",
    secondary: "bg-[#A84A33] text-white hover:bg-[#8B3D2A] shadow-sm hover:shadow-md focus:ring-[#A84A33]",
    outline: "border-2 border-[#0f2a3a] text-[#0f2a3a] hover:bg-[#0f2a3a] hover:text-white focus:ring-[#0f2a3a]",
    ghost: "text-slate-600 hover:text-[#0f2a3a] hover:bg-slate-100 focus:ring-slate-200"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Link 
      to={to} 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
