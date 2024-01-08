"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Button from "../ui/LagButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import AccordianHow from "../ui/AccordianHow";
import { Progress } from "@/components/ui/progress";

function Hvordan() {
  const [activeItem, setActiveItem] = useState("item-1");
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const accordionInterval = useRef<NodeJS.Timeout | null>(null); // add this line
  const [imgSrc, setImgSrc] = useState("/modell1.png");

  const handleClick = (item: string) => {
    setActiveItem(item);
    setProgress(0); // reset progress

    // update the image source based on the clicked item
    switch (item) {
      case "item-1":
        setImgSrc("/modell1.png");
        break;
      case "item-2":
        setImgSrc("/turkey.jpg");
        break;
      case "item-3":
        setImgSrc("/wallet.svg");
        break;
      default:
        setImgSrc("/modell1.png");
    }

    // clear the previous progress interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    // start a new progress interval
    progressInterval.current = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 2; // increment by 2 every 100ms to reach 100 in 5 seconds
        return Math.min(newProgress, 100);
      });
    }, 100); // 100ms interval

    // clear and restart the accordion interval
    if (accordionInterval.current) {
      clearInterval(accordionInterval.current);
    }
    startIntervals(); // st
  };

  const startIntervals = () => {
    accordionInterval.current = setInterval(() => {
      setActiveItem((prevItem) => {
        switch (prevItem) {
          case "item-1":
            setImgSrc("/wallet.svg");
            return "item-2";
          case "item-2":
            setImgSrc("/turkey.jpg");
            return "item-3";
          default:
            setImgSrc("/modell1.png");
            return "item-1";
        }
      });
      setProgress(0); // reset progress

      if (progressInterval.current) {
        clearInterval(progressInterval.current); // clear the previous progress interval
      }

      progressInterval.current = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = oldProgress + 2; // increment by 2 every 100ms to reach 100 in 5 seconds
          return Math.min(newProgress, 100);
        });
      }, 100); // 100ms interval
    }, 5000);
  };

  useEffect(() => {
    startIntervals(); // start the intervals

    return () => {
      if (accordionInterval.current) {
        clearInterval(accordionInterval.current); // clear the accordion interval using the ref
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current); // clear the progress interval using the ref
      }
    };
  }, []);

  return (
    <section className="mx-8 my-16 lg:m-16 grid sm:grid-cols-2 gap-8 max-w-[1200px] self-center">
      <h2 className="text-center mb-8 sm:text-left lg:text-4xl text-3xl max-w-80">
        Så lett er det å få i gang ditt mikrohus
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full sm:row-start-2 sm:col-start-2"
        value={activeItem}
      >
        <AccordianHow
          value="item-1"
          title="Bestilling av mikrohus"
          num="01."
          text="Trykk på kontakt oss, full skjema og send inn, så finner vi ut hvilken modell som passer best for deg."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-1")}
        />

        <AccordianHow
          value="item-2"
          title="Produksjon av mikrohus"
          num="02."
          text="Vi starter produksjonen av ditt mikrohus. Du får en egen prosjektleder som følger deg gjennom hele prosessen."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-2")}
        />
        <AccordianHow
          value="item-3"
          title="Levering og installasjon"
          num="03."
          text="Vi leverer og installerer ditt mikrohus. Du kan flytte rett inn!"
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-3")}
        />

        <AccordianHow
          value="item-4"
          title="Innflytting"
          num="04."
          text="Gratulere med ditt nye mikrohus! Vi håper du vil trives i ditt nye hjem."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-4")}
        />
        <AccordianHow
          value="item-5"
          title="Ferie til tyrkia"
          num="05."
          text="Nå som du har spart penger på ditt nye mikrohus, kan du ta deg en ferie til Tyrkia!"
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-5")}
        />
      </Accordion>
      <div className="w-full row-span-12 sm:row-span-5 row-start-2 relative ">
        <Image
          src={imgSrc}
          alt="Bilde av modell 1"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hvordan;
{
  /* <Button text="Kontakt oss" slug="/kontakt" /> */
}
