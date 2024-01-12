"use client";
import { useState } from "react";

import StegEn from "@/components/kontakt/StegEn";
import StegTo from "@/components/kontakt/StegTo";

function page() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClick = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  const next = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center">
      <form>
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
            {currentStep}
            {currentStep == 1 && <StegEn />}
            {currentStep == 2 && <StegTo />}
            <button
              onClick={() => {
                handleClick;
              }}
            >
              next
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default page;
