import type { TechEntry } from "@/types";

export const techStack: TechEntry[] = [
  // Languages
  { name: "TypeScript", icon: "SiTypescript", category: "language", proficiency: "daily", size: "lg" },
  { name: "JavaScript", icon: "SiJavascript", category: "language", proficiency: "daily", size: "md" },
  { name: "Python", icon: "SiPython", category: "language", proficiency: "proficient", size: "md" },
  { name: "SQL", icon: "SiPostgresql", category: "language", proficiency: "daily", size: "sm" },

  // Frontend
  { name: "React", icon: "SiReact", category: "frontend", proficiency: "daily", size: "lg" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend", proficiency: "daily", size: "lg" },
  { name: "React Native", icon: "SiReact", category: "frontend", proficiency: "proficient", size: "md" },
  { name: "TailwindCSS", icon: "SiTailwindcss", category: "frontend", proficiency: "daily", size: "md" },
  { name: "HTML/CSS", icon: "SiHtml5", category: "frontend", proficiency: "daily", size: "sm" },

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend", proficiency: "daily", size: "lg" },
  { name: "Express", icon: "SiExpress", category: "backend", proficiency: "proficient", size: "md" },
  { name: "GraphQL", icon: "SiGraphql", category: "backend", proficiency: "proficient", size: "md" },
  { name: "REST APIs", icon: "SiSwagger", category: "backend", proficiency: "daily", size: "sm" },

  // Database
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database", proficiency: "daily", size: "lg" },
  { name: "MongoDB", icon: "SiMongodb", category: "database", proficiency: "proficient", size: "md" },
  { name: "Sequelize", icon: "SiSequelize", category: "database", proficiency: "proficient", size: "sm" },
  { name: "TypeORM", icon: "SiTypeorm", category: "database", proficiency: "proficient", size: "sm" },

  // DevOps
  { name: "AWS", icon: "SiAmazonwebservices", category: "devops", proficiency: "experienced", size: "md" },
  { name: "GCP", icon: "SiGooglecloud", category: "devops", proficiency: "proficient", size: "md" },
  { name: "Vercel", icon: "SiVercel", category: "devops", proficiency: "daily", size: "md" },
  { name: "Docker", icon: "SiDocker", category: "devops", proficiency: "experienced", size: "md" },

  // Tools
  { name: "Git", icon: "SiGit", category: "tools", proficiency: "daily", size: "md" },
  { name: "Swagger", icon: "SiSwagger", category: "tools", proficiency: "proficient", size: "sm" },
  { name: "Jest", icon: "SiJest", category: "tools", proficiency: "proficient", size: "sm" },
];

export const categoryColors: Record<TechEntry["category"], string> = {
  language: "border-l-yellow-400",
  frontend: "border-l-blue-400",
  backend: "border-l-green-400",
  database: "border-l-purple-400",
  devops: "border-l-orange-400",
  tools: "border-l-pink-400",
};

export const proficiencyLabels = {
  daily: { pt: "Uso Diário", en: "Daily Driver" },
  proficient: { pt: "Proficiente", en: "Proficient" },
  experienced: { pt: "Experiente", en: "Experienced" },
};
