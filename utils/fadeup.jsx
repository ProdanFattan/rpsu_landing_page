"use client"
import { animate } from "framer-motion";
export const FadeUp = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.8, 0.5, 1],
        },
      },
    };
  };