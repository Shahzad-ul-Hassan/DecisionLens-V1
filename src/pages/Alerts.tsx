import React, { useEffect, useMemo, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { DataTable, type Column } from "@/components/feature/DataTable";
import { fetchAlertConfigs } from "@/services/alerts";
import type { AlertConfig } from "@/mocks/alerts";
import { Card } from "@/components/ui/Card";

type CategoryFilter = "all" | "environment" | "structure" | "governance";

export function AlertsPage() {
  const [rows, setRows] = useState<AlertConfig[]>([]);
  const [category, setCategory] = useState<CategoryFilter>("all");

  useEffect(() => {
    void fetchAlertConfigs().then(setRows);
  }, []);

  const columns: Column<AlertConfig>[] = [
    { id: "label", header: "Label", accessor: (r) => r.label },
    { id: "scope", header: "Scope", accessor: (r) => r.scope },
    { id: "channel", header: "Channel", accessor: (r) => r.channel },
    { id: "status", header: "Status", accessor: (r) => r.status },
    { id: "notes", header: "Notes", accessor: (r) => r.notes }
  ];

  const filteredRows = useMemo(() => {
    if (category === "all") return rows;
    if (category === "environment") return rows.filter((r) => r.scope === "Environment");
    if (category === "structure") return rows.filter((r) => r.scope === "Portfolio structure");
    if (category === "governance") return rows.filter((r) => r.scope === "Governance");
    return rows;
  }, [rows, category]);

  const recent = rows.map((r, idx) => ({
    id: r.id,
    label: r.label,
    scope: r.scope,
    status: r.status,
    timeAgo: idx === 0 ? "Today" : idx === 1 ? "Yesterday" : "This week"
  }));

  return (
    <PageScaffold title="Alerts" description="Thresholds and monitoring across configured entities.">
      <div className="space-y-4">
        <Card title="Categories" description="Filter alert settings by scope.">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: "all", label: "All", value: "all" as CategoryFilter },
              { id: "env", label: "Environment", value: "environment" as CategoryFilter },
              { id: "struct", label: "Structure", value: "structure" as CategoryFilter },
              { id: "gov", label: "Governance", value: "governance" as CategoryFilter }
            ].map((c) => {
              const active = c.value === category;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs transition",
                    active
                      ? "border-sky-300/30 bg-sky-300/10 text-slate-50"
                      : "border-white/10 bg-white/5 text-slate-200/90 hover:border-white/15 hover:bg-white/10"
                  ].join(" ")}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Card>

        <Card title="Alert settings">
          <DataTable columns={columns} rows={filteredRows} />
        </Card>

        <Card title="Recent alerts / history">
          <ul className="space-y-2 text-xs text-slate-300/90">
            {recent.map((r) => (
              <li key={r.id} className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-3 py-2">
                <div className="min-w-0">
                  <div className="truncate text-[11px] text-slate-300/80">
                    {r.scope} • {r.status}
                  </div>
                  <div className="truncate text-xs text-slate-100">{r.label}</div>
                </div>
                <div className="shrink-0 text-[11px] text-slate-300/80">{r.timeAgo}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </PageScaffold>
  );
}

