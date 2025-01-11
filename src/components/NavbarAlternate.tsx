import { motion } from "motion/react";
import Image from "next/image";

export default function NavbarAlternate() {
  return (
    <motion.div
      initial={{ top: -30, opacity: 0, width: 130 }}
      animate={{ opacity: 1, width: "50rem", top: "auto" }}
      transition={{
        default: { duration: 0.15, delay: 0.3, ease: "easeInOut" },
        width: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
      }}
      className="relative flex items-center px-6 bg-[#1D1D1D] h-[4.7rem] backdrop-blur-lg rounded-3xl"
    >
      <Image src={"./icon.svg"} alt={"logo"} width={35} height={35} />
    </motion.div>
  );
}
