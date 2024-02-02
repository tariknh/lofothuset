import ModellBestille from "@/components/modeller/ModellBestille";
import ModellFordeler from "@/components/modeller/ModellFordeler";
import ModellFordelerV2 from "@/components/modeller/ModellFordelerV2";
import ModellHero from "@/components/modeller/ModellHero";
import ModellModeller from "@/components/modeller/ModellModeller";
import ModellVideo from "@/components/modeller/ModellVideo";
import Blog from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import Hvordan from "@/components/sections/Hvordan";
import Transition from "@/components/ui/Animations/Transition";
import React from "react";

const modellerList = [
  {
    id: "stamsund-lodge",
    name: "Stamsund Lodge",
    description:
      "Stamsund Lodge er et bærekraftig og moderne boalternativ som gir energieffektive løsninger for alle livsstiler. Inspirert av Lofotens naturlige skjønnhet, er denne modellen perfekt for par eller små familier som verdsetter miljøet og en minimalistisk livsstil.",
    opptil: "3",
    soverom: "1",
    bygningsareal: "37",
    rom: "3",
    bad: "1",
    leveringstid: "2-4 Måneder",
    inngangsparti: "1",
    video: "/husVideo.mp4",
    images: [
      {
        src: "/webp/ute1.webp",
        text: "Forside med inngangsparti",
      },
      {
        src: "/webp/ute3.webp",
        text: "Side uten vindu",
      },
      {
        src: "/webp/ute4.webp",
        text: "Side med vindu",
      },
      {
        src: "/webp/ute5.webp",
        text: "Bakside skrått",
      },
      {
        src: "/webp/ute15.webp",
        text: "Bakside",
      },
      {
        src: "/webp/ute13.webp",
        text: "Bakside med vannrør",
      },
      {
        src: "/webp/ute14.webp",
        text: "Bakside med elektrisk anlegg",
      },
      {
        src: "/webp/inside1.webp",
        text: "Soveroms vindu",
      },
      {
        src: "/webp/inside2.webp",
        text: "Framside vindu",
      },
      {
        src: "/webp/inside3.webp",
        text: "Bakside skrått",
      },
    ],
  },
];

function page({ params }: { params: { modeller: string } }) {
  const model = modellerList.find((model) => model.id === params.modeller);

  if (!model) {
    return <div>Modell ikke funnet</div>;
  }

  return (
    <main className="w-full flex min-h-screen flex-col justify-start items-center">
      <ModellHero
        title={model.name}
        users={model.opptil}
        description={model.description}
        soverom={model.soverom}
        bygningsareal={model.bygningsareal}
        rom={model.rom}
        bad={model.bad}
        leveringstid={model.leveringstid}
        inngangsparti={model.inngangsparti}
      />
      <ModellModeller images={model.images} video={model.video} />

      <ModellFordelerV2 />

      <ModellBestille className="p-3 lg:p-4 mb-16 lg:mb-0 mt-32" />

      <Hvordan />

      <FAQ />
    </main>
  );
}

export default page;
