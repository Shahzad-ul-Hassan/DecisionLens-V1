export type LiquidityVenueRow = {
  id: string;
  venue: string;
  region: string;
  depthLabel: string;
  notes: string;
};

export type LiquiditySnapshot = {
  horizon: string;
  rows: LiquidityVenueRow[];
};

export const liquidityMock: LiquiditySnapshot = {
  horizon: "Intraday",
  rows: [
    {
      id: "liq-1",
      venue: "Primary venue A",
      region: "Global",
      depthLabel: "High",
      notes: "Tight spreads, consistent matching, suitable for larger tickets."
    },
    {
      id: "liq-2",
      venue: "Secondary venue B",
      region: "EMEA",
      depthLabel: "Layered",
      notes: "Depth steps increase outside reference corridor; monitor around scheduled events."
    },
    {
      id: "liq-3",
      venue: "Regional venue C",
      region: "APAC",
      depthLabel: "Moderate",
      notes: "Serviceable for standard size; consider staggering for larger flows."
    }
  ]
};

