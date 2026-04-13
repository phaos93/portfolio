"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactForm } from "@/hooks/useContactForm";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Contact() {
  const { t } = useLanguage();
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <SectionHeading
        title={{ pt: "Contato", en: "Contact" }}
        subtitle={{ pt: "Vamos conversar?", en: "Let's talk?" }}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left - Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold">
            {t({
              pt: "Vamos construir algo juntos?",
              en: "Let's build something together?",
            })}
          </motion.h3>

          <motion.p variants={fadeInUp} className="mt-4 text-text-secondary leading-relaxed">
            {t({
              pt: "Estou disponível para novos projetos e oportunidades. Entre em contato e vamos conversar sobre como posso ajudar.",
              en: "I'm available for new projects and opportunities. Get in touch and let's discuss how I can help.",
            })}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            >
              <FiMail className="text-lg shrink-0" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
            >
              <FiPhone className="text-lg shrink-0" />
              {personalInfo.phone}
            </a>
            <p className="flex items-center gap-3 text-text-secondary">
              <FiMapPin className="text-lg shrink-0" />
              {t(personalInfo.location)}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 flex gap-1">
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

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-text-secondary">
              {t({ pt: "Nome", en: "Name" })}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg bg-surface border border-border px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              placeholder={t({ pt: "Seu nome", en: "Your name" })}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg bg-surface border border-border px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              placeholder={t({ pt: "seu@email.com", en: "your@email.com" })}
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-text-secondary">
              {t({ pt: "Mensagem", en: "Message" })}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 w-full resize-none rounded-lg bg-surface border border-border px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              placeholder={t({ pt: "Sua mensagem...", en: "Your message..." })}
            />
          </div>

          {/* Honeypot */}
          <input type="hidden" name="botcheck" value="" />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                {t({ pt: "Enviando...", en: "Sending..." })}
              </>
            ) : (
              <>
                <FiSend className="text-lg" />
                {t({ pt: "Enviar Mensagem", en: "Send Message" })}
              </>
            )}
          </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="text-center text-sm text-accent-tertiary">
              {t({
                pt: "Mensagem enviada com sucesso!",
                en: "Message sent successfully!",
              })}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              {t({
                pt: "Erro ao enviar. Tente novamente.",
                en: "Error sending. Please try again.",
              })}
            </p>
          )}
        </motion.form>
      </div>
    </>
  );
}
