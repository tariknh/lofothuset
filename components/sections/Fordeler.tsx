import Image from "next/image";
import React from "react";
import FordelCard from "../ui/FordelCard";

function Fordeler() {
  return (
    <section className="mb-4 p-2 sm:p-4 lg:p-16 max-w-[1200px] self-center">
      <h2 className="text-3xl font-light text-center my-8 lg:mb-16 sm:text-4xl lg:text-5xl">
        Derfor bør du velge mikrohus
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
            " Reduserte byggekostnader for mikrohus kan være opptil 80% lavere enn tradisjonelle hus på grunn av mindre materialbehov og enklere design."
          }
          image={"/wallet.svg"}
          className={"col-span-2"}
        />
      </div>
    </section>
  );
}

export default Fordeler;
