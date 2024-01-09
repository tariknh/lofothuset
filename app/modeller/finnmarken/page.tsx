import ModellFordeler from "@/components/modeller/ModellFordeler";
import ModellHero from "@/components/modeller/ModellHero";
import ModellModeller from "@/components/modeller/ModellModeller";
import ModellVideo from "@/components/modeller/ModellVideo";
import Transition from "@/components/ui/Animations/Transition";
import React from "react";

function page() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
      <ModellHero />
      <ModellModeller />
      <ModellVideo />
      <ModellFordeler />
    </main>
  );
}

export default page;
