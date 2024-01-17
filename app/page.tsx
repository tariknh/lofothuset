import Blog from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Fordeler from "@/components/sections/Fordeler";
import FordelerV2 from "@/components/sections/FordelerV2";
import Hero from "@/components/sections/Hero";
import Hvordan from "@/components/sections/Hvordan";
import OmOss from "@/components/sections/OmOss";
import SisteNytt from "@/components/sections/SisteNytt";
import VåreModeller from "@/components/sections/VåreModeller";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-left justify-start">
      <Hero />
      <OmOss />
      <SisteNytt />
      <VåreModeller />
      <FordelerV2 />
      <Hvordan />
      <FAQ />
    </main>
  );
}

{
  /* <main className="w-full flex min-h-screen flex-col items-left justify-start">
      <Hero />
      <OmOss />
      <SisteNytt />
      <VåreModeller />
      <FordelerV2 />
      <Hvordan />
      <Blog />
      <FAQ />
    </main> */
}
