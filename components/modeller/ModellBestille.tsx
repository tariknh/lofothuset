import Image from "next/image";
import React from "react";
import Button from "../ui/LagButton";

type FordelProps = {
  className?: string;
};

function ModellBestille({ className }: FordelProps) {
  return (
    <section
      className={`${className} self-center sm:px-4 lg:px-16 flex flex-col sm:flex-row-reverse justify-center items-center gap-8 w-full max-w-[1400px] `}
    >
      <div className="aspect-square relative w-full sm:max-w-[700px] overflow-hidden">
        <Image
          src="/geir.png"
          alt="Bestille"
          fill
          className="object-cover"
          data-scroll
          data-scroll-speed="0.05"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="-0.06"
        className="flex flex-col w-full justify-center sm:items-start sm:p-8"
      >
        <h3 className="uppercase sm:mb-2 text-[clamp(16px,1vw,32px)] ">
          Oppfyll drømmene dine
        </h3>
        <h2 className=" font-medium mb-4 lg:mb-8  text-[clamp(36px,11vw,40px)] text-balance sm:text-[clamp(32px,3.3vw,60px)] tracking-tight">
          Klar til å bestille Finnmarken IV?{" "}
        </h2>

        <div className="w-full">
          <Button text="Kontakt Oss" slug="/" className="w-full " />
        </div>
      </div>
    </section>
  );
}

export default ModellBestille;
// xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl

// text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight p-3 lg:p-4
