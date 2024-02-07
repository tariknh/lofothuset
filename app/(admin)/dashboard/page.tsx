import SidebarLayout from "@/components/dashboard/layout/SidebarLayout";
import SidebarV1 from "@/components/dashboard/sidebar/SidebarV1";
import React from "react";

function page() {
  return (
    <div></div>
    // <SidebarLayout className="h-[300vh]">
    //   <SidebarV1
    //     navItems={[
    //       { nav: "Dashboard", svg: "/leaf.svg" },
    //       { nav: "Kunder", svg: "gang.svg" },
    //       { nav: "Mails", svg: "/heater.svg" },
    //     ]}
    //     navItemsLower={[
    //       { nav: "Innstillinger", svg: "/leaf.svg" },
    //       { nav: "Meldinger", svg: "gang.svg" },
    //       { nav: "Profil", svg: "/heater.svg" },
    //     ]}
    //     navItemsLowerTitle={"Administrativt"}
    //     textColor={"text-white"}
    //     primaryColor={"#2D2D2D"}
    //     className=""
    //   />
    // </SidebarLayout>
  );
}

export default page;
