"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

/**
 * SidebarV1 component
 *
 * IMPORTANT: The parent of this component needs to be a flex container.
 * Make sure to add `display: flex;` to the parent's CSS.
 * Or put the SidebarV1 inside the `SidebarLayout` component.
 */

// const smallPaddingValue = 2; // Corresponds to "p-2"
// const paddingValue = 4; // Corresponds to "p-4"

// const textSpacingValue = smallPaddingValue + paddingValue;

// // Map the numerical values to Tailwind classes when rendering
// const smallPaddingClass = `px-${smallPaddingValue}`;
// const paddingClass = `px-${paddingValue}`;
// const textSpacingClass = `p-${textSpacingValue}`;

const expandedNavClass = `h-screen min-w-64 fixed top-0 left-0 flex flex-col items-center `;

const expandedLowerNavClass = `h-fit min-w-64 fixed bottom-0 left-0 flex flex-col items-center `;

interface NavItem {
  nav: string;
  svg: any;
}

interface SidebarV1Props {
  navItems: NavItem[];
  navItemsLower: NavItem[];
  navItemsLowerTitle: string;
  textColor: string;
  primaryColor: string;
  className?: string;
  activeTextColor: string;
  notActive: string;
  logo: any;
}

interface SidebarItemProps {
  nav: string;
  svg: any;
  isActive: boolean;
  primaryColor: string;
  activeTextColor: string;
  notActive: string;
}

const SidebarItem = ({
  nav,
  svg,
  isActive,
  notActive,
  activeTextColor,
}: SidebarItemProps) => {
  return (
    <Link
      className={`flex justify-start items-center gap-4 w-full rounded-sm px-4 mb-2 py-6 duration-150 ${
        isActive ? activeTextColor : notActive
      }`}
      href={
        nav.toLowerCase() === "oversikt"
          ? "/dashboard"
          : `/dashboard/${nav.toLowerCase()}`
      }
    >
      <div className="">{svg}</div>
      <p className="font-medium text-lg">{nav}</p>
    </Link>
  );
};

function SidebarV1({
  navItems,
  navItemsLower,
  navItemsLowerTitle,
  textColor,
  primaryColor,
  className,
  activeTextColor,
  notActive,
  logo,
}: SidebarV1Props) {
  const pathname = usePathname();
  // console.log("This is the navItems", navItems);
  return (
    <div className="h-full min-w-64">
      {/* When the navbar collapses, this div will collapse with it, so the main content on the site will be able to expand with it without use of context. */}
      <nav className={`${expandedNavClass} pl-2 py-7`}>
        <div
          className={`logo flex justify-start w-full items-center text-3xl font-bold mb-16 px-4`}
        >
          {logo}
        </div>

        {navItems.map((item) => (
          <SidebarItem
            key={item.nav}
            nav={item.nav}
            svg={item.svg}
            primaryColor={primaryColor}
            notActive={notActive}
            activeTextColor={activeTextColor}
            isActive={
              pathname === `/dashboard/${item.nav.toLowerCase()}` ||
              (pathname === "/dashboard" &&
                item.nav.toLowerCase() === "oversikt")
            }
          />
        ))}
        <div className={`${expandedLowerNavClass} pl-2 py-7`}>
          <p className={`text-start w-full text-lg px-4 mb-2 uppercase`}>
            {navItemsLowerTitle}
          </p>
          {navItemsLower.map((item) => (
            <SidebarItem
              key={item.nav}
              nav={item.nav}
              svg={item.svg}
              primaryColor={primaryColor}
              activeTextColor={activeTextColor}
              notActive={notActive}
              isActive={
                pathname === `/dashboard/${item.nav.toLowerCase()}` ||
                (pathname === "/dashboard" &&
                  item.nav.toLowerCase() === "oversikt")
              }
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default SidebarV1;
