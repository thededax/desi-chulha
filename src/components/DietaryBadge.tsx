import React from "react";

interface DietaryBadgeProps {
  isVeg: boolean;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function DietaryBadge({
  isVeg,
  size = "md",
  showLabel = false,
  className = "",
}: DietaryBadgeProps) {
  const dimensions =
    size === "sm"
      ? { box: "w-3.5 h-3.5", inner: "w-1.5 h-1.5", text: "text-[10px]" }
      : size === "lg"
      ? { box: "w-5 h-5", inner: "w-2.5 h-2.5", text: "text-xs" }
      : { box: "w-4 h-4", inner: "w-2 h-2", text: "text-[11px]" };

  if (isVeg) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 select-none ${className}`}
        aria-label="Vegetarian"
        title="Pure Vegetarian"
      >
        <span
          className={`${dimensions.box} border-[1.5px] border-[#15803D] bg-white rounded-[3px] flex items-center justify-center shrink-0 p-[2px]`}
          aria-hidden="true"
        >
          <span className={`${dimensions.inner} rounded-full bg-[#15803D] block`} />
        </span>
        {showLabel && (
          <span className={`${dimensions.text} font-semibold uppercase tracking-wider text-[#15803D]`}>
            Veg
          </span>
        )}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 select-none ${className}`}
      aria-label="Non-Vegetarian"
      title="Non-Vegetarian"
    >
      <span
        className={`${dimensions.box} border-[1.5px] border-[#B91C1C] bg-white rounded-[3px] flex items-center justify-center shrink-0 p-[2px]`}
        aria-hidden="true"
      >
        {/* Triangle for Non-Veg (Indian Standard) */}
        <svg
          viewBox="0 0 100 100"
          className={`${dimensions.inner} fill-[#B91C1C]`}
          aria-hidden="true"
        >
          <polygon points="50,15 95,85 5,85" />
        </svg>
      </span>
      {showLabel && (
        <span className={`${dimensions.text} font-semibold uppercase tracking-wider text-[#B91C1C]`}>
          Non-Veg
        </span>
      )}
    </span>
  );
}
