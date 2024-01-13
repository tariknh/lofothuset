import React from "react";
import Button from "../ui/LagButton";
import Image from "next/image";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";

function VåreModeller() {
  return (
    <section className="">
      <div className="flex justify-between items-center mb-16 p-2 sm:p-4 lg:p-16">
        <h2 className="text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter my-8">
          <AnimatedLetters text="Våre modeller" />
        </h2>{" "}
        <Button text="Se modeller" slug="/modeller" />
      </div>

      {/* Modeller */}
      {/* <div className="flex flex-col my-16">
          <div className="aspect-[16/12] w-full relative h-full">
            <Image
              src={"/modell1.png"}
              alt="Bilde av modell 1"
              fill
              objectFit="cover"
              className="absolute rounded-lg"
            />
          </div>
          <h3 className="font-light mt-2 md:text-lg lg:text-xl">
            Villa Serenity by the Snow
          </h3>
        </div> */}

      <div className="relative h-screen w-full">
        <Image
          src={"/modell1.png"}
          alt="Bilde av modell 1"
          fill
          objectFit="cover"
          className="absolute rounded-lg"
        />
      </div>
    </section>
  );
}

export default VåreModeller;
