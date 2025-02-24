import { MotionNextImage } from "@/components/utils/MotionNextImage";
import { motion } from "motion/react";
import github from "@/../public/assets/github.svg";
import pkg from "@/../public/assets/package.svg";
import globe from "@/../public/assets/globe.svg";

export function ProjectSection({
  title,
  description,
  imageUrl,
  delayMultiplier = 0,
  githubUrl,
  npmUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  delayMultiplier?: number;
  githubUrl?: string;
  npmUrl?: string;
  liveUrl?: string;
}) {
  return (
    <motion.div
      initial={{ top: -20, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ delay: 0.15 + 0.1 * delayMultiplier }}
      viewport={{ once: true }}
      className="w-full relative transition-[backdrop] rounded-3xl flex flex-col gap-4 cursor-default"
    >
      <MotionNextImage
        className={`w-full h-[11rem] sm:h-[16rem] md:h-[20rem] lg:h-[16rem] rounded-3xl object-cover`}
        alt={`${title} image`}
        src={imageUrl}
        width={384}
        height={200}
        unoptimized={true}
      />

      <div className="links flex pl-1 sm:py-1 gap-6 sm:gap-10">
        {githubUrl && (
          <div
            className="flex cursor-pointer items-center gap-3 brightness-[0.7] hover:brightness-100 transition rounded"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <MotionNextImage
              src={github}
              width={32}
              height={32}
              alt={"github logo"}
              className={"w-[2rem] sm:w-[2.4rem]"}
            />
            <p className="text-[0.75rem] sm:text-sm">Github</p>
          </div>
        )}
        {npmUrl && (
          <div
            className="flex cursor-pointer items-center gap-3 brightness-[0.7] hover:brightness-100 transition rounded"
            onClick={() => window.open(npmUrl, "_blank")}
          >
            <MotionNextImage
              src={pkg}
              width={32}
              height={32}
              alt={"npm logo"}
              className={"w-[2rem] sm:w-[2.4rem]"}
            />
            <p className="text-[0.75rem] sm:text-sm">npm</p>
          </div>
        )}
        {liveUrl && (
          <div
            className="flex cursor-pointer items-center gap-3 brightness-[0.7] hover:brightness-100 transition rounded"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            <MotionNextImage
              src={globe}
              width={32}
              height={32}
              alt={"live logo"}
              className={"w-[2rem] sm:w-[2.4rem]"}
            />
            <p className="text-[0.75rem] sm:text-sm">Live</p>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col -mt-1">
        <h2 className="font-nohemi font-bold text-[2.2rem] sm:text-[2.7rem]">
          {title}
        </h2>
        <p
          className={"opacity-80 leading-[1.7rem] text-[0.9rem] sm:text-[1rem]"}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
