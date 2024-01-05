"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./nav/MobileNav";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

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
    <>
      {isMobile ? (
        <>
          <div className={styles.main}>
            <div className={styles.header}>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={styles.button}
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
        </>
      ) : (
        <nav className="fixed py-4 w-full z-50 flex text-white text-xl justify-between px-8 lg:px-20">
          <div>
            <span>LOFOTEN A GROUP</span>
          </div>
          <div>
            <span>Hjem</span>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
