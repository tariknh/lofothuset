"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import MobileNav from "./nav/MobileNav";
import { navItems } from "./nav/MobileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scroll } from "framer-motion";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  const path = usePathname();
  if (navItems[0].href === path) {
    console.log(true, "true!");
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      // remove event listener when the component is unmounted to not cause any memory leaks
      // otherwise the event listener will continue to be active
      window.removeEventListener("resize", handleResize);
    };
    // add `isMobile` state variable as a dependency so that
    // it is called every time the window is resized
  }, [isMobile]);
  return (
    <nav className="">
      {isMobile ? (
        <div>
          <div className={styles.main}>
            <div className={` ${styles.header}`}>
              <div className="hidden bg-white w-screen absolute top-0 h-20"></div>
              <span className={`p-8 mix-blend-difference ${styles.logo}`}>
                LOFOTHUSET
              </span>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`mix-blend-difference ${styles.button}`}
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
        <div className="flex fixed mix-blend-difference py-4 w-full text-xl justify-between px-8 lg:px-20 z-50">
          <div>
            <span className={styles.logo}>LOFOTHUSET</span>
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
        </div>
      )}
    </nav>
  );
}

export default Header;
