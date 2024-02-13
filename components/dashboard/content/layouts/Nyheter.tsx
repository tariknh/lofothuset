"use client";
import Plus from "@/public/svg/plus";
import { useState } from "react";
import ContentHeader from "../parts/ContentHeader";
import ContentTable from "../parts/ContentTable";
import { set } from "zod";
import ArrowLeft from "@/public/svg/arrowLeft";
import Check from "@/public/svg/check";

const fakeData = [
  {
    title: "Nyhets tittel",
    published: "2021-10-10",
    status: "Publisert",
  },
  {
    title: "Nyhets tittel",
    published: "2021-10-10",
    status: "Publisert",
  },
  {
    title: "Nyhets tittel",
    published: "2021-10-10",
    status: "Publisert",
  },
  {
    title: "Nyhets tittel",
    published: "2021-10-10",
    status: "Publisert",
  },
  {
    title: "Nyhets tittel",
    published: "2021-10-10",
    status: "Publisert",
  },
];

function Nyheter() {
  const [active, setActive] = useState("oversikt");
  return (
    <section className="flex flex-col border w-full h-full p-4 rounded-lg gap-8">
      {active === "oversikt" && (
        <>
          <ContentHeader
            title={"Nyhets panelet"}
            buttonText={"Lag en nyhet"}
            buttonFunction={() => setActive("nyhet")}
            buttonSvg={<Plus />}
          />
          <ContentTable
            cols={["Tittel", "Publisert", "Status", "", "", ""]}
            data={fakeData}
          />
        </>
      )}

      {active === "nyhet" && (
        <>
          <div className="flex justify-between items-center w-full ">
            <h2
              onClick={() => setActive("oversikt")}
              className="text-xl cursor-pointer font-bold flex justify-center gap-2 items-center pb-2 text-[#6200ee]"
            >
              <ArrowLeft />
              Tilbake
            </h2>

            <button className="flex justify-center items-center border font-medium text-[#6200ee] border-[#6200ee] p-3 gap-3 rounded-lg">
              <p>Publiser</p>
              <Check />
            </button>
          </div>
          <form className="flex flex-col gap-6" action="">
            <div>
              <label htmlFor="bilde" className="uppercase font-bold">
                Bilde
              </label>
              <input
                name="bilde"
                id="bilde"
                type="file"
                placeholder="bilde"
                className="w-full p-4 border rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="tittel" className="uppercase font-bold">
                Tittel
              </label>
              <input
                name="tittel"
                id="tittel"
                type="text"
                placeholder="Tittel"
                className="w-full p-4 border rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="beskrivelse" className="uppercase font-bold">
                Beskrivelse
              </label>
              <textarea
                id="beskrivelse"
                placeholder="Beskrivelse"
                className="w-full h-52 p-4 border rounded-lg mt-2"
              ></textarea>
            </div>
            {/* <div className="flex">
              <div>
                <label htmlFor="publiser" className="uppercase font-bold">
                  Publiser
                </label>
              </div>
              <div></div>
            </div> */}
          </form>
        </>
      )}
    </section>
  );
}

export default Nyheter;
