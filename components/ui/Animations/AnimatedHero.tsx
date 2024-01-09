"use client";
import { motion } from "framer-motion";

const heading = "Opplev Storhet";
const heading2 = "i mikrohus";

const letters = Array.from(heading);
const letters2 = Array.from(heading2);

const letterAnimation = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.3,
    },
  },
};

const banner = {
  animate: {
    transition: {},
  },
};

export const AnimatedLetters = ({ title }: { title: string }) => {
  const letters = Array.from(title);
  return (
    <motion.span
      className="flex overflow-hidden "
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {letters.map((letter) => (
        <motion.span variants={letterAnimation} key={letter}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const AnimatedHero = () => {
  return (
    <motion.div className="flex flex-col row-start-2 row-span-auto lg:row-start-2 z-50 scroll-m-20 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl h-fit">
      <AnimatedLetters title="Opplev storhet" />
      <AnimatedLetters title="i mikrohus" />
    </motion.div>
  );
};

export default AnimatedHero;
