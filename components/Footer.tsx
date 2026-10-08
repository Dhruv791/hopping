"use client";

import React from "react";
import { APP_URL } from "@/lib/garba";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 md:px-8 bg-paper border-t border-line text-ink-3 select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Creator Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a
            href={APP_URL}
            className="flex items-center gap-1.5 focus:outline-none"
            aria-label="Hopping home"
          >
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              hopping
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
          </a>
          <span className="hidden sm:inline text-line">|</span>
          <span className="font-sans text-xs text-ink-2">
            Made with love by Suryansh
          </span>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-ink-3">
          <a
            href={APP_URL}
            className="hover:text-marigold transition-colors"
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="hover:text-marigold transition-colors"
          >
            How it works
          </a>
          <a
            href="#nine-colours"
            className="hover:text-marigold transition-colors"
          >
            Navratri Special
          </a>
          <span>© {new Date().getFullYear()} Hopping. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
