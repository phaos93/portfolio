"use client";

import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navLinks } from "@/data/personal";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          isScrolled
            ? "bg-bg/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="text-lg font-bold gradient-text">
            PHAOS<span className="text-text-primary">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {t(link.label)}
                  {/* Underline animation */}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 text-text-secondary hover:text-accent lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
