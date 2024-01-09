import Image from "next/image";
import React from "react";

function ModellFordeler() {
  return (
    <section className="flex flex-col h-screen px-2 sm:px-4 mt-20 lg:px-16">
      <div className="flex flex-col justify-center items-center">
        <h4>Fordeler</h4>
        <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium mb-4">
          Inkludert i alle mikrohus
        </h2>
        <h3 className="text-center mb-2 xsm-370:text-lg sm:text-xl lg:text-2xl max-w-[700px]">
          Uavhengig av modellen du velger, er alle disse funksjonene inkludert i
          grunnprisen for våre mikrohus.
        </h3>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center border-[1px] border-lagText p-4">
          <Image src="/floor.svg" alt="" width={50} height={50} />
          <p>Energy Net Zero</p>
        </div>
      </div>
    </section>
  );
}

export default ModellFordeler;
