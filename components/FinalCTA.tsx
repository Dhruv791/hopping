"use client";

import React from "react";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/garba";
import Mandala from "./garba/Mandala";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-paper border-t border-line overflow-hidden text-center">
      {/* Background Subtle Radial Glow & Mandala */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] pointer-events-none -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245, 179, 36, 0.16) 0%, rgba(245, 179, 36, 0) 100%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-40">
        <Mandala size={360} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-marigold font-bold mb-3"
        >
          JOIN THE FESTIVITIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
        >
          Don&apos;t dance alone this Navratri.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-sans text-ink-2 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
        >
          Find a partner, connect with fellow locals, and experience the energy of live dhol together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md"
        >
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-marigold hover:bg-marigold-hover text-black font-sans font-bold text-sm sm:text-base transition-all duration-200 shadow-lg active:scale-95"
          >
            Find my garba squad →
          </a>
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-surface hover:bg-surface-2 border border-line-strong text-white font-sans font-medium text-sm sm:text-base transition-all duration-200 active:scale-95"
          >
            Open Web App
          </a>
        </motion.div>
      </div>
    </section>
  );
}
