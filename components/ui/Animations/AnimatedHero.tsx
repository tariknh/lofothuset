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
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1.3,
    },
  },
};

const linesAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1,
    },
  },
};

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

type AnimateBounceProps = {
  children: React.ReactNode;
};

export const AnimateBounce = ({ children }: AnimateBounceProps) => {
  return (
    <motion.div
      className="row-start-11 lg:row-start-12 justify-self-end"
      initial={{ y: 0 }}
      animate={{ y: [0, -30, 0, -15, 0, -7, 0] }} // Sequence of motion for the 'y' axis
      transition={{
        duration: 2, // Total duration of the animation
        ease: "easeInOut", // Easing function for the animation
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1], // Timing for each segment of the animation
        delay: 2, // Time to wait before starting animation
        repeatDelay: 1, // Delay between each loop
      }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedLettersProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  center?: boolean;
}

export const AnimatedLetters = ({
  text,
  el,
  className,
  once,
  center,
}: AnimatedLettersProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.span
      className={`flex overflow-hidden pb-2 flex-wrap text-balance ${
        center && "justify-center"
      }`}
      variants={banner}
      initial="initial"
      animate={isInView ? "animate" : "hidden"}
      ref={ref}
    >
      {text.split(" ").map((word) => (
        <span key={word} className="inline-block overflow-hidden h-fit">
          {word.split("").map((letter, index) => (
            <motion.span
              className="inline-block overflow-hidden"
              variants={letterAnimation}
              key={index}
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

export const AnimatedLines = ({
  text,
  el,
  className,
  once,
  center,
}: AnimatedLettersProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.span
      className={`flex overflow-hidden pb-2 flex-wrap text-balance ${
        center && "justify-center"
      }`}
      variants={banner}
      initial="initial"
      animate={isInView ? "animate" : "hidden"}
      ref={ref}
    >
      {text.split(" ").map((word) => (
        <span key={word} className="inline-block">
          {word.split("").map((letter, index) => (
            <motion.span
              className="inline-block"
              variants={linesAnimation}
              key={index}
            >
              {letter}
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
