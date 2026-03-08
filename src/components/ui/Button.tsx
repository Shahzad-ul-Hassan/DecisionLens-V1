import React from "react";

type ButtonVariant = "primary" | "ghost";

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-300/30 disabled:cursor-not-allowed disabled:opacity-60";

  const styles =
    variant === "ghost"
      ? "border border-white/10 bg-white/5 text-slate-100 hover:border-white/15 hover:bg-white/10"
      : "border border-sky-300/25 bg-gradient-to-r from-sky-300/20 to-violet-300/15 text-slate-50 hover:border-sky-300/35";

  return <button className={[base, styles, className].filter(Boolean).join(" ")} {...props} />;
}

