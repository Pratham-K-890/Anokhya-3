"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type AnokhyaMarkGraphicProps = {
  size?: number;
  className?: string;
};

/** Vector Anokhya chip mark with a crisp circular badge border. */
export function AnokhyaMarkGraphic({ size = 36, className }: AnokhyaMarkGraphicProps) {
  const rawId = useId().replace(/:/g, "");
  const stroke = `anokhya-stroke-${rawId}`;
  const fill = `anokhya-fill-${rawId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={stroke} x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f6d37a" />
          <stop offset="0.42" stopColor="#ff9a3d" />
          <stop offset="1" stopColor="#e8740f" />
        </linearGradient>
        <radialGradient
          id={fill}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32 32) rotate(90) scale(30)"
        >
          <stop stopColor="#1c1410" />
          <stop offset="1" stopColor="#0a080c" />
        </radialGradient>
      </defs>

      <circle cx="32" cy="32" r="30.5" fill={`url(#${fill})`} />
      <circle cx="32" cy="32" r="30.25" fill="none" stroke={`url(#${stroke})`} strokeWidth="1.35" />
      <circle cx="32" cy="32" r="27.75" fill="none" stroke={`url(#${stroke})`} strokeWidth="0.55" opacity="0.45" />

      <g stroke={`url(#${stroke})`} strokeLinecap="round" fill="none" strokeWidth="1.15" opacity="0.9">
        <path d="M32 7.5a25 25 0 0 1 17.8 7.4" />
        <path d="M49.5 18.5a25 25 0 0 1 4.6 11.2" />
        <path d="M54 32a25 25 0 0 1-6.2 14.8" />
        <path d="M40 52.5a25 25 0 0 1-14.2 2.2" />
        <path d="M14.5 49a25 25 0 0 1-9.8-12.5" />
        <path d="M9.5 28.5a25 25 0 0 1 6.5-15.2" />
        <path d="M21 11.5a25 25 0 0 1 7.5-3.2" />
      </g>

      <g stroke={`url(#${stroke})`} strokeLinecap="round" fill="none">
        <path d="M18 32h-3.2M46 32h3.2M32 18v-3.2M32 46v3.2" strokeWidth="1.1" />
        <circle cx="14.8" cy="32" r="1.15" fill={`url(#${stroke})`} stroke="none" />
        <circle cx="49.2" cy="32" r="1.15" fill={`url(#${stroke})`} stroke="none" />
        <circle cx="32" cy="14.8" r="1.15" fill={`url(#${stroke})`} stroke="none" />
        <circle cx="32" cy="49.2" r="1.15" fill={`url(#${stroke})`} stroke="none" />
      </g>

      <g stroke={`url(#${stroke})`} strokeLinejoin="round" fill="none">
        <rect x="24.25" y="24.25" width="15.5" height="15.5" rx="2.75" strokeWidth="1.55" />
        <rect x="27.5" y="27.5" width="9" height="9" rx="1.25" strokeWidth="1" opacity="0.92" />
        <path d="M33.25 27.5v3.25h3.25" strokeWidth="1" opacity="0.85" />
      </g>

      <g stroke={`url(#${stroke})`} strokeLinecap="round" fill="none" strokeWidth="1.05">
        <path d="M28 22.1v-2.35M32 21.35v-3.1M36 22.1v-2.35" />
        <path d="M28 41.9v2.35M32 42.65v3.1M36 41.9v2.35" />
        <path d="M22.1 28h-2.35M21.35 32h-3.1M22.1 36h-2.35" />
        <path d="M41.9 28h2.35M42.65 32h3.1M41.9 36h2.35" />
      </g>

      <g fill={`url(#${stroke})`} stroke="none">
        {[
          [28, 18.75],
          [32, 17.85],
          [36, 18.75],
          [28, 45.25],
          [32, 46.15],
          [36, 45.25],
          [18.75, 28],
          [17.85, 32],
          [18.75, 36],
          [45.25, 28],
          [46.15, 32],
          [45.25, 36],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.95" />
        ))}
      </g>
    </svg>
  );
}