"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import { useNavigationContext } from "@/context/NavigationContext";
import { AnimatePresence } from "motion/react";
import BreatingLogo from "@/components/BreathingLogo";

export default function Home() {
  const { exitSequence } = useNavigationContext();

  return (
    <>
      <div className={"relative"}>
        <div
          className={
            "pointer-events-none absolute bg-[#f6f6f6] h-[100vh] w-[100vw] flex items-end justify-end pb-[1rem] pr-[1rem]"
          }
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75, delay: 0.5 } }}
            className={"text-[#141414] font-medium text-[1.2rem]"}
          >
            Denis Pechenkin @ 2025
          </motion.p>
        </div>
        <motion.div
          initial={{ top: "-100vh" }}
          animate={{
            top: "auto",
            transition: { delay: 2.5, duration: 1, ease: "easeInOut" },
          }}
          className={
            "bg-[#141414] absolute flex h-[100vh] w-[100vw] items-center justify-center"
          }
        >
          <AnimatePresence>
            {!exitSequence && <BreatingLogo delay={2.5} size={125} />}
          </AnimatePresence>
        </motion.div>
      </div>
      <Navbar delay={3.5} stagger={0.2} />
    </>
  );
}
