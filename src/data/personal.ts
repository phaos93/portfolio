import type { PersonalInfo, NavLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Pedro Henrique Araújo Oliveira Silva",
  title: {
    pt: "Engenheiro Full Stack Sênior",
    en: "Senior Full Stack Engineer",
  },
  email: "phaos93@gmail.com",
  phone: "+55 (71) 9 8190-3434",
  location: {
    pt: "Salvador, Bahia, Brasil",
    en: "Salvador, Bahia, Brazil",
  },
  bio: {
    pt: "Engenheiro Full Stack Sênior com formação em Engenharia Ambiental e mais de 5 anos de experiência em desenvolvimento de software. Especialista em construir aplicações escaláveis com TypeScript, React, Next.js e Node.js.",
    en: "Senior Full Stack Engineer with a background in Environmental Engineering and over 5 years of experience in software development. Specialized in building scalable applications with TypeScript, React, Next.js, and Node.js.",
  },
  github: "https://github.com/phaos93",
  linkedin: "https://www.linkedin.com/in/pedro-araujo-silva/",
  instagram: "https://www.instagram.com/phaos93/",
};

export const navLinks: NavLink[] = [
  { label: { pt: "Sobre", en: "About" }, href: "#sobre" },
  { label: { pt: "Tecnologias", en: "Tech Stack" }, href: "#tecnologias" },
  { label: { pt: "Experiência", en: "Experience" }, href: "#experiencia" },
  { label: { pt: "Projetos", en: "Projects" }, href: "#projetos" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contato" },
];

export const heroSubtitles = {
  pt: [
    "Senior Full Stack Engineer",
    "TypeScript Enthusiast",
    "Backend Architect",
    "Salvador, BA 🇧🇷",
  ],
  en: [
    "Senior Full Stack Engineer",
    "TypeScript Enthusiast",
    "Backend Architect",
    "Salvador, BA 🇧🇷",
  ],
};

export const aboutText = {
  pt: [
    "Minha trajetória até o desenvolvimento de software foi pouco convencional. Me formei em Engenharia Ambiental pela Universidade Tiradentes, mas descobri no código uma paixão que me levou a mudar completamente de carreira.",
    "Comecei a desenvolver software antes de ingressar na Cubos Academy, onde concluí a formação em Desenvolvimento Full Stack em 2022. O curso foi fundamental para consolidar minha base técnica e acelerar minha evolução, mas minha jornada como desenvolvedor já havia começado.",
    "Hoje, com mais de 5 anos de experiência, trabalho diariamente com TypeScript, React, Next.js, Node.js e serviços em nuvem. Acredito que o melhor código é aquele que resolve problemas reais de forma simples e escalável.",
  ],
  en: [
    "My path to software development was unconventional. I graduated in Environmental Engineering from Universidade Tiradentes, but I found a passion in code that led me to completely change my career.",
    "I started developing software before joining Cubos Academy, where I later completed the Full Stack Development program in 2022. The course helped strengthen my foundation and accelerate my growth, but my journey as a developer had already begun.",
    "Today, with over 5 years of experience, I work daily with TypeScript, React, Next.js, Node.js, and cloud services. I believe the best code is the one that solves real problems in a simple and scalable way.",
  ],
};
