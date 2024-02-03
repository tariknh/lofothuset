import Image from "next/image";
import React from "react";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";

function Kampanje() {
  return (
    <section className="mt-32 h-screen sm:mt-64 p-6 lg:p-4 grid  w-full justify-center justify-items-center items-center gap-12">
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl  font-medium">
          <AnimatedLetters
            center
            text="Vi spanderer tur til tyrkia for 2 personer!"
          />
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-[900px] ">
          Kampanjen gjelder ved kjøp av et av våre husmodeller. Kunden kjøper
          selv flybiletter og hotellopphold og skal ikke overstige totalt 20.000
          kr. Utlegg blir trukket fra kjøpesummen ved inngått kontrakt.
          Kampanjen gjelder frem til 31.mai 2024
        </p>
        <Image
          src="/airplane.png"
          alt="
Image by Ovidiu Timplaru"
          width={800}
          height={800}
          className=""
        />
      </div>
    </section>
  );
}

export default Kampanje;
