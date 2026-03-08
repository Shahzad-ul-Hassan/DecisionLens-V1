import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Card } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/feature/DataTable";
import { fetchLiquiditySnapshot } from "@/services/liquidity";
import type { LiquiditySnapshot, LiquidityVenueRow } from "@/mocks/liquidity";

export function LiquidityPage() {
  const [snapshot, setSnapshot] = useState<LiquiditySnapshot | null>(null);

  useEffect(() => {
    void fetchLiquiditySnapshot().then(setSnapshot);
  }, []);

  const columns: Column<LiquidityVenueRow>[] = [
    { id: "venue", header: "Venue", accessor: (r) => r.venue },
    { id: "region", header: "Region", accessor: (r) => r.region },
    { id: "depthLabel", header: "Depth", accessor: (r) => r.depthLabel },
    { id: "notes", header: "Notes", accessor: (r) => r.notes }
  ];

  return (
    <PageScaffold title="Liquidity" description="Liquidity conditions, depth, and venue coverage.">
      {snapshot ? (
        <div className="space-y-4">
          <Card title="Horizon" description={snapshot.horizon}>
            <div className="text-xs text-slate-300/85">
              This view summarizes depth and venue conditions from the mock dataset. Replace with live data when ready.
            </div>
          </Card>

          <Card title="Liquidity events" description="Neutral, informational table of venues and depth.">
            <DataTable columns={columns} rows={snapshot.rows} />
          </Card>
        </div>
      ) : null}
    </PageScaffold>
  );
}

