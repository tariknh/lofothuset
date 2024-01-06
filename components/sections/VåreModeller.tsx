import React from "react";
import Button from "../ui/LagButton";
import Image from "next/image";

function VåreModeller() {
  return (
    <section className="mx-8 my-16 lg:m-16">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Våre modeller</h2>{" "}
        <Button text="Se modeller" slug="/modeller" />
      </div>
      <div>
        {/* Modeller */}
        <div className="flex flex-col my-16">
          <div className="aspect-[16/12] w-full relative h-full">
            <Image
              src={"/modell1.png"}
              alt="Bilde av modell 1"
              fill
              objectFit="cover"
              className="absolute rounded-lg"
            />
          </div>
          <h3 className="font-light mt-2 md:text-lg lg:text-xl">
            Villa Serenity by the Snow
          </h3>
        </div>
      </div>
    </section>
  );
}

export default VåreModeller;
