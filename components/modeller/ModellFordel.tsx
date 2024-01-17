import Image from "next/image";
import React from "react";

type ModellFordelProps = {
  svg: string;
  title: string;
  underTitle: string;
  align?: string;
};

function ModellFordel({ svg, title, underTitle, align }: ModellFordelProps) {
  return (
    <div
      className={`flex  flex-col gap-2 sm:gap-4 justify-start items-center `}
    >
      <div className="w-[32px] h-[32px] xsm:w-[46px] xsm:h-[46px] sm:w-[50px] sm:h-[50px] relative">
        <Image src={svg} alt="" fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className=" md:text-2xl sm:text-xl md:font-light xsm:text-lg lg:text-2xl">
          {title}
        </h2>
        <h3 className="font-medium md:font-normal xsm:text-lg sm:text-xl md:text-2xl lg:text-2xl">
          {underTitle}
        </h3>
      </div>
    </div>
  );
}

export default ModellFordel;
