"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface DiyaProps {
  className?: string;
  size?: number;
}

export function SingleDiya({
  size = 28,
  delay = 0,
}: {
  size?: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center select-none" style={{ width: size, height: size * 1.2 }}>
      {/* Soft warm radial glow behind flame */}
      <div
        className="absolute top-0 w-8 h-8 rounded-full bg-marigold/30 blur-[6px] pointer-events-none"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 24 28"
        className="w-full h-full overflow-visible"
        fill="none"
      >
        {/* Animated flickering flame */}
        <motion.g
          style={{ transformOrigin: "12px 14px" }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scaleY: [1, 1.15, 0.92, 1.08, 1],
                  scaleX: [1, 0.92, 1.05, 0.96, 1],
                  opacity: [0.95, 1, 0.85, 1, 0.95],
                }
          }
          transition={{
            duration: 0.6 + (delay % 0.3),
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: delay,
          }}
        >
          {/* Flame outer amber layer */}
          <path
            d="M12 2 C8.5 7 9 12 12 15 C15 12 15.5 7 12 2 Z"
            fill="#FF7A1A"
            opacity={0.8}
          />
          {/* Flame inner bright core */}
          <path
            d="M12 4 C9.5 8 10 11.5 12 13.5 C14 11.5 14.5 8 12 4 Z"
            fill="#FFF3B0"
          />
        </motion.g>

        {/* Diya Clay Bowl */}
        <path
          d="M4 15 Q12 25 20 15 Z"
          fill="#F5B324"
          stroke="#E3A31B"
          strokeWidth="0.8"
        />
        {/* Diya Rim Base */}
        <ellipse cx="12" cy="15" rx="8" ry="1.5" fill="#E3A31B" opacity={0.6} />
      </svg>
    </div>
  );
}

export default function DiyasGroup({ className = "" }: DiyaProps) {
  return (
    <div
      className={`w-full flex justify-between items-center px-4 sm:px-12 pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Left Pair */}
      <div className="flex items-center gap-6 sm:gap-10">
        <SingleDiya size={24} delay={0.1} />
        <SingleDiya size={28} delay={0.35} />
      </div>

      {/* Right Pair */}
      <div className="flex items-center gap-6 sm:gap-10">
        <SingleDiya size={28} delay={0.2} />
        <SingleDiya size={24} delay={0.45} />
      </div>
    </div>
  );
}
