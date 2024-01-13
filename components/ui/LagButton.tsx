import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  text: string;
  slug: string;
  className?: string;
  full?: boolean;
}

function Button({ text, slug, className, full = false }: ButtonProps) {
  if (full) {
    return (
      <Link className={`${className}`} href={slug}>
        <button
          className={`w-[150px] xsm:w-52 sm:w-64 flex justify-between py-4 border-b-[1px] border-black items-center text-lagtext`}
        >
          {text}
          <Image width={28} height={28} src={"/arrow.svg"} alt="Click Here" />
        </button>
      </Link>
    );
  } else {
    return (
      <Link className={`${className} `} href={slug}>
        <button
          className={`gap-4 xsm:w-52 sm:w-64 flex justify-between py-4 border-b-[1px] border-black items-center text-lagtext`}
        >
          {text}
          <Image width={28} height={28} src={"/arrow.svg"} alt="Click Here" />
        </button>
      </Link>
    );
  }
}

export default Button;
