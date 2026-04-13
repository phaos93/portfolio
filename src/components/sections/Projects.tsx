"use client";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <>
      <SectionHeading
        title={{ pt: "Projetos", en: "Projects" }}
        subtitle={{ pt: "Alguns dos meus trabalhos", en: "Some of my work" }}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
