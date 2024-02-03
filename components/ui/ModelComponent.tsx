"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ModelComponentProps {
  className?: string;
  title: string;
  href: string;
  slogan: string;
  image: string;
}

const ModelComponent: React.FC<ModelComponentProps> = ({
  className,
  title,
  href,
  slogan,
  image,
}) => {
  return (
    <div className="desktopContentSection flex flex-col items-center  justify-center self-center min-h-screen">
      <h1>test</h1>
      <div className="w-full p-0 m-0 left-0 h-screen max-w-screen absolute">
        <Image
          src={image}
          alt="Bilde av modell 1"
          fill
          className="absolute object-cover "
        />
      </div>
      <div className="first absolute z-20 self-start sm:self-center p-8 text-white sm:basis-1/2 sm:mx-8 lg:mx-16">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[2vw] font-base mb-3">
          {slogan}
        </h3>
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[8vw] font-medium max-w-7 mb-6">
          {title}
        </h2>
        <div className="row-start-4 col-start-2 place-self-end">
          <span
            className={`underline underline-offset-4 text-xl md:text-2xl lg:text-3xl`}
          >
            <Link href={href}>Trykk for å se modellen</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelComponent;
