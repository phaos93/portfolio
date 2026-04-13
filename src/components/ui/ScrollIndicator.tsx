"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiChevronDown className="text-2xl text-text-secondary" />
      </motion.div>
    </motion.div>
  );
}
