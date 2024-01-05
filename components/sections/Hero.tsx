import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section>
      <div className="p-8 lg:p-16 grid h-screen grid-rows-12 absolute z-10 text-white">
        <h1 className="row-start-2 lg:row-start-2 z-50 scroll-m-20 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl">
          Opplev storhet
          <br /> i mikrohus.
        </h1>
        <h2 className="scroll-m-20 text-4xl tracking-tight row-start-11 lg:row-start-12">
          Smart, bærekraftig mikrohus. Levert.
        </h2>
      </div>
      <div className="h-screen relative overflow-hidden">
        <Image
          className="object-cover scale-100"
          alt="Mikrohus"
          src={"/images/hero.jpg"}
          fill={true}
        />
      </div>
    </section>
  );
}

export default Hero;
