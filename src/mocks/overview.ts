export type OverviewMetric = {
  id: string;
  label: string;
  value: string;
  change?: string;
};

export type OverviewHighlight = {
  id: string;
  title: string;
  summary: string;
};

export type OverviewSession = {
  id: string;
  label: string;
  status: string;
  timeHint: string;
};

export type OverviewNewsItem = {
  id: string;
  title: string;
  source: string;
  timeAgo: string;
};

export type OverviewWatchItem = {
  id: string;
  symbol: string;
  name: string;
  changeLabel: string;
  levelLabel: string;
};

export type OverviewEducationPreview = {
  title: string;
  summary: string;
};

export type OverviewSnapshot = {
  regime: string;
  conditions: string;
  horizon: string;
  metrics: OverviewMetric[];
  highlights: OverviewHighlight[];
  marketTemperature: string;
  volatilityRegime: string;
  confidenceSnapshot: string;
  pressureIndicator: string;
  trendWindows: string[];
  defaultTrendWindow: string;
  sessions: OverviewSession[];
  news: OverviewNewsItem[];
  watchlist: OverviewWatchItem[];
  education: OverviewEducationPreview;
  finalInsight: string;
};

export const overviewMock: OverviewSnapshot = {
  regime: "Neutral",
  conditions: "Balanced conditions with pockets of stress and resilience across segments.",
  horizon: "Next 24–72 hours",
  metrics: [
    { id: "breadth", label: "Breadth", value: "Mixed", change: "stable" },
    { id: "volatility", label: "Volatility", value: "Moderate", change: "slightly higher" },
    { id: "liquidity", label: "Liquidity", value: "Layered", change: "unchanged" },
    { id: "participation", label: "Participation", value: "Distributed", change: "widening" }
  ],
  highlights: [
    {
      id: "macro-window",
      title: "Upcoming catalyst window",
      summary:
        "Several scheduled events cluster in the next two sessions. Use this window to reassess exposure and review prior decisions."
    },
    {
      id: "liquidity-bands",
      title: "Liquidity bands",
      summary:
        "Depth remains concentrated around well-defined ranges. Outlier activity is limited and contained within prior corridors."
    }
  ],
  marketTemperature: "Calm with localized pockets of activity.",
  volatilityRegime: "Moderate and within historical corridors.",
  confidenceSnapshot: "Steady; information and outcomes are broadly aligned.",
  pressureIndicator: "No single theme is exerting outsized pressure.",
  trendWindows: ["Intraday", "24–72 hours", "Weekly"],
  defaultTrendWindow: "24–72 hours",
  sessions: [
    { id: "asia", label: "Asia", status: "Open", timeHint: "In play" },
    { id: "london", label: "London", status: "Upcoming", timeHint: "In 3h", },
    { id: "ny", label: "New York", status: "Later", timeHint: "In 8h" }
  ],
  news: [
    {
      id: "n-1",
      title: "Scheduled remarks later today",
      source: "Policy calendar",
      timeAgo: "12m ago"
    },
    {
      id: "n-2",
      title: "Activity data broadly in line with expectations",
      source: "Macro desk",
      timeAgo: "45m ago"
    }
  ],
  watchlist: [
    {
      id: "w-1",
      symbol: "Basket A",
      name: "Core exposure",
      changeLabel: "Calm",
      levelLabel: "Within corridor"
    },
    {
      id: "w-2",
      symbol: "Basket B",
      name: "Thematic sleeve",
      changeLabel: "Gradual",
      levelLabel: "Near midpoint"
    }
  ],
  education: {
    title: "Working with scenario ranges",
    summary: "Short guidance on using ranges instead of point views when planning under uncertainty."
  },
  finalInsight:
    "Conditions remain orderly. Use this window to refresh watchlists, clarify thresholds, and ensure review items are current."
};

