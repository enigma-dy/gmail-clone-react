import React from "react";

const Keep = ({ width = 28, height = 20, ...props }) => (
  <svg
    viewBox="0 0 256 352"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      d="M232,352 L24,352 C10.72,352 0,341.28 0,328 L0,24 C0,10.72 10.72,0 24,0 L168,0 L256,88 L256,328 C256,341.28 245.28,352 232,352 Z"
      fill="#FFBA00"
    />
    <polygon points="168 0 256 88 168 88" fill="#FF9500" />
    <path
      d="M156,236 L156,256 L100,256 L100,236 L156,236 Z M127.92,120.001 L128.69995,120.006966 C157.023272,120.466144 179.84,143.5672 179.84,172 C179.84,190.56 170.12,206.8 155.52,216 L155.52,216 L100.32,216 C85.68,206.8 76,190.56 76,172 C76,143.28 99.28,120 128,120 L127.92,120.001 Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default Keep;
