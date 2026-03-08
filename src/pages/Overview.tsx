import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Card } from "@/components/ui/Card";
import { KeyValueList } from "@/components/feature/KeyValueList";
import { fetchOverviewSnapshot } from "@/services/overview";
import type { OverviewSnapshot } from "@/mocks/overview";

export function OverviewPage() {
  const [snapshot, setSnapshot] = useState<OverviewSnapshot | null>(null);
  const [activeTrend, setActiveTrend] = useState<string | null>(null);

  useEffect(() => {
    void fetchOverviewSnapshot().then((data) => {
      setSnapshot(data);
      setActiveTrend(data.defaultTrendWindow);
    });
  }, []);

  if (!snapshot) {
    return <PageScaffold title="Overview" description="High-level workspace summary and current context." />;
  }

  return (
    <PageScaffold title="Overview" description="High-level workspace summary and current context.">
      {/* Market Temperature, Volatility Regime, Confidence, Pressure */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Market Temperature" description={snapshot.horizon}>
          <p className="text-xs text-slate-300/85">{snapshot.marketTemperature}</p>
        </Card>
        <Card title="Volatility Regime">
          <p className="text-xs text-slate-300/85">{snapshot.volatilityRegime}</p>
        </Card>
        <Card title="Confidence Snapshot">
          <p className="text-xs text-slate-300/85">{snapshot.confidenceSnapshot}</p>
        </Card>
        <Card title="Pressure Indicator">
          <p className="text-xs text-slate-300/85">{snapshot.pressureIndicator}</p>
        </Card>
      </div>

      {/* Trend Window toggle + Session Strip */}
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Card title="Trend window">
          <div className="flex flex-wrap gap-2">
            {snapshot.trendWindows.map((tw) => {
              const active = tw === activeTrend;
              return (
                <button
                  key={tw}
                  type="button"
                  onClick={() => setActiveTrend(tw)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs transition",
                    active
                      ? "border-sky-300/30 bg-sky-300/10 text-slate-50"
                      : "border-white/10 bg-white/5 text-slate-200/90 hover:border-white/15 hover:bg-white/10"
                  ].join(" ")}
                >
                  {tw}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] text-slate-300/80">
            Use this to align the narrative with the horizon that matters most for your current work.
          </p>
        </Card>

        <Card title="Sessions">
          <div className="flex flex-wrap items-stretch gap-2">
            {snapshot.sessions.map((s) => (
              <div
                key={s.id}
                className="flex min-w-[110px] flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <div className="text-xs font-medium text-slate-50">{s.label}</div>
                <div className="mt-1 text-[11px] text-slate-300/85">{s.status}</div>
                <div className="mt-0.5 text-[11px] text-slate-300/75">{s.timeHint}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* News + Watchlist */}
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Card title="News" description="Neutral, curated context.">
          <ul className="space-y-2 text-xs text-slate-300/90">
            {snapshot.news.map((n) => (
              <li key={n.id} className="rounded-xl bg-white/[0.03] px-3 py-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-medium text-slate-50">{n.title}</span>
                  <span className="text-[10px] text-slate-300/75">{n.timeAgo}</span>
                </div>
                <div className="mt-0.5 text-[10px] text-slate-300/80">{n.source}</div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Watchlist" description="Key areas to monitor.">
          <KeyValueList
            items={snapshot.watchlist.map((w) => ({
              id: w.id,
              label: `${w.symbol} — ${w.name}`,
              value: `${w.changeLabel} • ${w.levelLabel}`
            }))}
          />
        </Card>
      </div>

      {/* Education preview + Final insight line */}
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Card title="Education preview" description={snapshot.education.title}>
          <p className="text-xs text-slate-300/85">{snapshot.education.summary}</p>
          <p className="mt-2 text-[11px] text-slate-300/75">
            Explore this topic deeper in the Academy section when you are ready to formalize it into a playbook.
          </p>
        </Card>

        <Card title="Final insight">
          <p className="text-xs text-slate-300/85">{snapshot.finalInsight}</p>
        </Card>
      </div>
    </PageScaffold>
  );
}

