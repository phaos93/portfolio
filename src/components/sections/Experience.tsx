"use client";

import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <>
      <SectionHeading
        title={{ pt: "Experiência", en: "Experience" }}
        subtitle={{ pt: "Minha trajetória profissional", en: "My professional journey" }}
      />

      <div className="relative">
        {/* Timeline line - mobile (left) */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-secondary lg:hidden" />

        {/* Timeline line - desktop (center) */}
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent to-accent-secondary lg:block" />

        {experiences.map((exp, i) => (
          <TimelineItem key={i} entry={exp} index={i} />
        ))}
      </div>
    </>
  );
}
