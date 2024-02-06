import React from "react";

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
}

function SidebarV1({
  navItems,
  navItemsLower,
  navItemsLowerTitle,
  textColor,
  primaryColor,
  className,
}: SidebarV1Props) {
  return (
    <div className="relative h-full min-w-32 bg-red-200">
      <nav className="w-full h-full">test</nav>
    </div>
  );
}

export default SidebarV1;
