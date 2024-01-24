import Image from "next/image";
import React from "react";
import ModellFordelBoks from "./ModellFordelBoks";

function ModellFordeler() {
  return (
    <section className="flex w-full flex-col justify-center items-center px-2 sm:px-4 mt-20 lg:px-16 bg-[#303843] text-white mb-40">
      <div className="flex flex-col justify-center items-center mb-4 xsm-370:text-lg sm:text-xl lg:text-2xl mt-20">
        <h4 className="text-zinc-300">Fordeler</h4>
        <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium mb-4">
          Inkludert i alle boliger
        </h2>
        <h3 className="text-center mb-2 xsm-370:text-lg sm:text-xl lg:text-2xl max-w-[700px] text-lagMuted">
          Uavhengig av modellen du velger, er alle disse funksjonene inkludert i
          grunnprisen for våre boliger.
        </h3>
      </div>
      <div className="grid grid-cols-2 pb-36 w-full max-w-[1200px] ">
        <ModellFordelBoks
          image="/floor.svg"
          text="Elektrisitet"
          alt=""
          className="border-r-0"
        />
        <ModellFordelBoks image="/floor.svg" text="Aircondition" alt="" />
        <ModellFordelBoks
          className="border-r-0 border-t-0 border-b-0"
          image="/floor.svg"
          text="Varmesystem"
          alt=""
        />
        <ModellFordelBoks
          className="border-t-0 border-b-0"
          image="/floor.svg"
          text="Varmepumpe"
          alt=""
        />
        <ModellFordelBoks
          className="border-r-0"
          image="/floor.svg"
          text="Ventilasjon"
          alt=""
        />
        <ModellFordelBoks image="/floor.svg" text="Vann System" alt="" />
      </div>
    </section>
  );
}

export default ModellFordeler;
