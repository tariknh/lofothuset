import React from "react";
import Button from "../ui/LagButton";
import Image from "next/image";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";
import Link from "next/link";

function VåreModeller() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-between ">
        <h2 className="text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight p-3 lg:p-4">
          <AnimatedLetters text="Vår modell" />
        </h2>
      </div>

      {/* Modeller */}
      {/* <div className="flex flex-col my-16">
          <div className="aspect-[16/12] w-full relative h-full">
            <Image
              src={"/modell1.png"}
              alt="Bilde av modell 1"
              fill
              
              className="absolute rounded-lg object-cover"
            />
          </div>
          <h3 className="font-light mt-2 md:text-lg lg:text-xl">
            Villa Serenity by the Snow
          </h3>
        </div> */}
      <Link href="/modeller/lofoten-lodge">
        <div
          id="imageHover"
          className="relative h-[100vh] w-full flex flex-col sm:flex-row justify-center items-center"
        >
          <Image
            src={"/modell/renderSquareZoomed.png"}
            alt="Bilde av modell 1"
            fill
            className="absolute object-cover "
          />

          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div
            data-scroll
            data-scroll-speed="-0.05"
            className="z-20 self-start sm:self-center p-8 text-white sm:basis-1/2 sm:mx-8 lg:mx-16"
          >
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[2vw] font-base mb-3">
              Mikrohusets hjerte
            </h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[8vw] font-medium max-w-7 mb-6">
              Lofoten Lodge
            </h2>
            <div className="row-start-4 col-start-2 place-self-end">
              <span
                className={`underline underline-offset-4 text-xl md:text-2xl lg:text-3xl`}
              >
                Trykk for å se modellen
              </span>
            </div>
            {/* <Button
              text="Trykk for å se modellen"
              full={true}
              slug="/"
              className="text-xl md:text-2xl lg:text-3xl"
            /> */}
          </div>
          <div
            data-scroll
            data-scroll-speed="0.05"
            className="relative aspect-square w-full sm:basis-1/2 sm:mx-8 lg:mx-16"
          >
            <Image
              fill
              className="object-contain z-20 p-6"
              src={"/modell/renderBlueprintZoomedV2.png"}
              alt="Bilde av modell 1"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}

export default VåreModeller;
