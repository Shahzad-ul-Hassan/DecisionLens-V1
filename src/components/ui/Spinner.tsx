import React from "react";

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-label="Loading"
      className={[
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white/70",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

