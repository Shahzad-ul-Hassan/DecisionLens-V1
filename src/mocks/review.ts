export type ReviewDecision = {
  id: string;
  timestamp: string;
  owner: string;
  context: string;
  rationale: string;
  outcomeNotes?: string;
  status: "open" | "in-review" | "closed";
};

export const reviewMock: ReviewDecision[] = [
  {
    id: "rev-1",
    timestamp: "Today • 09:10",
    owner: "Desk A",
    context: "Revisit exposure around upcoming policy window.",
    rationale: "Clustered events within a short window; ensure sizing and buffers are aligned with governance.",
    status: "in-review"
  },
  {
    id: "rev-2",
    timestamp: "Yesterday • 15:40",
    owner: "Desk B",
    context: "Adjust concentration limits in a single segment.",
    rationale: "Concentration drift over the last quarter suggests a minor recalibration.",
    outcomeNotes: "Limits updated, documentation completed.",
    status: "closed"
  },
  {
    id: "rev-3",
    timestamp: "2 days ago • 11:05",
    owner: "Committee",
    context: "Evaluate alignment of risk budget with current environment.",
    rationale: "Environment has normalized relative to prior stress period; consider rebalancing allocations.",
    status: "open"
  }
];

