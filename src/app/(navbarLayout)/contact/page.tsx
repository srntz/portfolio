"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="px-40">
      <motion.h1
        initial={{ top: -15, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        className="relative text-[4.5rem] font-nohemi my-[2.3rem] font-bold"
      >
        Contact me
      </motion.h1>
    </div>
  );
}
