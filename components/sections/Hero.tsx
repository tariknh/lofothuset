import React from "react";
import Image from "next/image";
import AnimatedHero, {
  AnimatedLetters,
  AnimateBounce,
} from "../ui/Animations/AnimatedHero";

function Hero() {
  return (
    <section id="hero" className=" w-full relative">
      <div
        data-scroll
        data-scroll-speed="-.1"
        className="p-8 lg:p-16 grid h-svh sm:h-screen grid-rows-12 absolute z-10 text-white w-full"
      >
        <AnimatedHero />
        <h2 className="col-span-full scroll-m-20 text-4xl tracking-tight row-start-11 lg:row-start-12">
          <AnimatedLetters text="Smarte, bærekraftige boligkonsepter. Levert." />
        </h2>

        <div className="relative bg-red-200 row-start-11 lg:row-start-12 justify-self-end">
          <div className="absolute md:h-[100px] md:w-[100px] bottom-0 right-0">
            <AnimateBounce>
              <Image
                priority
                className="rotate-90"
                alt="Mikrohus"
                src={"/arrowWhite.svg"}
                width={100}
                height={100}
              />
            </AnimateBounce>
          </div>
        </div>
      </div>
      <div className="h-screen relative overflow-hidden">
        <Image
          className="absolute object-cover"
          alt="Mikrohus"
          src={"/images/mobileHome.webp"}
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
