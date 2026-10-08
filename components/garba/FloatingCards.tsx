"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import PlanCard from "./PlanCard";
import { HERO_MOOD_CARDS } from "@/lib/garba";

interface FloatingCardsProps {
  className?: string;
}

const DESKTOP_CARD_POSITIONS = [
  // Card 1: Left Top (GARBA)
  {
    style: "left-[1.5%] lg:left-[3%] top-[19%]",
    rotate: -5,
    bobDistance: -8,
    duration: 4.2,
    delay: 0.1,
  },
  // Card 2: Left Bottom (DANDIYA)
  {
    style: "left-[3.5%] lg:left-[6%] top-[46%]",
    rotate: 4,
    bobDistance: 9,
    duration: 4.8,
    delay: 0.4,
  },
  // Card 3: Right Top (FIRST TIME?)
  {
    style: "right-[1.5%] lg:right-[3%] top-[18%]",
    rotate: 5,
    bobDistance: -7,
    duration: 4.5,
    delay: 0.2,
  },
  // Card 4: Right Bottom (SQUAD)
  {
    style: "right-[3.5%] lg:right-[5%] top-[45%]",
    rotate: -4,
    bobDistance: 8,
    duration: 5.0,
    delay: 0.6,
  },
];

export default function FloatingCards({ className = "" }: FloatingCardsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP & TABLET: Absolute Side Margin Floating Positions (>= 640px)      */}
      {/* ========================================================================= */}
      <div
        className={`hidden sm:block absolute inset-0 pointer-events-none select-none z-20 ${className}`}
        aria-hidden="true"
      >
        {HERO_MOOD_CARDS.map((card, i) => {
          const config = DESKTOP_CARD_POSITIONS[i];
          return (
            <motion.div
              key={`hero-mood-card-${card.id}`}
              className={`absolute pointer-events-none select-none cursor-default w-[clamp(108px,11.5vw,168px)] ${config.style}`}
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
                rotate: config.rotate,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: prefersReducedMotion ? 0 : [0, config.bobDistance, 0],
                rotate: config.rotate,
              }}
              transition={{
                opacity: { duration: 0.6, delay: config.delay },
                scale: { duration: 0.6, delay: config.delay },
                y: prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: config.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: config.delay,
                    },
              }}
            >
              <PlanCard card={card} />
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* MOBILE: Horizontal Row (< 640px)                                          */}
      {/* ========================================================================= */}
      <div
        className="sm:hidden w-full my-6 select-none pointer-events-none z-20"
        aria-hidden="true"
      >
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar snap-x snap-mandatory">
          {HERO_MOOD_CARDS.map((card, i) => (
            <motion.div
              key={`mobile-hero-card-${card.id}`}
              className="w-[145px] shrink-0 snap-center pointer-events-none select-none cursor-default"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <PlanCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
