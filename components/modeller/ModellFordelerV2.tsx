import Image from "next/image";
import React from "react";
import { AnimatedLines } from "../ui/Animations/AnimatedHero";

type FordelProps = {
  title: string;
  text: string;
  image: string;
  className?: string;
};

const black = true;

function ModellFordelerV2() {
  const Fordel = ({ title, text, image, className }: FordelProps) => {
    return (
      <div
        className={`${className} ${
          black ? "bg-white text-lagText" : "bg-lagText text-white"
        } w-full aspect-[4/3] lg:aspect-[4/3] sm:aspect-[5/3] md:aspect-[6/3] flex flex-col rounded-lg justify-center items-center gap-2`}
      >
        <Image
          className="shrink-0"
          src={image}
          alt={title}
          width={50}
          height={50}
        />

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-wrap">
          {title}
        </h3>
      </div>
    );
  };

  return (
    <section
      className={`flex justify-center items-center w-full mb-12 py-32 p-3 min-h-screen lg:px-4 ${
        black ? "bg-lagText" : "bg-white"
      }`}
    >
      <div
        className={`grid w-full gap-3 grid-cols-2 lg:grid-cols-3 max-w-[1400px]  ${
          black ? "bg-lagText" : "bg-white"
        }`}
      >
        <div
          className={`flex p-3 lg:p-4 flex-col col-span-2 lg:col-span-3 justify-center items-center ${
            black ? "text-white" : "text-lagText"
          }`}
        >
          <p className="text-center text-lg lg:text-2xl text-zinc-300 uppercase mb-2">
            Fordeler
          </p>
          <h2
            className="uppercase font-medium text-center max-w-[600px] md:max-w-full text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight mb-4
        "
          >
            <AnimatedLines text="Inkludert i alle mikrohus" center />
          </h2>
          <p className="text-center mb-8 sm:mb-14 text-xl lg:text-2xl">
            Uavhengig av modellen du velger, er alle disse funksjonene inkludert
            i grunnprisen for våre mikrohus.
          </p>
        </div>

        <Fordel
          title="Strømtilkobling"
          text="Mikrohus bruker ofte opptil 45% mindre energi for oppvarming og kjøling."
          image="/battery.svg"
        />
        <Fordel
          title="Vanntilkobling"
          text="Reduser karbonavtrykk med så mye som 36%"
          image="/water.svg"
        />
        <Fordel
          title="Varmesystem"
          text="Mindre rot og enklere livsstil, kan redusere eiendeler med 40-60%"
          image="/radiator.svg"
        />
        <Fordel
          title="Varmtvannstank"
          text="Mikrohus koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/heater.svg"
        />
        <Fordel
          title="Utløp"
          text="Mikrohus koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/waste.svg"
        />
        <Fordel
          title="TEK17"
          text="Mikrohus koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/checkV2.svg"
        />
      </div>
    </section>
  );
}

export default ModellFordelerV2;
