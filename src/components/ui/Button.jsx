import React from "react";

export default function Button({
  children,
  variant = "primary",
  as = "button",
  icon: Icon,
  iconPosition = "left",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl px-6 py-3 text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-black text-white font-semibold hover:bg-accent-hover shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)]",
    secondary:
      "bg-white border border-border text-foreground hover:border-black/50 hover:text-black hover:bg-surface-hover shadow-sm",
    outline:
      "border border-black/30 text-black hover:bg-black/5 hover:border-black",
  };

  const Component = as === "a" ? "a" : "button";

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
      )}
    </Component>
  );
}
