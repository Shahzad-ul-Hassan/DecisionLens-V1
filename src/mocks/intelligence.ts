export type IntelligenceItem = {
  id: string;
  category: "macro" | "liquidity" | "flows" | "structure" | "other";
  title: string;
  detail: string;
  timeAgo: string;
  impactHint: "low" | "medium" | "high";
};

export const intelligenceMock: IntelligenceItem[] = [
  {
    id: "int-1",
    category: "macro",
    title: "Policy remarks scheduled after close",
    detail:
      "A set of policy remarks is scheduled in the upcoming global session. Use this as a checkpoint for existing positions and risk budgets.",
    timeAgo: "12m ago",
    impactHint: "medium"
  },
  {
    id: "int-2",
    category: "liquidity",
    title: "Depth redistribution across venues",
    detail:
      "Liquidity has shifted modestly between venues while staying within prior ranges. Execution quality should remain stable under typical size.",
    timeAgo: "32m ago",
    impactHint: "low"
  },
  {
    id: "int-3",
    category: "structure",
    title: "Term structure subtle steepening",
    detail:
      "Term structure is showing a slight steepening relative to the past week. This is consistent with a modest repricing of near-term uncertainty.",
    timeAgo: "1h 8m ago",
    impactHint: "medium"
  },
  {
    id: "int-4",
    category: "flows",
    title: "Flow profile within expected corridors",
    detail:
      "Aggregate flow remains within historical corridors. Larger tickets are being absorbed without visible dislocation.",
    timeAgo: "2h 26m ago",
    impactHint: "low"
  }
];

