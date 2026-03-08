import React, { useEffect, useMemo, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Timeline, type TimelineItem } from "@/components/feature/Timeline";
import { fetchIntelligenceItems } from "@/services/intelligence";
import type { IntelligenceItem } from "@/mocks/intelligence";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/app/providers/AuthProvider";
import { PremiumOverlay } from "@/components/feature/PremiumOverlay";

export function IntelligencePage() {
  const { user } = useAuth();
  const [items, setItems] = useState<IntelligenceItem[]>([]);

  useEffect(() => {
    void fetchIntelligenceItems().then(setItems);
  }, []);

  const timelineItems: TimelineItem[] = items.map((it) => ({
    id: it.id,
    timeLabel: it.timeAgo,
    title: it.title,
    subtitle: it.category,
    detail: it.detail,
    tone: it.impactHint === "high" ? "primary" : it.impactHint === "low" ? "muted" : "default"
  }));

  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const it of items) {
      map.set(it.category, (map.get(it.category) ?? 0) + 1);
    }
    return Array.from(map.entries()).map(([category, count]) => ({ category, count }));
  }, [items]);

  const premium = user?.premiumAccess === "premium";

  return (
    <PageScaffold title="Intelligence" description="Decision intelligence views, narratives, and annotations.">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card title="Summary" description="Structured, institutional-style view of recent items.">
          <div className="space-y-2 text-xs text-slate-300/85">
            <div>Items in view: {items.length || "—"}</div>
            <div className="space-y-1">
              {categoryCounts.map((c) => (
                <div key={c.category} className="flex items-center justify-between gap-4">
                  <span className="text-slate-300/80">{c.category}</span>
                  <span className="text-slate-100">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card title="Focus" description="How to read this area.">
          <div className="text-xs text-slate-300/85">
            Use this view to keep a concise record of environment changes, structural shifts, and governance-relevant
            updates. Treat items as prompts for review, not directives.
          </div>
        </Card>
        <Card title="Next pass" description="Suggested review rhythm.">
          <div className="text-xs text-slate-300/85">
            Align this area with your existing review cadence (e.g. daily desk review, weekly governance). Over time,
            replace mock entries with your own sources.
          </div>
        </Card>
      </div>

      <div className="relative mt-4">
        <Timeline items={timelineItems} />
        {!premium && <PremiumOverlay />}
      </div>
    </PageScaffold>
  );
}

