import React from "react";
import { signal } from "@preact/signals-react";
import StegEn from "@/components/kontakt/StegEn";
import StegTo from "@/components/kontakt/StegTo";
import { useSignals } from "@preact/signals-react/runtime";

const count = signal(0);

function page() {
  const currentStep = signal(1);
  const handleACtion = async (formData: FormData) => {
    "use server";
    currentStep.value = currentStep.value + 1;
    console.log(currentStep.value);
  };

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center">
      <form action={handleACtion}>
        <div className="flex flex-col justify-center items-center text-balance text-center">
          <h1>Kontakt Oss</h1>
          <p>
            Vi hører gjerne fra deg! Fyll ut skjemaet nedenfor med navn, e-post,
            telefonnummer og litt informasjon om dine behov, så tar vi kontakt
            så snart som mulig.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="">STEG 1/2</h3>
            <h2>Generel Info</h2>
          </div>
          <div>
            {currentStep.value}
            {currentStep.value == 1 && <StegEn />}
            {currentStep.value == 2 && <StegTo />}
            <button type="submit">test</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default page;
