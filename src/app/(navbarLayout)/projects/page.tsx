"use client";
import { motion, useAnimate } from "motion/react";
import { ProjectSection } from "@/components/projectsPage/ProjectSection";
import { projectsData } from "@/data/projectsData";
import { useNavigationContext } from "@/context/NavigationContext";
import { useEffect } from "react";
import {
  PrimaryHeadingType,
  PrimaryHeading,
} from "@/components/headings/PrimaryHeading";

export default function Projects() {
  const { exitSequence } = useNavigationContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (exitSequence) {
      animate("*", { opacity: 0, left: -20 });
    }
  }, [exitSequence]);

  return (
    <div id="projects" ref={scope} className="relative">
      <div className={"px-8 sm:px-12 md:px-16 lg:px-30 xl:px-35 2xl:px-40"}>
        <div id="main-content" className="pb-12">
          <PrimaryHeading
            title={"My projects"}
            type={PrimaryHeadingType.NORMAL}
          />

          <motion.h2
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative text-[1.3rem] sm:text-[1.7rem] font-nohemi my-[1.2rem] sm:my-[1.5rem] font-regular text-[rgba(255,255,255,0.85)]"
          >
            Completed
          </motion.h2>

          <section
            id="project-list"
            className="flex flex-col lg:flex-row gap-10"
          >
            {projectsData
              .filter((item) => item.completed)
              .map((item, index) => (
                <ProjectSection
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  githubUrl={item.githubUrl}
                  npmUrl={item.npmUrl}
                  liveUrl={item.liveUrl}
                  delayMultiplier={index}
                />
              ))}
          </section>

          <motion.h2
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative text-[1.3rem] sm:text-[1.7rem] font-nohemi mb-[1.5rem] mt-[3rem] font-regular text-[rgba(255,255,255,0.85)]"
          >
            In progress
          </motion.h2>

          <section
            id="project-list"
            className="flex flex-col lg:flex-row gap-10"
          >
            {projectsData
              .filter((item) => !item.completed)
              .map((item, index) => (
                <ProjectSection
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  githubUrl={item.githubUrl}
                  npmUrl={item.npmUrl}
                  liveUrl={item.liveUrl}
                  delayMultiplier={index}
                />
              ))}
          </section>
        </div>
      </div>
    </div>
  );
}
