import React, { useEffect, useMemo, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { DataTable, type Column } from "@/components/feature/DataTable";
import { fetchAdminSnapshot } from "@/services/admin";
import type { AdminSnapshot, AdminUserRow } from "@/mocks/admin";
import { Card } from "@/components/ui/Card";

export function AdminPage() {
  const [snapshot, setSnapshot] = useState<AdminSnapshot | null>(null);

  useEffect(() => {
    void fetchAdminSnapshot().then(setSnapshot);
  }, []);

  const columns: Column<AdminUserRow>[] = [
    { id: "name", header: "Name", accessor: (r) => r.name },
    { id: "email", header: "Email", accessor: (r) => r.email },
    { id: "role", header: "Role", accessor: (r) => r.role },
    { id: "premium", header: "Premium", accessor: (r) => r.premiumAccess },
    { id: "status", header: "Status", accessor: (r) => r.status }
  ];

  const stats = useMemo(() => {
    if (!snapshot) {
      return { total: 0, premium: 0, pending: 0 };
    }
    const total = snapshot.users.length;
    const premium = snapshot.users.filter((u) => u.premiumAccess === "premium").length;
    const pending = snapshot.users.filter((u) => u.status === "invited").length;
    return { total, premium, pending };
  }, [snapshot]);

  const pendingApprovals = snapshot?.users.filter((u) => u.status === "invited") ?? [];

  return (
    <PageScaffold title="Admin" description="Role-aware administrative area backed by mock datasets.">
      {snapshot ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Workspace size" description="Mock admin stat">
              <div className="text-2xl font-semibold text-slate-50">{stats.total}</div>
              <div className="mt-1 text-xs text-slate-300/85">Total users</div>
            </Card>
            <Card title="Premium coverage" description="Mock admin stat">
              <div className="text-2xl font-semibold text-slate-50">{stats.premium}</div>
              <div className="mt-1 text-xs text-slate-300/85">Users with premium access</div>
            </Card>
            <Card title="Pending approvals" description="Mock admin stat">
              <div className="text-2xl font-semibold text-slate-50">{stats.pending}</div>
              <div className="mt-1 text-xs text-slate-300/85">Invitations awaiting activation</div>
            </Card>
          </div>

          <Card title="Users">
            <DataTable columns={columns} rows={snapshot.users} />
          </Card>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Card title="Pending approvals">
              <ul className="space-y-2 text-xs text-slate-300/90">
                {pendingApprovals.length === 0 ? (
                  <li className="text-[11px] text-slate-300/80">No pending approvals in the mock dataset.</li>
                ) : (
                  pendingApprovals.map((u) => (
                    <li
                      key={u.id}
                      className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-3 py-2"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-xs text-slate-100">{u.name}</div>
                        <div className="truncate text-[11px] text-slate-300/80">{u.email}</div>
                      </div>
                      <div className="shrink-0 text-[11px] text-slate-300/80">Invite sent</div>
                    </li>
                  ))
                )}
              </ul>
            </Card>

            <Card title="Revenue / summary placeholders" description="Purely illustrative blocks.">
              <div className="space-y-2 text-xs text-slate-300/85">
                <div className="flex items-center justify-between gap-4">
                  <span>Mock annual contract value</span>
                  <span className="text-slate-100">$—</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Seats in use</span>
                  <span className="text-slate-100">Mock: {stats.total}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Seats with premium</span>
                  <span className="text-slate-100">Mock: {stats.premium}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : null}
    </PageScaffold>
  );
}

