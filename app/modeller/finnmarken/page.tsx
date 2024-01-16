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

function page() {
  return (
    <main className="w-full flex min-h-screen flex-col justify-start items-center">
      <ModellHero />
      <ModellModeller />
      {/* <ModellVideo /> */}

      <ModellFordelerV2 />

      <ModellBestille className="p-3 lg:p-4" />

      <Hvordan />
      <Blog />
      <FAQ />
    </main>
  );
}

export default page;
