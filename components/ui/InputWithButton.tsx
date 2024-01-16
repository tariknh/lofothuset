"use client";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { kontaktNewsletter } from "@/actions/KontaktNewsletter";

const formDataSchemeSecond = z.object({
  email: z.string().trim().email({
    message: "Ugyldig e-postadresse. Vennligst oppgi en gyldig adresse.",
  }),
});

export function InputWithButton() {
  async function clientAction(event: any) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const parsed = formDataSchemeSecond.safeParse({ email });

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
      });
      return;
    }

    const response = await kontaktNewsletter(parsed.data);
    // Send the form data to the server
    // await serverAction(parsed.data);
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

    if (response?.success) {
      response.success.forEach((issue) => {
        toast.success(issue.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });

      event.target.reset();

      return;
    }
  }

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={clientAction}
    >
      <Input type="email" placeholder="E-Post Adresse" name="email" />
      <Button className="text-lg" variant={"link"} type="submit">
        Send
      </Button>
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
  );
}
