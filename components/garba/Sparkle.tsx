"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SparkleProps {
  color: string;
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export function Sparkle({
  color,
  size = 12,
  className = "",
  delay = 0,
  duration = 2.4,
}: SparkleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
      animate={
        prefersReducedMotion
          ? {}
          : {
              scale: [0.7, 1.25, 0.7],
              opacity: [0.35, 1, 0.35],
              rotate: [0, 90, 180],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        viewBox="-6 -6 12 12"
        className="w-full h-full overflow-visible"
        fill={color}
      >
        {/* 4-point star path */}
        <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" />
      </svg>
    </motion.div>
  );
}

export default function SparklesScatter({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {/* 4 Sparkles scattered near headline as in design SVG */}
      {/* Top Left Marigold Sparkle (x: ~30%, y: ~24%) */}
      <Sparkle
        color="#F5B324"
        size={13}
        className="left-[26%] sm:left-[30%] top-[22%]"
        delay={0.1}
        duration={2.2}
      />
      {/* Top Right Magenta Sparkle (x: ~70%, y: ~27%) */}
      <Sparkle
        color="#D946EF"
        size={14}
        className="right-[24%] sm:right-[28%] top-[26%]"
        delay={0.5}
        duration={2.6}
      />
      {/* Mid Left Orange Sparkle (x: ~28%, y: ~58%) */}
      <Sparkle
        color="#FF7A1A"
        size={11}
        className="left-[25%] sm:left-[27%] top-[56%]"
        delay={0.9}
        duration={2.0}
      />
      {/* Mid Right Cyan Sparkle (x: ~72%, y: ~61%) */}
      <Sparkle
        color="#06B6D4"
        size={11}
        className="right-[25%] sm:right-[27%] top-[60%]"
        delay={0.3}
        duration={2.4}
      />
    </div>
  );
}
