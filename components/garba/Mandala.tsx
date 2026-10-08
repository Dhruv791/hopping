"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MandalaProps {
  className?: string;
  size?: number;
}

const PETAL_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function Mandala({ className = "", size = 410 }: MandalaProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`pointer-events-none select-none flex items-center justify-center ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="-215 -215 430 430"
        className="w-full h-full"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        fill="none"
        stroke="#F5B324"
        strokeOpacity="0.22"
        strokeWidth="1.2"
      >
        {/* Concentric circles: r=205, r=175 dashed, r=120 */}
        <circle r="205" />
        <circle r="175" strokeDasharray="3 6" />
        <circle r="120" />

        {/* 12 Petals (rx 10 ry 30 at radius 150) */}
        <g>
          {PETAL_ANGLES.map((angle) => (
            <ellipse
              key={`petal-${angle}`}
              cy="-150"
              rx="10"
              ry="30"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}
