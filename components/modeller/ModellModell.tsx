import Image from "next/image";
import React from "react";

type ModellModellProps = {
  image: string;
  className: string;

  text: string;
  speed?: string;
};

function ModellModell({
  image,

  className,
  text,
  speed = "0.2",
}: ModellModellProps) {
  return (
    <div
      data-scroll
      data-scroll-speed={speed}
      className={`col-span-4 w-full h-full ${className} `}
    >
      <Image
        className="max-h-screen shadow-sm rounded-[2px]"
        src={image}
        alt={`Bilde av ${text}`}
        width={1080}
        height={1080}
      />
      <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight ">
        {text}
      </h2>
    </div>
  );
}

export default ModellModell;
