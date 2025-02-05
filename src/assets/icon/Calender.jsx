import React from "react";

const CalendarIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width="48" height="48" rx="6" fillOpacity="0" />
    <path d="M10 34h7.4V17.4H34v-7.4H13.7Q10 10 10 13.5" fill="#4285f4" />
    <path d="M33.8 10v7.6h7.4v-4.1q0-3.5-3.5-3.5" fill="#1967d2" />
    <path d="M33.8 17.4h7.4v16.4h-7.4" fill="#fbbc04" />
    <path d="M10 33.8v3.9q0 3.5 3.5 3.5h4.1v-7.4" fill="#188038" />
    <path d="M17.4 33.8H33.8v7.4H17.4" fill="#34a853" />
    <path d="M33.8 41.2v-7.4h7.4" fill="#ea4335" />
    <path
      d="M20.4 22.9a2.5 2.2 1 1 1 2.5 2.7h-0.9h0.9a2.5 2.2 1 1 1-2.5 2.7M27 23.1l2.7-1.9h0.4v-0.7V30.8"
      stroke="#4285f4"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
      fill="none"
    />
  </svg>
);

export default CalendarIcon;
