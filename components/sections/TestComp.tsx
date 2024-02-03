"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { register } from "module";
import Image from "next/image";
import ModelComponent from "../ui/ModelComponent";

gsap.registerPlugin(ScrollTrigger);

const TestComp = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
      const allPhotos = gsap.utils.toArray(".desktopPhoto");
      gsap.set(photos, { yPercent: 101 });

      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail: any, index: number) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index] as gsap.TweenTarget[], { yPercent: 0 })
          .set(allPhotos[index] as gsap.TweenTarget[], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="gallery justify-evenly relative flex">
      <div className="left basis-1/3">
        <div className="desktopContent m-auto">
          <ModelComponent title={"ww"} href={"ww"} slogan={"ww"} />
          <ModelComponent title={"ww"} href={"ww"} slogan={"ww"} />
          <ModelComponent title={"ww"} href={"ww"} slogan={"ww"} />
        </div>
      </div>

      <div className="right items-center h-screen justify-center w-full flex flex-col">
        <div className="desktopPhotos overflow-hidden relative aspect-square h-[20vw] w-[20vw]">
          <div className="desktopPhoto  absolute w-full h-[25rem] bg-emerald-800 ">
            <Image
              src={"/webp/renderBlueprintZoomedV2.webp"}
              alt="Bilde av modell 1"
              fill
              className="absolute object-cover "
            />
          </div>
          <div className="desktopPhoto absolute w-full h-[25rem] bg-amber-400 "></div>
          <div className="desktopPhoto absolute w-full h-[25rem] bg-lime-300 "></div>
          <div className="desktopPhoto absolute w-full h-[25rem] bg-teal-700 "></div>
        </div>
      </div>
    </div>
  );
};

export default TestComp;
