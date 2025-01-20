import { MotionNextImage } from "@/components/utils/MotionNextImage";
import { motion } from "motion/react";

export function ProjectSection({
  title,
  description,
  imageUrl,
  delayMultiplier = 0,
}: {
  title: string;
  description: string;
  imageUrl: string;
  delayMultiplier?: number;
}) {
  return (
    <motion.div
      initial={{ top: -20, opacity: 0 }}
      whileInView={{ top: 0, opacity: 1 }}
      transition={{ delay: 0.15 + 0.1 * delayMultiplier }}
      viewport={{ once: true }}
      className="w-full relative transition-[backdrop] hover:backdrop-brightness-[1.75] rounded-3xl flex gap-10 pr-12 cursor-pointer"
    >
      <MotionNextImage
        className={`w-96 h-52 rounded-3xl`}
        alt={`${title} image`}
        src={imageUrl}
        width={384}
        height={208}
        unoptimized={true}
      />
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-nohemi font-bold text-[3rem]">{title}</h2>
        <p className={"opacity-80 leading-[1.7rem]"}>{description}</p>
      </div>
    </motion.div>
  );
}
