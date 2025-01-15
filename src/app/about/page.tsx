"use client";

import NavbarAlternate, { ILink } from "@/components/NavbarAlternate";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import SectionTitle from "@/components/aboutPage/SectionTitle";
import { stackLogoData } from "@/data/stackLogoData";

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

const MotionNextImage = motion.create(Image);

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
            <section id="why-am-i-in-software w-full">
              <SectionTitle title={"Why am I in software?"} />
              <div id="cards" className="w-full flex flex-col gap-[2rem]">
                <motion.div
                  initial={{ top: -20, opacity: 0 }}
                  whileInView={{ top: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#181818] relative border-[1px] rounded-3xl py-[2.5rem] px-[2rem]"
                >
                  <h3 className="font-semibold font-nohemi text-[2.5rem]">
                    Creativity
                  </h3>
                  <p className="leading-[1.8rem] opacity-80">
                    I love music, art, and photography, and I can’t imagine my
                    life without being creative and coming up with new ideas for
                    solving problems. Software engineering gives me lots of
                    opportunities to channel my creative thinking and see the
                    results and impact of my work firsthand.
                  </p>
                </motion.div>
                <div className="flex gap-[2rem]">
                  <motion.div
                    initial={{ top: -20, opacity: 0 }}
                    whileInView={{ top: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-[#181818] relative flex-1 border-[1px] rounded-3xl py-[2.5rem] px-[2rem]"
                  >
                    <h3 className="font-semibold font-nohemi text-[2.5rem]">
                      Curiosity
                    </h3>
                    <p className="leading-[1.8rem] opacity-80">
                      Technology is always evolving, and I love discovering new
                      ways to solve problems and exploring tools that shape our
                      lives. The opportunity to learn along the way makes it
                      even more exciting for me.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ top: -20, opacity: 0 }}
                    whileInView={{ top: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#181818] relative flex-1 border-[1px] rounded-3xl py-[2.5rem] px-[2rem]"
                  >
                    <h3 className="font-semibold font-nohemi text-[2.5rem]">
                      Making difference
                    </h3>
                    <p className="leading-[1.8rem] opacity-80">
                      I’m passionate about creating solutions that make lives
                      easier, help businesses grow, and contribute to the
                      coummunity. Building meaningful projects brings me a lot
                      of joy.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>
            <section>
              <SectionTitle title={"My Stack"} />
              <div
                id="stack-icons-container"
                className="w-full grid grid-rows-2 grid-cols-5 justify-between gap-x-28 gap-y-16"
              >
                {stackLogoData.map((item, index) => (
                  <MotionNextImage
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    width={115}
                    height={115}
                    initial={{ top: -20, opacity: 0 }}
                    whileInView={{ top: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + 0.05 * index }}
                    viewport={{ once: true }}
                    className={"relative"}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
