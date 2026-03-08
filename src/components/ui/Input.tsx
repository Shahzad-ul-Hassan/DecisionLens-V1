import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-400/80",
        "focus:outline-none focus:ring-2 focus:ring-sky-300/30",
        props.className
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

