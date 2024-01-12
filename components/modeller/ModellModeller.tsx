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
