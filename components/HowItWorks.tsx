"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    tag: "Spontaneous or Planned",
    title: "Post or find a plan",
    desc: "Looking for a garba pass partner, craving midnight chai, or heading to a weekend dandiya night? Drop a plan or browse what's nearby.",
    badgeColor: "#F5B324",
    accentGlow: "rgba(245, 179, 36, 0.15)",
  },
  {
    number: "02",
    tag: "Host Curated & Safe",
    title: "Request to join",
    desc: "No awkward endless swiping. Send a quick hop request. Check mutual interests, vibe compatibility, and get approved by the host.",
    badgeColor: "#D946EF",
    accentGlow: "rgba(217, 70, 239, 0.15)",
  },
  {
    number: "03",
    tag: "Real World Squads",
    title: "Show up & make friends",
    desc: "Coordinate in the Squad Lounge, meet at the venue, dance to the live dhol beats, and turn unfamiliar faces into your go-to festive crew.",
    badgeColor: "#06B6D4",
    accentGlow: "rgba(6, 182, 212, 0.15)",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-paper border-t border-line overflow-hidden"
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
            HOW HOPPING WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Three simple steps to your festive squad
          </motion.h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative bg-surface border border-line hover:border-line-strong rounded-[14px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight"
                    style={{ color: step.badgeColor }}
                  >
                    {step.number}
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line bg-paper text-ink-2">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-marigold transition-colors">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-ink-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Accent bottom gradient line */}
              <div
                className="mt-8 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: step.badgeColor }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
