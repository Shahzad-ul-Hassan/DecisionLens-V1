import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Card } from "@/components/ui/Card";
import { ReportTemplateGrid } from "@/components/feature/ReportTemplateGrid";
import { fetchReportsSnapshot } from "@/services/reports";
import type { ReportsSnapshot } from "@/mocks/reports";

export function ReportsPage() {
  const [snapshot, setSnapshot] = useState<ReportsSnapshot | null>(null);

  useEffect(() => {
    void fetchReportsSnapshot().then(setSnapshot);
  }, []);

  return (
    <PageScaffold title="Reports" description="Generated briefs, snapshots, and exports.">
      {snapshot ? (
        <div className="space-y-4">
          <Card title="Templates">
            <ReportTemplateGrid snapshot={snapshot} />
          </Card>
          <Card title="Recent reports">
            <ul className="space-y-2 text-xs text-slate-300/90">
              {snapshot.recent.map((r) => {
                const tpl = snapshot.templates.find((t) => t.id === r.templateId);
                return (
                  <li key={r.id} className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-3 py-2">
                    <div className="min-w-0">
                      <div className="truncate text-[11px] text-slate-300/85">{r.createdAt}</div>
                      <div className="truncate text-xs text-slate-100">
                        {tpl?.name ?? "Template"} • {r.status.toUpperCase()}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      ) : null}
    </PageScaffold>
  );
}

