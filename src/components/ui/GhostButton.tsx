import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GhostButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  download?: boolean;
}

export function GhostButton({ href, onClick, children, className, download }: GhostButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-text-primary transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} download={download} target={download ? undefined : "_blank"} rel={download ? undefined : "noopener noreferrer"}>
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
