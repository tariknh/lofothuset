import React from "react";
import Image from "next/image";
import AnimatedHero, {
  AnimatedLetters,
  AnimateBounce,
} from "../ui/Animations/AnimatedHero";

function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="p-8 lg:p-16 grid  h-screen grid-rows-12 absolute z-10 text-white w-full">
        <AnimatedHero />
        <h2 className="scroll-m-20 text-4xl tracking-tight row-start-11 lg:row-start-12">
          <AnimatedLetters text="Smart, bærekraftig mikrohus. Levert." />
        </h2>
        <AnimateBounce>
          <Image
            className="row-start-11 lg:row-start-12 rotate-90 justify-self-end"
            alt="Mikrohus"
            src={"/arrowWhite.svg"}
            width={100}
            height={100}
          />
        </AnimateBounce>
      </div>
      <div className="h-screen relative overflow-hidden">
        <Image
          objectFit="cover"
          className="absolute"
          alt="Mikrohus"
          src={"/images/mobileHome.png"}
          fill
        />
        {/* <Image
          className="absolute right-0 rotate-90 bottom-0 "
          alt="Mikrohus"
          src={"/arrow.svg"}
          width={50}
          height={50}
        /> */}
      </div>
    </section>
  );
}

export default Hero;
