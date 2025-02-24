"use client";

import { motion, useAnimate } from "motion/react";
import { MotionNextImage } from "@/components/utils/MotionNextImage";
import github from "../../../../public/assets/github.svg";
import linkedin from "@/../public/assets/linkedin.svg";
import { useNavigationContext } from "@/context/NavigationContext";
import { useEffect } from "react";

export default function Contact() {
  const { exitSequence } = useNavigationContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (exitSequence) {
      animate("*", { opacity: 0, left: -20 });
    }
  }, [exitSequence]);

  function openLink(path: string) {
    window.open(path, "_blank");
  }

  return (
    <div ref={scope} className="px-40 pt-28 flex flex-col justify-center">
      <motion.h1
        initial={{ top: -15, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        className="relative text-[4.5rem] font-nohemi mb-[1rem] font-bold"
      >
        Nice to meet you!
      </motion.h1>
      <div id="main-content">
        <motion.p
          initial={{ top: -20, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className={"relative w-[30rem] leading-[2rem] text-lg opacity-80"}
        >
          Do you want to discuss professional affairs or just have a chat?
          Regardless, I'm excited to talk!
        </motion.p>
        <div
          id="card-links"
          className="w-full flex gap-14 mt-[4.5rem] [&_*]:cursor-pointer [&_*]:brightness-[0.75] hover:[&_*]:brightness-[1] [&_*]:transition-[filter]"
        >
          <MotionNextImage
            src={github}
            alt={"github icon"}
            width={60}
            height={60}
            initial={{ top: -20, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={"relative -mt-[0.1rem] w-10"}
            onClick={() => openLink("https://github.com/srntz")}
          />
          <MotionNextImage
            src={linkedin}
            alt={"linkedin icon"}
            width={60}
            height={60}
            initial={{ top: -20, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={"relative -mt-[0.1rem] w-10"}
            onClick={() =>
              openLink("https://www.linkedin.com/in/denis-pechenkin/")
            }
          />
          <motion.a
            initial={{ top: -20, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={
              "relative h-[2.7rem] bg-white flex justify-center items-center px-10 rounded-xl cursor-pointer"
            }
            href={"docs/DenisPechenkin_Resume2025.pdf"}
            target={"_blank"}
          >
            <p className={"text-black font-semibold"}>Resume</p>
          </motion.a>
        </div>
        <motion.p
          initial={{ top: -20, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative mt-8 opacity-80"
        >
          dpech0511@gmail.com <span className={"opacity-50"}>|</span>{" "}
          +15879687526
        </motion.p>
      </div>
    </div>
  );
}
