"use client";
import NavbarAlternate, { ILink } from "@/components/NavbarAlternate";
import { useState } from "react";
import { motion } from "motion/react";

const aboutPageNavbarLinks: ILink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export default function Projects() {
  const [navbarRendered, setNavbarRendered] = useState(false);

  return (
    <div id="projects">
      <header className="sticky z-[100] mt-5 top-5 flex justify-center">
        <NavbarAlternate
          links={aboutPageNavbarLinks}
          callback={() => setNavbarRendered(true)}
          styleChangeScrollPosition={115}
        />
      </header>
      {navbarRendered && (
        <div id="main-content" className="px-40">
          <motion.h1
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            className="relative text-[4.5rem] font-nohemi my-[2.3rem] font-bold"
          >
            My projects
          </motion.h1>
        </div>
      )}
    </div>
  );
}
