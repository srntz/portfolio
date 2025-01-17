import { motion } from "motion/react";
import Image from "next/image";

export default function BreatingLogo({
  delay,
  size,
}: {
  delay: number;
  size: number;
}) {
  return (
    <motion.div
      className={"absolute"}
      exit={{
        top: "-15vh",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        transition: {
          repeat: Infinity,
          duration: 3,
          delay: delay,
          ease: "easeInOut",
        },
      }}
    >
      <Image src={"./icon.svg"} alt={"logo"} width={size} height={size} />
    </motion.div>
  );
}
