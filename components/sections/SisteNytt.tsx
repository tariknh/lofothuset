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
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";
import Link from "next/link";

const news_cards = [
  {
    date: "22. DESEMBER 2023",
    title: "RETHINK STORIES | Take a look inside at MEL Interior",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
  {
    date: "22. DESEMBER 2023",
    title: "A conversation with Gabrielle, Interior Designer at Format",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
  {
    date: "22. DESEMBER 2023",
    title: "The Founding Story | Founders Floor & Jikke",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
  {
    date: "22. DESEMBER 2023",
    title: "RETHINK STORIES | Have a look inside Chun Café in the 9 streets",
    text: "LAG og det statseide oljeselskapet i Tyrkia (State Oil Company of Tyrkia Republic, SOCAR) har ingått en avtale som innebærer...",
  },
];

function SisteNytt() {
  return (
    <section className="my-16 p-3 gap-4 lg:p-4 overflow-visible grid grid-cols-2 ">
      <div className=" flex justify-between items-center w-full ">
        {/* Header */}
        <h2 className="text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight ">
          <AnimatedLetters text="Siste nytt" />
        </h2>
      </div>

      <Link className="row-start-4 col-start-2 place-self-end" href={"/"}>
        <span className="underline underline-offset-4 text-lg">
          Se alle nyheter
        </span>
      </Link>

      <div className="w-full justify-center items-center overflow-visible flex col-span-2  ">
        {/* News card */}

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 gap-y-8 lg:grid-cols-3">
          {news_cards.map((newsCardProps, index) => (
            <NewsCard
              date={newsCardProps.date}
              title={newsCardProps.title}
              text={newsCardProps.text}
              className={`${
                index === news_cards.length - 1 ? "md:hidden" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SisteNytt;

// <Button text="Se alle nyheter" slug="/nyheter" />
