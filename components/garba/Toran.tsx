"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TORAN_COLORS } from "@/lib/garba";

interface ToranProps {
  className?: string;
}

// 14 points along the quadratic bezier curve Q(340, 52) from (0, 20) to (680, 20)
// Curve sags about 32px in the center (from y=20 to y=52).
// Flag top edge width 18px, height 22px pointing down.
const DESKTOP_FLAGS = [
  { x: 18, y: 22, color: TORAN_COLORS[0], dur: 3.2, delay: 0.1 },
  { x: 66, y: 26, color: TORAN_COLORS[1], dur: 3.8, delay: 0.4 },
  { x: 113, y: 30, color: TORAN_COLORS[2], dur: 4.1, delay: 0.2 },
  { x: 161, y: 34, color: TORAN_COLORS[3], dur: 3.5, delay: 0.6 },
  { x: 209, y: 37, color: TORAN_COLORS[4], dur: 4.3, delay: 0.3 },
  { x: 256, y: 39, color: TORAN_COLORS[5], dur: 3.7, delay: 0.5 },
  { x: 304, y: 40, color: TORAN_COLORS[6], dur: 4.0, delay: 0.2 },
  { x: 358, y: 40, color: TORAN_COLORS[7], dur: 3.9, delay: 0.4 },
  { x: 406, y: 39, color: TORAN_COLORS[8], dur: 4.2, delay: 0.1 },
  { x: 453, y: 37, color: TORAN_COLORS[9], dur: 3.4, delay: 0.7 },
  { x: 501, y: 34, color: TORAN_COLORS[10], dur: 4.4, delay: 0.3 },
  { x: 549, y: 30, color: TORAN_COLORS[11], dur: 3.6, delay: 0.5 },
  { x: 596, y: 26, color: TORAN_COLORS[12], dur: 4.0, delay: 0.2 },
  { x: 644, y: 22, color: TORAN_COLORS[13], dur: 3.3, delay: 0.6 },
];

const MOBILE_FLAGS = [
  DESKTOP_FLAGS[0],
  DESKTOP_FLAGS[2],
  DESKTOP_FLAGS[4],
  DESKTOP_FLAGS[6],
  DESKTOP_FLAGS[8],
  DESKTOP_FLAGS[10],
  DESKTOP_FLAGS[12],
];

export default function Toran({ className = "" }: ToranProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`w-full max-w-full pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 680 75"
        className="w-full h-auto overflow-visible"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Main curved sagging Toran string */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          d="M0 20 Q340 52 680 20"
          stroke="#F5B324"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Desktop 14 Flags */}
        <g className="hidden sm:inline">
          {DESKTOP_FLAGS.map((flag, i) => (
            <motion.g
              key={`desktop-flag-${i}`}
              style={{
                transformOrigin: `${flag.x + 9}px ${flag.y}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: prefersReducedMotion ? 0 : [-4, 4, -4],
              }}
              transition={{
                opacity: { duration: 0.4, delay: i * 0.04 },
                scale: { duration: 0.4, delay: i * 0.04 },
                rotate: prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: flag.dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: flag.delay,
                    },
              }}
            >
              <polygon
                points={`${flag.x},${flag.y} ${flag.x + 18},${flag.y} ${flag.x + 9},${flag.y + 22}`}
                fill={flag.color}
              />
            </motion.g>
          ))}
        </g>

        {/* Mobile 7 Flags */}
        <g className="sm:hidden">
          {MOBILE_FLAGS.map((flag, i) => (
            <motion.g
              key={`mobile-flag-${i}`}
              style={{
                transformOrigin: `${flag.x + 9}px ${flag.y}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: prefersReducedMotion ? 0 : [-4, 4, -4],
              }}
              transition={{
                opacity: { duration: 0.4, delay: i * 0.06 },
                scale: { duration: 0.4, delay: i * 0.06 },
                rotate: prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: flag.dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: flag.delay,
                    },
              }}
            >
              <polygon
                points={`${flag.x},${flag.y} ${flag.x + 18},${flag.y} ${flag.x + 9},${flag.y + 22}`}
                fill={flag.color}
              />
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
}
