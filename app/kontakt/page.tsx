"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import Image from "next/image";
import FormSelect from "@/components/ui/FormSelect";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { kontaktValidation } from "@/actions/KontaktValidation";
import { Checkbox } from "@/components/ui/checkbox";
import FormCheck from "@/components/ui/FormCheck";
import { redirect } from "next/navigation";

const formDataSchema = z.object({
  name: z.string().min(2, { message: "Navnet må bestå av minst 2 tegn" }),
  email: z.string().trim().email({
    message: "Ugyldig e-postadresse. Vennligst oppgi en gyldig adresse.",
  }),
  phone: z
    .string()
    .min(5, { message: "Telefonnummeret må bestå av minst 2 tegn" }),
});
const formDataSchemeSecond = z.object({
  name: z.string().min(2, { message: "Navnet må bestå av minst 2 tegn" }),
  email: z.string().trim().email({
    message: "Ugyldig e-postadresse. Vennligst oppgi en gyldig adresse.",
  }),
  phone: z
    .string()
    .min(5, { message: "Telefonnummeret må bestå av minst 2 tegn" }),
  task: z.string(),
  modell: z.string(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "Du må godta vilkårene",
  }),
});

function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    task: "Jeg vil ha en visning over video",
    modell: "Lofoten Lodge",
    agreeToTerms: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  async function clientAction() {
    const parsed = formDataSchemeSecond.safeParse(formData);

    if (!parsed.success) {
      parsed.error.issues.map((issue) => {
        toast.error(issue.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }); // This was missing

      return;
    }
    const response = await kontaktValidation(parsed.data);

    if (response?.error) {
      response.error.forEach((issue) => {
        toast.error(issue.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
      return;
    }

    redirect("/kontakt/takk");
  }

  const next = () => {
    if (currentStep < 2) {
      const result = formDataSchema.safeParse(formData);

      if (!result.success) {
        result.error.issues.map((issue) => {
          toast.error(issue.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        });
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (event: any) => {
    if (event && event.target) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    } else {
      setFormData({
        ...formData,
        // Assuming the select component does not provide `name`, you would need to
        // manually specify which field of `formData` should be updated.
        // For example, if this handler is for a 'task' field, you would use:
        task: event,
      });
    }
  };
  return (
    <main className="w-full p-3 flex sm:min-h-screen min-h-svh flex-col items-center justify-center lg:p-4 py-[88px]">
      <form action={clientAction} className="sm:my-20 max-w-[745px]">
        <div className="flex flex-col justify-center items-center text-pretty">
          <h1 className="text-4xl sm:text-5xl font-medium mb-4">Kontakt Oss</h1>
          <p className="text-xl text-center text-pretty max-w-xs sm:max-w-none mb-8">
            Vi hører gjerne fra deg!<br/> Fyll ut skjemaet nedenfor med navn, e-post, telefonnummer og litt informasjon om dine behov, så tar vi kontakt så snart som mulig.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            {currentStep === 1 && (
              <>
                <h3 className="">STEG 1/2</h3>
                <h2 className="text-xl font-medium mb-8">Kontakt Info</h2>
              </>
            )}
            {currentStep === 2 && (
              <>
                <h3 className="">STEG 2/2</h3>
                <h2 className="text-xl font-medium mb-8">Generel Info</h2>
              </>
            )}
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col">
            {currentStep === 1 && (
              <div className="grid grid-cols-1 w-full h-full gap-4 mb-4">
                <FormInput
                  label="FORNAVN OG ETTERNAVN"
                  id="name"
                  type="text"
                  placeholder="Fullt navn"
                  formData={formData.name}
                  handleInputChange={handleInputChange}
                />
                <FormInput
                  label="E-POST"
                  id="email"
                  type="email"
                  placeholder="E-post"
                  formData={formData.email}
                  handleInputChange={handleInputChange}
                />

                <FormInput
                  label="TELEFONNUMMER"
                  id="phone"
                  type="number"
                  placeholder="Telefonnummer"
                  formData={formData.phone}
                  handleInputChange={handleInputChange}
                />
                <div className="w-full flex justify-end items-center">
                  <button
                    type="button"
                    onClick={next}
                    className={`w-[116px] flex justify-between py-4 border-b-[1px] border-black items-center text-lagtext`}
                  >
                    Neste
                    <Image
                      width={28}
                      height={28}
                      src={"/arrow.svg"}
                      alt="Click Here"
                    />
                  </button>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 w-full h-full gap-4 mb-4">
                <FormSelect
                  id="HVA ØNSKER DU Å GJØRE?"
                  name="task"
                  values={[
                    "Jeg vil ha en visning over video",
                    "Jeg vil ringes opp for en samtale",
                  ]}
                  formData={formData.task}
                  handleInputChange={handleInputChange}
                />

                <FormSelect
                  id="HVILKEN MODELL?"
                  name="modell"
                  values={["Lofoten Lodge"]}
                  formData={formData.modell}
                  handleInputChange={handleInputChange}
                />
                <FormCheck
                  formData={formData.agreeToTerms}
                  handleInputChange={handleInputChange}
                />

                <div className="w-full flex justify-between items-center mt-8">
                  <button
                    type="button"
                    onClick={prev}
                    className={`w-[116px]  flex flex-row-reverse justify-between py-4  items-center text-lagtext`}
                  >
                    Tilbake
                    <Image
                      width={28}
                      height={28}
                      src={"/arrow.svg"}
                      alt="Click Here"
                      className="transform rotate-180"
                    />
                  </button>

                  <button
                    type="submit"
                    onClick={next}
                    className={`w-[116px] flex justify-between py-4 border-b-[1px] border-black items-center text-lagtext`}
                  >
                    Send inn
                    <Image
                      width={28}
                      height={28}
                      src={"/arrow.svg"}
                      alt="Click Here"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </main>
  );
}

export default Page;
