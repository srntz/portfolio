import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";
import { useNavigationContext } from "@/context/NavigationContext";
import BreatingLogo from "@/components/BreathingLogo";

export interface ILink {
  title: string;
  href: string;
}

export default function NavbarAlternate({
  links,
  callback,
  styleChangeScrollPosition,
}: {
  links: ILink[];
  callback?: () => void;
  styleChangeScrollPosition: number;
}) {
  const [containerAnimationCompleted, setContainerAnimationCompleted] =
    useState(false);

  const navbarFilterVisible = useRef(false);

  const { navigate } = useNavigationContext();

  const [scope, animate] = useAnimate();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > styleChangeScrollPosition && !navbarFilterVisible.current) {
      animate(
        scope.current,
        {
          backgroundColor: "rgba(29,29,29,0)",
        },
        { duration: 0.25, ease: "linear" },
      );
      navbarFilterVisible.current = true;
    } else if (
      latest < styleChangeScrollPosition &&
      navbarFilterVisible.current
    ) {
      animate(
        scope.current,
        { backgroundColor: "#1d1d1d" },
        { duration: 0.25, ease: "linear" },
      );
      navbarFilterVisible.current = false;
    }
  });

  return (
    <motion.nav
      ref={scope}
      initial={{
        top: -30,
        opacity: 0,
        width: 130,
      }}
      animate={{
        opacity: 1,
        width: "45rem",
        top: 0,
      }}
      onAnimationComplete={() => {
        setContainerAnimationCompleted(true);
        if (callback) {
          callback();
        }
      }}
      transition={{
        default: { duration: 0.15, delay: 0.3, ease: "easeInOut" },
        width: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
      }}
      style={{ backdropFilter: "brightness(0.5) blur(10px)" }}
      className="relative bg-[#1D1D1D] flex items-center px-6 h-[4.5rem] rounded-3xl"
    >
      <BreatingLogo delay={0.5} size={35} />
      {containerAnimationCompleted && (
        <ul className="flex flex-1 justify-between ml-9 px-24">
          {links.map((item, index) => (
            <motion.li
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: "auto", opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="relative text-[#D7D7D7] font-nohemi mt-px h-8 flex justify-center items-center cursor-pointer"
              key={index}
              onClick={() => navigate(item.href, 500)}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
