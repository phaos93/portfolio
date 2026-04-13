# Guia de Implementação - Portfolio Pedro Henrique

## Status da Fundação ✅

Tudo abaixo já está criado e funcionando (`npm run build` passa):

| Arquivo | Descrição |
|---|---|
| `src/app/layout.tsx` | Root layout com Inter + JetBrains Mono, metadata SEO, ThemeProvider, LanguageProvider |
| `src/app/globals.css` | Tailwind v4 com paleta customizada, animações, glassmorphism, gradient utilities |
| `src/app/sitemap.ts` | Sitemap dinâmico |
| `src/app/robots.ts` | Robots.txt |
| `src/contexts/LanguageContext.tsx` | Context PT/EN com `useLanguage()` hook, `t()` helper, persistência localStorage |
| `src/data/personal.ts` | Info pessoal, navLinks, heroSubtitles, aboutText (PT/EN) |
| `src/data/experience.ts` | 4 experiências profissionais completas (PT/EN) |
| `src/data/projects.ts` | 5 projetos do GitHub (PT/EN) |
| `src/data/techStack.ts` | 24 tecnologias categorizadas com proficiência e tamanho |
| `src/data/education.ts` | 2 formações (PT/EN) |
| `src/hooks/useTypewriter.ts` | Hook de efeito typewriter com velocidades configuráveis |
| `src/hooks/useScrollSpy.ts` | Hook de detecção de seção ativa no scroll |
| `src/hooks/useContactForm.ts` | Hook de formulário com Web3Forms integration |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `src/types/index.ts` | Interfaces TypeScript compartilhadas |
| `public/profilepic.jpg` | Foto de perfil |
| `public/cv/Pedro_CV_PT.pdf` | Currículo PT |
| `public/cv/Pedro_CV_EN.pdf` | Currículo EN |
| `.env.local` | Placeholder para Web3Forms key |

---

## Paleta de Cores (referência rápida)

```
Dark Mode:
  bg: #0A0A0F | surface: #12121A | elevated: #1A1A26
  border: #2A2A3A | text: #F0F0F5 | text-secondary: #9494A8
  accent: #6D5AE6 | accent-secondary: #E84ECF | accent-tertiary: #3DDC84

Light Mode:
  bg: #FAFAFE | surface: #FFFFFF | elevated: #F0F0F8
  border: #E0E0EC | text: #12121A | text-secondary: #5A5A72
```

Classes Tailwind: `bg-bg`, `bg-surface`, `text-text-primary`, `text-text-secondary`, `text-accent`, `border-border`, etc.

CSS Utilities: `.glass` (glassmorphism), `.gradient-text` (gradient no texto), `.gradient-border` (borda gradient)

---

## Componentes a Implementar

### 1. Layout Components

#### 1.1 `src/components/layout/Navbar.tsx`

```
"use client"
```

**Comportamento:**
- Fixo no topo: `fixed top-0 left-0 right-0 z-50`
- Backdrop blur: `backdrop-blur-lg bg-bg/80`
- Ao scrollar > 50px: adiciona `border-b border-border shadow-sm`
- Links vindos de `navLinks` (src/data/personal.ts)
- Usa `useScrollSpy` para highlight do link ativo (`text-accent` quando ativo)
- Underline animado no hover: `<span>` com `scaleX(0) -> scaleX(1)` via transition
- Lado direito: `<LanguageToggle />` + `<ThemeToggle />`
- Mobile (< md): mostra hamburger button, abre `<MobileMenu />`

**Estrutura:**
```tsx
<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-bg/80 transition-all">
  <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
    {/* Logo/Name - link to top */}
    <a href="#" className="text-xl font-bold gradient-text">PH</a>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map(link => (
        <a key={link.href} href={link.href} className={cn(
          "text-sm font-medium transition-colors relative",
          activeId === link.href.slice(1) ? "text-accent" : "text-text-secondary hover:text-text-primary"
        )}>
          {t(link.label)}
          {/* Underline animado */}
          <span className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-accent transition-transform duration-300 origin-center",
            activeId === link.href.slice(1) ? "w-full scale-x-100" : "w-full scale-x-0"
          )} />
        </a>
      ))}
    </div>

    {/* Right side */}
    <div className="flex items-center gap-3">
      <LanguageToggle />
      <ThemeToggle />
      {/* Mobile hamburger (md:hidden) */}
      <button className="md:hidden" onClick={() => setMobileOpen(true)}>
        {/* 3 lines icon */}
      </button>
    </div>
  </nav>
</header>
```

**State:** `const [scrolled, setScrolled] = useState(false)` + `const [mobileOpen, setMobileOpen] = useState(false)`

Use `useEffect` com scroll listener para `setScrolled(window.scrollY > 50)`.

---

#### 1.2 `src/components/layout/MobileMenu.tsx`

**Props:** `{ isOpen: boolean; onClose: () => void }`

**Comportamento:**
- Drawer lateral direito com overlay
- `framer-motion`: AnimatePresence, overlay fade in, drawer slide in from right
- Links do navLinks, onClick fecha o menu e faz smooth scroll
- Social icons no footer do drawer

**Estrutura:**
```tsx
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Drawer */}
      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-72 bg-surface border-l border-border p-8"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {/* Close button */}
        {/* Nav links stacked */}
        {/* Social icons at bottom */}
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

#### 1.3 `src/components/layout/ThemeToggle.tsx`

**Comportamento:**
- Usa `useTheme()` do `next-themes`
- Ícone sol (light) / lua (dark) do `react-icons` (FiSun, FiMoon)
- Rotação 180deg na transição
- Button com `p-2 rounded-lg hover:bg-surface-elevated transition-colors`

```tsx
"use client"
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

// Precisa de mounted state para evitar hydration mismatch:
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div className="w-9 h-9" />; // placeholder
```

---

#### 1.4 `src/components/ui/LanguageToggle.tsx`

**Comportamento:**
- Usa `useLanguage()` do context
- Dois botões lado a lado: "PT" e "EN" (ou bandeiras emoji 🇧🇷 / 🇺🇸)
- O ativo tem `bg-accent/20 text-accent`, o inativo `text-text-secondary`
- Container: `flex rounded-lg bg-surface p-1 gap-1`

```tsx
"use client"
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="flex rounded-lg bg-surface p-1 gap-1">
      <button
        onClick={() => setLocale("pt")}
        className={cn(
          "px-2 py-1 rounded text-xs font-medium transition-colors",
          locale === "pt" ? "bg-accent/20 text-accent" : "text-text-secondary hover:text-text-primary"
        )}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={cn(/* same logic */)}
      >
        EN
      </button>
    </div>
  );
}
```

---

#### 1.5 `src/components/layout/Footer.tsx`

**Estrutura simples:**
```tsx
<footer className="border-t border-border py-8">
  <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-text-secondary text-sm">
      © {new Date().getFullYear()} Pedro Henrique. Built with Next.js & TailwindCSS.
    </p>
    <div className="flex gap-4">
      {/* Social icons: GitHub, LinkedIn, Instagram */}
    </div>
  </div>
</footer>
```

---

### 2. UI Components

#### 2.1 `src/components/ui/SectionHeading.tsx`

**Props:** `{ title: { pt: string; en: string }; subtitle?: { pt: string; en: string } }`

```tsx
<div className="mb-16 text-center">
  <h2 className="text-3xl md:text-4xl font-bold">{t(title)}</h2>
  {subtitle && <p className="mt-4 text-text-secondary text-lg">{t(subtitle)}</p>}
  {/* Accent line */}
  <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
</div>
```

---

#### 2.2 `src/components/ui/SocialIcon.tsx`

**Props:** `{ href: string; icon: ReactNode; label: string }`

```tsx
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}
  className="p-2 text-text-secondary hover:text-accent hover:scale-110 transition-all duration-200"
>
  {icon}
</a>
```

Ícones do react-icons: `FiGithub`, `FiLinkedin`, `FiInstagram` (de `react-icons/fi`)

---

#### 2.3 `src/components/ui/GradientButton.tsx`

**Props:** `{ children: ReactNode; href?: string; onClick?: () => void }`

```tsx
<a/button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:scale-105">
  {children}
</a/button>
```

---

#### 2.4 `src/components/ui/GhostButton.tsx`

Mesmo padrão mas: `border border-border text-text-primary hover:border-accent hover:text-accent`

---

### 3. Section Components

#### 3.1 `src/components/sections/Hero.tsx`

**"use client"** — usa hooks (useTypewriter, useLanguage) e framer-motion

**Layout:**
- `min-h-screen flex items-center` com `pt-20` (espaço para navbar fixa)
- Grid: `grid lg:grid-cols-2 gap-12 items-center`
- Coluna esquerda: texto / Coluna direita: foto

**Coluna Esquerda (motion.div com staggerChildren: 0.15):**
1. `<p>` com saudação: "Olá, eu sou" / "Hi, I'm" — `text-accent font-mono text-sm`
2. `<h1>` com nome: `text-5xl md:text-7xl lg:text-8xl font-extrabold` — "Pedro Henrique"
3. `<div>` com typewriter:
   - Usa `useTypewriter({ words: heroSubtitles[locale] })`
   - `font-mono text-xl md:text-2xl text-accent-secondary`
   - Cursor piscante: `<span className="animate-pulse">|</span>`
4. `<p>` com bio: `text-text-secondary text-lg max-w-lg`
5. Botões CTA:
   - GradientButton: "Ver Projetos" / "View Projects" → href="#projetos"
   - GhostButton: "Entrar em Contato" / "Get in Touch" → href="#contato"
6. Social icons row: GitHub, LinkedIn, Instagram

**Coluna Direita:**
- Container com `relative` para efeito de glow atrás
- Glow: `absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-secondary/30 blur-3xl`
- Imagem: `next/image`, `src="/profilepic.jpg"`, `priority`, `rounded-2xl`, ring gradient
- Framer Motion: `animate-float` no container ou sutil parallax com `useScroll`

**Scroll Indicator (bottom):**
```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
  <FiChevronDown className="text-2xl text-text-secondary" />
</div>
```

**Framer Motion no Hero:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.p variants={itemVariants}>Olá, eu sou</motion.p>
  <motion.h1 variants={itemVariants}>Pedro Henrique</motion.h1>
  ...
</motion.div>
```

---

#### 3.2 `src/components/sections/About.tsx`

**"use client"**

**Layout:** `grid lg:grid-cols-2 gap-16 items-start`

**Coluna Esquerda — Narrativa:**
- Usa `aboutText` de `src/data/personal.ts`
- Cada parágrafo com `text-text-secondary leading-relaxed mb-4`
- Botão download CV no final:
  - `locale === "pt"` → `/cv/Pedro_CV_PT.pdf`
  - `locale === "en"` → `/cv/Pedro_CV_EN.pdf`
  - `<a download>` com ícone FiDownload

**Coluna Direita — Bento Grid 2x2:**
```tsx
<div className="grid grid-cols-2 gap-4">
  <BentoCard value="5+" label={t({pt:"Anos de Experiência", en:"Years of Experience"})} />
  <BentoCard value="10+" label={t({pt:"Tecnologias Dominadas", en:"Technologies Mastered"})} />
  <BentoCard value="3" label={t({pt:"Empresas Atendidas", en:"Companies Served"})} />
  <BentoCard value="🎓" label={t({pt:"Eng. Ambiental → Dev", en:"Env. Engineer → Dev"})} />
</div>
```

**`src/components/ui/BentoCard.tsx`:**
```tsx
// Props: { value: string; label: string }
<div className="glass rounded-2xl p-6 text-center">
  <p className="text-3xl font-bold gradient-text">{value}</p>
  <p className="mt-2 text-sm text-text-secondary">{label}</p>
</div>
```

Framer Motion: `whileInView`, stagger scale-in.

---

#### 3.3 `src/components/sections/TechStack.tsx`

**"use client"**

**Dados:** Importa `techStack`, `categoryColors`, `proficiencyLabels` de `src/data/techStack.ts`

**Layout:** Bento grid com CSS Grid

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {techStack.map((tech) => (
    <div
      key={tech.name}
      className={cn(
        "glass rounded-xl p-4 border-l-4 transition-all hover:-translate-y-1 hover:shadow-lg",
        categoryColors[tech.category],
        tech.size === "lg" && "md:col-span-2",
      )}
    >
      {/* Icon from react-icons/si */}
      <TechIcon name={tech.icon} className="text-2xl mb-2" />
      <p className="font-semibold">{tech.name}</p>
      <p className="text-xs font-mono text-text-secondary mt-1">
        {t(proficiencyLabels[tech.proficiency])}
      </p>
    </div>
  ))}
</div>
```

**Mapeamento de ícones:** Criar um helper que mapeia a string `tech.icon` para o componente real:
```tsx
import { SiTypescript, SiJavascript, SiPython, ... } from "react-icons/si";

const iconMap: Record<string, IconType> = {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiGraphql, SiPostgresql,
  SiMongodb, SiSequelize, SiDocker, SiGit, SiSwagger, SiJest,
  SiVercel, SiAmazonwebservices, SiHtml5, SiTypeorm,
};
```

Framer Motion: staggered fade-up com `0.05s` delay entre items.

---

#### 3.4 `src/components/sections/Experience.tsx`

**"use client"**

**Dados:** Importa `experiences` de `src/data/experience.ts`

**Layout: Timeline Vertical**

```tsx
<div className="relative">
  {/* Linha vertical central (desktop) / esquerda (mobile) */}
  <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-secondary" />

  {experiences.map((exp, i) => (
    <TimelineItem key={i} entry={exp} index={i} />
  ))}
</div>
```

**`src/components/ui/TimelineItem.tsx`:**

**Props:** `{ entry: ExperienceEntry; index: number }`

```tsx
// Alterna lado no desktop: index par = esquerda, ímpar = direita
const isLeft = index % 2 === 0;

<div className={cn(
  "relative mb-12 lg:w-1/2",
  isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"
)}>
  {/* Timeline dot */}
  <div className={cn(
    "absolute left-4 lg:left-auto w-4 h-4 rounded-full border-4 border-bg",
    isLeft ? "lg:-right-2" : "lg:-left-2",
    entry.isCurrent ? "bg-accent animate-pulse-glow" : "bg-accent-secondary"
  )} />

  {/* Card */}
  <div className="ml-12 lg:ml-0 glass rounded-xl p-6">
    <p className="font-mono text-xs text-accent mb-1">{entry.period}</p>
    <h3 className="text-lg font-bold">{t(entry.company)}</h3>
    <p className="text-accent-secondary font-medium text-sm">{t(entry.role)}</p>
    <ul className="mt-3 space-y-2">
      {entry.description.map((desc, j) => (
        <li key={j} className="text-sm text-text-secondary flex gap-2">
          <span className="text-accent mt-1 shrink-0">▸</span>
          {t(desc)}
        </li>
      ))}
    </ul>
  </div>
</div>
```

Framer Motion: slide in from left/right alternado, `whileInView`.

---

#### 3.5 `src/components/sections/Projects.tsx`

**"use client"**

**Layout:**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map(project => <ProjectCard key={project.title} project={project} />)}
</div>
```

**`src/components/ui/ProjectCard.tsx`:**

**Props:** `{ project: ProjectEntry }`

```tsx
<div className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 group">
  {/* Header: title + github link */}
  <div className="flex items-start justify-between">
    <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{project.title}</h3>
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
       className="text-text-secondary hover:text-accent transition-colors">
      <FiGithub className="text-xl" />
    </a>
  </div>

  {/* Description */}
  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{t(project.description)}</p>

  {/* Tech tags */}
  <div className="mt-4 flex flex-wrap gap-2">
    {project.techs.map(tech => (
      <TechBadge key={tech} name={tech} />
    ))}
  </div>
</div>
```

**`src/components/ui/TechBadge.tsx`:**
```tsx
// Props: { name: string }
<span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-mono text-accent">
  {name}
</span>
```

---

#### 3.6 `src/components/sections/Education.tsx`

**Layout simples:**
```tsx
<div className="grid md:grid-cols-2 gap-6">
  {education.map(edu => (
    <div key={edu.institution} className="glass rounded-xl p-6">
      <p className="font-mono text-xs text-accent mb-2">{edu.period}</p>
      <h3 className="text-lg font-bold">{edu.institution}</h3>
      <p className="text-text-secondary mt-1">{t(edu.degree)}</p>
    </div>
  ))}
</div>
```

---

#### 3.7 `src/components/sections/Contact.tsx`

**"use client"**

**Layout:** `grid lg:grid-cols-2 gap-16`

**Coluna Esquerda:**
```tsx
<div>
  <h3 className="text-2xl font-bold">
    {t({ pt: "Vamos construir algo juntos?", en: "Let's build something together?" })}
  </h3>
  <p className="mt-4 text-text-secondary">
    {t({ pt: "Estou disponível para novos projetos e oportunidades.", en: "I'm available for new projects and opportunities." })}
  </p>

  <div className="mt-8 space-y-4">
    <a href="mailto:phaos93@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-accent">
      <FiMail /> phaos93@gmail.com
    </a>
    <a href="tel:+5571981903434" className="flex items-center gap-3 text-text-secondary hover:text-accent">
      <FiPhone /> +55 (71) 9 8190-3434
    </a>
    <p className="flex items-center gap-3 text-text-secondary">
      <FiMapPin /> Salvador, Bahia, Brasil
    </p>
  </div>

  {/* Social icons */}
</div>
```

**Coluna Direita — Formulário:**
```tsx
// Usa useContactForm() hook
<form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label className="text-sm font-medium text-text-secondary">{t({pt:"Nome", en:"Name"})}</label>
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="mt-1 w-full rounded-lg bg-surface border border-border px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
    />
  </div>
  {/* Same for email */}
  <div>
    <label>...</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={5}
      className="... resize-none"
    />
  </div>

  {/* Honeypot */}
  <input type="hidden" name="botcheck" value="" />

  <button
    type="submit"
    disabled={status === "submitting"}
    className="w-full rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
  >
    {status === "submitting"
      ? t({pt: "Enviando...", en: "Sending..."})
      : t({pt: "Enviar Mensagem", en: "Send Message"})
    }
  </button>

  {/* Toast feedback */}
  {status === "success" && (
    <p className="text-accent-tertiary text-sm text-center">
      {t({pt: "Mensagem enviada com sucesso!", en: "Message sent successfully!"})}
    </p>
  )}
  {status === "error" && (
    <p className="text-red-400 text-sm text-center">
      {t({pt: "Erro ao enviar. Tente novamente.", en: "Error sending. Please try again."})}
    </p>
  )}
</form>
```

**IMPORTANTE:** Para o formulário funcionar, registre-se em https://web3forms.com com o email phaos93@gmail.com, copie o access key e cole no `.env.local`.

---

### 4. Montagem Final — `src/app/page.tsx`

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="sobre" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <About />
          </div>
        </section>
        <section id="tecnologias" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <TechStack />
          </div>
        </section>
        <section id="experiencia" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Experience />
          </div>
        </section>
        <section id="projetos" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Projects />
          </div>
        </section>
        <section id="formacao" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Education />
          </div>
        </section>
        <section id="contato" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

### 5. Framer Motion — Padrões de Animação

**Pattern para scroll-reveal (usar em todas sections):**
```tsx
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  {/* content */}
</motion.div>
```

**Pattern para stagger container:**
```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item} variants={fadeInUp}>
      ...
    </motion.div>
  ))}
</motion.div>
```

---

### 6. Responsividade — Breakpoints Chave

| Componente | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Navbar | Hamburger | Hamburger | Links inline |
| Hero | Stack, `text-4xl` | Grid 2 cols, `text-5xl` | Grid 2 cols, `text-7xl` |
| About | Stack | Grid 2 cols | Grid 2 cols |
| Tech | Grid 2 cols | Grid 3 cols | Grid 4 cols |
| Timeline | Left-aligned single | Left-aligned single | Alternating left/right |
| Projects | 1 col | 2 cols | 3 cols |
| Contact | Stack | Grid 2 cols | Grid 2 cols |

---

### 7. Checklist de Verificação

- [ ] `npm run build` sem erros
- [ ] Registrar em web3forms.com e preencher `.env.local`
- [ ] Testar formulário de contato (receber email em phaos93@gmail.com)
- [ ] Switch PT/EN funciona e persiste
- [ ] Dark/Light mode funciona e persiste
- [ ] Responsivo: testar mobile (375px), tablet (768px), desktop (1440px)
- [ ] Links de download CV funcionam
- [ ] Links sociais abrem corretamente
- [ ] Smooth scroll entre seções
- [ ] Lighthouse 95+ (performance, accessibility, best practices, SEO)
- [ ] Nenhuma menção a IA em qualquer lugar do código ou UI

### 8. Deploy — GitHub Pages (Gratuito)

O site será hospedado gratuitamente no GitHub Pages. O Next.js gera arquivos estáticos (HTML/CSS/JS) que o GitHub Pages serve diretamente.

#### 8.1 Configuração já feita no `next.config.ts`

```ts
output: "export",        // Gera static HTML em /out
images: { unoptimized: true },  // GitHub Pages não tem image optimization server
```

**Sobre `basePath`:** Depende do tipo de repo:
- **User site** (`phaos93.github.io`): NÃO precisa de basePath. URL final: `https://phaos93.github.io`
- **Project site** (`phaos93/portfolio`): Precisa de `basePath: "/portfolio"`. URL final: `https://phaos93.github.io/portfolio`

Se usar basePath, todos os links internos e assets já serão ajustados automaticamente pelo Next.js.

#### 8.2 Criar o GitHub Actions Workflow

Criar o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_WEB3FORMS_KEY: ${{ secrets.WEB3FORMS_KEY }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 8.3 Passo a Passo Completo

**1. Criar repositório no GitHub:**
```bash
# Opção A — User site (recomendado, URL limpa):
# Criar repo com nome: phaos93.github.io
# NÃO usar basePath no next.config.ts

# Opção B — Project site:
# Criar repo com nome: portfolio (ou qualquer nome)
# Descomentar basePath: "/portfolio" no next.config.ts
```

**2. Inicializar e fazer push:**
```bash
cd portfolio
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/phaos93/phaos93.github.io.git
git push -u origin main
```

**3. Configurar GitHub Pages no repositório:**
1. Ir em **Settings** > **Pages** no repo
2. Em **Source**, selecionar **GitHub Actions** (NÃO selecionar "Deploy from a branch")
3. Pronto — o workflow vai rodar automaticamente no próximo push

**4. Configurar o secret do Web3Forms:**
1. Ir em **Settings** > **Secrets and variables** > **Actions**
2. Clicar **New repository secret**
3. Name: `WEB3FORMS_KEY`
4. Value: colar a access key do web3forms.com
5. Clicar **Add secret**

**5. Verificar o deploy:**
- Ir na aba **Actions** do repo para acompanhar o build
- Após sucesso, o site estará disponível em:
  - User site: `https://phaos93.github.io`
  - Project site: `https://phaos93.github.io/portfolio`

#### 8.4 Deploy Automático

Cada `git push` na branch `main` dispara automaticamente o workflow que:
1. Instala dependências
2. Faz o build (gera `/out` com HTML estático)
3. Faz upload e deploy no GitHub Pages

Não precisa fazer mais nada — o deploy é 100% automático.

#### 8.5 Domínio Customizado (Opcional)

Se quiser usar um domínio próprio (ex: `pedrohenrique.dev`):

1. No repo, ir em **Settings** > **Pages** > **Custom domain**
2. Digitar o domínio e salvar
3. No provedor DNS do domínio, criar registros:
   - **CNAME** `www` → `phaos93.github.io`
   - **A records** (para apex domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. Marcar **Enforce HTTPS** nas settings do GitHub Pages
5. Criar arquivo `public/CNAME` com o domínio:
   ```
   pedrohenrique.dev
   ```

#### 8.6 Limitações do GitHub Pages

- **Gratuito** para repos públicos (ilimitado) e privados (2000 min/mês de Actions)
- **Tamanho máximo** do site: 1GB
- **Bandwidth**: 100GB/mês (mais que suficiente para portfolio)
- **Apenas sites estáticos** — por isso usamos `output: "export"` no Next.js
- **Sem server-side**: API routes do Next.js NÃO funcionam (por isso usamos Web3Forms para o formulário ao invés de uma API route)
