import { motion } from "motion/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ top: -20, opacity: 0 }}
      whileInView={{ top: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="relative w-full text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] font-semibold font-nohemi mt-10 mb-6 lg:mt-32 lg:mb-12"
    >
      {title}
    </motion.h2>
  );
}
