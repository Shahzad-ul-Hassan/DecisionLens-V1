import React from "react";
import type { ReportsSnapshot } from "@/mocks/reports";
import { Card } from "@/components/ui/Card";

export function ReportTemplateGrid({ snapshot }: { snapshot: ReportsSnapshot }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {snapshot.templates.map((tpl) => (
        <Card
          key={tpl.id}
          title={tpl.name}
          description={`${tpl.cadence.toUpperCase()} • ${tpl.audience}`}
        >
          <div className="text-xs text-slate-300/85">{tpl.summary}</div>
        </Card>
      ))}
    </div>
  );
}

