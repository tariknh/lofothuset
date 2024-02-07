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

const padding = "p-4";

interface NavItem {
  nav: string;
  svg: string;
}

interface SidebarV1Props {
  navItems: NavItem[];
  navItemsLower: NavItem[];
  navItemsLowerTitle: string;
  textColor: string;
  primaryColor: string;
  className?: string;
  activeTextColor: string;
}

interface SidebarItemProps {
  nav: string;
  svg: string;
  isActive: boolean;
  primaryColor: string;
  activeTextColor: string;
}

const SidebarItem = ({
  nav,
  svg,
  isActive,
  primaryColor,
  activeTextColor,
}: SidebarItemProps) => {
  return (
    <Link
      className={`flex justify-start items-center gap-4 w-full p-4 ${
        isActive ? primaryColor + " " + activeTextColor : ""
      }`}
      href={
        nav.toLowerCase() === "oversikt"
          ? "/dashboard"
          : `/dashboard/${nav.toLowerCase()}`
      }
    >
      <Image src={svg} width={32} height={32} alt="logo" />
      <p className="font-medium">{nav}</p>
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
}: SidebarV1Props) {
  const pathname = usePathname();

  return (
    <div className="h-full min-w-64">
      {/* When the navbar collapses, this div will collapse with it, so the main content on the site will be able to expand with it without use of context. */}
      <nav className="h-screen min-w-64 fixed top-0 left-0 bg-blue-200 flex flex-col items-center px-2">
        <div className="logo h-16 flex justify-center items-center text-center text-3xl font-bold mb-16">
          Lofothuset
        </div>
        {navItems.map((item) => (
          <SidebarItem
            key={item.nav}
            nav={item.nav}
            svg={item.svg}
            primaryColor={primaryColor}
            activeTextColor={activeTextColor}
            isActive={
              pathname === `/dashboard/${item.nav.toLowerCase()}` ||
              (pathname === "/dashboard" &&
                item.nav.toLowerCase() === "oversikt")
            }
          />
        ))}
      </nav>
    </div>
  );
}

export default SidebarV1;
