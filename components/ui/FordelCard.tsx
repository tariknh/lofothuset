import React from "react";
import Image from "next/image";
interface FordelCardProps {
  title: string;
  text: string;
  image: string;
  className?: string;
}

function FordelCard({ title, text, image, className }: FordelCardProps) {
  return (
    <div
      className={`${className} bg-lagText p-2 sm:p-6 md:p-8 py-8 flex flex-col justify-between rounded-lg`}
    >
      <div className="w-20 h-20 xsm:w-24 xsm:h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 relative ml-auto">
        <Image
          className="ml-auto xsm:mr-4 absolute"
          src={image}
          fill
          objectFit="contain"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-sm xsm-370:text-base sm:text-2xl text-white font-medium md:text-3xl lg:text-4xl mb-2">
          {title}
        </h2>
        <p className="max-w-96 lg:max-w-[500px] lg:text-2xl text-white text-xs xsm-370:text-sm sm:text-lg font-light md:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
}

export default FordelCard;
