import Image from "next/image";
import React from "react";

function NewsCard({
  date,
  title,
  text,
}: {
  date: string;
  title: string;
  text: string;
}) {
  return (
    <div className="w-full shadow-md rounded-lg max-w-[400px] sm:w-[400px]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          fill
          objectFit="cover"
          src={"/turkey.jpg"}
          alt="Image of a ship"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col p-8 xsm:gap-4 gap-2 font-light">
        <p className="text-sm">{date}</p>
        <h2 className="text-xl xsm:text-2xl">{title}</h2>
        <h3 className="text-base xsm:text-lg xsm:mb-4 mb-2">{text}</h3>
        <Image width={28} height={28} src={"/arrow.svg"} alt="Click Here" />
      </div>
    </div>
  );
}

export default NewsCard;
