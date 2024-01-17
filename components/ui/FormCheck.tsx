"use client";
import Image from "next/image";
import { useState } from "react";

type FormCheckProps = {
  formData: any;
  handleInputChange: any;
};

function FormCheck({ formData, handleInputChange }: FormCheckProps) {
  const isChecked = formData;

  const handleChange = () => {
    handleInputChange({
      target: {
        name: "agreeToTerms",
        value: !isChecked,
      },
    });
  };

  return (
    <div className="flex justify-start items-center gap-4 mt-2 ">
      <div className="relative shrink-0 ">
        {/* Checkbox input */}
        <input
          type="checkbox"
          className="h-full w-full opacity-0 absolute cursor-pointer z-10"
          checked={isChecked}
          onChange={handleChange}
        />

        {/* Div that changes color based on state */}
        <div
          className={`h-[56px] w-[56px] shrink-0 border-[1px] border-[#676767] rounded-lg ${
            isChecked ? "" : ""
          } flex justify-center items-center`}
        >
          {/* Image that is conditionally rendered based on state */}
          {isChecked && (
            <Image
              src="/check.svg"
              alt=""
              width={40}
              height={40}
              className=" "
            />
          )}
        </div>
      </div>

      <p className="text-xs max-w-[314px] ">
        Ved å trykke &apos;send&apos;, samtykker du til at Lofothuset lagrer og
        behandler dine oppgitte personopplysninger for å levere ønsket innhold.
      </p>
    </div>
  );
}

export default FormCheck;
