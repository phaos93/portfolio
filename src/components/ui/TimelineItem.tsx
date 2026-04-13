"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/types";

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const { t } = useLanguage();
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={cn(
        "relative mb-12 lg:w-1/2",
        isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"
      )}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute top-6 hidden h-4 w-4 rounded-full border-4 border-bg lg:block",
          isLeft ? "-right-2" : "-left-2",
          entry.isCurrent
            ? "bg-accent animate-pulse-glow"
            : "bg-accent-secondary"
        )}
      />

      {/* Mobile dot */}
      <div
        className={cn(
          "absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-bg lg:hidden",
          entry.isCurrent
            ? "bg-accent animate-pulse-glow"
            : "bg-accent-secondary"
        )}
      />

      {/* Card */}
      <div className="ml-8 lg:ml-0 glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
        <p className="font-mono text-xs text-accent mb-1">{entry.period}</p>
        <h3 className="text-lg font-bold">{t(entry.company)}</h3>
        <p className="text-accent-secondary font-medium text-sm">{t(entry.role)}</p>
        <ul className={cn("mt-3 space-y-2", isLeft && "lg:text-right")}>
          {entry.description.map((desc, j) => (
            <li
              key={j}
              className={cn(
                "text-sm text-text-secondary flex gap-2",
                isLeft && "lg:flex-row-reverse"
              )}
            >
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{t(desc)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
