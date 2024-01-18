"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { z } from "zod";

const schema = z.object({
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

export const kontaktValidation = async (kontaktForm: any) => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  const parsed = schema.safeParse(kontaktForm);

  if (!parsed.success) {
    return { error: parsed.error.issues };
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: kontaktForm.email,
        status: "subscribed",
        // tags: ["analyse1", "pending"],
        merge_fields: {
          FNAME: kontaktForm.name,
          PHONE: kontaktForm.phone,
          WISH: kontaktForm.task,
          MODELL: kontaktForm.modell,
        },
      }
    );
  } catch (error: any) {
    console.log(error);
    if (error.response.body.title === "Member Exists") {
      return {
        error: [{ message: "Eposten du skrev er allerede registrert!" }],
      };
    }

    return { error: [{ message: "Eposten du skrev var ugyldig!" }] };
    // return { error: error };
  }
  //   if (!email || !website) {
  //     return {
  //       error: "Missing email or website",
  //     };
  //   new Response("Missing email or website", { status: 400 });
};
