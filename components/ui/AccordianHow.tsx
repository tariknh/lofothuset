import { useState, useEffect } from "react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

interface AccordianHowProps {
  num: string;
  title: string;
  text: string;
  img?: string;
  value: string;
  progress: number;
  onClick: () => void;
}

function AccordianHow({
  num,
  title,
  text,
  img,
  value,
  progress,
  onClick,
}: AccordianHowProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        onClick={onClick}
        className="text-left flex justify-start"
      >
        <span className="w-1/5 ">{num}</span>
        <p className="text-lg xsm-370:text-xl lg:text-2xl ">{title}</p>
      </AccordionTrigger>
      <AccordionContent className="text-left">
        <Progress className="h-[2px] mb-4" value={progress} />
        <p className="text-lg">{text}</p>
        {img ? (
          <div className="w-full aspect-video relative">
            <Image
              src={img}
              alt={`Bilde av ${title}`}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ) : (
          <></>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default AccordianHow;
