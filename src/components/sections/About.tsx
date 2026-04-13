"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutText } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { GhostButton } from "@/components/ui/GhostButton";
import { basePath } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  const { locale, t } = useLanguage();

  const stats = [
    { value: "5+", label: t({ pt: "Anos de Experiência", en: "Years of Experience" }) },
    { value: "10+", label: t({ pt: "Tecnologias Dominadas", en: "Technologies Mastered" }) },
    { value: "3", label: t({ pt: "Empresas Atendidas", en: "Companies Served" }) },
    { value: "Eng.", label: t({ pt: "Formação em Engenharia", en: "Engineering Background" }) },
  ];

  const cvPath = locale === "pt" ? `${basePath}/cv/Pedro_CV_PT.pdf` : `${basePath}/cv/Pedro_CV_EN.pdf`;

  return (
    <>
      <SectionHeading
        title={{ pt: "Sobre Mim", en: "About Me" }}
        subtitle={{ pt: "Minha trajetória até aqui", en: "My journey so far" }}
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {aboutText[locale].map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeInUp} className="pt-4">
            <GhostButton href={cvPath} download>
              <FiDownload className="text-lg" />
              {t({ pt: "Download CV", en: "Download Resume" })}
            </GhostButton>
          </motion.div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <BentoCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
