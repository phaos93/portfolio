import type { PersonalInfo, NavLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Pedro Henrique Araújo Oliveira Silva",
  title: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer",
  },
  email: "phaos93@gmail.com",
  phone: "+55 (71) 9 8190-3434",
  location: {
    pt: "Salvador, Bahia, Brasil",
    en: "Salvador, Bahia, Brazil",
  },
  bio: {
    pt: "Desenvolvedor Full Stack com formação em Engenharia Ambiental e mais de 5 anos de experiência em desenvolvimento de software. Especialista em construir aplicações escaláveis com TypeScript, React, Next.js e Node.js.",
    en: "Full Stack Developer with a background in Environmental Engineering and over 5 years of experience in software development. Specialized in building scalable applications with TypeScript, React, Next.js, and Node.js.",
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
    "Full Stack Developer",
    "TypeScript Enthusiast",
    "Backend Architect",
    "Salvador, BA 🇧🇷",
  ],
  en: [
    "Full Stack Developer",
    "TypeScript Enthusiast",
    "Backend Architect",
    "Salvador, BA 🇧🇷",
  ],
};

export const aboutText = {
  pt: [
    "Minha trajetória até o desenvolvimento de software foi pouco convencional. Me formei em Engenharia Ambiental pela Universidade Tiradentes, mas descobri no código uma paixão que me levou a mudar completamente de carreira.",
    "Em 2022, concluí a formação em Desenvolvimento Full Stack na Cubos Academy e desde então venho construindo soluções robustas para empresas reais, do back-end ao front-end.",
    "Hoje, com mais de 5 anos de experiência, trabalho diariamente com TypeScript, React, Next.js, Node.js e serviços em nuvem. Acredito que o melhor código é aquele que resolve problemas reais de forma simples e escalável.",
  ],
  en: [
    "My path to software development was unconventional. I graduated in Environmental Engineering from Universidade Tiradentes, but I found a passion in code that led me to completely change my career.",
    "In 2022, I completed the Full Stack Development program at Cubos Academy and since then I've been building robust solutions for real companies, from back-end to front-end.",
    "Today, with over 5 years of experience, I work daily with TypeScript, React, Next.js, Node.js, and cloud services. I believe the best code is the one that solves real problems in a simple and scalable way.",
  ],
};
