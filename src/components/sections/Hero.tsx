"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personalInfo, heroSubtitles } from "@/data/personal";
import { GradientButton } from "@/components/ui/GradientButton";
import { GhostButton } from "@/components/ui/GhostButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { basePath } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const { locale, t } = useLanguage();
  const typedText = useTypewriter({ words: heroSubtitles[locale] });

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p variants={item} className="font-mono text-sm text-accent">
            {t({ pt: "Olá, eu sou", en: "Hi, I'm" })}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl lg:text-7xl"
          >
            Pedro
            <br />
            <span className="gradient-text">Henrique</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 font-mono text-lg text-text-secondary md:text-xl"
          >
            <span className="text-accent">&gt;</span>
            <span>{typedText}</span>
            <span className="animate-pulse text-accent">|</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-text-secondary leading-relaxed"
          >
            {t(personalInfo.bio)}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <GradientButton href="#projetos">
              {t({ pt: "Ver Projetos", en: "View Projects" })}
            </GradientButton>
            <GhostButton href="#contato">
              {t({ pt: "Entrar em Contato", en: "Get in Touch" })}
            </GhostButton>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex gap-1">
            <SocialIcon href={personalInfo.github} label="GitHub">
              <FiGithub className="text-xl" />
            </SocialIcon>
            <SocialIcon href={personalInfo.linkedin} label="LinkedIn">
              <FiLinkedin className="text-xl" />
            </SocialIcon>
            <SocialIcon href={personalInfo.instagram} label="Instagram">
              <FiInstagram className="text-xl" />
            </SocialIcon>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Gradient glow behind photo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-2xl" />
            <div className="gradient-border relative overflow-hidden rounded-2xl">
              <Image
                src={`${basePath}/profilepic.jpg`}
                alt="Pedro Henrique - Full Stack Developer"
                width={400}
                height={400}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}
