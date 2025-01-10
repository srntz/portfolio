"use client"
import Image from "next/image"
import {motion} from "motion/react";
import Navbar from "@/components/Navbar";
import {useNavigationContext} from "@/context/NavigationContext";
import {AnimatePresence} from "motion/react";

export default function Home() {
  const {exitSequence} = useNavigationContext();

  return (
    <>
    <div className={"relative"}>
      <div className={"pointer-events-none absolute bg-[#f6f6f6] h-[100vh] w-[100vw] flex items-end justify-end pb-[1rem] pr-[1rem]"}>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.75, delay: 0.5}}} className={"text-[#141414] font-medium text-[1.2rem]"}>Denis Pechenkin @ 2025</motion.p>
      </div>
      <motion.div initial={{top: "-100vh"}} animate={{top: "auto", transition: {delay: 2.5, duration: 1, ease: "easeInOut"}}} className={"bg-[#141414] absolute flex h-[100vh] w-[100vw] items-center justify-center"}>
        <AnimatePresence>
        {!exitSequence &&
        <motion.div className={"absolute"} exit={{top: "-15vh", opacity: 0, transition:{duration: 0.4, ease: "easeIn"}}} initial={{opacity: 0}} animate={{opacity: [0, 1, 0], transition: {repeat: Infinity, duration: 3, delay: 2.5, ease: "easeInOut" }}}>
          <Image src={"./icon.svg"} alt={"logo"} width={125} height={125} />
        </motion.div>
        }
        </AnimatePresence>
      </motion.div>
    </div>
      <Navbar delay={3.5} stagger={0.2} />
      </>
  );
}
