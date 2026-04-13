"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechBadge } from "./TechBadge";
import type { ProjectEntry } from "@/types";

interface ProjectCardProps {
  project: ProjectEntry;
  index?: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 group"
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub - ${project.title}`}
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FiGithub className="text-xl" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live - ${project.title}`}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <FiExternalLink className="text-xl" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
        {t(project.description)}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </motion.div>
  );
}
