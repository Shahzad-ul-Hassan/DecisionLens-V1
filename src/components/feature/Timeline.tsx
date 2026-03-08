import React from "react";

export type TimelineItem = {
  id: string;
  timeLabel: string;
  title: string;
  subtitle?: string;
  detail?: string;
  tone?: "default" | "primary" | "muted";
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const tone = item.tone ?? "default";
        const border =
          tone === "primary"
            ? "border-sky-300/40"
            : tone === "muted"
            ? "border-white/8"
            : "border-white/14";

        return (
          <div
            key={item.id}
            className={`relative flex gap-3 rounded-2xl border ${border} bg-white/[0.04] p-3 text-xs text-slate-100/90`}
          >
            <div className="flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-sky-300/70" />
              {idx < items.length - 1 ? (
                <div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-sky-300/30 to-transparent" />
              ) : null}
            </div>
            <div className="space-y-1">
              <div className="text-[11px] text-slate-300/80">{item.timeLabel}</div>
              <div className="text-sm font-medium text-slate-50">{item.title}</div>
              {item.subtitle ? <div className="text-[11px] text-slate-300/85">{item.subtitle}</div> : null}
              {item.detail ? <div className="text-[11px] text-slate-300/80">{item.detail}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

