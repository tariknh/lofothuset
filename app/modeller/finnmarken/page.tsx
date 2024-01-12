import ModellBestille from "@/components/modeller/ModellBestille";
import ModellFordeler from "@/components/modeller/ModellFordeler";
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
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
      <ModellHero />
      <ModellModeller />
      {/* <ModellVideo /> */}
      <ModellFordeler />
      <ModellBestille />
      <Hvordan />
      <Blog />
      <FAQ />
    </main>
  );
}

export default page;
