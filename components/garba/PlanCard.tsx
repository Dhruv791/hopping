"use client";

import React from "react";
import { MoodCardData } from "@/lib/garba";

interface MoodCardProps {
  card: MoodCardData;
  className?: string;
  customCardArt?: React.ReactNode;
}

export default function PlanCard({
  card,
  className = "",
  customCardArt,
}: MoodCardProps) {
  const renderCardArt = () => {
    if (customCardArt) return customCardArt;

    switch (card.cardType) {
      case "garba":
        return (
          <g>
            {/* Crossed Dandiya sticks */}
            <line
              x1="30"
              y1="72"
              x2="80"
              y2="30"
              stroke="#F5B324"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <line
              x1="80"
              y1="72"
              x2="30"
              y2="30"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Red tassels */}
            <circle cx="30" cy="72" r="4" fill="#E5484D" />
            <circle cx="80" cy="72" r="4" fill="#E5484D" />
          </g>
        );

      case "dandiya":
        return (
          <g>
            {/* Dancer 1 (Yellow) */}
            <g transform="translate(38, 76) scale(1.1)" style={{ color: "#FFC857" }}>
              <path
                d="M-3 -22 L-13 -34 M3 -22 L13 -34"
                stroke="#E0A070"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M-13 -34 L-16 -43 M13 -34 L16 -43"
                stroke="#F5B324"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <polygon points="-3.5,-15 3.5,-15 12,0 -12,0" fill="currentColor" />
              <rect x="-3.5" y="-25" width="7" height="11" rx="3" fill="currentColor" />
              <circle cx="0" cy="-30" r="5.5" fill="#E0A070" />
              <ellipse cx="0" cy="-33" rx="5.5" ry="3" fill="#2A1A10" />
            </g>

            {/* Dancer 2 (White) */}
            <g transform="translate(72, 76) scale(1.1)" style={{ color: "#FFFFFF" }}>
              <path
                d="M-3 -22 L-13 -34 M3 -22 L13 -34"
                stroke="#E0A070"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M-13 -34 L-16 -43 M13 -34 L16 -43"
                stroke="#F5B324"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <polygon points="-3.5,-15 3.5,-15 12,0 -12,0" fill="currentColor" />
              <rect x="-3.5" y="-25" width="7" height="11" rx="3" fill="currentColor" />
              <circle cx="0" cy="-30" r="5.5" fill="#E0A070" />
              <ellipse cx="0" cy="-33" rx="5.5" ry="3" fill="#2A1A10" />
            </g>
          </g>
        );

      case "learn":
        return (
          <g>
            {/* Glow circle */}
            <circle cx="55" cy="56" r="24" fill="#FFF3B0" fillOpacity="0.35" />
            {/* Diya Clay Bowl */}
            <path d="M33 68 Q55 90 77 68 Z" fill="#7C2D12" />
            {/* Flame */}
            <path d="M55 38 Q46 54 55 64 Q64 54 55 38 Z" fill="#FFF3B0" />
          </g>
        );

      case "squad":
        return (
          <g>
            {/* 6 colored satellite dots */}
            <circle cx="75" cy="54" r="5" fill="#FFC857" />
            <circle cx="65" cy="71" r="5" fill="#E5484D" />
            <circle cx="45" cy="71" r="5" fill="#FFFFFF" />
            <circle cx="35" cy="54" r="5" fill="#F5B324" />
            <circle cx="45" cy="37" r="5" fill="#D946EF" />
            <circle cx="65" cy="37" r="5" fill="#FF7A1A" />
            {/* Central leader dot */}
            <circle cx="55" cy="54" r="4" fill="#FFFFFF" />
          </g>
        );
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`relative block w-full aspect-[110/160] rounded-[14px] overflow-hidden border border-white/10 shadow-lg pointer-events-none select-none cursor-default ${className}`}
    >
      <svg
        viewBox="0 0 110 160"
        className="w-full h-full block"
        fill="none"
      >
        <defs>
          {/* Card specific background gradient */}
          <linearGradient id={`grad-${card.id}`} x1="0" y1="0" x2="1" y2="1">
            {card.cardType === "garba" && (
              <>
                <stop offset="0%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#7E22CE" />
              </>
            )}
            {card.cardType === "dandiya" && (
              <>
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#DC2626" />
              </>
            )}
            {card.cardType === "learn" && (
              <>
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#EA580C" />
              </>
            )}
            {card.cardType === "squad" && (
              <>
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#0F766E" />
              </>
            )}
          </linearGradient>

          {/* Bottom Dark Scrim Overlay */}
          <linearGradient id={`shade-${card.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.88" />
          </linearGradient>
        </defs>

        {/* 1. Base Gradient Canvas */}
        <rect
          width="110"
          height="160"
          rx="14"
          fill={`url(#grad-${card.id})`}
        />

        {/* 2. Middle SVG Artwork */}
        {renderCardArt()}

        {/* 3. Bottom Gradient Scrim */}
        <rect
          y="50"
          width="110"
          height="110"
          rx="14"
          fill={`url(#shade-${card.id})`}
        />

        {/* 4. Top-Left Badge Pill */}
        <g>
          <rect
            x="8"
            y="8"
            width={card.badge.length > 6 ? 72 : card.badge.length > 4 ? 62 : 54}
            height="18"
            rx="9"
            fill="#000000"
            fillOpacity="0.45"
            stroke="#FFFFFF"
            strokeOpacity="0.2"
            strokeWidth="0.8"
          />
          <text
            x={card.badge.length > 6 ? 44 : card.badge.length > 4 ? 39 : 35}
            y="21"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="700"
            fontFamily="var(--font-mono), ui-monospace, monospace"
          >
            {card.badge}
          </text>
        </g>

        {/* 5. Title Lines (Bricolage Grotesque 700 14px to 16px white, expanded title area) */}
        <text
          x="10"
          y="108"
          fill="#FFFFFF"
          fontSize="14.5"
          fontWeight="700"
          fontFamily="var(--font-display), system-ui, sans-serif"
        >
          {card.titleLine1}
        </text>
        <text
          x="10"
          y="125"
          fill="#FFFFFF"
          fontSize="14.5"
          fontWeight="700"
          fontFamily="var(--font-display), system-ui, sans-serif"
        >
          {card.titleLine2}
        </text>

        {/* 6. Bottom Mono Tagline (JetBrains Mono 11px color #FFD27A with 12px bottom padding) */}
        <text
          x="10"
          y="147"
          fill="#FFD27A"
          fontSize="11"
          fontWeight="700"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          letterSpacing="0.05em"
        >
          {card.tagline}
        </text>
      </svg>
    </div>
  );
}
