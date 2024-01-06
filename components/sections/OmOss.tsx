import React from "react";
import Button from "@/components/ui/LagButton";

function OmOss() {
  return (
    <section className="my-16 p-8 lg:p-16">
      <div>
        {/* Øvre om oss */}
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center text-center lg:text-left gap-16">
          <h2 className="text-2xl md:text-3xl text-balance max-w-[726px] font-light">
            Håndlagde mikrohus formet av kreativitet, håndverk og et stort fokus
            på detaljer.
          </h2>
          <h3 className="text-xl md:text-2xl max-w-[600px] text-balance font-light">
            Hos Lofoten A Group kombinerer vi moderne design med bærekraft for å
            skape unike boliger. Vårt team er dedikert til kvalitet og komfort,
            og skaper ditt drømmehjem med miljøvennlige, effektive løsninger.
            Opplev friheten våre mikrohus tilbyr.
          </h3>
        </div>
        <div className="w-full flex justify-end mt-16">
          <Button text="Om oss" slug="/" />
        </div>
      </div>
      <div className="border-t-[1px] border-[#121212] my-16 flex justify-center items-center">
        {/* Nedre om oss QUOTE */}
        <h2 className="mt-32 text-3xl md:text-4xl lg:text-5xl text-balance text-center font-light">
          Bærekraftig og Stilig. Velkommen Hjem
        </h2>
      </div>
    </section>
  );
}

export default OmOss;
