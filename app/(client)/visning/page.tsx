import { AnimatedLetters } from "@/components/ui/Animations/AnimatedHero";
import VisningNext from "@/components/visning/VisningNext";
import React from "react";

function page() {
  return (
    <main className="w-full flex justify-center items-center pb-20">
      <div className="max-w-[1000px] w-full flex min-h-screen flex-col justify-start items-center pt-20 px-2 sm:px-4 lg:px-16">
        <div className="w-full flex">
          <h2 className="pb-2 px-4 self-end text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter ">
            <AnimatedLetters center text="Visninger" />
          </h2>
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-8 w-full">
          <VisningNext
            featured
            title="Visning av Stamsundet Lodge"
            date="10 Februar klokken 14:00"
            location="Miljøparken, Forusbeen 337, 4051 Sola"
            image="/webp/render.webp"
          />
          <VisningNext
            title="Visning av Leknes Lodge"
            date="15 Mars 2024"
            location="Sandnes gatebakken 4"
            image="/webp/ute3.webp"
          />
          <VisningNext
            title="Visning av Eggum Lodge"
            date="15 Juli 2024"
            location="Sandnes gatebakken 4"
            image="/webp/uteNorsk.webp"
          />
        </div>
      </div>
    </main>
  );
}

export default page;
