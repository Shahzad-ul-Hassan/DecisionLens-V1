export type AlertConfig = {
  id: string;
  label: string;
  scope: string;
  channel: "dashboard" | "email" | "summary";
  status: "active" | "paused";
  notes: string;
};

export const alertsMock: AlertConfig[] = [
  {
    id: "al-1",
    label: "Conditions change outside corridor",
    scope: "Environment",
    channel: "dashboard",
    status: "active",
    notes: "Highlight when key conditions move outside agreed ranges."
  },
  {
    id: "al-2",
    label: "Concentration threshold reached",
    scope: "Portfolio structure",
    channel: "email",
    status: "active",
    notes: "Notify when any single sleeve nears the defined concentration limit."
  },
  {
    id: "al-3",
    label: "Review item approaches due date",
    scope: "Governance",
    channel: "summary",
    status: "paused",
    notes: "Bundle into weekly reviews during quieter periods."
  }
];

