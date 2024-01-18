"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ModellModell from "./ModellModell";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function ModellModeller() {
  // Video scaling below
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0.5 1", "1 1"], // Adjust the offset to when you want the scaling to start and end
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className="w-full grid grid-cols-5 p-2 lg:p-16">
      <ModellModell
        image="/modell/unedited/ute1.jpg"
        className="mb-16"
        text="Forside med inngangsparti"
      />
      <ModellModell
        image="/modell/unedited/ute3.jpg"
        className="col-start-2 mb-16 xl:col-start-3"
        speed="0.3"
        text="Side uten vindu"
      />
      <ModellModell
        image="/modell/unedited/ute4.jpg"
        className="col-start-1 col-span-4 mb-16 xl:col-start-2"
        speed="-0.1"
        text="Side med vindu"
      />
      <ModellModell
        image="/modell/unedited/ute5.jpg"
        className="col-start-2 mb-16 xl:col-start-1"
        speed="0.3"
        text="Bakside skrått"
      />
      <ModellModell
        image="/modell/unedited/ute15.jpg"
        className="col-start-1 mb-16 xl:col-start-3"
        speed="0.2"
        text="Bakside"
      />
      <ModellModell
        image="/modell/unedited/ute13.jpg"
        className="mb-16 col-start-2 xl:col-start-1"
        speed="0.3"
        text="Bakside med vannrør"
      />
      <ModellModell
        image="/modell/unedited/ute14.jpg"
        className="col-start-1 mb-16 xl:col-start-3"
        speed="-0.1"
        text="Bakside med elektrisk anlegg"
      />
      <ModellModell
        image="/modell/inside1.jpg"
        className="col-start-2 col-span-4 mb-16 xl:col-start-2"
        speed="0.3"
        text="Stue vindu"
      />
      <ModellModell
        image="/modell/inside2.jpg"
        className="col-start-1 mb-16 xl:col-start-4"
        speed="0.2"
        text="Fremmside vindu"
      />
      <ModellModell
        image="/modell/inside3.jpg"
        className="col-start-2 mb-16 xl:col-start-3"
        speed="-0.1"
        text="Rom 1"
      />
      <ModellModell
        image="/modell/insideB1.jpg"
        className="mb-16 col-start-1 xl:col-start-1"
        speed="0.2"
        text="Bad"
      />
      <ModellModell
        image="/modell/insideB2.jpg"
        className="col-start-2 mb-16 xl:col-start-3"
        speed="0.3"
        text="Bad"
      />

      <ModellModell
        image="/modell/insideK2.jpg"
        className="col-start-1 col-span-4 mb-16 xl:col-start-2"
        speed="-0.1"
        text="Kjøkken"
      />
      <ModellModell
        image="/modell/renderBlueprintZoomedV2.png"
        className="col-start-2 mb-16 xl:col-start-1"
        speed="0.2"
        text="Mikrohuset 3d modell"
      />
      <ModellModell
        image="/modell/renderBlueprintMicrohouse.png"
        className="col-start-1 mb-16 xl:col-start-3"
        speed="0.3"
        text="Tegninger av mikrohuset"
      />
      {/* Video Goes here when done */}
      {/* <div
        data-scroll
        data-scroll-speed={"0.2"}
        className={`col-span-4 w-full h-full col-start-1 mb-16 `}
      >
        <motion.div
          ref={ref}
          style={{ scale }}
          className="aspect-square relative"
        >
          <Image
            src={"/modell/ute4.png"}
            alt={""}
            fill
            className="object-cover"
          />
        </motion.div>
        <h2 className="mt-2 text-sm xsm:text-base sm:text-lg md:text-xl lg:text-2xl">
          Video av Finnmarken 1
        </h2>
      </div> */}
    </section>
  );
}

export default ModellModeller;
