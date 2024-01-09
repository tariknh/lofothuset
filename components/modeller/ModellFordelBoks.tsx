import React from "react";
import Image from "next/image";

type ModellFordelBoksProps = {
  image: string;
  alt: string;
  text: string;
  right?: boolean;
  className?: string;
};

function ModellFordelBoks({
  image,
  alt,
  text,
  right,
  className,
}: ModellFordelBoksProps) {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center border-[1px] border-lagMuted p-4 gap-4 `}
    >
      <Image className="" src={image} alt={alt} width={50} height={50} />
      <p className="text-center text-lagMuted">{text}</p>
    </div>
  );
}

export default ModellFordelBoks;
