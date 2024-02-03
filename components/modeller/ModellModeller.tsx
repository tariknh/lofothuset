"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ModellModell from "./ModellModell";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const classNames = [
  "mb-16",
  "col-start-2 mb-16 xl:col-start-3",
  "col-start-1 col-span-4 mb-16 xl:col-start-2",
  "col-start-2 mb-16 xl:col-start-1",
  "col-start-1 mb-16 xl:col-start-3",
];
const speeds = ["0.3", "-0.1", "0.3", "0.2"];

type ImageObject = {
  src: string;
  text: string;
};

interface Props {
  images: ImageObject[];
  video?: string;
}

function ModellModeller({ images, video }: Props) {
  return (
    <section className="w-full grid grid-cols-5 p-2 lg:p-16">
      {video && (
        <video
          className="w-full col-span-5 mb-16"
          preload="true"
          muted
          autoPlay
          controls
        >
          <source src={video} />
        </video>
      )}

      {images.map((image, index) => (
        <ModellModell
          key={index}
          image={image.src}
          className={classNames[index % classNames.length]}
          text={image.text}
          speed={speeds[index % classNames.length]}
        />
      ))}
    </section>
  );
}

export default ModellModeller;
