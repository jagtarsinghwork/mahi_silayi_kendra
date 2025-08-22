'use client';
import React from 'react';

const Logo = () => (
  <svg
    width="100"
    height="40"
    viewBox="0 0 320 120"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc"
  >
    <title id="title">Laddu Gopal Dresses</title>
    <desc id="desc">
      Peacock feather with Krishna flute and laddu, brand text to the right.
    </desc>
    <defs>
      <linearGradient id="peacock" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#27b18a" />
        <stop offset="50%" stopColor="#1e88e5" />
        <stop offset="100%" stopColor="#7e57c2" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffd86b" />
        <stop offset="100%" stopColor="#f4b400" />
      </linearGradient>
    </defs>

    {/* LEFT ICON GROUP */}
    <g transform="translate(16,18)">
      {/* Stylized peacock feather */}
      <path
        d="M34 6
             C 10 10, 2 28, 14 46
             C 26 64, 52 68, 68 52
             C 84 36, 78 18, 58 12
             C 50 10, 44 8, 34 6 Z"
        fill="url(#peacock)"
      />
      {/* Feather rib */}
      <path
        d="M18 20 C 36 30, 54 34, 70 30"
        fill="none"
        stroke="#ffffff"
        strokeOpacity=".8"
        strokeWidth="2"
      />
      {/* Feather eye */}
      <circle cx="54" cy="24" r="9" fill="#00a67e" />
      <circle cx="54" cy="24" r="5.5" fill="#1e88e5" />
      <circle cx="54" cy="24" r="2.5" fill="#7e57c2" />

      {/* Flute (bansuri) crossing */}
      <g transform="rotate(-8 48 52)">
        <rect
          x="6"
          y="58"
          width="88"
          height="6"
          rx="3"
          fill="url(#goldGrad)"
          stroke="#c69300"
          strokeWidth="1"
        />
        {/* flute rings */}
        <rect
          x="12"
          y="58"
          width="2.5"
          height="6"
          fill="#c69300"
          opacity=".9"
        />
        <rect
          x="30"
          y="58"
          width="2.5"
          height="6"
          fill="#c69300"
          opacity=".9"
        />
        <rect
          x="48"
          y="58"
          width="2.5"
          height="6"
          fill="#c69300"
          opacity=".9"
        />
        {/* flute holes */}
        <circle cx="25" cy="61" r="1.4" fill="#6f5200" />
        <circle cx="39" cy="61" r="1.4" fill="#6f5200" />
        <circle cx="53" cy="61" r="1.4" fill="#6f5200" />
        <circle cx="67" cy="61" r="1.4" fill="#6f5200" />
        {/* tassel */}
        <path
          d="M92 61 q6 6 0 12"
          fill="none"
          stroke="#c69300"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Laddu (sweet) */}
      <g transform="translate(78,64)">
        <circle
          cx="0"
          cy="0"
          r="12"
          fill="url(#goldGrad)"
          stroke="#c69300"
          strokeWidth="1"
        />
        {/* sesame texture */}
        <g fill="#fff3cd" opacity=".8">
          <circle cx="-4" cy="-2" r="1" />
          <circle cx="3" cy="-4" r="1" />
          <circle cx="5" cy="1" r="1" />
          <circle cx="-1" cy="5" r="1" />
        </g>
        {/* small leaf plate */}
        <ellipse cx="0" cy="10" rx="18" ry="5.2" fill="#2e7d32" opacity=".28" />
      </g>
    </g>

    {/* RIGHT TEXT */}
    <g transform="translate(138,42)">
      <text
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing=".4px"
        fill="#1a1a1a"
      >
        <tspan>Laddu </tspan>
        <tspan fill="#1e88e5">Gopal</tspan>
        <tspan> Dresses</tspan>
      </text>
      <text
        x="0"
        y="26"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif"
        fontWeight="500"
        fontSize="12"
        letterSpacing=".3px"
        fill="#f4b400"
      >
        Traditional • Festive • Premium
      </text>
    </g>
  </svg>
);

export default Logo;
