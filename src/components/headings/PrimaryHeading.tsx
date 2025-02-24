import { motion } from "motion/react";

export enum PrimaryHeadingType {
  EMPHASIZED = "relative text-[3rem] md:text-[4rem] lg:text-[5.9rem] font-nohemi my-[2rem] md:my-[2.3rem] lg:my-[4rem] font-bold",
  NORMAL = "relative text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-nohemi my-[2rem] md:my-[2.3rem] lg:my-[2.3rem] font-bold",
}

export function PrimaryHeading({
  title,
  type,
}: {
  title: string;
  type: PrimaryHeadingType;
}) {
  return (
    <motion.h1
      initial={{ top: -15, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      className={type}
    >
      {title}
    </motion.h1>
  );
}
