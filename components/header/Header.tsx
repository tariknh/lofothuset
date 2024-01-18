"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import MobileNav from "./nav/MobileNav";
import { navItems } from "./nav/MobileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scroll } from "framer-motion";
import { inView } from "framer-motion";
import { set } from "zod";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import LocomotiveScroll from "locomotive-scroll";

export const SmoothScroll = dynamic(
  () => import("contexts/SmoothScroll.context"),
  {
    ssr: false,
  }
);

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isHero, setIsHero] = useState(false);

  const path = usePathname();

  if (navItems[0].href === path) {
    // console.log(true, "true!");
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

    const hero = document.getElementById("hero");
    if (hero) {
      inView(
        hero,
        (info) => {
          // console.log("in view");
          setIsHero(true);
          return (leaveInfo) => setIsHero(false);
        },
        { margin: "-35px 0px 0px 0px" }
      );
    }
  }, [path]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // Set the initial state

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      {isMobile ? (
        <div>
          <div className={styles.main}>
            <div
              className={`${!isHero && "mix-blend-difference"} ${
                styles.header
              }`}
            >
              <span className={`p-8 ${styles.logo}`}>
                <Link href={"/"}>LOFOTHUSET</Link>
              </span>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`${styles.button}`}
              >
                <div
                  className={`${styles.burger} ${
                    isActive ? styles.burgerActive : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isActive && <MobileNav setOpen={setIsActive} open={isActive} />}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          className={`flex fixed py-4 w-full text-xl justify-between px-8 lg:px-[4rem] z-50  ${
            !isHero && "mix-blend-difference"
          }`}
        >
          <div>
            <span className={` ${styles.logo}`}>
              <Link href={"/"}>LOFOTHUSET</Link>
            </span>
          </div>
          <ul className="flex gap-6 text-white invert-1">
            {navItems.map((data, index) => (
              <li key={data.href}>
                <Link className="relative" href={data.href}>
                  {data.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="bg-white h-[1px] left-0 top-full absolute w-full"
                    />
                  )}
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Header;
