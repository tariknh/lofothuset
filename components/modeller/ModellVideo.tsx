import Image from "next/image";
import React from "react";
import Button from "../ui/LagButton";

function ModellVideo() {
  return (
    <section className="px-2 sm:px-4 mt-20 lg:px-16 max-w-[1200px] border-t-[1px] pt-8 border-lagText grid grid-col-1 md:grid-cols-2 gap-6 md:p-12">
      <div className="flex flex-col md:items-start justify-center items-center">
        <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium mb-4">
          Finnmarken IV
        </h2>
        <p className="text-center mb-2 xsm-370:text-lg sm:text-xl lg:text-2xl md:text-start">
          Kontakt oss for en personlig omvisning og ta det første steget mot
          ditt drømmehjem!
        </p>
      </div>
      <div className="relative aspect-square md:aspect-[0] md:row-span-3">
        <Image
          src="/images/vid.png"
          alt="Finnmarken IV"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 h-fit gap-2 md:text-2xl sm:text-xl md:font-light xsm:text-lg lg:text-2xl">
        <div className="flex justify-center items-center md:justify-start ">
          <Image src={"/check.svg"} alt="Checkmark" width={32} height={32} />
          <p>Økonomisk</p>
        </div>
        <div className="flex justify-center items-center md:justify-start">
          <Image src={"/check.svg"} alt="Checkmark" width={32} height={32} />
          <p>Kompakt</p>
        </div>
        <div className="flex justify-center items-center md:justify-start">
          <Image src={"/check.svg"} alt="Checkmark" width={32} height={32} />
          <p>Miljøvennlig</p>
        </div>
        <div className="flex justify-center items-center md:justify-start">
          <Image src={"/check.svg"} alt="Checkmark" width={32} height={32} />
          <p>Innovativt</p>
        </div>
      </div>
      <div className="w-full flex justify-end items-center md:justify-start md:col-start-1 row-start-4 md:row-start-3">
        <Button text="Kontakt oss" slug="/" className="" />
      </div>
    </section>
  );
}

export default ModellVideo;
