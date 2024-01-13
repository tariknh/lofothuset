import Image from "next/image";
import React from "react";
import Button from "../ui/LagButton";

function ModellBestille() {
  return (
    <section className="self-center px-2 sm:px-4 lg:px-16 flex flex-col sm:flex-row-reverse justify-center items-center gap-8 w-full max-w-[1200px]">
      <div className="aspect-square relative w-full sm:max-w-[500px] ">
        <Image src="/geir.png" alt="Bestille" fill className="object-cover" />
      </div>
      <div className="flex flex-col w-full justify-center sm:items-start sm:p-8">
        <h3 className="uppercase sm:mb-2">Oppfyll drømmene dine</h3>
        <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium mb-4 sm:max-w-72">
          Klar til å bestille Finnmarken IV?{" "}
        </h2>
        <Button text="Kontakt Oss" slug="/" className="" />
      </div>
    </section>
  );
}

export default ModellBestille;
