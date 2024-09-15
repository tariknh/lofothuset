import ModellBestille from "@/components/modeller/ModellBestille";
import ModellFordelerV2 from "@/components/modeller/ModellFordelerV2";
import ModellHero from "@/components/modeller/ModellHero";
import ModellModeller from "@/components/modeller/ModellModeller";
import Hvordan from "@/components/sections/Hvordan";
import modellerList from "@/public/Static/Modeller.json";

function page({ params }: { params: { modeller: string } }) {
  const model = modellerList.find((model) => model.id === params.modeller);

  if (!model) {
    return <div className="h-screen bg-red-200">Modell ikke funnet</div>;
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
        heroImage={model.heroImage}
      />
      <ModellModeller images={model.images} video={model.video} />

      <ModellFordelerV2 />

      <ModellBestille className="p-3 lg:p-4 mb-16 lg:mb-0 mt-32" />

      <Hvordan />

      {/* <FAQ /> Issue with loading page */}
    </main>
  );
}

export default page;
