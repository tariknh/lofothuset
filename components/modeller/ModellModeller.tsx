"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ModellModell from "./ModellModell";

function ModellModeller() {
  return (
    <section className="w-full grid grid-cols-5  p-2 lg:p-16">
      <ModellModell
        image="/modell/ute1.png"
        alt="Finnmarken 1"
        className="mb-16"
      />
      <ModellModell
        image="/modell/ute2.png"
        alt="Finnmarken 1"
        className="col-start-2 mb-16 xl:col-start-3"
        speed="0.3"
      />
      <ModellModell
        image="/modell/ute3.png"
        alt="Finnmarken 1"
        className="col-start-1 col-span-4 mb-16 xl:col-start-2"
        speed="-0.1"
      />
      <ModellModell
        image="/modell/ute3.png"
        alt="Finnmarken 1"
        className="col-start-2 mb-16 xl:col-start-1"
        speed="0.3"
      />
      <ModellModell
        image="/modell/ute3.png"
        alt="Finnmarken 1"
        className="col-start-1 mb-16 xl:col-start-3"
        speed="0.2"
      />
    </section>
  );
}

export default ModellModeller;
