import "../globals.css";
import SidebarLayout from "@/components/dashboard/layout/SidebarLayout";
import SidebarV1 from "@/components/dashboard/sidebar/SidebarV1";
import Oversikt from "@/public/svg/oversikt";
import Nyheter from "@/public/svg/nyheter";
import Blog from "@/public/svg/blog";
import Innstillinger from "@/public/svg/innstillinger";
import Kunder from "@/public/svg/kunder";
import Profil from "@/public/svg/profil";
import Visning from "@/public/svg/visning";

import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import ContentLayout from "@/components/dashboard/layout/ContentLayout";
import ContentTest from "@/components/dashboard/content/ContentTest";
import ContentTest2 from "@/components/dashboard/content/ContentTest2";
import NyheterLayout from "@/components/dashboard/content/layouts/Nyheter";

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

const logo = "Lofothuset";
const lowerNavBarTitle = "Administrativt";
const primaryColor = `#6200ee`;
const notActiveClassname = "hover:scale-[1.05]";
const activeClassname = "text-white bg-[#6200ee]";

const navBarItems = [
  {
    nav: "Oversikt",
    svg: <Oversikt />,
    subNav: [{ Generelt: <ContentTest />, test2: <ContentTest2 /> }],
  },
  { nav: "Kunder", svg: <Kunder />, subNav: [{ none: <ContentTest /> }] },
  {
    nav: "Nyheter",
    svg: <Nyheter />,
    subNav: [{ none: <NyheterLayout /> }],
  },
  { nav: "Visning", svg: <Visning />, subNav: [{ none: <ContentTest /> }] },
  { nav: "Blog", svg: <Blog />, subNav: [{ none: <ContentTest /> }] },
  {
    nav: "Profil",
    svg: <Profil />,
    subNav: [{ Generelt: <ContentTest />, test2: <ContentTest2 /> }],
    lower: true,
  },
  {
    nav: "Innstillinger",
    svg: <Innstillinger />,
    lower: true,
    subNav: [{ none: <ContentTest /> }],
  },
];

const smallPaddingValue = 2; // Corresponds to "p-2"
const paddingValue = 4; // Corresponds to "p-4"
const topBottomValue = 7; // Corresponds to "p-7"
const textLeveling = topBottomValue - smallPaddingValue;
const textSpacingValue = smallPaddingValue + paddingValue;

const navItems = navBarItems
  .filter(({ lower }) => !lower) // Exclude items with lower: true
  .map(({ nav, svg }) => ({
    nav,
    svg,
  }));

const navItemsLower = navBarItems
  .filter(({ lower }) => lower)
  .map(({ nav, svg }) => ({
    nav,
    svg,
  }));

const contentLayoutNav = navBarItems
  .filter(({ subNav }) => subNav)
  .map(({ nav, subNav }) => ({
    nav,
    subNav,
  }));

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
        <SidebarLayout className="h-[300vh] text-[#121212]">
          <SidebarV1
            navItems={navItems}
            navItemsLower={navItemsLower}
            navItemsLowerTitle={lowerNavBarTitle}
            textColor={"text-white"}
            primaryColor={primaryColor}
            notActive={notActiveClassname}
            activeTextColor={activeClassname}
            className=""
            logo={logo}
          />
          <ContentLayout
            navItems={contentLayoutNav}
            primaryColor={primaryColor}
            activeNavbarClassname={`border-b-[2px] border-[#6200ee]`}
            nonActiveNavbarClassname="text-[#403F44]"
          >
            {children}
          </ContentLayout>
        </SidebarLayout>
      </body>
    </html>
  );
}
