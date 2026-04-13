"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export function Education() {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeading
        title={{ pt: "Formação", en: "Education" }}
        subtitle={{ pt: "Minha formação acadêmica", en: "My academic background" }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
            variants={fadeInUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <FiBookOpen className="text-xl text-accent" />
            </div>
            <p className="font-mono text-xs text-accent mb-2">{edu.period}</p>
            <h3 className="text-lg font-bold">{edu.institution}</h3>
            <p className="mt-1 text-text-secondary">{t(edu.degree)}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
