import Image from "next/image";
import React from "react";
import ModellFordel from "./ModellFordel";
import Link from "next/link";

interface ModellHeroProps {
  title: string;
  users: string;
  description: string;
  soverom: string;
  bygningsareal: string;
  rom: string;
  bad: string;
  leveringstid: string;
  inngangsparti: string;
  heroImage: string;
}

function ModellHero({
  title,
  users,
  description,
  soverom,
  bygningsareal,
  rom,
  bad,
  leveringstid,
  inngangsparti,
  heroImage,
}: ModellHeroProps) {
  return (
    <section className="pt-20 px-2 sm:px-4 lg:px-16 min-h-[80vh] mb-28 md:mb-44 max-w-[1920px]">
      <div className="w-full max-h-[900px] h-[50vw] relative">
        <div className="w-full h-full absolute bg-black z-10 opacity-30"></div>
        <Image
          priority
          src={heroImage}
          alt="Bilde av hus"
          fill
          className="rounded-lg object-cover"
        />
        <h1 className="absolute ml-4 sm:ml-8 lg:ml-16 text-4xl lg:text-6xl xsm:text-5xl text-white font-medium top-1/2 -translate-y-1/2 z-20">
          {title}
        </h1>
      </div>
      <div className="relative z-40">
        <div className=" bg-white xsm-370:-translate-y-8 xsm-370:translate-x-12 xsm-370:mr-12 sm:translate-x-16 sm:mr-12 rounded-lg md:translate-x-16 md:-translate-y-12 lg:translate-x-24 lg:-translate-y-20 rounded-r-none p-4 xsm:p-8 sm:p-12 md:p-16">
          <div className="flex justify-between items-center mb-2 sm:mb-8">
            <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium  ">
              {title}
            </h2>
            <div className="flex justify-center items-center text-sm sm:text-lg">
              Opp til {users} x
              <Image
                src={"/users.svg"}
                alt="User icon"
                width={32}
                height={32}
                className="ml-2"
              />
            </div>
          </div>
          <h3 className="mb-4 pb-4 sm:pb-10 xsm-370:mb-0 xsm-370:text-lg sm:text-xl lg:text-2xl ">
            {description}
          </h3>
          <Link
            target="_blank"
            href={"/teknisk"}
            className="flex justify-start items-center gap-4 underline underline-offset-[12px] text-base hover:text-[16.2px]  sm:text-lg lg:text-xl lg:hover:text-[20.2px] sm:hover:text-[18.2px] w-fit transition-all duration-200"
          >
            Trykk her for å lese tekniske detaljer
            <Image src="/info.svg" alt="Arrow" width={24} height={24} />
          </Link>
        </div>
        <div className="grid xsm:ml-12 lg:ml-32 lg:mr-16 sm:mx-2 md:mx-4 grid-cols-3 gap-y-12 gap-x-2">
          <ModellFordel
            title="Soverom"
            underTitle={soverom}
            svg="/ground.svg"
            align="justify-end "
          />
          <ModellFordel
            title="Bygningsareal"
            underTitle={`${bygningsareal} m²`}
            svg="/build.svg"
            align="justify-center "
          />
          <ModellFordel
            title="Rom"
            underTitle={rom}
            svg="/room.svg"
            align="justify-start "
          />
          <ModellFordel
            align="justify-end"
            title="Bad"
            underTitle={bad}
            svg="/bath.svg"
          />
          <ModellFordel
            title="Leveringstid"
            underTitle={leveringstid}
            svg="/comp.svg"
            align="justify-center"
          />
          <ModellFordel
            title="Inngangsparti"
            underTitle={inngangsparti}
            svg="/gang.svg"
            align="justify-start"
          />
        </div>
      </div>
    </section>
  );
}

export default ModellHero;
