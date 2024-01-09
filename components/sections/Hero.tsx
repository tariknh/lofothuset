import React from "react";
import Image from "next/image";
import AnimatedHero, { AnimatedLetters } from "../ui/Animations/AnimatedHero";

function Hero() {
  return (
    <section className="w-full">
      <div className="p-8 lg:p-16 grid  h-screen grid-rows-12 absolute z-10 text-white w-full">
        <AnimatedHero />
        <h2 className="scroll-m-20 text-4xl tracking-tight row-start-11 lg:row-start-12">
          <AnimatedLetters title="Smart, bærekraftig mikrohus. Levert." />
        </h2>
      </div>
      <div className="h-screen relative overflow-hidden">
        <Image
          objectFit="cover"
          className="absolute"
          alt="Mikrohus"
          src={"/images/mobileHome.png"}
          fill
        />
      </div>
    </section>
  );
}

export default Hero;
