import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export interface ILink {
  title: string;
  href: string;
}

export default function NavbarAlternate({ links }: { links: ILink[] }) {
  const [containerAnimationCompleted, setContainerAnimationCompleted] =
    useState(false);

  return (
    <motion.nav
      initial={{ top: -30, opacity: 0, width: 130 }}
      animate={{ opacity: 1, width: "45rem", top: "auto" }}
      onAnimationComplete={() => setContainerAnimationCompleted(true)}
      transition={{
        default: { duration: 0.15, delay: 0.3, ease: "easeInOut" },
        width: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
      }}
      className="relative flex items-center px-6 bg-[#1D1D1D] h-[4.7rem] backdrop-blur-lg rounded-3xl"
    >
      <Image src={"./icon.svg"} alt={"logo"} width={35} height={35} />
      {containerAnimationCompleted && (
        <ul className="flex flex-1 justify-between px-24">
          {links.map((item, index) => (
            <motion.li
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: "auto", opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="relative"
              key={index}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
