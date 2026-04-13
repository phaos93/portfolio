<div align="center">

# Pedro Henrique | Portfolio

**Full Stack Developer** from Salvador, Bahia, Brazil

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-deployed-222?logo=github&logoColor=white)](https://phaos93.github.io/portfolio/)

</div>

---

## About

Personal portfolio website showcasing my professional experience, tech stack, and projects. Built with a modern dark-first design featuring glassmorphism, smooth scroll-triggered animations, and full bilingual support (PT/EN).

### Highlights

- **7 Sections** -- Hero, About, Tech Stack, Experience, Projects, Education, Contact
- **Dark / Light Mode** -- with system-aware toggle and localStorage persistence
- **PT / EN Switch** -- full bilingual content with one-click toggle
- **Contact Form** -- powered by Web3Forms (serverless, no backend required)
- **Responsive** -- mobile-first design, optimized for all screen sizes
- **Animations** -- scroll-reveal, stagger, typewriter, and hover effects via Framer Motion
- **Static Export** -- pre-rendered HTML for fast loading on GitHub Pages

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router, Static Export) |
| **Styling** | TailwindCSS v4, custom dark/light theme |
| **Language** | TypeScript 5 |
| **Animation** | Framer Motion 12 |
| **Theming** | next-themes |
| **Icons** | react-icons (Simple Icons, Feather Icons) |
| **Form** | Web3Forms API |
| **Deploy** | GitHub Pages + GitHub Actions |

---

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, metadata, SEO)
├── components/
│   ├── layout/       # Navbar, Footer, ThemeToggle, MobileMenu
│   ├── sections/     # Hero, About, TechStack, Experience, Projects, Education, Contact
│   └── ui/           # Reusable components (buttons, cards, badges, etc.)
├── contexts/         # LanguageContext (PT/EN)
├── data/             # Static data (experience, projects, tech stack, education)
├── hooks/            # useTypewriter, useScrollSpy, useContactForm
├── lib/              # Utility functions (cn helper)
└── types/            # TypeScript interfaces
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Get your free access key at [web3forms.com](https://web3forms.com).

---

## Deploy

This project uses **GitHub Pages** with automated deployment via GitHub Actions. Every push to `main` triggers a build and deploy.

```
push to main → GitHub Actions → npm run build → static export (/out) → GitHub Pages
```

---

## Contact

- **Email:** phaos93@gmail.com
- **LinkedIn:** [/in/pedro-araujo-silva](https://www.linkedin.com/in/pedro-araujo-silva/)
- **GitHub:** [/phaos93](https://github.com/phaos93)
- **Instagram:** [/phaos93](https://www.instagram.com/phaos93/)
