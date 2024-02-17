import React from "react";

type itemProps = {
  title: string;
  list: string[];
};

function page() {
  const Item = ({ title, list }: itemProps) => {
    return (
      <div className="flex flex-col justify-start items-start w-full">
        <h2 className="text-3xl mb-3 text-zinc-600">{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index} className="text-lg mb-2 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-start">
      <div className="p-8 mt-16 gap-8 lg:p-16 w-full h-full flex flex-col items-center max-w-[1200px]">
        <h1 className="text-5xl pb-4 border-b-2 w-full text-center">
          Tekniske detaljer
        </h1>
        <Item
          title={"Tekniske detaljer"}
          list={[
            "Samtlige materialer benyttet i oppbyggingen av småhusene er av tyrkisk opprinnelse.",
          ]}
        />
        <Item
          title={"Produktteknologi"}
          list={[
            "Montering: Veggelementer, takstoler, takplater og bjelker konstrueres ved hjelp av avansert sveiseteknikk",
          ]}
        />
        <Item
          title={"Statistikk og Beregninger"}
          list={[
            "Overholdelse: Fullt i tråd med tyrkiske og/eller internasjonale standarder som nevnt i dokumentet. Byggets egnethet for sitt formål samt nødvendige seismiske og statiske beregninger for regionen det er lokalisert i, utføres med programvare som Sap2000, CFS, STA4CAD, BRICSCAD og HAYESCAD, basert på belastningsverdier og standarder definert i prosjektene.",
          ]}
        />

        <h2 className="text-4xl pb-4 my-4 text-start border-b-2 w-full">
          Tekniske Data
        </h2>
        <Item
          title={"Belastninger og Kapasiteter"}
          list={[
            "Snøbelastning: 80 kg/m² (TS 498) - varierer etter snømengde og byggets høyde.",
            "Vindhastighet: 102 km/t (50 kg/m²) TS 498.",
            "Middels lastekapasitet: Kan være 200/350/500 Kg/m² avhengig av formålet og bruken av bygget (T.S 498).",
            "Seismisk Design: Effektiv bakkeakselerasjonskoeffisient: Ao=0,45 (1. grads seismisk sone). Bygge betydningskoeffisient (I=1). Jordskjelvberegning: Live Load-deltakelseskoeffisient (n=0,3) varierer etter byggets formål og type (I=1 /1,2/1,4/1,5n=0,3 /0,6).",
          ]}
        />
        <Item
          title={"Isolasjon"}
          list={[
            "Varmeisolering: I henhold til termisk isolasjonsforskrift (8.05.2000).",
            "Lydisolering: TS 187 og TS 854 (DIN 4109).",
          ]}
        />
        <h2 className="text-4xl pb-4 my-4 w-full text-start border-b-2 ">
          Bygningsdetaljer
        </h2>
        <Item
          title={"Yttervegger"}
          list={[
            "Tykkelse: 150 mm.",
            "Høyde: 3500 mm.",
            "Utvendig kledning: Tre, spesialplate (150 mm), og aluminiumskompositt.",
            "Isolasjon: 100 mm tykk steinull (Knauf Company) med fuktsperre.",
            "Innvendig kledning: Gips og tapet.",
            "Alternativer: Tre, tilpasset etter kundens ønske.",
          ]}
        />
        <Item
          title={"Innvendige Vegger"}
          list={[
            "Tykkelse: 60 mm/70 mm.",
            "Høyde: 2800 mm.",
            "Innvendig kledning: Gips og tapet.",
            "Isolasjon: 40 mm tykk steinull (Knauf Company).",
            "Alternativer: Tre, tilpasset etter kundens ønske. Merk: Innvendige veggprofiler er 30401,5 mm (antirust), og total veggtykkelse etter gipsbelegg er 60/70 mm.",
          ]}
        />
        <Item
          title={"Tak"}
          list={[
            "Kledning: Tørr/våt sone med gips og tapet. Isolasjon: 20 cm tykk glassull. Undertak kan tilpasses etter kundens ønsker.",
            "Høyde: 2800 mm.",
            "Tak: Avsluttes med SANDWICH PANEL takmateriale på spesialdesignet stålprofiltakstoler. Takpaneler: Tilpasset stålprofildimensjon 3040/4020 mm. Bæresystem: Spesialformet stålprofiler, forsterket med sveising.",
          ]}
        />
        <Item
          title={"Gulv"}
          list={[
            "Materialer: Gulvchassis konstruert av 40202 mm antirustprofiler med sveisesystem. Overflate: 14 mm tykk fibersement festet til chassiset. Gulvisolasjon: 10 mm xps. Gulvbelegg: 8 mm laminatgulv (AGT Company).",
          ]}
        />
        <Item
          title={"Dører og Vinduer"}
          list={[
            "Innvendige dører: 800*1980 mm, melamin eller lakkert tre med sylindrisk lås og metallhåndtak.",
            "Vinduer: 71 PVC-vinduer (ADOPEN Selskap) med fargevalg av antrasitt, tre eller hvit. Vindusglass: 4+11+4 mm 3-lags varmeglass, baderomsvinduer med 4 mm frostet glass.",
          ]}
        />

        <Item
          title={"Kjøkken og Bad"}
          list={[
            "Kjøkkenmøbler: Hvitlakkerte skap (Landsdesign) med heltre benkeplate. Varmesystem inkluderer varmekabler og mulighet for veggmontert aircondition i stuen.",
            "Bad: Tak og veggkledning med grønt gipsplatebelegg på 30401,5 mm profiler. Keramikkfliser på veggene (3060) og gulv (4040/50*50). Møbler og vask i lakkert utførelse med keramikkvask. Ventilasjon via vinduer.",
          ]}
        />
        <Item
          title={"Tekniske Systemer"}
          list={[
            "Varmtvann: Øyeblikkelig varmtvannsbereder med justerbar temperatur (20°C - 60°C).",
            "Elektrisk installasjon: Fullført med punktbelysning, stikkontakter (3x2,5 mm² NYM og NYA), og belysningskabler (2x1,5 mm² NYM og NY).",
            "Sanitær installasjon: Inkluderer oppvaskkum, skap, lakkerte møbler med keramikkvask, og toalett med keramisk sisterne. Rørsystemer av høykvalitets uknuselig PVC.",
          ]}
        />
        <Item
          title={"Tilpasningsmuligheter"}
          list={[
            "Materielle endringer og tilpasninger kan gjøres etter kundens forespørsel for å møte spesifikke behov og preferanser.",
          ]}
        />
      </div>
    </div>
  );
}

export default page;
