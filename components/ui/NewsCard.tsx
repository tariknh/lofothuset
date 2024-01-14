import Image from "next/image";
import React from "react";

function NewsCard({
  date,
  title,
  text,
  className,
}: {
  date: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`${className} w-full  border-zinc-500 border-b-[1px] pb-8`}>
      <div className="relative aspect-square mb-2">
        <Image
          fill
          objectFit="cover"
          src={"/turkey.jpg"}
          alt="Image of a ship"
          className=""
        />
      </div>
      <div className="flex flex-col xsm:gap-4 gap-2 ">
        <p className="text-sm text-zinc-500">{date}</p>
        <h2 className="text-base text-lagText xsm:text-2xl uppercase tracking-tight text-balance">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default NewsCard;
