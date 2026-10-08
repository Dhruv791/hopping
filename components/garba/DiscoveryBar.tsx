"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface DiscoveryBarProps {
  className?: string;
}

const ACTIVITIES = [
  "Garba",
  "Dandiya",
  "Chai",
  "Treks",
  "Food walks",
  "Sports",
];

export default function DiscoveryBar({ className = "" }: DiscoveryBarProps) {
  const prefersReducedMotion = useReducedMotion();

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`w-full flex flex-col items-center gap-2.5 select-none ${className}`}>
      {/* Non-interactive line of plain text with marigold separating dots */}
      <p className="font-mono text-[11px] text-ink-3 tracking-wider flex items-center justify-center gap-2 flex-wrap px-4 text-center">
        {ACTIVITIES.map((act, i) => (
          <React.Fragment key={act}>
            <span className="text-ink-2">{act}</span>
            {i < ACTIVITIES.length - 1 && (
              <span className="text-marigold font-bold">·</span>
            )}
          </React.Fragment>
        ))}
      </p>

      {/* Scroll to see how it works */}
      <button
        onClick={scrollToHowItWorks}
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-3 tracking-widest uppercase hover:text-marigold transition-colors cursor-pointer pt-0.5"
        aria-label="Scroll down to see how it works"
      >
        <span>SCROLL TO SEE HOW IT WORKS</span>
        <motion.span
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block text-marigold"
        >
          ↓
        </motion.span>
      </button>
    </div>
  );
}
