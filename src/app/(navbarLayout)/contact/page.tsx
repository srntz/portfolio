"use client";

import { motion } from "motion/react";
import { MotionNextImage } from "@/components/utils/MotionNextImage";

export default function Contact() {
  return (
    <div className="px-40">
      <motion.h1
        initial={{ top: -15, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        className="relative text-[4.5rem] font-nohemi mt-[2.3rem] mb-[1.8rem] font-bold"
      >
        Contact me
      </motion.h1>
      <div id="main-content">
        <div id="card-links" className="w-full flex gap-10">
          <div
            id="github"
            className="h-28 w-28 rounded-xl bg-white bg-opacity-[0.02] flex items-center justify-center border-[1px] border-[rgba(255,255,255,0.2)]"
          >
            <div className="bg-[rgba(255,255,255,0.9)] w-[4.2rem] h-[4.2rem] rounded-[50%] flex items-center justify-center">
              <MotionNextImage
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                }
                alt={"github icon"}
                width={60}
                height={60}
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                viewport={{ once: true }}
                className={"relative -mt-[0.1rem]"}
              />
            </div>
          </div>
          <div
            id="linkedin"
            className="h-28 w-28 rounded-xl bg-white bg-opacity-[0.02] flex items-center justify-center border-[1px] border-[rgba(255,255,255,0.2)]"
          >
            <MotionNextImage
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              }
              alt={"github icon"}
              width={60}
              height={60}
              initial={{ top: -20, opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className={"relative -mt-[0.1rem]"}
            />
          </div>
        </div>
        <p className="mt-8 text-lg">Email: dpech0511@gmail.com</p>
        <p className="mt-3 text-lg">Mobile: +15879687526</p>
      </div>
    </div>
  );
}
