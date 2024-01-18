import Image from "next/image";
import React from "react";
import ModellFordel from "./ModellFordel";

function ModellHero() {
  return (
    <section className="pt-20 px-2 sm:px-4 lg:px-16 min-h-[80vh] mb-28 md:mb-44 max-w-[1920px]">
      <div className="w-full max-h-[900px] h-[50vw] relative">
        <div className="w-full h-full absolute bg-black z-10 opacity-30"></div>
        <Image
          priority
          src={"/webp/render.webp"}
          alt="Bilde av hus"
          fill
          className="rounded-lg object-cover"
        />
        <h1 className="absolute ml-4 sm:ml-8 lg:ml-16 text-4xl lg:text-6xl xsm:text-5xl text-white font-medium top-1/2 -translate-y-1/2 z-20">
          Lofoten Lodge
        </h1>
      </div>
      <div className="relative z-40">
        <div className=" bg-white xsm-370:-translate-y-8 xsm-370:translate-x-12 xsm-370:mr-12 sm:translate-x-16 sm:mr-12 rounded-lg md:translate-x-16 md:-translate-y-12 lg:translate-x-24 lg:-translate-y-20 rounded-r-none p-4 xsm:p-8 sm:p-12 md:p-16">
          <div className="flex justify-between items-center mb-2 sm:mb-8">
            <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium  ">
              Lofoten Lodge II
            </h2>
            <div className="flex justify-center items-center text-sm sm:text-lg">
              Opp til 2 x
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
            Lofoten Lodge er et bærekraftig og moderne boalternativ som gir
            energieffektive løsninger for alle livsstiler. Inspirert av Lofotens
            naturlige skjønnhet, er denne modellen perfekt for par eller små
            familier som verdsetter miljøet og en minimalistisk livsstil.
          </h3>
        </div>
        <div className="grid xsm:ml-12 lg:ml-32 lg:mr-16 sm:mx-2 md:mx-4 grid-cols-3 gap-y-12 gap-x-2">
          <ModellFordel
            title="Soverom"
            underTitle="1"
            svg="/ground.svg"
            align="justify-end "
          />
          <ModellFordel
            title="Bygningsareal"
            underTitle="37 m&sup2;"
            svg="/build.svg"
            align="justify-center "
          />
          <ModellFordel
            title="Rom"
            underTitle="3"
            svg="/room.svg"
            align="justify-start "
          />
          <ModellFordel
            align="justify-end"
            title="Bad"
            underTitle="1"
            svg="/bath.svg"
          />
          <ModellFordel
            title="Leveringstid"
            underTitle="2-4 Måneder"
            svg="/comp.svg"
            align="justify-center"
          />
          <ModellFordel
            title="Inngangsparti"
            underTitle="1"
            svg="/gang.svg"
            align="justify-start"
          />
        </div>
      </div>
    </section>
  );
}

export default ModellHero;
