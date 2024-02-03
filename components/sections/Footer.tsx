import Link from "next/link";
import { AnimatedLetters } from "../ui/Animations/AnimatedHero";
import { InputWithButton } from "../ui/InputWithButton";
import Image from "next/image";

function Footer() {
  return (
    <footer className="p-3 sm:p-8 min-h-[50vh] md:items-start items-center grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 text-white bg-[#121212] gap-4 md:gap-0">
      <div className="col-start-1 col-span-2 row-start-1 flex flex-col gap-4 max-w-fit">
        <h2 className="text-white lg:text-2xl text-left">
          Lyst å lære mer om vårt boligkonsept?
        </h2>
        <h3 className="max-w-[50vw] lg:text-lg lg:max-w-[25vw] text-zinc-400 w-fit">
          <Link
            target="_blank"
            href={"https://www.facebook.com/groups/1512424325918333"}
          >
            <Image
              src={"/facebook.svg"}
              alt="Facebook Logo"
              width={50}
              height={50}
              className="hover:scale-110 transition "
            />
          </Link>
        </h3>
        {/* <InputWithButton /> */}
      </div>
      <div className="text-zinc-300 md:col-start-4 md:row-start-1">
        <h2 className="text-xl text-white font-semibold">Info</h2>
        <h3 className="hover:underline">
          <Link href={"#modeller"}>Våre Modeller</Link>
        </h3>
        <h3 className="hover:underline">
          <Link href={"/om-oss"}>Om Oss</Link>
        </h3>
        <h3 className="hover:underline">
          <Link href={"/kontakt"}>Kontaktskjema</Link>
        </h3>
      </div>
      <div className="text-zinc-300 md:col-start-5 md:row-start-1">
        <h2 className="text-xl text-white font-semibold">Kontakt</h2>
        <h3 className="hover:underline">
          <Link href={"mailto:kontakt@lofothuset.no"}>
            kontakt@lofothuset.no
          </Link>
        </h3>
        <h3 className="hover:underline">
          <Link href={"tel:+4797586958"}>+47 975 86 958</Link>
        </h3>
      </div>
      <div className="col-span-full tracking-tighter md:row-start-3 text-6xl sm:text-8xl md:text-[8rem] lg:text-[12rem] opacity-50 font-bold text-center">
        <AnimatedLetters singleWord center text="lofothuset" />
        <div className="border-t-4 col-span-full row-start-4 w-full border-zinc-500"></div>
      </div>

      <div className="flex-wrap sm:flex-row flex col-span-full md:mt-5 row-start-4 w-full justify-evenly sm:justify-between sm:gap-5">
        <div>
          <span className="text-zinc-400">
            Lofoten A Group AS. Org nr 930 035 688
          </span>
        </div>
        <div className="justify-evenly gap-3 sm:gap-5 flex">
          {/* <span className="underline">Bruksvilkår</span>
          <span className="underline">Personvern</span> */}
          <span className="text-zinc-400">
            Laget av{" "}
            <span className="text-white underline">
              <Link href={"https://www.jort.no/"}>jort</Link>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
