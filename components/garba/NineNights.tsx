"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NINE_NIGHTS_COLORS } from "@/lib/garba";

interface NineNightsProps {
  className?: string;
}

export default function NineNights({ className = "" }: NineNightsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 select-none ${className}`}
      aria-label="Nine nights of Navratri with nine festive colors"
    >
      {/* 9 Colored Dots Row */}
      <div className="flex items-center justify-center gap-3 sm:gap-[18px]">
        {NINE_NIGHTS_COLORS.map((item, index) => (
          <motion.div
            key={`night-dot-${item.night}`}
            className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 rounded-full shadow-xs"
            style={{ backgroundColor: item.hex }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.45, 1],
                    opacity: [0.75, 1, 0.75],
                  }
            }
            transition={{
              duration: 2.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            title={`Night ${item.night}: ${item.colorName}`}
          />
        ))}
      </div>

      {/* Label: 9 NIGHTS · 9 COLOURS */}
      <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-3 uppercase">
        9 NIGHTS · 9 COLOURS
      </p>
    </div>
  );
}
