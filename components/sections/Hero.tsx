import React from "react";
import Image from "next/image";
import AnimatedHero from "../ui/Animations/AnimatedHero";

function Hero() {
  return (
    <section>
      <div className="p-8 lg:p-16 grid max-w-screen h-screen grid-rows-12 absolute z-10 text-white">
        <AnimatedHero />
        <h2 className="scroll-m-20 text-4xl tracking-tight row-start-11 lg:row-start-12">
          Smart, bærekraftig mikrohus. Levert.
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
