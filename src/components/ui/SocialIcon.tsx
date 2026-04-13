import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function SocialIcon({ href, label, children, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-lg p-2.5 text-text-secondary transition-all duration-300 hover:scale-110 hover:text-accent",
        className
      )}
    >
      {children}
    </a>
  );
}
