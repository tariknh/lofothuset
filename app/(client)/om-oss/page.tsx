import { AnimatedLetters } from "@/components/ui/Animations/AnimatedHero";
import Image from "next/image";
import ModellBestille from "@/components/modeller/ModellBestille";
import Button from "@/components/ui/LagButton";
import Link from "next/link";
import { promises as fs } from "fs";
const Omoss = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/Static/Folk.json",
    "utf8"
  );
  const team = JSON.parse(file);
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
      <section className="bg-white p-3 lg:px-16 text-6xl place-items-end h-[20vh] flex w-full ">
        <h1>Vårt Team</h1>
      </section>
      {/* <section className="grid relative grid-rows-6 h-[50vh] w-full">
        <Image
          className="absolute object-cover"
          fill
          src="/webp/coast.webp"
          alt={""}
        />
      </section> */}
      <section className="mb-16 p-3 lg:p-16 text-2xl gap-y-20 md:grid-cols-12 grid text-balance  bg-white h-fit">
        <h2
          data-scroll
          data-scroll-speed=".1"
          className="font-semibold text-2xl tracking-tight sm:col-start-2 md:col-start-1 md:text-4xl lg:text-5xl sm:text-3xl max-w-5xl text-balance col-span-full md:col-span-10  my-20"
        >
          Hos Lofothuset kombinerer vi moderne design med bærekraft for å skape
          unike boliger. <br />
          <br />{" "}
          <span className="font-light text-lg md:text-2xl lg:text-3xl">
            Vårt team er dedikert til kvalitet og komfort, og skaper ditt
            drømmehjem med miljøvennlige, effektive løsninger. Opplev friheten
            vårt boligkonsept tilbyr.
          </span>
        </h2>
        {/* <div className="flex sm:grid col-span-full grid-cols-4 flex-col gap-8">
          <Image
            data-scroll
            data-scroll-speed="0.2"
            height={700}
            width={700}
            src="/webp/snow1.webp"
            alt={""}
            className="col-span-1 col-start-2 object-cover"
          />
          <Image
            data-scroll
            data-scroll-speed="-0.01"
            height={800}
            width={800}
            src="/webp/uteNorsk.webp"
            alt={""}
            className="col-span-3 col-start-3 object-cover"
          />
          <Image
            data-scroll
            data-scroll-speed="0.2"
            height={1000}
            width={1000}
            src="/webp/produksjonV2.webp"
            alt={""}
            className="col-span-4 col-start-1 object-cover"
          />
        </div> */}
        <div className="grid sm:grid-cols-4 col-span-full min-h-[80vh]">
          <h2 className="text-balance col-span-3 md:col-span-2 text-3xl md:text-4xl mb-8">
            <AnimatedLetters text="VI REVOLUSJONERER BOLIGKONSEPTER FOR FREMTIDENS BOENDE" />
          </h2>
          <h2 className=" lg:text-2xl xl:col-span-1 col-span-full lg:col-span-2 sm:col-span-2 md:col-span-2 md:row-start-2 row-start-2 md:col-start-1 text-lg font-light mb-8">
            Lofothusets løsning tar i bruk innovativ design og smart teknologi
            for å skape kostnadseffektive og miljøvennlige boliger som ikke bare
            møter dagens boligbehov, men også tilpasser seg fremtidens livsstil.
          </h2>
          <h2 className="sm:col-span-2 xl:col-span-1 xl:col-start-3 lg:col-span-2 lg:col-start-3 lg:text-2xl  col-span-full  md:col-span-2 md:col-start-3 md:row-start-2 text-lg font-light">
            Hos Lofothuset er vi drevet av stadig innovasjon for å sikre at våre
            kunder får maksimalt ut av sine kompakte livsrom, samtidig som vi
            tilbyr boligeiere verktøyene og støtten de trenger for å
            optimalisere deres eiendommer. Vi bygger ikke bare boliger – vi
            skaper smarte, bærekraftige hjem for en ny generasjon.
          </h2>
        </div>
        <div className="col-span-full grid md:grid-cols-3 gap-12">
          <h2 className="text-3xl md:text-5xl col-span-full mb-8">
            MØT VÅRT TEAM
          </h2>
          {team.team.map((teamMember: any, index: number) => (
            <div key={index}>
              <div className="relative overflow-hidden flex gap-6 flex-col">
                <div className="relative w-full h-[60vh] md:h-[20vh] lg:h-[50vh] ">
                  <Image
                    className="object-cover"
                    fill
                    src={teamMember.image}
                    alt={teamMember.name}
                  />
                </div>
                <div className="flex flex-col">
                  <h2>{teamMember.name}</h2>

                  <h3 className="text-lg text-zinc-500">
                    {teamMember.position}
                  </h3>

                  <span className="text-sm mt-2">{teamMember.description}</span>

                  <div className="w-full h-[1px] my-4 bg-zinc-500"></div>

                  {teamMember.phone && (
                    <span className="text-sm">
                      <a href={`tel:${teamMember.phone}`}>
                        {teamMember.phone
                          .replace(/\D/g, "")
                          .replace(/(\d{3})(\d{2})(\d+)/, "$1 $2 $3")}
                      </a>
                    </span>
                  )}

                  <span className="text-sm">
                    <a href={`mailto:${teamMember.mail}`}>{teamMember.mail}</a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-full my-16 self-center content-center ">
          <section className="self-center sm:px-4 lg:px-16 flex flex-col sm:flex-row-reverse justify-center md:items-center gap-8">
            <div className="aspect-square relative w-full sm:max-w-[500px] ">
              <Image
                src="/webp/uteNorsk.webp"
                alt="Bestille"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center sm:items-start mr-20">
              <h3 className="uppercase sm:mb-2 text-lg">
                Oppfyll drømmene dine
              </h3>
              <h2 className="xsm-370:text-2xl sm:text-3xl lg:text-4xl text-xl font-medium mb-4 sm:max-w-72">
                Klar til å bestille din bolig ?{" "}
              </h2>
              <Link href={"/kontakt"}>
                <button
                  className={`w-3/5 sm:w-60 text-lg flex justify-between py-4 border-b-[1px] border-black items-center text-lagtext`}
                >
                  Kontakt Oss
                  <Image
                    width={28}
                    height={28}
                    src={"/arrow.svg"}
                    alt="Click Here"
                  />
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Omoss;
