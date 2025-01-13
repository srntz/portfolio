"use client";

import NavbarAlternate, { ILink } from "@/components/NavbarAlternate";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const aboutPageNavbarLinks: ILink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export default function About() {
  const [mainContentRendered, setMainContentRendered] = useState(false);
  return (
    <div id="about">
      <header className="sticky z-[100] mt-5 top-5 flex justify-center">
        <NavbarAlternate
          links={aboutPageNavbarLinks}
          callback={() => setMainContentRendered(true)}
          styleChangeScrollPosition={115}
        />
      </header>
      <div id="main-content" className="px-40">
        {mainContentRendered && (
          <>
            <motion.h1
              initial={{ top: -15, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              className="relative text-[5.9rem] font-nohemi my-[4rem] font-bold"
            >
              Hi, I'm Denis.
            </motion.h1>
            <section className="w-full flex gap-16">
              <motion.div
                className="relative"
                initial={{ top: -20, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  width={500}
                  height={1200}
                  src={"/assets/myPhoto.jpg"}
                  alt={"personal photo"}
                  className="rounded-3xl"
                ></Image>
              </motion.div>
              <div id="summary-container" className="flex-1 py-10">
                <motion.h2
                  initial={{ top: -20, opacity: 0 }}
                  animate={{ top: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative text-[3rem] font-semibold font-nohemi leading-tight"
                >
                  I'm a passionate full-stack engineer.{" "}
                  <motion.span
                    initial={{ top: -20, opacity: 0 }}
                    animate={{ top: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative text-[0.9rem] font-light text-[rgba(255,255,255,0.8)]"
                  >
                    (and a student, too)
                  </motion.span>
                </motion.h2>
                <motion.p
                  initial={{ top: -20, opacity: 0 }}
                  animate={{ top: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-[rgba(255,255,255,0.8)] leading-[1.9rem] mt-8"
                >
                  My expertise lies in creating interactive, accessible, and
                  engaging applications that align with user and business
                  requirements. Over the past couple of years, I’ve gained
                  hands-on experience through side projects, client
                  collaborations, and volunteering.
                </motion.p>
                <motion.p
                  initial={{ top: -20, opacity: 0 }}
                  animate={{ top: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-[rgba(255,255,255,0.8)] leading-[1.9rem] mt-6"
                >
                  Currently, I’m in the final year of the Software Development
                  program at Southern Alberta Institute of Technology, where I’m
                  leading the development of a software solution for Uvaro — an
                  EdTech company dedicated to providing workforce development
                  programs and tools to help people achieve career success.
                </motion.p>
              </div>
            </section>
            <div className="h-[100vh]"></div>
          </>
        )}
      </div>
    </div>
  );
}
