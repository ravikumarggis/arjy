"use client";

import { useEffect, useState } from "react";

type Breakpoints = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  width: number;
};

export const useBreakpoint = (): Breakpoints => {
  const isClient = typeof window !== "undefined";
  const [width, setWidth] = useState<number>(isClient ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    sm: width < 768,
    md: width >= 768 && width < 1024,
    lg: width >= 1024 && width < 1280,
    xl: width >= 1280,
    width,
  };
};
