"use client"
import Image from "next/image"
import {motion} from "motion/react";
import {useEffect, useState} from "react";

export default function Home() {
  return (
    <div className={"relative"}>
      <div className={"pointer-events-none absolute bg-[#f6f6f6] h-[100vh] w-[100vw] flex items-center justify-center"}>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.75, delay: 0.5}}} className={"text-[#141414] font-semibold text-[2rem]"}>Denis Pechenkin</motion.p>
      </div>
      <motion.div initial={{top: "-100vh"}} animate={{top: "auto", transition: {delay: 2.5, duration: 1, ease: "easeInOut"}}} className={"bg-[#141414] absolute flex h-[100vh] w-[100vw] items-center justify-center"}>
        <motion.div className={"absolute"} initial={{opacity: 0}} animate={{opacity: [0, 1, 0], transition: {repeat: Infinity, duration: 3, delay: 2.5, ease: "easeInOut" }}}>
          <Image src={"./icon.svg"} alt={"logo"} width={125} height={125} />
        </motion.div>
      </motion.div>
    </div>
  );
}
