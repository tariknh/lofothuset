import SidebarV1 from "@/components/dashboard/sidebar/SidebarV1";
import React from "react";

function page() {
  return (
    <main className="flex w-full h-full min-h-screen ">
      <SidebarV1
        navItems={[
          { nav: "Oversikt", svg: "/leaf.svg" },
          { nav: "Kunder", svg: "gang.svg" },
          { nav: "Mails", svg: "/heater.svg" },
        ]}
        navItemsLower={[
          { nav: "Innstillinger", svg: "/leaf.svg" },
          { nav: "Meldinger", svg: "gang.svg" },
          { nav: "Profil", svg: "/heater.svg" },
        ]}
        navItemsLowerTitle={"Administrativt"}
        textColor={"text-white"}
        primaryColor={"#2D2D2D"}
        className=""
      />
    </main>
  );
}

export default page;
