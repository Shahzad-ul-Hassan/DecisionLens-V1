import React from "react";

export function Card({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-panel">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
          {description ? <p className="mt-1 text-xs text-slate-300/80">{description}</p> : null}
        </div>
      </header>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}

