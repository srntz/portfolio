import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useNavigationContext } from "@/context/NavigationContext";
import BreatingLogo from "@/components/BreathingLogo";

export interface ILink {
  title: string;
  href: string;
}

export default function NavbarAlternate({ links }: { links: ILink[] }) {
  const [containerAnimationCompleted, setContainerAnimationCompleted] =
    useState(false);

  const { navigate } = useNavigationContext();

  return (
    <motion.nav
      initial={{ top: -30, opacity: 0, width: 130 }}
      animate={{ opacity: 1, width: "45rem", top: "auto" }}
      onAnimationComplete={() => setContainerAnimationCompleted(true)}
      transition={{
        default: { duration: 0.15, delay: 0.3, ease: "easeInOut" },
        width: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
      }}
      className="relative flex items-center px-6 bg-[#1D1D1D] h-[4.5rem] backdrop-blur-lg rounded-3xl"
    >
      <BreatingLogo delay={0.5} size={35} />
      {containerAnimationCompleted && (
        <ul className="flex flex-1 justify-between ml-9 px-24">
          {links.map((item, index) => (
            <motion.li
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: "auto", opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="relative text-[#D7D7D7] font-nohemi mt-px h-8 flex justify-center items-center cursor-pointer"
              key={index}
              onClick={() => navigate(item.href, 500)}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
