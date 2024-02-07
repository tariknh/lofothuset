import "../globals.css";
import SidebarLayout from "@/components/dashboard/layout/SidebarLayout";
import SidebarV1 from "@/components/dashboard/sidebar/SidebarV1";

import { cn } from "@/lib/utils";

import localFont from "next/font/local";

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../fonts/Satoshi-Bold.woff2",
    },
    {
      path: "../fonts/Satoshi-Light.woff2",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
    },
    {
      path: "../fonts/Satoshi-Regular.woff2",
    },
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "variable",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen p-safe bg-background font-sans antialiased",
          satoshi.variable
        )}
      >
        <SidebarLayout className="h-[300vh]">
          <SidebarV1
            navItems={[
              { nav: "Oversikt", svg: "/leaf.svg" },
              { nav: "Kunder", svg: "/gang.svg" },
              { nav: "Mails", svg: "/heater.svg" },
            ]}
            navItemsLower={[
              { nav: "Innstillinger", svg: "/leaf.svg" },
              { nav: "Meldinger", svg: "gang.svg" },
              { nav: "Profil", svg: "/heater.svg" },
            ]}
            navItemsLowerTitle={"Administrativt"}
            textColor={"text-white"}
            primaryColor={"bg-[#6200EE]"}
            activeTextColor={"text-white"}
            className=""
          />

          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
