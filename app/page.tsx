import Fordeler from "@/components/sections/Fordeler";
import Hero from "@/components/sections/Hero";
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
      <Fordeler />
      <VåreModeller />
    </main>
  );
}
