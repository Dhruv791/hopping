"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { DANCER_CONFIGS } from "@/lib/garba";

interface DancerRingProps {
  className?: string;
  customDancerArt?: React.ReactNode;
}

interface CalculatedDancer {
  id: number;
  x: number;
  y: number;
  scale: number;
  color: string;
  tilt: number;
  bob: number;
  stickAngle: number;
}

export default function DancerRing({
  className = "",
  customDancerArt,
}: DancerRingProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Rotation angle in degrees
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Page visibility listener
  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && !document.hidden);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  // 40s Orbit Animation Loop
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const speed = 360 / 40; // 9 degrees per second

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        setRotation((prev) => (prev + speed * delta) % 360);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [prefersReducedMotion, isVisible]);

  // Design coordinate space: Center = (340, 110), rx = 170, ry = 36
  const dancers: CalculatedDancer[] = DANCER_CONFIGS.map((config, index) => {
    const currentAngleDeg = prefersReducedMotion
      ? config.initialAngle
      : (config.initialAngle + rotation) % 360;

    const angleRad = (currentAngleDeg * Math.PI) / 180;
    const rawX = 340 + 170 * Math.cos(angleRad);
    const rawY = 110 + 36 * Math.sin(angleRad);

    // Depth scale range: 0.80 (top/back y=74) to 1.20 (bottom/front y=146)
    const scale = 0.8 + ((rawY - 74) / 72) * 0.4;

    // Rhythmic bob and dandiya stick tap
    const timeSec = rotation / 9;
    const bob = prefersReducedMotion ? 0 : Math.sin(timeSec * 4 + index) * 3;
    const tilt = prefersReducedMotion ? 0 : Math.sin(timeSec * 3 + index * 1.5) * 3;
    const stickAngle = prefersReducedMotion ? 0 : Math.sin(timeSec * 8 + index) * 6;

    return {
      id: config.id,
      x: rawX,
      y: rawY + bob,
      scale: Math.max(0.75, Math.min(1.25, scale)),
      color: config.color,
      tilt,
      bob,
      stickAngle,
    };
  });

  // Sort ascending by Y so back dancers render first and front dancers overlap them
  const sortedDancers = [...dancers].sort((a, b) => a.y - b.y);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-[620px] mx-auto select-none pointer-events-none relative ${className}`}
      aria-label="Ring of 9 garba dancers performing in unison"
    >
      <svg
        viewBox="0 0 680 180"
        className="w-full h-auto overflow-visible"
        fill="none"
      >
        <defs>
          {/* Floor Radial Glow */}
          <radialGradient id="ringFloorglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5B324" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F5B324" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Floor Warm Glow */}
        <ellipse
          cx="340"
          cy="110"
          rx="215"
          ry="52"
          fill="url(#ringFloorglow)"
        />

        {/* 2. Floor Dashed Garba Circle */}
        <ellipse
          cx="340"
          cy="110"
          rx="170"
          ry="36"
          fill="none"
          stroke="#F5B324"
          strokeOpacity="0.45"
          strokeDasharray="4 5"
          strokeWidth="1"
        />

        {/* 3. 9 Garba Dancers (Z-sorted) */}
        {sortedDancers.map((d) => (
          <g
            key={`dancer-${d.id}`}
            transform={`translate(${d.x.toFixed(1)}, ${d.y.toFixed(1)}) scale(${d.scale.toFixed(3)}) rotate(${d.tilt.toFixed(1)})`}
            style={{ color: d.color }}
          >
            {customDancerArt ? (
              customDancerArt
            ) : (
              <g>
                {/* Arms */}
                <path
                  d="M-3 -22 L-13 -34 M3 -22 L13 -34"
                  stroke="#E0A070"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Animated Dandiya sticks */}
                <g transform={`rotate(${d.stickAngle.toFixed(1)} 0 -34)`}>
                  <path
                    d="M-13 -34 L-16 -43 M13 -34 L16 -43"
                    stroke="#F5B324"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
                {/* Skirt */}
                <polygon
                  points="-3.5,-15 3.5,-15 12,0 -12,0"
                  fill="currentColor"
                />
                {/* Torso */}
                <rect
                  x="-3.5"
                  y="-25"
                  width="7"
                  height="11"
                  rx="3"
                  fill="currentColor"
                />
                {/* Head */}
                <circle cx="0" cy="-30" r="5.5" fill="#E0A070" />
                {/* Hair */}
                <ellipse cx="0" cy="-33" rx="5.5" ry="3" fill="#2A1A10" />
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
