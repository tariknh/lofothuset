import Image from "next/image";
import React from "react";

type FordelProps = {
  title: string;
  text: string;
  image: string;
  className?: string;
};

const black = false;

function FordelerV2() {
  const Fordel = ({ title, text, image, className }: FordelProps) => {
    return (
      <div
        className={`${className} ${
          black ? "bg-white text-lagText" : "bg-lagText text-white"
        } w-full px-8 py-12 flex rounded-lg `}
      >
        <Image
          className="shrink-0"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex flex-col ml-4">
          <h3 className="text-2xl font-medium uppercase">{title}</h3>
          <p className="text-base font-medium">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`grid grid-cols-1 py-16 p-3 lg:p-4 ${
        black ? "bg-lagText" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center ${
          black ? "text-white" : "text-lagText"
        }`}
      >
        <h2 className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-[8vw] font-medium  text-center mb-2 ">
          Derfor bør du velge mikrohus
        </h2>
        <p className="text-center mb-8 text-lg">For beboere i Norge</p>
      </div>
      <div className="flex flex-col gap-3">
        <Fordel
          title="Energiforbruk"
          text="Mikrohus bruker ofte opptil 45% mindre energi for oppvarming og kjøling."
          image="/plug.svg"
        />
        <Fordel
          title="Miljøvennlig"
          text="Reduser karbonavtrykk med så mye som 36%"
          image="/snow.svg"
        />
        <Fordel
          title="Fleksibilitet"
          text="Mindre rot og enklere livsstil, kan redusere eiendeler med 40-60%"
          image="/coffee.svg"
        />
        <Fordel
          title="Økonomisk"
          text="Mikrohus koster mindre i innkjøp, drift og bygging, og tilbyr energiselvforsyning for økonomisk bærekraft."
          image="/wallet.svg"
        />
      </div>
    </section>
  );
}

export default FordelerV2;
