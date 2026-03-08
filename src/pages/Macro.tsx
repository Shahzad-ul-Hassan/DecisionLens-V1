import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Timeline, type TimelineItem } from "@/components/feature/Timeline";
import { fetchMacroEvents } from "@/services/macro";
import type { MacroEvent } from "@/mocks/macro";

export function MacroPage() {
  const [events, setEvents] = useState<MacroEvent[]>([]);

  useEffect(() => {
    void fetchMacroEvents().then(setEvents);
  }, []);

  const items: TimelineItem[] = events.map((ev) => ({
    id: ev.id,
    timeLabel: `${ev.timeLabel} • ${ev.region}`,
    title: ev.title,
    detail: ev.description,
    tone: ev.emphasis === "primary" ? "primary" : ev.emphasis === "baseline" ? "muted" : "default"
  }));

  return (
    <PageScaffold title="Macro" description="Macro context, event calendar, and drivers.">
      <Timeline items={items} />
    </PageScaffold>
  );
}

