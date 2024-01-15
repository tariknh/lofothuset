"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, originY: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="z-50 bg-white w-full absolute h-screen"
      ></motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
