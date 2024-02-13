"use client";
import { ReactNode, useEffect } from "react";
import { text } from "stream/consumers";
import ContentNavbar from "./ContentNavbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

type PageProps = {
  children: ReactNode;
  className?: string;
  background?: string;
  margin?: number;
  smallPaddingValue?: number;
  paddingValue?: number;
  textSpacingValue?: number;
  textLeveling?: number;
  navItems?: any;
  primaryColor?: string;
  activeNavbarClassname?: string;
  nonActiveNavbarClassname?: string;
};
function ContentLayout({
  children,
  className,
  smallPaddingValue,
  paddingValue,
  textSpacingValue,
  textLeveling,
  navItems,
  primaryColor,
  activeNavbarClassname,
  nonActiveNavbarClassname,
  background = "bg-white",
  margin = 2,
}: PageProps) {
  const fullPath = usePathname();
  const lastSegment = fullPath.split("/").pop() || "";
  const path = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  let item;
  if (path === "Dashboard") {
    item = navItems.find((navItem: any) => navItem.nav === "Oversikt");
  } else {
    item = navItems.find((navItem: any) => navItem.nav === path);
  }
  //   let subNav;
  //   if (Array.isArray(item.subNav)) {
  //     if (item.subNav === Array(0)) {

  //     }
  //   } else {
  //     subNav = item.subNav;
  //   }
  const subNav = item.subNav[0];
  const navObjectNames = Object.keys(subNav || {});
  const navObjectValues = Object.values(subNav || {});
  const [activeNav, setActiveNav] = useState(navObjectNames[0]); // Initialize with the first object's name as active
  const [activeComponent, setActiveComponent]: any = useState(
    navObjectValues[0]
  );

  // Initialize with the first object's component as active

  //   const test = subNav.find((navItem: any) => navItem.nav === "test");
  //   console.log(path);
  //   console.log(activeNav);
  useEffect(() => {
    setActiveNav(navObjectNames[0]);
  }, [path]);

  return (
    <div
      className={`${background} rounded-lg w-full h-full m-2 overflow-hidden px-4 pb-4 pt-5 flex flex-col`}
    >
      <ContentNavbar
        navItems={navObjectNames}
        activeItem={activeNav}
        setActiveItem={setActiveNav}
        path={path}
        primaryColor={primaryColor}
        paddingTop={textLeveling}
        activeNavbarClassname={activeNavbarClassname}
        nonActiveNavbarClassname={nonActiveNavbarClassname}
      />
      {subNav[activeNav]}
    </div>
  );
}

export default ContentLayout;
// smallPaddingValue = { smallPaddingValue };
// paddingValue = { paddingValue };
// textSpacingValue = { textSpacingValue };
