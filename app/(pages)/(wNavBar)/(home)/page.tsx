"use client";
import dynamic from "next/dynamic";
const DeviceAnimation = dynamic(() => import("@/app/3d/device"), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrainCircuit, Lock, ShieldPlus } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [scrollDistance, setScrollDistance] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e: Event) => {
      const currentScrollTop = (e.currentTarget as Window)!.scrollY;
      setScrollDistance(currentScrollTop);
    });
  }, []);

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [squaresRef, squaresInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <>
      <div className="absolute h-[700px] overflow-hidden z-0 w-full flex justify-center items-center">
        <DeviceAnimation scrollDistance={scrollDistance} />
      </div>
      <div className="relative px-8 py-4 w-full h-[500px] flex flex-col align-center justify-center items-center z-10"></div>
      <div className="relative px-8 py-4 w-full pt-16 h-[300px] flex flex-col align-center justify-center items-center z-10">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <h1 className="text-4xl lg:text-8xl md:text-6xl drop-shadow-2xl  font-bold select-none">
            PEACE OF MIND
          </h1>
        </motion.div>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <h1 className="text-2xl md:text-4xl font-light select-none">
            FOR $299
          </h1>
        </motion.div>
      </div>
      <motion.div
        ref={squaresRef}
        initial="hidden"
        animate={squaresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative px-8 py-4 w-full md:h-[200px] h-[340px] gap-8 md:gap-0 flex md:flex-row flex-col align-center justify-evenly items-center z-10"
      >
        <motion.div
          className="h-[200px] w-[200px] flex flex-col justify-evenly items-center rounded-lg border-2 border-white"
          variants={itemVariants}
        >
          <ShieldPlus size={100} />
          <h1 className="text-2xl font-bold">Durable</h1>
        </motion.div>
        <motion.div
          className="h-[200px] w-[200px] flex flex-col justify-evenly items-center rounded-lg border-2 border-white"
          variants={itemVariants}
        >
          <Lock size={100} />
          <h1 className="text-2xl font-bold">Secure</h1>
        </motion.div>
        <motion.div
          className="h-[200px] w-[200px] flex flex-col justify-evenly items-center rounded-lg border-2 border-white"
          variants={itemVariants}
        >
          <BrainCircuit size={100} />
          <h1 className="text-2xl font-bold">Smart</h1>
        </motion.div>
      </motion.div>
      <div className="w-full md:h-[120px] h-[250px]" />
    </>
  );
}
