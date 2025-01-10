"use client"
import {motion, AnimatePresence} from "motion/react";
import {useNavigationContext} from "@/context/NavigationContext";

const containerClasses = 'absolute h-16 w-full flex justify-center text-[1rem] font-medium items-center gap-[15rem] bottom-[3.5rem]';
const containerChildClasses = '[&>p]:cursor-pointer [&>p]:h-full [&>p]:flex [&>p]:items-center'

export default function Navbar({animate = true, delay}:{animate?: boolean, delay: number}) {
  const {navigate, exitSequence} = useNavigationContext();

    if(animate) {
      return (
        <AnimatePresence>
        {!exitSequence &&
          <motion.div id="navbar" exit={{marginTop: 20, opacity: 0}} className={`${containerClasses} ${containerChildClasses}`}>
            <motion.p onClick={() => navigate('/about')} initial={{opacity: 0, marginBottom: -20}} whileHover={{marginTop: -10, transition:{duration: 0.3, type: "spring", bounce: 0}}} animate={{opacity: 0.8, marginBottom: 0, transition:{delay: 3.5}}}>About me</motion.p>
            <motion.p initial={{opacity: 0, marginBottom: -20}} whileHover={{marginTop: -10, transition:{duration: 0.3, type: "spring", bounce: 0}}} animate={{opacity: 0.8, marginBottom: 0, transition:{delay: 3.65}}}>Projects</motion.p>
            <motion.p initial={{opacity: 0, marginBottom: -20}} whileHover={{marginTop: -10, transition:{duration: 0.3, type: "spring", bounce: 0}}} animate={{opacity: 0.8, marginBottom: 0, transition:{delay: 3.80}}}>Contact</motion.p>
          </motion.div>
        }
        </AnimatePresence>
    )
    } else {
      return (
      <></>
      )
    }
}
