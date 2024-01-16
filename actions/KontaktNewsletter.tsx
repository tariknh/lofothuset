"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import crypto from "crypto";

const subscribeMessage = "Du er nå medlem av vårt nyhetsbrev!";
const updateMessage = "";
const alreadySubscribedMessage = "";

export const kontaktNewsletter = async (kontaktForm: any) => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  try {
    // const member = await mailchimp.lists.getAllLists();

    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: kontaktForm.email,
        status: "subscribed",
        tags: ["Nyhetsbrev"],
      }
    );
    return { success: [{ message: subscribeMessage }] };
  } catch (error: any) {
    if (error.response.body.title === "Member Exists") {
      try {
        const subscriberHash = crypto
          .createHash("md5")
          .update(kontaktForm.email.toLowerCase())
          .digest("hex");

        const tags = await mailchimp.lists.getListMember(
          process.env.MAILCHIMP_AUDIENCE_ID!,
          subscriberHash
        );

        if (tags.status === "subscribed") {
          return {
            error: [{ message: "Eposten du skrev er allerede en abonnent!" }],
          };
        } else {
          const update = await mailchimp.lists.updateListMember(
            process.env.MAILCHIMP_AUDIENCE_ID!,
            subscriberHash,
            {
              status: "subscribed",
            }
          );

          return {
            success: [{ message: "Eposten du skrev har blitt oppdatert!" }],
          };
        }
      } catch (error: any) {
        return {
          error: [{ message: "Eposten du skrev er allerede registrert!" }],
        };
      }
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
