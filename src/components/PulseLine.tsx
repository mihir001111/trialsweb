"use client";

import { motion } from "framer-motion";

export default function PulseLine() {
  return (
    <div className="fixed top-1/2 left-0 w-full h-[1px] pointer-events-none z-50 overflow-hidden">
      <motion.div
        className="h-full w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}