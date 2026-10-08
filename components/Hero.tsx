"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Toran from "./garba/Toran";
import Mandala from "./garba/Mandala";
import DancerRing from "./garba/DancerRing";
import DiyasGroup from "./garba/Diya";
import SparklesScatter, { Sparkle } from "./garba/Sparkle";
import FloatingCards from "./garba/FloatingCards";
import NineNights from "./garba/NineNights";
import DiscoveryBar from "./garba/DiscoveryBar";
import { APP_URL } from "@/lib/garba";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] bg-paper text-ink overflow-x-clip flex flex-col justify-between pt-16 pb-4 select-none">
      {/* ========================================================================= */}
      {/* 0. NAVBAR                                                                 */}
      {/* ========================================================================= */}
      <Navbar />

      {/* ========================================================================= */}
      {/* BACKGROUND AMBIENT GLOW (Marigold radial glow ~55% width behind headline) */}
      {/* ========================================================================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[550px] pointer-events-none -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 38%, rgba(245, 179, 36, 0.22) 0%, rgba(245, 179, 36, 0) 100%)",
        }}
      />

      {/* ========================================================================= */}
      {/* 1. TORAN (Top band only, between navbar and kicker pill)                  */}
      {/* ========================================================================= */}
      <div className="w-full absolute top-[48px] sm:top-[54px] left-0 right-0 pointer-events-none z-10">
        <Toran />
      </div>

      {/* ========================================================================= */}
      {/* SPARKLES LAYER (4 Twinkling stars scattered near headline)                */}
      {/* ========================================================================= */}
      <SparklesScatter />

      {/* ========================================================================= */}
      {/* 10. FOUR FLOATING MOOD CARDS (Purely decorative, non-interactive)         */}
      {/* ========================================================================= */}
      <FloatingCards />

      {/* ========================================================================= */}
      {/* CENTRE COLUMN (Max-width 560px, Centered in normal flow)                  */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[560px] mx-auto px-4 z-30 flex flex-col items-center text-center mt-12 sm:mt-14 md:mt-16 flex-1 justify-center">
        {/* 2. MANDALA (Centered directly behind headline) */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-90">
          <Mandala size={440} />
        </div>

        {/* 3. KICKER PILL (210x22px, marigold 12% bg, green pulsing dot) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold/12 border border-marigold/50 text-marigold font-mono text-[11px] font-bold tracking-wider uppercase mb-3.5 sm:mb-4 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shrink-0" />
          <span>NAVRATRI SPECIAL · 9 NIGHTS</span>
        </motion.div>

        {/* 4. HEADLINE (Bricolage Grotesque 800, Exactly Two Lines, with Garba Underline) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-extrabold text-[clamp(34px,5.2vw,56px)] leading-[1.05] tracking-tight text-white mb-3"
        >
          <span className="block">Searching someone</span>
          <span className="block mt-0.5">
            for{" "}
            <span className="relative inline-block text-marigold whitespace-nowrap">
              garba?
              {/* Hand-drawn marigold curved underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-[8px] overflow-visible"
                viewBox="0 0 100 8"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 2 4 Q 50 8 98 2"
                  stroke="#F5B324"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </motion.h1>

        {/* 5. SUBTEXT (Instrument Sans, ink-2 #A8A8A8, exactly two lines) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-ink-2 text-[14px] sm:text-[15px] leading-relaxed max-w-[440px] mb-5 sm:mb-6"
        >
          <span className="block">Find a garba partner, join a squad,</span>
          <span className="block">or plan a dandiya night with people nearby.</span>
        </motion.p>

        {/* 6. CTA ROW (Primary Marigold Pill + Ghost Pill) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          {/* Primary CTA */}
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center h-[38px] sm:h-[40px] px-6 rounded-full bg-marigold hover:bg-marigold-hover text-black font-sans font-bold text-[13px] sm:text-[14px] transition-all duration-200 shadow-md active:scale-95"
          >
            Find my garba squad →
          </a>

          {/* Ghost CTA */}
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center h-[38px] sm:h-[40px] px-5 rounded-full bg-transparent hover:bg-surface border border-line-strong hover:border-ink/40 text-white font-sans font-medium text-[13px] sm:text-[14px] transition-all duration-200 active:scale-95"
          >
            Post a plan
          </a>
        </motion.div>

        {/* 7. FESTIVE TAGLINE (Non-claim line: sparkle + NAVRATRI SEASON · FIND YOUR GARBA CIRCLE) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-4 sm:mb-5"
        >
          <Sparkle color="#F5B324" size={10} className="relative inline-block" />
          <span className="font-mono text-[11px] font-medium tracking-wider text-ink-2 uppercase">
            NAVRATRI SEASON · FIND YOUR GARBA CIRCLE
          </span>
          <Sparkle color="#F5B324" size={10} className="relative inline-block" />
        </motion.div>

        {/* 8. NINE NIGHTS ROW (9 sequenced pulsing dots + 9 NIGHTS · 9 COLOURS) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-3 sm:my-4"
        >
          <NineNights />
        </motion.div>

        {/* 9. GARBA RING (Floor Ring of 9 Orbiting Dancers) */}
        <div className="w-full relative mt-2 sm:mt-3">
          <DancerRing />
        </div>

        {/* 4 DIYAS (Near bottom left & right corners of the hero stage) */}
        <div className="w-full relative mt-[-24px] sm:mt-[-32px]">
          <DiyasGroup />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 11. DISCOVERY / ACTIVITY LINE & SCROLL PROMPT                             */}
      {/* ========================================================================= */}
      <div className="w-full mt-2 sm:mt-4 z-30">
        <DiscoveryBar />
      </div>
    </section>
  );
}
