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
              className="relative text-[5.9rem] font-nohemi my-12 font-bold"
            >
              Hi, I'm Denis.
            </motion.h1>
            <section className="w-full">
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
              <div className="h-[100vh]"></div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
