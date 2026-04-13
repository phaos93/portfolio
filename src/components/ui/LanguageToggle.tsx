"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1">
      <button
        onClick={() => setLocale("pt")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200",
          locale === "pt"
            ? "bg-accent text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200",
          locale === "en"
            ? "bg-accent text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
