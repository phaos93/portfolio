export type Locale = "pt" | "en";

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface ExperienceEntry {
  company: LocalizedString;
  role: LocalizedString;
  period: string;
  description: LocalizedString[];
  isCurrent?: boolean;
}

export interface ProjectEntry {
  title: string;
  description: LocalizedString;
  techs: string[];
  githubUrl: string;
  liveUrl?: string;
  logo?: string;
}

export interface EducationEntry {
  institution: string;
  degree: LocalizedString;
  period: string;
}

export interface TechEntry {
  name: string;
  icon: string;
  category: "language" | "frontend" | "backend" | "database" | "devops" | "tools";
  proficiency: "daily" | "proficient" | "experienced";
  size?: "sm" | "md" | "lg";
}

export interface PersonalInfo {
  name: string;
  title: LocalizedString;
  email: string;
  phone: string;
  location: LocalizedString;
  bio: LocalizedString;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface NavLink {
  label: LocalizedString;
  href: string;
}
