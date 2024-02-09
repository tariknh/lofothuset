import Image from "next/image";
import React from "react";
import { AnimatedLines } from "../ui/Animations/AnimatedHero";

type FordelProps = {
  title: string;
  text: string;
  image?: string;
  className?: string;
  textClassName?: string;
  scale?: string;
};

const black = true;

const miniFordelClass =
  "!text-sm sm:!text-2xl md:!text-3xl lg:!text-4xl font-medium text-wrap";

function ModellFordelerV2() {
  const Fordel = ({
    title,
    text,
    image,
    className,
    textClassName,
    scale,
  }: FordelProps) => {
    return (
      <div
        className={`${className} ${
          black ? "bg-white text-lagText" : "bg-lagText text-white"
        } text-center w-full aspect-[4/3] lg:aspect-[4/3] sm:aspect-[5/3] md:aspect-[6/3] h-full flex flex-col rounded-lg justify-center items-center gap-2 p-2`}
      >
        {image && (
          <Image
            className={`${scale} shrink-0 `}
            src={image}
            alt={title}
            width={50}
            height={50}
          />
        )}

        <h3
          className={`${textClassName} text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-wrap`}
        >
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
            <AnimatedLines text="Inkludert i alle boliger" center />
          </h2>
          <p className="text-center mb-8 sm:mb-14 text-xl lg:text-2xl">
            Uavhengig av modellen du velger, er alle disse funksjonene inkludert
            i grunnprisen for våre boliger.
          </p>
        </div>

        <Fordel
          title="Strømtilkobling"
          text="Våre boliger bruker opptil 45% mindre energi for oppvarming og kjøling."
          image="/battery.svg"
          className=""
        />
        <Fordel
          title="Vanntilkobling"
          text="Reduser karbonavtrykk med så mye som 36%"
          image="/water.svg"
        />
        <Fordel
          title="Varmekabler i alle rom utenom soverom"
          text="Mindre rot og enklere livsstil, kan redusere eiendeler med 40-60%"
          image="/radiator.svg"
        />
        <Fordel
          title="Varmtvannsbereder + (heat-injection)"
          text="Våre boliger koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/heater.svg"
          className="text-center text-balance"
        />
        <Fordel
          title="Utløp"
          text="Våre boliger koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/waste.svg"
        />
        <Fordel title="Oppvaskmaskin" text="" image="/dish.svg" />
        <Fordel title="Komfyr" text="" image="/microwave.svg" />
        <Fordel title="Kjøleskap" text="" image="/fridger.svg" />
        <Fordel
          title="Vaskemaskin"
          text=""
          image="/washing.svg"
          className="col-span-2 lg:col-span-1 aspect-[9/3] lg:aspect-[4/3] sm:aspect-[9/3] md:aspect-[9/3]"
        />

        <div className="col-span-2 lg:col-span-3 flex justify-center items-center text-white text-8xl my-8">
          +
        </div>
        <div className="col-span-2 lg:col-span-3">
          <h2
            className="uppercase font-medium text-center max-w-[600px] md:max-w-full text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight mb-4 text-white
        "
          >
            <AnimatedLines text="Kan legges til" center />
          </h2>
          <p className="text-center mb-8 sm:mb-14 text-xl lg:text-2xl text-white">
            Ønsker du flere funksjoner i boligen? Sjekk ut våre tilvalg, alle
            tilgjengelige for styring via telefonen eller en egen pad i hjemmet
          </p>
        </div>
        <div className="col-span-2 lg:col-span-3 grid grid-cols-8 gap-4 sm:gap-8 text-center ">
          <Fordel
            className="!aspect-[7/6] h-full col-span-3 col-start-2 p-1"
            title="Elektriske gardiner"
            text=""
            image="/curtains.svg"
            textClassName={miniFordelClass}
          />
          <Fordel
            className="!aspect-[7/6] h-full col-span-3 text-balance p-1"
            title="Varmepumpe"
            text=""
            image="/heating.svg"
            textClassName={miniFordelClass}
          />
          <Fordel
            className="!aspect-[7/6] h-full col-span-3 col-start-2 p-1"
            title="Overvåknings kameraer"
            text=""
            image="/camera.svg"
            textClassName={miniFordelClass}
          />
          <Fordel
            className="!aspect-[7/6] h-full col-span-3 p-1"
            title="Alarm system"
            text=""
            image="/alarm.svg"
            textClassName={miniFordelClass}
          />
        </div>
      </div>
    </section>
  );
}

export default ModellFordelerV2;
