import React from "react";
import { Card } from "@/components/ui/Card";

export function PageScaffold({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-lg font-semibold tracking-tight">{title}</div>
        <div className="mt-1 text-sm text-slate-300/80">{description}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card title="Module" description="Mock data placeholders for Phase‑1.">
          <div className="text-sm text-slate-200/90">
            This area is wired for routing, gating, and layout. Replace placeholders with feature modules as they
            mature.
          </div>
        </Card>
        <Card title="Notes" description="Implementation-ready structure.">
          <div className="text-sm text-slate-200/90">
            Data access should flow through `services/` and `mocks/` first. Firebase integration can replace the auth
            adapter without changing routes.
          </div>
        </Card>
      </div>

      {children ? <div>{children}</div> : null}
    </div>
  );
}

