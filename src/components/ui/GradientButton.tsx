import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function GradientButton({ href, onClick, children, className }: GradientButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
