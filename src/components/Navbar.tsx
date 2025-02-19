"use client";
import { motion, AnimatePresence } from "motion/react";
import { useNavigationContext } from "@/context/NavigationContext";

const containerClasses =
  "absolute md:h-16 w-full flex flex-col md:flex-row justify-center text-[1rem] font-light items-center gap-[2rem] md:gap-[9rem] lg:gap-[15rem] pr-[0.35rem] md:pr-[1.15rem] bottom-[4rem] md:bottom-[3.5rem]";
const containerChildClasses =
  "[&>p]:cursor-pointer [&>p]:h-full [&>p]:flex [&>p]:items-center";

export default function Navbar({
  animate = true,
  delay,
  stagger = 0,
}: {
  animate?: boolean;
  delay: number;
  stagger?: number;
}) {
  const { navigate, exitSequence } = useNavigationContext();

  if (animate) {
    return (
      <AnimatePresence>
        {!exitSequence && (
          <motion.div
            id="navbar"
            exit={{ marginTop: 20, opacity: 0 }}
            className={`${containerClasses} ${containerChildClasses} font-nohemi`}
          >
            <motion.p
              onClick={() => navigate("/about", 600)}
              initial={{ opacity: 0, marginBottom: -20 }}
              whileHover={{
                marginTop: -10,
                transition: { duration: 0.3, type: "spring", bounce: 0 },
              }}
              animate={{
                opacity: 0.8,
                marginBottom: 0,
                transition: { delay: delay },
              }}
            >
              About me
            </motion.p>
            <motion.p
              onClick={() => navigate("/projects", 600)}
              initial={{ opacity: 0, marginBottom: -20 }}
              whileHover={{
                marginTop: -10,
                transition: { duration: 0.3, type: "spring", bounce: 0 },
              }}
              animate={{
                opacity: 0.8,
                marginBottom: 0,
                transition: { delay: delay + stagger },
              }}
            >
              Projects
            </motion.p>
            <motion.p
              onClick={() => navigate("/contact", 600)}
              initial={{ opacity: 0, marginBottom: -20 }}
              whileHover={{
                marginTop: -10,
                transition: { duration: 0.3, type: "spring", bounce: 0 },
              }}
              animate={{
                opacity: 0.8,
                marginBottom: 0,
                transition: { delay: delay + stagger * 2 },
              }}
            >
              Contact
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return <></>;
  }
}
