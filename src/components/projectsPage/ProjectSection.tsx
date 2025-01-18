import { MotionNextImage } from "@/components/utils/MotionNextImage";

export default function ProjectSection({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="w-full hover:backdrop-brightness-[1.75] rounded-3xl flex gap-10 pr-12 cursor-pointer">
      <MotionNextImage
        className={`w-96 h-52 bg-gray-400 rounded-3xl`}
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
    </div>
  );
}
