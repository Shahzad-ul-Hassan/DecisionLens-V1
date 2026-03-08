import React from "react";

export function PremiumOverlay({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-950/80 backdrop-blur-sm">
      <div className="pointer-events-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center shadow-panel">
        <div className="text-sm font-medium text-slate-50">Premium area</div>
        <div className="mt-1 text-xs text-slate-300/80">
          This view is available for premium workspaces. Use this space to surface deeper intelligence when enabled.
        </div>
        {children ? <div className="mt-3">{children}</div> : null}
      </div>
    </div>
  );
}

