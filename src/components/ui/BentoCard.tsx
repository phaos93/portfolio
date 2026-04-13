"use client";

import { motion } from "framer-motion";

interface BentoCardProps {
  value: string;
  label: string;
  index?: number;
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function BentoCard({ value, label, index = 0 }: BentoCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-2xl bg-surface/60 backdrop-blur-md border border-border/50 p-6 text-center aspect-square transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30"
      variants={fadeInScale}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-3xl font-bold gradient-text">{value}</p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}
