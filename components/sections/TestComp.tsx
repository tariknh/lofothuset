"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { register } from "module";
import Image from "next/image";
import ModelComponent from "../ui/ModelComponent";
import info from "@/public/Static/Modeller.json";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";

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
    <section>
      <div className="flex flex-col md:flex-row justify-between ">
        <h2 className="text-[clamp(36px,11vw,42px)] md:text-[clamp(52px,13.3vw,60px)] tracking-tight p-3 lg:p-4">
          <AnimatedLetters text="Våre modeller" />
        </h2>
      </div>
      <div
        ref={container}
        id="modeller"
        className="gallery justify-evenly relative flex"
      >
        <div className="left basis-1/3">
          <div className="desktopContent m-auto">
            <ModelComponent
              title={"Stamsund Lodge"}
              href={"/modeller/stamsund-lodge"}
              slogan={"Boligens Hjerte"}
              image={info[0].heroImage}
            />
            <ModelComponent
              title={"Reine Lodge"}
              href={"/modeller/reine-lodge"}
              slogan={"Boligens Hjerte"}
              image={info[1].heroImage}
            />
            <ModelComponent
              title={"Leknes Lodge"}
              href={"/modeller/leknes-lodge"}
              slogan={"Boligens Hjerte"}
              image={info[2].heroImage}
            />
            <ModelComponent
              title={"Nusfjord Lodge"}
              href={"/modeller/nusfjord-lodge"}
              slogan={"Boligens Hjerte"}
              image={info[3].heroImage}
            />
          </div>
        </div>

        <div className="right items-center h-screen justify-center w-full flex flex-col">
          <div className="desktopPhotos overflow-hidden relative aspect-square h-[50vw] w-[50vw] sm:h-[20vw] sm:w-[20vw]">
            {/* {info.map((item, index) => {
            return (
              <div
                key={index}
                className="desktopPhoto  absolute w-full h-[25rem] bg-emerald-800 "
              >
                <Image
                  src={"/webp/renderBlueprintZoomedV2.webp"}
                  alt="Bilde av modell 1"
                  fill
                  className="absolute object-cover "
                />
              </div>
            );
          })} */}
            <div className="desktopPhoto  absolute w-full h-full bg-emerald-800 ">
              <Image
                src={"/webp/renderBlueprintZoomedV2.webp"}
                alt="Bilde av modell 1"
                fill
                className="absolute object-cover "
              />
            </div>
            <div className="desktopPhoto  absolute w-full h-full bg-emerald-800 ">
              <Image
                src={"/webp/f3.webp"}
                alt="Bilde av modell 1"
                fill
                className="absolute object-cover "
              />
            </div>
            <div className="desktopPhoto  absolute w-full h-full bg-emerald-800 ">
              <Image
                src={"/webp/h1.webp"}
                alt="Bilde av modell 1"
                fill
                className="absolute object-cover "
              />
            </div>
            <div className="desktopPhoto  absolute w-full h-full bg-emerald-800 ">
              <Image
                src={"/webp/q3.webp"}
                alt="Bilde av modell 1"
                fill
                className="absolute object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestComp;
