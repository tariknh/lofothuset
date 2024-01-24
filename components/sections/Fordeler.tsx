import Image from "next/image";
import React from "react";
import FordelCard from "../ui/FordelCard";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";

function Fordeler() {
  return (
    <section className="my-16 p-3 lg:p-4">
      <h2 className="text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter my-8">
        <AnimatedLetters text="Derfor bør du velge vårt boligkonsept" />
      </h2>
      <div className="grid grid-cols-3 gap-2 lg:gap-6">
        <FordelCard
          title={"Energiforbruk"}
          text={
            "Små hjem bruker betydelig mindre energi, ofte opptil 45% mindre enn større hjem for oppvarming og kjøling."
          }
          image={"/plug.svg"}
          className={"col-span-2"}
        />
        <FordelCard
          title={"Miljøvennlig"}
          text={"Reduser karbonavtrykk med så mye som 36%"}
          image={"/snow.svg"}
          className={""}
        />
        <FordelCard
          title={"Fleksibilitet"}
          text={
            "Mindre rot og enklere livsstil, kan redusere eiendeler med 40-60%"
          }
          image={"/coffee.svg"}
          className={""}
        />
        <FordelCard
          title={"Økonomisk"}
          text={
            "Reduserte byggekostnader for våre boliger kan være opptil 80% lavere enn tradisjonelle hus på grunn av mindre materialbehov og enklere design."
          }
          image={"/wallet.svg"}
          className={"col-span-2"}
        />
      </div>
    </section>
  );
}

export default Fordeler;
