"use client";

import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import SectionTitle from "@/components/aboutPage/SectionTitle";
import { stackLogoData } from "@/data/stackLogoData";
import { useNavigationContext } from "@/context/NavigationContext";
import { MotionNextImage } from "@/components/utils/MotionNextImage";
import { useEffect } from "react";
import {
  PrimaryHeadingType,
  PrimaryHeading,
} from "@/components/headings/PrimaryHeading";

export default function About() {
  const { exitSequence } = useNavigationContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (exitSequence) {
      animate("*", { opacity: 0, left: -20 });
    }
  }, [exitSequence]);

  return (
    <div id="about" ref={scope} className="relative">
      <motion.div
        id="main-content"
        className="px-8 sm:px-12 md:px-16 lg:px-30 xl:px-35 2xl:px-40"
      >
        <PrimaryHeading
          title={"Hi, I'm Denis"}
          type={PrimaryHeadingType.EMPHASIZED}
        />
        <section className="w-full flex flex-col lg:flex-row gap-3 lg:gap-16">
          <motion.div
            className="relative"
            initial={{ top: -20, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              width={600}
              height={1200}
              src={"/assets/myPhoto.jpg"}
              alt={"personal photo"}
              className="rounded-3xl lg:w-[27rem] xl:w-auto"
            ></Image>
          </motion.div>
          <div id="summary-container" className="flex-1 py-5 lg:py-10">
            <motion.h2
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative text-[2.5rem] lg:text-[3rem] font-semibold font-nohemi leading-[1.1] md:leading-[1.25]"
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
              className="text-[rgba(255,255,255,0.8)] text-[0.9rem] sm:text-[1rem] leading-[1.7rem] sm:leading-[1.9rem] mt-4 xl:mt-8"
            >
              My expertise lies in creating interactive, accessible, and
              engaging applications that align with user and business
              requirements. Over the past couple of years, I’ve gained hands-on
              experience through side projects, client collaborations, and
              volunteering.
            </motion.p>
            <motion.p
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-[rgba(255,255,255,0.8)] text-[0.9rem] sm:text-[1rem] leading-[1.7rem] sm:leading-[1.9rem] mt-4 xl:mt-6"
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
              <h3 className="font-semibold font-nohemi text-[2rem] md:text-[2.5rem]">
                Creativity
              </h3>
              <p className="leading-[1.8rem] opacity-80">
                I love music, art, and photography, and I can’t imagine my life
                without being creative and coming up with new ideas for solving
                problems. Software engineering gives me lots of opportunities to
                channel my creative thinking and see the results and impact of
                my work firsthand.
              </p>
            </motion.div>
            <div className="flex flex-col md:flex-row gap-[2rem]">
              <motion.div
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-[#181818] relative flex-1 border-[1px] rounded-3xl py-[2.5rem] px-[2rem]"
              >
                <h3 className="font-semibold font-nohemi text-[2rem] md:text-[2.5rem]">
                  Curiosity
                </h3>
                <p className="leading-[1.8rem] opacity-80">
                  Technology is always evolving, and I love discovering new ways
                  to solve problems and exploring tools that shape our lives.
                  The opportunity to learn along the way makes it even more
                  exciting for me.
                </p>
              </motion.div>
              <motion.div
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#181818] relative flex-1 border-[1px] rounded-3xl py-[2.5rem] px-[2rem]"
              >
                <h3 className="font-semibold font-nohemi text-[2rem] md:text-[2.5rem]]">
                  Making difference
                </h3>
                <p className="leading-[1.8rem] opacity-80">
                  I’m passionate about creating solutions that make lives
                  easier, help businesses grow, and contribute to the
                  coummunity. Building meaningful projects brings me a lot of
                  joy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section>
          <SectionTitle title={"My Stack"} />
          <div
            id="stack-icons-container"
            className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-12 sm:gap-x-16 lg:gap-x-24 xl:gap-x-28 lg:gap-y-16"
          >
            {stackLogoData.map((item, index) => (
              <MotionNextImage
                key={index}
                src={item.src}
                alt={item.alt}
                width={120}
                height={120}
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.05 + 0.05 * index }}
                viewport={{ once: true }}
                className={"relative w-auto max-w-24 lg:max-w-32"}
              />
            ))}
          </div>
        </section>
        <section>
          <SectionTitle title={"Besides coding..."} />
          <div className={"flex flex-col gap-6 lg:flex-row lg:gap-16"}>
            <MotionNextImage
              initial={{ top: -40, opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              src={"/assets/cat-in-headphones.jpg"}
              width={350}
              height={350}
              alt={"An image of a cat wearing headphones"}
              className={"rounded-3xl relative"}
            />
            <div
              className={
                "text-[rgba(255,255,255,0.8)] text-[0.9rem] leading-[1.7rem] md:text-[1rem] md:leading-[1.9rem] [&_p]:opacity-80 [&_*]:relative"
              }
            >
              <motion.p
                viewport={{ once: true }}
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                I love music, production, audio engineering and everything
                related (you might&#39;ve guessed by looking at my projects).
                You can always find me listening to something. I also like to
                share songs and get nerdy about it.
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                className={"mt-4 lg:mt-8"}
                initial={{ top: -20, opacity: 0 }}
                whileInView={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                If you are still interested, you may find a playlist with a
                bunch of my favorite songs here.
              </motion.p>
              <a
                href={
                  "https://open.spotify.com/playlist/7t6nRBzJYqR5m393FtFUos?si=1e6b6c22d575463a"
                }
                target={"_blank"}
              >
                <motion.button
                  viewport={{ once: true }}
                  initial={{ top: -20, opacity: 0 }}
                  whileInView={{ top: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className={
                    "w-44 h-14 rounded-lg border-[1px] mt-8 hover:bg-green-900 transition duration-200"
                  }
                >
                  Open the playlist
                </motion.button>
              </a>
            </div>
          </div>
        </section>
        <div className={"h-12 md:h-36"}></div>
        <motion.p
          animate={{
            marginLeft: [100, -100, 100],
            transition: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className={"opacity-50 text-center font-light hidden md:block"}
        >
          hi! this is the very bottom of the page. it's nice here
        </motion.p>
      </motion.div>
    </div>
  );
}
