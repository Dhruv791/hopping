"use client";

import React from "react";
import { APP_URL } from "@/lib/garba";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between pointer-events-auto select-none">
      {/* Brand Wordmark: "hopping" + 6px Marigold Dot */}
      <a
        href={APP_URL}
        className="flex items-center gap-1.5 group focus:outline-none"
        aria-label="Hopping home"
      >
        <span className="font-display font-extrabold text-[20px] tracking-tight text-white transition-opacity group-hover:opacity-90">
          hopping
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
      </a>

      {/* Right Navigation Links & CTA */}
      <div className="flex items-center gap-4 sm:gap-7">
        {/* Nav Links (Hidden on Mobile) */}
        <nav className="hidden sm:flex items-center gap-6 text-[13px] font-sans font-medium" aria-label="Main Navigation">
          <a
            href="#how-it-works"
            className="text-ink-2 hover:text-white transition-colors"
          >
            Plans
          </a>
          <a
            href="#why-hopping"
            className="text-ink-2 hover:text-white transition-colors"
          >
            Squads
          </a>
          <a
            href="#nine-colours"
            className="text-marigold font-semibold hover:text-marigold-hover transition-colors"
          >
            Navratri
          </a>
        </nav>

        {/* Marigold Pill Button "Open App" */}
        <a
          href={APP_URL}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-marigold hover:bg-marigold-hover text-black font-sans font-semibold text-[13px] transition-all duration-200 active:scale-95 shadow-sm"
        >
          Open App
        </a>
      </div>
    </header>
  );
}
