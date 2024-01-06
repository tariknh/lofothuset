"use client";
import React from "react";
import Button from "../ui/LagButton";
import NewsCard from "../ui/NewsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const news_cards = [
  {
    date: "22. DESEMBER 2023",
    title: "LAG selger sine andeler i tyrkia",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
  {
    date: "22. DESEMBER 2023",
    title: "LAG selger sine andeler i tyrkia",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
  {
    date: "22. DESEMBER 2023",
    title: "LAG selger sine andeler i tyrkia",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
];

function SisteNytt() {
  return (
    <section className="mx-8 lg:m-16 overflow-visible grid grid-cols-2 max-w-[1200px] self-center">
      <div className="flex justify-between items-center w-fit ">
        {/* Header */}
        <h2 className="text-2xl">Siste nytt</h2>
      </div>
      <Button
        className={
          "place-self-end self-center xsm:row-start-1 xsm:col-start-2 row-start-4 col-start-2"
        }
        text="Se alle nyheter"
        slug="/nyheter"
      />
      <div className="flex justify-center items-center overflow-visible col-span-2 my-8">
        {/* News card */}
        <Carousel className="w-full flex flex-col overflow-visible 2xl:items-center 2xl::justify-center">
          <CarouselContent className="p-2 overflow-visible max-w-[1200px]">
            {news_cards.map((newsCardProps, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center overflow-visible xsm:basis-3/4 sm:basis-3/5 md:basis-1/3 "
              >
                <NewsCard
                  date={newsCardProps.date}
                  title={newsCardProps.title}
                  text={newsCardProps.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full p-8 lg:p-16 flex justify-between max-w-[1200px] mt-8 md:hidden">
            <CarouselPrevious className="relative w-16 h-16 rounded-2xl shadow-md [&>svg]:w-32 [&>svg]:h-32" />
            <CarouselNext className="relative w-16 h-16 rounded-2xl shadow-md [&>svg]:w-32 [&>svg]:h-32" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default SisteNytt;

// <Button text="Se alle nyheter" slug="/nyheter" />
