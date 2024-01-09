import Image from "next/image";
import React from "react";

type ModellModellProps = {
  image: string;
  className: string;
  alt: string;
  speed?: string;
};

function ModellModell({
  image,
  alt,
  className,
  speed = "0.2",
}: ModellModellProps) {
  return (
    <div
      data-scroll
      data-scroll-speed={speed}
      className={`col-span-4 w-full h-full ${className}`}
    >
      <Image src={image} alt={alt} width={1080} height={1080} />
      <h2 className="mt-2 text-sm xsm:text-base sm:text-lg md:text-xl lg:text-2xl">
        Villa Serenity by the Sea
      </h2>
    </div>
  );
}

export default ModellModell;
