"use client";

import React from "react";
import { motion } from "framer-motion";
import { NINE_NIGHTS_COLORS } from "@/lib/garba";

export default function NineColours() {
  return (
    <section
      id="nine-colours"
      className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-paper border-t border-line overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-marigold font-bold mb-2.5"
          >
            FESTIVE PALETTE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            9 nights, 9 festive colours
          </motion.h2>
          <p className="font-sans text-sm text-ink-2 mt-3">
            Coordinate your daily traditional outfits and match vibes with your squad.
          </p>
        </div>

        {/* 9 Rounded Color Tiles */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
          {NINE_NIGHTS_COLORS.map((item, index) => (
            <motion.div
              key={`tile-${item.night}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-surface border border-line hover:border-line-strong rounded-[14px] p-4 flex flex-col items-center text-center group transition-all duration-200"
            >
              {/* Color Swatch Circle */}
              <div
                className="w-10 h-10 rounded-full mb-3 shadow-md border-2 border-paper transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.hex }}
              />

              {/* Night Label */}
              <span className="font-mono text-[11px] font-bold text-ink-2 uppercase tracking-wider">
                Night {item.night}
              </span>

              {/* Color Name */}
              <span className="font-sans text-xs text-white font-medium mt-1">
                {item.colorName}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
