import React from "react";
import type { ReviewDecision } from "@/mocks/review";

const statusStyles: Record<ReviewDecision["status"], string> = {
  open: "bg-amber-400/10 text-amber-200 border-amber-400/30",
  "in-review": "bg-sky-400/10 text-sky-200 border-sky-400/30",
  closed: "bg-emerald-400/10 text-emerald-200 border-emerald-400/30"
};

export function ReviewLog({ items }: { items: ReviewDecision[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-xs text-slate-100/90"
        >
          <header className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] text-slate-300/80">{item.timestamp}</div>
              <div className="mt-0.5 text-sm font-medium text-slate-50">{item.owner}</div>
            </div>
            <span
              className={[
                "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                statusStyles[item.status]
              ].join(" ")}
            >
              {item.status.replace("-", " ")}
            </span>
          </header>
          <div className="mt-2 text-[11px] text-slate-300/85">{item.context}</div>
          <div className="mt-2 text-[11px] text-slate-300/80">
            <span className="font-semibold text-slate-200">Rationale: </span>
            {item.rationale}
          </div>
          {item.outcomeNotes ? (
            <div className="mt-2 text-[11px] text-slate-300/80">
              <span className="font-semibold text-slate-200">Outcome: </span>
              {item.outcomeNotes}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

