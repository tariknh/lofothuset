import React from "react";
import Button from "@/components/ui/LagButton";
import Image from "next/image";
import { AnimatedLines } from "../ui/Animations/AnimatedHero";

function OmOss() {
  return (
    <section className="p-3 lg:p-4">
      <div>
        {/* Øvre om oss */}
        <div className="flex flex-col lg:flex-row justify-between md:mx-12 items-center text-center lg:text-left gap-16 mt-16">
          <h2 className="text-3xl md:text-3xl text-balance max-w-[726px] font-medium">
            Håndlagde mikrohus formet av kreativitet, håndverk og et stort fokus
            på detaljer.
          </h2>
          <h3 className="text-xl md:text-2xl max-w-[600px] text-balance font-light lg:text-end">
            Hos Lofoten A Group kombinerer vi moderne design med bærekraft for å
            skape unike boliger. Vårt team er dedikert til kvalitet og komfort,
            og skaper ditt drømmehjem med miljøvennlige, effektive løsninger.
            Opplev friheten våre mikrohus tilbyr.
          </h3>
        </div>
        {/* <div className="w-full flex justify-end mt-16">
          <Button text="Om oss" slug="/" />
        </div> */}
      </div>
      <div className="h-[75vh] flex justify-center items-center flex-col mt-16 ">
        {/* Nedre om oss QUOTE */}
        <div className="flex justify-center items-center relative">
          <h3 className="mb-2 text-sm text-gray-500">IDEALISER DIN DRØM</h3>
          <Image
            src={"/quote.svg"}
            alt={"quotation mark"}
            className="absolute -top-4 -left-16 xsm:-left-20 sm:-left-44 md:-left-60 lg:-left-72 2xl:-left-96 3xl:-left-[520px]"
            width={30}
            height={30}
          />
        </div>
        <h2 className="relative text-xl xsm:text-3xl xsm-370:text-2xl mb-4 md:my-6 sm:text-4xl md:text-5xl lg:text-6xl text-balance text-center font-light tracking-tighter max-w-[1200px]">
          <AnimatedLines
            center
            text="Lofoten A Group tilbyr mikrohus med moderne arkitektur, som muliggjør liv i drømmemiljøet ditt. Vår erfaring og gjennomtenkte løsninger skaper et ettertraktet boligkonsept."
          />
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="w-[116px] h-[116px] border rounded-full flex justify-center items-center">
            <div className="w-[96px] h-[96px] relative">
              <Image
                src={"/images/harald.png"}
                alt={"Bilde av daglig leder Harald Kjeldaas"}
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-normal">Harald Kjeldaas</h2>
            <h3 className="font-light">Daglig leder,</h3>
            <h3 className="font-light">Lofoten A Group</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OmOss;
