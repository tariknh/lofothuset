"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { topMobile, staggerChildren, textAnimate } from "../anim.js";
import NavLink from "./Link";

type openStates = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const navItems = [
  {
    title: "Hjem",
    href: "/",
  },
  {
    title: "Aktiviteter",
    href: "/aktiviteter",
  },
  {
    title: "Modeller",
    href: "/modeller/finnmarken",
  },
  {
    title: "Om oss",
    href: "/om-oss",
  },
  {
    title: "Kontakt oss",
    href: "/kontakt",
  },
];

export default function MobileNav({ open, setOpen }: openStates) {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div
      onMouseLeave={() => setSelectedIndicator(pathname)}
      className="absolute grid grid-rows-8 h-screen max-h-screen w-screen overflow-hidden z-50"
    >
      <motion.div
        initial="initial"
        animate="open"
        exit="initial"
        variants={topMobile}
        className="p-8 grid grid-rows-12 justify-between bg-accent row-span-8 rounded-b-xl font-bold text-3xl font-sans text-white tracking-tight"
      >
        <motion.div
          className="row-start-2 flex flex-col gap-2"
          variants={staggerChildren}
        >
          {navItems.map((data, index) => (
            <NavLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
              onClick={() => setOpen(false)}
            ></NavLink>
          ))}
        </motion.div>
        <motion.div className="text-white row-start-10 flex flex-col gap-3">
          <span className="text-sm font-normal text-muted-foreground">
            Kom i kontakt
          </span>
          <span className="font-normal text-xl underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
            hei@lofothuset.no
          </span>
        </motion.div>
        <span className="row-start-12 font-normal text-sm underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
          Lofotveien 54, 8300 Svolvær
        </span>
      </motion.div>
    </div>
  );
}
