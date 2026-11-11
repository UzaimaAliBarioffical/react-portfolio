import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 md:p-8 hover:border-black/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
