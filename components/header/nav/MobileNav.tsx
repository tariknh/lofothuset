"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { topMobile, staggerChildren, textAnimate } from "../anim.js";
import NavLink from "./Link";
import Link from "next/link";

type openStates = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const navItems = [
  {
    title: "Hjem",
    href: "/",
  },
  // {
  //   title: "Aktiviteter",
  //   href: "/aktiviteter",
  // },
  {
    title: "Modeller",
    href: "/#modeller",
  },
  {
    title: "Visninger",
    href: "/visning",
  },
  {
    title: "Om oss",
    href: "/om-oss",
  },

  // {
  //   title: "Visning",
  //   href: "/visning",
  // },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];

export default function MobileNav({ open, setOpen }: openStates) {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div
      onMouseLeave={() => setSelectedIndicator(pathname)}
      className="fixed grid grid-rows-8 h-screen max-h-screen w-screen overflow-hidden z-50"
    >
      <motion.div
        initial="initial"
        animate="open"
        exit="initial"
        variants={topMobile}
        className="p-6 grid grid-rows-8 gap-4 justify-between bg-[#121212] row-span-8 rounded-b-xl text-4xl font-sans text-white tracking-tight"
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
        <motion.div className="text-white row-start-6 row-span-3 flex flex-col gap-2">
          <span className="text-sm font-normal text-muted-foreground">
            Kom i kontakt
          </span>
          <div className="flex flex-col">
            <span className="text-zinc-400 col-start-1 font-semibold text-base">
              Nord
            </span>
            <span className="font-normal col-start-1 text-base underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
              <Link href={"mailto:svein@lofothuset.no"}>
                svein@lofothuset.no
              </Link>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-400 col-start-2 font-semibold text-base">
              Sør
            </span>
            <span className="font-normal col-start-2 text-base underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
              <Link href={"mailto:harald@lofothuset.no"}>
                harald@lofothuset.no
              </Link>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-400 col-start-2 font-semibold text-base">
              Tyrkia-kontor
            </span>
            <span className="font-normal col-start-2 text-base underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
              <Link href={"mailto:harald@lofothuset.no"}>
                yavuz@lofothuset.no
              </Link>
            </span>
          </div>
        </motion.div>
        <span className="row-start-9 font-normal text-sm underline-offset-[.6rem] underline decoration-[.01rem] decoration-muted-foreground">
          Syverudveien 1, 3077 Sande
        </span>
      </motion.div>
    </div>
  );
}
