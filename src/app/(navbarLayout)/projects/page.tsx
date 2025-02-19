"use client";
import { motion, useAnimate } from "motion/react";
import { ProjectSection } from "@/components/projectsPage/ProjectSection";
import { projectsData } from "@/data/projectsData";
import { useNavigationContext } from "@/context/NavigationContext";
import { useEffect } from "react";

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
      <div className={"px-40"}>
        <div id="main-content" className="pb-12">
          <motion.h1
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            className="relative text-[4.5rem] font-nohemi my-[2.3rem] font-bold"
          >
            My projects
          </motion.h1>

          <motion.h2
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative text-[1.7rem] font-nohemi my-[1.5rem] font-regular text-[rgba(255,255,255,0.85)]"
          >
            Completed
          </motion.h2>

          <section id="project-list" className="flex gap-10">
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
                  delayMultiplier={index}
                />
              ))}
          </section>

          <motion.h2
            initial={{ top: -15, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative text-[1.7rem] font-nohemi mb-[1.5rem] mt-[3rem] font-regular text-[rgba(255,255,255,0.85)]"
          >
            In progress
          </motion.h2>

          <section id="project-list" className="flex gap-10">
            {projectsData
              .filter((item) => !item.completed)
              .map((item) => (
                <ProjectSection
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              ))}
          </section>
        </div>
      </div>
    </div>
  );
}
