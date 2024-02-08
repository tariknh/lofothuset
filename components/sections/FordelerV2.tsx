import Image from "next/image";
import React from "react";
import { AnimatedLetters, AnimatedLines } from "../ui/Animations/AnimatedHero";

type FordelProps = {
  title: string;
  text: string;
  image: string;
  className?: string;
};

const black = true;

function FordelerV2() {
  const Fordel = ({ title, text, image, className }: FordelProps) => {
    return (
      <div
        className={`${className} ${
          black ? "bg-white text-lagText" : "bg-lagText text-white"
        } w-full px-8 py-12 xl:px-14 xl:py-20 flex rounded-lg md:justify-start items-center`}
      >
        <Image
          className="shrink-0 "
          src={image}
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex flex-col ml-4">
          <h3 className="text-xl min-[385px]:text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-medium uppercase text-wrap">
            {title}
          </h3>
          <p className="text-sm min-[385px]:text-base md:text-base sm:text-lg lg:text-lg font-medium">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`grid  min-h-screen gap-3 grid-cols-1 md:grid-cols-2 py-32 p-3 lg:px-4 ${
        black ? "bg-lagText" : "bg-white"
      }`}
    >
      <div
        className={`flex  flex-col md:col-span-2 justify-center items-center ${
          black ? "text-white" : "text-lagText"
        }`}
      >
        <h2
          className="uppercase font-medium text-center mb-2 sm:mb-6 max-w-[600px] md:max-w-full  
        
        text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight p-3 lg:p-4
        "
        >
          <AnimatedLetters
            text="Derfor bør du velge vårt boligkonsept"
            className="tracking-tighter"
            center
          />
        </h2>
        <p className="text-center mb-8 sm:mb-14 text-lg lg:text-2xl">
          De nøkkelfordelene som gjør våre boliger til et smart valg
        </p>
      </div>

      <Fordel
        title="Energiforbruk"
        text="Vårt boligkonsept bruker ofte opptil 45% mindre energi for oppvarming og kjøling."
        image="/battery-eco.svg"
      />
      <Fordel
        title="Miljøvennlig"
        text="Reduser karbonavtrykk med så mye som 36%"
        image="/leaf.svg"
      />
      <Fordel
        title="Fleksibilitet"
        text="Mindre rot og enklere livsstil, kan redusere eiendeler med 40-60%"
        image="/truck-loading.svg"
      />
      <Fordel
        title="Økonomisk"
        text="Vårt boligkonsept koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
        image="/pig-money.svg"
      />
    </section>
  );
}

export default FordelerV2;
