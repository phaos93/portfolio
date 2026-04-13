"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface SectionHeadingProps {
  title: { pt: string; en: string };
  subtitle?: { pt: string; en: string };
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        {t(title)}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary">{t(subtitle)}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
    </motion.div>
  );
}
