import Image from "next/image";
import React from "react";
import ModellFordel from "./ModellFordel";

function ModellHero() {
  return (
    <section className="pt-20 px-2 sm:px-4 lg:px-16 min-h-[80vh] mb-28 md:mb-44 max-w-[1200px]">
      <div className="w-full max-h-[600px] h-[50vw] relative">
        <Image
          src={"/images/finn.png"}
          alt="Bildet av hus"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
        <h1 className="absolute ml-4 sm:ml-8 lg:ml-16 text-4xl lg:text-6xl xsm:text-5xl text-white font-medium top-1/2 -translate-y-1/2">
          Finnmarken
        </h1>
      </div>
      <div className="relative ">
        <div className="bg-white xsm-370:-translate-y-8 xsm-370:translate-x-12 xsm-370:mr-12 sm:translate-x-16 sm:mr-12 rounded-lg md:translate-x-16 md:-translate-y-12 lg:translate-x-24 lg:-translate-y-20 rounded-r-none p-4 xsm:p-8 sm:p-12 md:p-16">
          <div className="flex justify-between items-center mb-2 sm:mb-8">
            <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium  ">
              Finnmarken IV
            </h2>
            <div className="flex justify-center items-center text-sm sm:text-lg">
              Opp til 4 x
              <Image
                src={"/users.svg"}
                alt="User icon"
                width={32}
                height={32}
                className="ml-2"
              />
            </div>
          </div>
          <h3 className="mb-4 xsm-370:mb-0 xsm-370:text-lg sm:text-xl lg:text-2xl ">
            Alpha is an innovative and ecological housing project that offers
            energy-efficient solutions for everyone regardless of age, gender,
            or background. Alpha IV is designed for a family up to four people.
          </h3>
        </div>
        <div className="grid xsm:ml-12 lg:ml-32 lg:mr-16 sm:mx-2 md:mx-4 grid-cols-3 gap-y-12 gap-x-2 ">
          <ModellFordel
            title="Gulvareal"
            underTitle="53,9 m"
            svg="/ground.svg"
            align="justify-start"
          />
          <ModellFordel
            title="Bygningsareal"
            underTitle="70 m"
            svg="/build.svg"
            align="justify-center"
          />
          <ModellFordel
            title="Bad"
            underTitle="2"
            svg="/bath.svg"
            align="justify-end"
          />
          <ModellFordel
            align="justify-start"
            title="Floor"
            underTitle="33,9 m"
            svg="/room.svg"
          />
          <ModellFordel
            title="Komponenter"
            underTitle="33 500+"
            svg="/comp.svg"
            align="justify-center"
          />
          <ModellFordel
            title="Rom"
            underTitle="3"
            svg="/room.svg"
            align="justify-end"
          />
        </div>
      </div>
    </section>
  );
}

export default ModellHero;
