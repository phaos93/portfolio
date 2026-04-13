"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { navLinks, personalInfo } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-surface p-6 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="mb-8 self-end rounded-lg p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <FiX className="text-xl" />
            </button>

            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-accent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {t(link.label)}
                </motion.a>
              ))}
            </nav>

            {/* Social links at bottom */}
            <div className="mt-auto flex gap-2 pt-8 border-t border-border">
              <SocialIcon href={personalInfo.github} label="GitHub">
                <FiGithub className="text-xl" />
              </SocialIcon>
              <SocialIcon href={personalInfo.linkedin} label="LinkedIn">
                <FiLinkedin className="text-xl" />
              </SocialIcon>
              <SocialIcon href={personalInfo.instagram} label="Instagram">
                <FiInstagram className="text-xl" />
              </SocialIcon>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
