"use client";

import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Hyperlocal Radius Filter",
    badge: "10 — 200 KM",
    desc: "Set your exact comfort zone from 10km to 200km. Find garba circles in your neighborhood or join mega events across the entire metro.",
    tag: "Proximity First",
    color: "#F5B324",
  },
  {
    title: "Midpoint Match Engine",
    badge: "Fair Venues",
    desc: "Meeting a partner 1-on-1? Our smart midpoint algorithm calculates neutral cafes and grounds with equal travel time for both of you.",
    tag: "Zero Hassle",
    color: "#D946EF",
  },
  {
    title: "Squad Lounge & Chat",
    badge: "Real-time Live",
    desc: "Private squad chat threads automatically unlock the moment you join a plan. Coordinate carpools, passes, and costume themes effortlessly.",
    tag: "Coordination",
    color: "#06B6D4",
  },
  {
    title: "Trust & Endorsements",
    badge: "Verified Vibe",
    desc: "Earn badges from fellow attendees: Great Energy, Punctual, Welcoming, and Skilled. Know who you're dancing with before you step out.",
    tag: "Safety & Quality",
    color: "#32D74B",
  },
  {
    title: "9 Aesthetic Themes",
    badge: "Make It Yours",
    desc: "Customize your in-app interface with 9 vibrant visual modes: Retro 90s OS, 8-Bit Pixel, Cyber Y2K, Street Graffiti, Bohemian, and more.",
    tag: "Customizable",
    color: "#FF7A1A",
  },
];

export default function WhyHopping() {
  return (
    <section
      id="why-hopping"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-paper border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-marigold font-bold mb-2.5"
          >
            BUILT FOR REAL CONNECTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Why people love hopping
          </motion.h2>
        </div>

        {/* Feature Cards Grid (3 top, 2 bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group bg-surface border border-line hover:border-line-strong rounded-[14px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                index === 3 || index === 4 ? "lg:col-span-1.5" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border border-line bg-paper"
                    style={{ color: feat.color }}
                  >
                    {feat.badge}
                  </span>
                  <span className="font-mono text-[10px] text-ink-3 tracking-wider uppercase">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-marigold transition-colors">
                  {feat.title}
                </h3>

                <p className="font-sans text-sm text-ink-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div
                className="mt-6 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: feat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
