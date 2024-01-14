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

  const path = usePathname();
  if (navItems[0].href === path) {
    console.log(true, "true!");
  }

  const [isMobile, setIsMobile] = useState(false);

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
    <nav className="">
      {isMobile && (
        <div>
          <div className={styles.main}>
            <div className={` ${styles.header}`}>
              <div className="hidden bg-white w-screen absolute top-0 h-20"></div>
              <span className={`p-8 mix-blend-difference ${styles.logo}`}>
                <Link href={"/"}>LOFOTHUSET</Link>
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
      )}
      {!isMobile && (
        <div className="flex fixed mix-blend-difference py-4 w-full text-xl justify-between px-8 lg:px-20 z-50">
          <div>
            <span className={styles.logo}>
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
        </div>
      )}
    </nav>
  );
}

export default Header;
