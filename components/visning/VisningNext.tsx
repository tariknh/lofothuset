import React from "react";
import Image from "next/image";

const prim = "col-span-2 flex flex-col h-full";
const seco = "col-span-2 flex flex-col self-center";

const showing = seco;

interface VisningNextProps {
  featured?: boolean;
  title: string;
  date: string;
  location: string;
  image: string;
}

function VisningNext({
  featured,
  title,
  date,
  location,
  image,
}: VisningNextProps) {
  if (featured) {
    return (
      <div className="col-start-1 flex flex-col justify-center items-start w-full border-zinc-200 border-b-[1px] pb-8 px-4">
        <div className="relative w-full aspect-video mb-2 md:mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <h2 className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl font-normal w-full mb-1 md:mb-2">
          {title}
        </h2>
        <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl mb-4 md:mb-8">
          Sted: {location}
        </p>
        <p className="text-base xsm:text-lg sm:text-xl md:text-2xl text-zinc-500">
          Dato: {date}
        </p>
      </div>
    );
  }
  return (
    <div
      className={`grid grid-cols-3 justify-center items-center gap-4 border-zinc-200 border-b-[1px] pb-8 px-4`}
    >
      <div className={`${showing}`}>
        <h2 className="text-xl xsm:text-2xl sm:text-3xl md:text-4xl font-normal mb-1 md:mb-2">
          {title}
        </h2>
        <div className={`flex flex-col h-full`}>
          <p className="text-base xsm:text-lg sm:text-xl md:text-2xl mb-4 md:mb-8">
            Sted: {location}
          </p>
          <p className="text-sm xsm:text-base sm:text-lg md:text-xl text-zinc-500">
            Dato: {date}
          </p>
        </div>
      </div>
      <div className="relative w-full aspect-square shadow-sm ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>
    </div>
  );
}

export default VisningNext;
