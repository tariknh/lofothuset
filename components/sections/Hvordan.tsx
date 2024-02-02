"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useInView } from "react-intersection-observer";
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
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";

function Hvordan() {
  const [activeItem, setActiveItem] = useState("item-1");
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const accordionInterval = useRef<NodeJS.Timeout | null>(null); // add this line
  const [imgSrc, setImgSrc] = useState("/modell1.png");
  const [ref, inView] = useInView({
    triggerOnce: true, // Change to false if you want the function to trigger again whenever it comes in view
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers
  });

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
      case "item-4":
        setImgSrc("/wallet.svg");
        break;
      case "item-5":
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
        const newProgress = oldProgress + 100 / 15; // increment by 100/15 every 100ms to reach 100 in 15 seconds
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
          case "item-3":
            setImgSrc("/turkey.jpg");
            return "item-4";
          case "item-4":
            setImgSrc("/turkey.jpg");
            return "item-5";
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
          const newProgress = oldProgress + 100 / 15; // increment by 100/15 every 100ms to reach 100 in 15 seconds
          return Math.min(newProgress, 100);
        });
      }, 100); // 100ms interval
    }, 15000);
  };

  useEffect(() => {
    if (inView) {
      startIntervals(); // Start the intervals only when the component is in view

      // Start the progress interval immediately when the component is in view
      progressInterval.current = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = oldProgress + 100 / 15; // Increment by 100/15 every 100ms
          return Math.min(newProgress, 100);
        });
      }, 100); // 100ms interval
    }

    return () => {
      if (accordionInterval.current) {
        clearInterval(accordionInterval.current); // Clear the accordion interval
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current); // Clear the progress interval
      }
    };
  }, [inView]); // Re-run the effect when `inView` changes

  return (
    <section className="my-16 p-3 lg:p-4 grid sm:grid-cols-2 gap-8 min-h-screen w-full justify-center items-center ">
      <h2 className="sm:col-span-2 self-end text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter ">
        <AnimatedLetters center text="Så lett er det å få i gang din bolig" />
      </h2>
      <Accordion
        ref={ref}
        type="single"
        collapsible
        className="sm:h-[600px] md:h-[711px] h-[400px sm:row-start-2 sm:col-start-2 flex flex-col w-full justify-evenly"
        value={activeItem}
      >
        <AccordianHow
          value="item-1"
          title="Bestilling"
          num="01."
          text="Trykk på Kontakt øverst, fyll ut skjemaet og send det inn, så finner vi ut hvilken modell som passer best for deg."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-1")}
        />

        <AccordianHow
          value="item-2"
          title="Produksjon av boligen"
          num="02."
          text="Produksjonen av din bolig er nå startet. Produksjonstiden kan være opptil 2 måneder."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-2")}
        />
        <AccordianHow
          value="item-3"
          title="Eksklusivt Boligkjøpstilbud i Tyrkia"
          num="03."
          text="For en begrenset periode inkluderer vi dekning av fly- og hotellkostnader for de som er interessert i å besøke Tyrkia for å se på fremdriften av sin bolig under konstruksjon."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-3")}
        />
        <AccordianHow
          value="item-4"
          title="Levering og installasjon"
          num="04."
          text="Vi leverer og installerer din bolig, klar for innflytting. Fra bestilling til levering av boligen din kan det ta opptil 4 måneder."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-4")}
        />

        <AccordianHow
          value="item-5"
          title="Innflytting"
          num="05."
          text="Gratulerer med din nye bolig! Vi håper du vil trives i ditt nye hjem."
          //   img="/modell1.png"
          progress={progress}
          onClick={() => handleClick("item-5")}
        />
      </Accordion>
      <div className="w-full overflow-hidden sm:h-[600px] md:h-[711px] h-[400px] relative row-start-2 rounded-lg shrink-0">
        <Image
          data-scroll
          data-scroll-speed="-0.1"
          src={"/webp/renderSquare.webp"}
          alt="Bilde av modell 1"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hvordan;
{
  /* <Button text="Kontakt oss" slug="/kontakt" /> */
}

{
  /* <Image
  src={imgSrc}
  alt="Bilde av modell 1"
  fill
  
  className="object-cover"
/>; */
}
