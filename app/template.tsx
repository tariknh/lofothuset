"use client";
import Header from "@/components/header/Header";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        className="fixed hidden sm:block top-0 left-0 w-full h-screen bg-black origin-bottom"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        className="fixed hidden sm:block top-0 left-0 w-full h-screen bg-black origin-top"
      />
    </>
  );
}
