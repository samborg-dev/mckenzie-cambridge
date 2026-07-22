"use client";

import { useId } from "react";

/**
 * McKenzie Cambridge crest — placeholder logo used across the site.
 *
 * Renders a self-contained gold-on-navy shield monogram so the whole site has a
 * consistent, intentional mark everywhere (header, hero, footer).
 *
 * To swap in the real crest later: set LOGO_SRC to its path (e.g. "/logo.png"
 * after dropping the file in /public) and every instance updates automatically.
 */
const LOGO_SRC: string | null = null; // e.g. "/logo.png"

interface CrestProps {
  size?: number;
  className?: string;
  alt?: string;
}

export default function Crest({
  size = 44,
  className = "",
  alt = "McKenzie Cambridge Preparatory Academy crest",
}: CrestProps) {
  const uid = useId().replace(/:/g, "");

  if (LOGO_SRC) {
    return (
      <img className={`crest ${className}`} src={LOGO_SRC} alt={alt} width={size} height={size} />
    );
  }

  const gold = `gold-${uid}`;
  const navy = `navy-${uid}`;

  return (
    <svg
      className={`crest ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2d79a" />
          <stop offset="0.5" stopColor="#e4c374" />
          <stop offset="1" stopColor="#b6892a" />
        </linearGradient>
        <linearGradient id={navy} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2c66" />
          <stop offset="1" stopColor="#0b1436" />
        </linearGradient>
      </defs>

      {/* crown star */}
      <path
        d="M60 6 l2.6 5.6 6.1 0.7 -4.5 4.2 1.2 6 -5.4 -3 -5.4 3 1.2 -6 -4.5 -4.2 6.1 -0.7 Z"
        fill={`url(#${gold})`}
      />

      {/* shield */}
      <path
        d="M22 28 H98 V72 C98 95 81 108 60 115 C39 108 22 95 22 72 Z"
        fill={`url(#${navy})`}
        stroke={`url(#${gold})`}
        strokeWidth="3.5"
      />
      {/* inner keyline */}
      <path
        d="M28 34 H92 V71 C92 90 77 102 60 108 C43 102 28 90 28 71 Z"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="1.1"
        opacity="0.6"
      />

      {/* MC monogram */}
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="38"
        fontWeight="700"
        fill={`url(#${gold})`}
      >
        MC
      </text>

      {/* banner */}
      <path d="M26 92 L94 92 L88 104 L32 104 Z" fill={`url(#${gold})`} />
      <path d="M18 90 L26 92 L26 100 Z" fill="#b6892a" />
      <path d="M102 90 L94 92 L94 100 Z" fill="#b6892a" />
      <text
        x="60"
        y="101"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#0b1436"
      >
        MCPA
      </text>
    </svg>
  );
}
