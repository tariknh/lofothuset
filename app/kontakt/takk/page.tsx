"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

function Page() {
  useEffect(() => {
    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      // Using default shapes
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        // Using default scalar and shapes
      });
    }

    // Shoot confetti at different intervals
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }, []);
  return (
    <div className="w-full min-h-[100vh] p-8 flex justify-center items-center ">
      {/* Main */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 max-w-6xl">
        <div className="flex flex-col gap-8 lg:order-1 order-2">
          <h1 className="lg:text-7xl md:text-6xl text-4xl xl:text-8xl">
            Takk for din interesse!
          </h1>
          <h3 className="text-xl font-bold">Her er hva som vil skje videre:</h3>
          <div className="flex justify-start items-center gap-4">
            <Image
              className="shrink-0"
              width={32}
              height={32}
              src={"/one.svg"}
              alt="Check"
            />
            <p className="text-xl">
              En av våre mikrohuseksperter vil snart kontakte deg for å avtale
              en visning eller svare på spørsmål du måtte ha. Vi ser frem til å
              hjelpe deg på veien mot ditt nye hjem!
            </p>
          </div>

          <p className="text-xl font-bold">
            Du er et skritt nærmere ditt drømme mikrohus. Hold et øye med
            innboksen din!
          </p>
        </div>
        <div className="lg:order-2 order-1 flex justify-center items-center">
          <Image
            className=""
            width={600}
            height={600}
            src={"/success.svg"}
            alt="Success"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
