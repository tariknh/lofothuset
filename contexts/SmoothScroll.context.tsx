"use client";
import React, { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return null; // This line is important. It makes SmoothScroll a valid React component.
}
