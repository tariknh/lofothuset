import { AnimatedLetters } from "../ui/Animations/AnimatedHero";
import { InputWithButton } from "../ui/InputWithButton";

function Footer() {
  return (
    <footer className="p-8 min-h-[50vh] md:items-start items-center grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 text-white bg-[#121212] gap-4 md:gap-0">
      <div className="col-start-1 col-span-2 row-start-1 flex flex-col gap-4 max-w-fit">
        <h2 className="text-white lg:text-2xl text-left">
          Lyst å lære mer om mikrohus?
        </h2>
        <h3 className="max-w-[50vw] lg:text-lg lg:max-w-[25vw] text-zinc-400">
          Meld deg på vårt nyhetsbrev og få tilsendt en gratis info om mikrohus.
        </h3>
        <InputWithButton />
      </div>
      <div className="text-zinc-300 md:col-start-4 md:row-start-1">
        <h2 className="text-xl text-white font-semibold">Info</h2>
        <h3>Nyheter</h3>
        <h3>Blogg</h3>
        <h3>Om Oss</h3>
      </div>
      <div className="text-zinc-300 md:col-start-5 md:row-start-1">
        <h2 className="text-xl text-white font-semibold">Kontakt</h2>
        <h3>hei@lofothuset.no</h3>
        <h3>+47 123 45 678</h3>
      </div>
      <div className="col-span-full tracking-tighter md:row-start-3 text-6xl sm:text-8xl md:text-[8rem] lg:text-[12rem] opacity-50 font-bold text-center">
        <AnimatedLetters center text="lofothuset" />
      </div>
      <div className="border-t-4 col-span-full row-start-4 w-full border-zinc-500"></div>

      <div className="flex col-span-full md:mt-5 row-start-5 w-full justify-evenly sm:justify-end sm:gap-5">
        <span className="underline">Bruksvilkår</span>
        <span className="underline">Personvern</span>
        <span className="text-zinc-400">
          Laget av <span className="text-white underline">Jort</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;