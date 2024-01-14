"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";

export const kontaktValidation = async (kontaktForm: any) => {
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
  } catch (error: any) {
    console.log(error);
    if (error.response.body.title === "Member Exists") {
      console.log("Inside Member exists");
      try {
        console.log("Member exists");
        // const subscriberHash = crypto
        //   .createHash("md5")
        //   .update(subscriber.email_address.toLowerCase())
        //   .digest("hex");
        const update = await mailchimp.lists.updateListMember(
          process.env.MAILCHIMP_AUDIENCE_ID!,
          kontaktForm.email,
          {
            status: "subscribed",
          }
        );
      } catch (error: any) {
        return {
          error: [{ message: "Eposten du skrev er allerede subscribed!" }],
        };
      }

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
