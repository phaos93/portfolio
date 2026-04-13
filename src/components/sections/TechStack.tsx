"use client";

import { motion } from "framer-motion";
import {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiGraphql, SiPostgresql,
  SiMongodb, SiSequelize, SiDocker, SiGit, SiSwagger, SiJest,
  SiVercel, SiHtml5, SiGooglecloud,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { techStack, categoryColors, proficiencyLabels } from "@/data/techStack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiGraphql, SiPostgresql,
  SiMongodb, SiSequelize, SiDocker, SiGit, SiSwagger, SiJest,
  SiVercel, SiHtml5, SiGooglecloud, SiAmazonwebservices: FaAws,
  SiTypeorm: SiTypescript,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

export function TechStack() {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeading
        title={{ pt: "Tecnologias", en: "Tech Stack" }}
        subtitle={{ pt: "Ferramentas que uso no dia a dia", en: "Tools I use daily" }}
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto" style={{ gridAutoFlow: "dense" }}>
        {techStack.map((tech, i) => {
          const Icon = iconMap[tech.icon];

          return (
            <motion.div
              key={tech.name}
              className={cn(
                "glass rounded-xl p-4 border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10",
                categoryColors[tech.category],
                tech.size === "lg" && "md:col-span-2"
              )}
              variants={fadeInUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Icon && <Icon className="text-2xl mb-2 text-text-secondary" />}
              <p className="font-semibold">{tech.name}</p>
              <p className="text-xs font-mono text-text-secondary mt-1">
                {t(proficiencyLabels[tech.proficiency])}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
