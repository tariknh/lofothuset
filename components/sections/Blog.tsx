"use client";
import { secureHeapUsed } from "crypto";
import React from "react";
import Button from "../ui/LagButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "../ui/NewsCard";

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

function Blog() {
  return (
    <section className="mx-8 lg:m-16 overflow-visible grid grid-cols-2 max-w-[1200px] self-center">
      <div className="flex justify-between items-center w-fit ">
        {/* Header */}
        <h2 className="text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter my-8">
          Nyeste artikler
        </h2>
      </div>
      <Button
        className={
          "place-self-end self-center xsm:row-start-1 xsm:col-start-2 row-start-1 col-start-2"
        }
        text="Se alle artikler"
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

export default Blog;
