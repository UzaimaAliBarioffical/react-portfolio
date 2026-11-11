import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClasses =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-black"></span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-black">
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
