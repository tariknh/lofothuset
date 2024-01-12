"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

interface AnimatedLettersProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}

export const AnimatedLetters = ({
  text,
  el,
  className,
  once,
}: AnimatedLettersProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.span
      className="flex overflow-hidden flex-wrap text-balance"
      variants={banner}
      initial="initial"
      animate={isInView ? "animate" : "hidden"}
      ref={ref}
    >
      {text.split(" ").map((word) => (
        <span key={word} className="inline-block">
          {word.split("").map((letter) => (
            <motion.span
              className="inline-block"
              variants={letterAnimation}
              key={letter}
            >
              {letter === " " ? "\u00A0" : letter === "+" ? "\u0020" : letter}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
};

const AnimatedHero = () => {
  return (
    <motion.div className="flex flex-col row-start-2 row-span-auto lg:row-start-2 z-50 scroll-m-20 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl h-fit">
      <AnimatedLetters text="Opplev storhet" />
      <AnimatedLetters text="i mikrohus" />
    </motion.div>
  );
};

export default AnimatedHero;
