import Image from "next/image";
const Omoss = () => {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
      <section className="grid grid-rows-6 h-screen w-full">
        <Image
          className="absolute"
          objectFit="cover"
          fill
          src="/images/fjell.jpg"
          alt={""}
        />
        <h1 className="z-10 row-start-4 p-8 text-white text-6xl">Om Oss</h1>
      </section>
      <section className="text-2xl gap-20 grid text-balance sm:grid-cols-12 w-screen p-8  bg-white h-fit">
        <h2 className="sm:col-start-5 col-span-full md:col-span-6 md:col-start-5 my-20">
          Hos Lofothuset kombinerer vi moderne design med bærekraft for å skape
          unike boliger. <br />
          <br /> Vårt team er dedikert til kvalitet og komfort, og skaper ditt
          drømmehjem med miljøvennlige, effektive løsninger. Opplev friheten et
          mikrohus tilbyr.
        </h2>
        <div className="flex sm:grid col-span-full grid-cols-4 flex-col gap-8">
          <Image
            objectFit="cover"
            height={700}
            width={700}
            src="/images/fjell.jpg"
            alt={""}
            className="col-span-1 col-start-2"
          />
          <Image
            objectFit="cover"
            height={800}
            width={800}
            src="/images/fjell.jpg"
            alt={""}
            className="col-span-3 col-start-3"
          />
          <Image
            objectFit="cover"
            height={1000}
            width={1000}
            src="/images/fjell.jpg"
            alt={""}
            className="col-span-4 col-start-1"
          />
        </div>
        <div className="grid sm:grid-cols-4 col-span-full md:grid-rows-4">
          <h2 className="text-balance col-span-3 md:col-span-2 text-3xl md:text-5xl mb-8">
            VI REVOLUSJONERER MIKROBOLIGER FOR FREMTIDENS BOENDE
          </h2>
          <h2 className="col-span-full sm:col-span-2 md:col-span-1 md:row-start-3 row-start-2 sm:row-start-3 md:col-start-1 text-lg mb-8">
            Lofothusets løsning tar i bruk innovativ design og smart teknologi
            for å skape kostnadseffektive og miljøvennlige mikroboliger som ikke
            bare møter dagens boligbehov, men også tilpasser seg fremtidens
            livsstil.
          </h2>
          <h2 className="sm:col-span-2  col-span-full  md:col-span-1 md:col-start-3 md:row-start-3 row-start-3 text-lg">
            Hos Lofothuset er vi drevet av stadig innovasjon for å sikre at våre
            kunder får maksimalt ut av sine kompakte livsrom, samtidig som vi
            tilbyr boligeiere verktøyene og støtten de trenger for å
            optimalisere deres eiendommer. Vi bygger ikke bare boliger – vi
            skaper smarte, bærekraftige hjem for en ny generasjon.
          </h2>
        </div>
        <div className="col-span-full grid sm:grid-cols-3 gap-12">
          <h2 className="text-3xl md:text-5xl col-span-full mb-8">
            MØT VÅRT TEAM
          </h2>
          <div>
            <div className="relative flex gap-6 flex-col">
              <Image
                objectFit="cover"
                height={600}
                width={600}
                src="/images/team/harald.jpg"
                alt={""}
              />
              <div className="flex flex-col">
                <h2>Harald Kjeldaas</h2>
                <h3 className="text-lg text-zinc-500">Direktør</h3>
                <span className="text-sm mt-2">
                  Utdannelse fra BI Oslo innen forretningsjus. Har jobbet
                  innenfor bank, forsikring, eiendom og helse
                </span>
                <div className="w-full h-[1px] my-4 bg-zinc-500"></div>
                <span className="text-sm">
                  <a href="tel:+4712345678">+47 123 45 678</a>
                </span>
                <span className="text-sm">
                  <a href="mailto:harald@lofothuset.no">harald@lofothuset.no</a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex gap-6 flex-col">
              <Image
                objectFit="cover"
                height={600}
                width={600}
                src="/images/team/harald.jpg"
                alt={""}
              />
              <div className="flex flex-col">
                <h2>Harald Kjeldaas</h2>
                <h3 className="text-lg text-zinc-500">Direktør</h3>
                <span className="text-sm mt-2">
                  Utdannelse fra BI Oslo innen forretningsjus. Har jobbet
                  innenfor bank, forsikring, eiendom og helse
                </span>
                <div className="w-full h-[1px] my-4 bg-zinc-500"></div>
                <span className="text-sm">
                  <a href="tel:+4712345678">+47 123 45 678</a>
                </span>
                <span className="text-sm">
                  <a href="mailto:harald@lofothuset.no">harald@lofothuset.no</a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex gap-6 flex-col">
              <Image
                objectFit="cover"
                height={600}
                width={600}
                src="/images/team/harald.jpg"
                alt={""}
              />
              <div className="flex flex-col">
                <h2>Harald Kjeldaas</h2>
                <h3 className="text-lg text-zinc-500">Direktør</h3>
                <span className="text-sm mt-2">
                  Utdannelse fra BI Oslo innen forretningsjus. Har jobbet
                  innenfor bank, forsikring, eiendom og helse
                </span>
                <div className="w-full h-[1px] my-4 bg-zinc-500"></div>
                <span className="text-sm">
                  <a href="tel:+4712345678">+47 123 45 678</a>
                </span>
                <span className="text-sm">
                  <a href="mailto:harald@lofothuset.no">harald@lofothuset.no</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Omoss;
