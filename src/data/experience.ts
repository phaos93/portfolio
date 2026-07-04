import type { ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    company: {
      pt: "Max Vitaly",
      en: "Max Vitaly",
    },
    role: {
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    },
    period: "Jan 2026 – Present",
    isCurrent: true,
    description: [
      {
        pt: "Construção e manutenção do backend de um produto de plano de saúde pet com Node.js e TypeScript, cobrindo gestão de planos, cadastro de animais e processamento de pagamentos via Stripe.",
        en: "Built and maintained the backend of a pet health insurance product with Node.js and TypeScript, covering plan management, pet registration, and payment processing through Stripe.",
      },
      {
        pt: "Integração de APIs externas e documentação de todos os endpoints com Swagger, dando ao frontend web e ao app mobile um contrato claro para desenvolver em paralelo.",
        en: "Integrated external APIs and documented every endpoint with Swagger, giving the web frontend and the mobile app a clear contract to build against.",
      },
      {
        pt: "Criação de scripts para popular o banco de dados a partir de grandes volumes de JSON e PDF, transformando dados dispersos em registros limpos e consultáveis para o app.",
        en: "Wrote scripts to seed the database from large JSON and PDF sources, turning scattered data into clean, queryable records the app can rely on.",
      },
      {
        pt: "Testes unitários nas regras de negócio e no fluxo de pagamento para pegar regressões cedo.",
        en: "Added unit tests around the business rules and payment flow to catch regressions early.",
      },
      {
        pt: "Deploy e gestão dos serviços na Railway e AWS, além de contribuição no frontend com React, Next.js e TailwindCSS.",
        en: "Deployed and managed the services on Railway and AWS, and contributed to the frontend with React, Next.js, and TailwindCSS.",
      },
    ],
  },
  {
    company: {
      pt: "Hologram",
      en: "Hologram",
    },
    role: {
      pt: "Engenheiro de Software",
      en: "Software Engineer",
    },
    period: "Dez 2025 – Present",
    isCurrent: true,
    description: [
      {
        pt: "Construção de um SaaS interno que concilia extratos bancários e faturas de cartão contra um ERP externo para um time de BPO financeiro, substituindo um processo manual baseado em planilhas. Uma conciliação que levava horas passou a rodar em 5 a 15 minutos. Backend assíncrono em FastAPI (SQLAlchemy 2.0, PostgreSQL, Pydantic v2) e frontend em Next.js 14 com TypeScript.",
        en: "Built an internal SaaS that reconciles bank statements and credit card invoices against an external ERP for a financial BPO team, replacing a manual, spreadsheet-based process. A reconciliation that used to take hours now runs in 5 to 15 minutes. Async FastAPI backend (SQLAlchemy 2.0, PostgreSQL, Pydantic v2) and a Next.js 14 frontend in TypeScript.",
      },
      {
        pt: "Desenvolvimento de um pipeline de extração sobre a Claude API (tool-use e structured outputs) que transforma extratos e faturas desorganizados em transações estruturadas, com um motor de matching determinístico que trata tolerância de valor e data e sinaliza anomalias.",
        en: "Built an extraction pipeline on top of the Claude API (tool-use and structured outputs) that turns messy bank statements and card invoices into structured transactions, paired with a deterministic matching engine that handles value and date tolerance and flags anomalies.",
      },
      {
        pt: "Implementação de segurança na camada de dados: criptografia AES-256-GCM em nível de campo, autenticação JWT com controle de acesso por papel e isolamento por cliente, e redação de dados sensíveis nos logs.",
        en: "Implemented security at the data layer: field-level AES-256-GCM encryption, JWT authentication with role-based access and per-client isolation, and redaction of sensitive data in logs.",
      },
      {
        pt: "Configuração do pipeline de entrega: serviços conteinerizados e deployados no Google Cloud Run via GitHub Actions, com quality gates (ruff, mypy strict, pytest, pip-audit) e testes baseados em propriedades barrando builds ruins.",
        en: "Set up the delivery pipeline: containerized services deployed to Google Cloud Run through GitHub Actions, with quality gates (ruff, mypy strict, pytest, pip-audit) and property-based tests blocking bad builds.",
      },
      {
        pt: "Construção e manutenção de pipelines de extração de dados em larga escala no GCP, estruturando dados brutos para os dashboards de Power BI usados pelo time de dados.",
        en: "Built and maintained large-scale data extraction pipelines on GCP that structure raw data for the Power BI dashboards the data team relies on.",
      },
    ],
  },
  {
    company: {
      pt: "Minha Casa Construída LTDA",
      en: "Minha Casa Construída LTDA",
    },
    role: {
      pt: "Engenheiro Backend",
      en: "Backend Engineer",
    },
    period: "Set 2023 – Present",
    isCurrent: true,
    description: [
      {
        pt: "Engenheiro backend único de uma plataforma imobiliária de venda de imóveis prontos e lançamentos (lotes e apartamentos), responsável pela API que serve tanto o site público quanto o sistema interno de gestão, em Node.js, TypeScript e PostgreSQL.",
        en: "Sole backend engineer for a real estate platform selling ready properties and pre-construction developments (lots and apartments), building the API that powered both the public site and the internal management system with Node.js, TypeScript, and PostgreSQL.",
      },
      {
        pt: "Backend do sistema interno de gestão: cadastro de imóveis, cadastro de funcionários e controle de acesso por papel (RBAC), usado diariamente por um time de 5 a 10 pessoas.",
        en: "Built the internal management system's backend: property registration, staff registration, and role-based access control (RBAC), used daily by a team of 5 to 10 people.",
      },
      {
        pt: "Integração ponta a ponta de serviços de terceiros: Asaas para pagamentos, DocuSign para assinatura de documentos e Tiny para ERP, com cache em Redis para manter consultas frequentes rápidas.",
        en: "Integrated third-party services end to end: Asaas for payments, DocuSign for document signing, and Tiny for ERP, with Redis caching to keep frequent queries fast.",
      },
      {
        pt: "Adaptação de todo o backend para rodar na Vercel após a padronização do time na plataforma, incluindo a resolução de um setup de Swagger que o ambiente serverless não suportava de imediato.",
        en: "Got the entire backend running on Vercel after the team standardized on it, including fixing a broken Swagger setup that the serverless environment didn't support out of the box.",
      },
      {
        pt: "Atuação em um time de 4 a 5 desenvolvedores e uma designer, com entregas acompanhadas no Jira e deploy de tudo na Vercel.",
        en: "Worked in a team of 4 to 5 developers and a designer, tracking delivery in Jira and deploying everything on Vercel.",
      },
    ],
  },
  {
    company: {
      pt: "Riderauto",
      en: "Riderauto",
    },
    role: {
      pt: "Engenheiro Front-End (Contratado)",
      en: "Front-End Engineer (Contractor)",
    },
    period: "Fev 2023 – Abr 2025",
    description: [
      {
        pt: "Construção de telas front-end responsivas para um marketplace de carros usados com React, Next.js e TailwindCSS, implementando as interfaces a partir de designs no Figma.",
        en: "Built responsive front-end screens for a used-car marketplace with React, Next.js, and TailwindCSS, implementing the interfaces from Figma designs.",
      },
      {
        pt: "Colaboração próxima com o time para entregar as features solicitadas e manter a UI consistente em toda a plataforma.",
        en: "Worked closely with the team to deliver the requested features and keep the UI consistent across the platform.",
      },
    ],
  },
  {
    company: {
      pt: "Cubos Academy",
      en: "Cubos Academy",
    },
    role: {
      pt: "Entrevistador Técnico",
      en: "Technical Interviewer",
    },
    period: "Dez 2022 – Ago 2023",
    description: [
      {
        pt: "Condução de entrevistas técnicas para um programa de bolsas B2B, com média de 5 a 6 entrevistas por dia e avaliação de mais de 100 candidatos em JavaScript e resolução de problemas.",
        en: "Ran technical interviews for a B2B scholarship program, averaging 5 to 6 interviews a day and assessing over 100 candidates on their JavaScript skills and problem-solving.",
      },
      {
        pt: "Revisão de submissões de código e feedback estruturado que alimentava as decisões de seleção.",
        en: "Reviewed code submissions and gave structured feedback that fed into selection decisions.",
      },
      {
        pt: "Contribuição na seleção de candidatos que seguiram para os programas com empresas parceiras.",
        en: "Helped select candidates who moved on to partner-company programs.",
      },
    ],
  },
  {
    company: {
      pt: "Brazil Iron Mineração LTDA",
      en: "Brazil Iron Mineração LTDA",
    },
    role: {
      pt: "Analista de Compras",
      en: "Procurement Analyst (Buyer)",
    },
    period: "Fev 2020 – Mai 2020",
    description: [
      {
        pt: "Gestão de relacionamento com fornecedores e condução de cotações e negociações para suprimentos e serviços de mineração.",
        en: "Managed supplier relations and ran quotations and negotiations for mining supplies and services.",
      },
      {
        pt: "Controle de pedidos de compra, validação de notas fiscais e análise de custos de suprimentos com Excel.",
        en: "Tracked purchase orders, validated invoices, and analyzed supply costs using Excel.",
      },
    ],
  },
];
