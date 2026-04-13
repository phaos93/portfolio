import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    logo: "/logos/mcc.svg",
    title: "Minha Casa Construída",
    description: {
      pt: "Plataforma imobiliária completa para compra e venda de imóveis. Responsável pelo desenvolvimento de todo o backend, incluindo regras de negócio, integração com APIs externas, documentação Swagger e deploy na Vercel.",
      en: "Complete real estate platform for buying and selling properties. Responsible for the entire backend development, including business logic, external API integrations, Swagger documentation, and Vercel deployment.",
    },
    techs: ["TypeScript", "Node.js", "React", "Next.js", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/phaos93",
    liveUrl: "https://www.minhacasaconstruida.com/",
  },
  {
    logo: "/logos/maxvitaly.png",
    title: "Max Vitaly",
    description: {
      pt: "Startup de planos de saúde para pets. Desenvolvimento do backend da plataforma, incluindo gestão de planos, cadastro de animais, integração com meios de pagamento e deploy na Railway e AWS.",
      en: "Pet health insurance startup. Backend platform development, including plan management, pet registration, payment gateway integration, and deployment on Railway and AWS.",
    },
    techs: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Railway", "AWS"],
    githubUrl: "https://github.com/phaos93",
    liveUrl: "https://www.maxvitaly.com/",
  },
  {
    logo: "/logos/hologram.avif",
    title: "Hologram",
    description: {
      pt: "Sistema de extração de dados em larga escala utilizando Python e Google Cloud Platform, alimentando dashboards analíticos construídos com Power BI pela equipe de dados.",
      en: "Large-scale data extraction system using Python and Google Cloud Platform, feeding analytical dashboards built with Power BI by the data team.",
    },
    techs: ["Python", "GCP", "Data Extraction", "Power BI"],
    githubUrl: "https://github.com/phaos93",
    liveUrl: "https://www.hologramgestao.com.br/",
  },
  {
    logo: "/logos/riderauto.webp",
    title: "Riderauto",
    description: {
      pt: "Plataforma web para venda de carros usados. Desenvolvimento do front-end focado em design responsivo e experiência do usuário, com interface moderna para listagem e busca de veículos.",
      en: "Web platform for selling used cars. Front-end development focused on responsive design and user experience, with a modern interface for vehicle listing and search.",
    },
    techs: ["React", "Next.js", "TailwindCSS", "React Native"],
    githubUrl: "https://github.com/phaos93",
    liveUrl: "https://riderauto.com.br/",
  },
];
