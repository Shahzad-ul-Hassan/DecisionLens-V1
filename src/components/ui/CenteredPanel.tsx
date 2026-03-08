import React from "react";

export function CenteredPanel({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_700px_at_15%_10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(900px_700px_at_85%_0%,rgba(167,139,250,0.10),transparent_55%),radial-gradient(900px_700px_at_65%_90%,rgba(34,197,94,0.06),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-dvh max-w-2xl items-center justify-center px-4">
        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur">
          <div className="text-sm font-semibold tracking-tight">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-slate-300/80">{subtitle}</div> : null}
          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

