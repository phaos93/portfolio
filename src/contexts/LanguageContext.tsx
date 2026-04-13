"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "@/types";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (obj: { pt: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "pt" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (obj: { pt: string; en: string }) => obj[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
