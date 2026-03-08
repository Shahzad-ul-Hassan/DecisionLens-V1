export type MacroEvent = {
  id: string;
  timeLabel: string;
  region: string;
  title: string;
  description: string;
  emphasis: "baseline" | "primary" | "secondary";
};

export const macroMock: MacroEvent[] = [
  {
    id: "mc-1",
    timeLabel: "Today • 14:00",
    region: "US",
    title: "Scheduled policy remarks",
    description: "Short prepared remarks followed by limited Q&A. Treat as a checkpoint for existing exposures.",
    emphasis: "primary"
  },
  {
    id: "mc-2",
    timeLabel: "Tomorrow • 09:00",
    region: "EU",
    title: "Regional activity release",
    description: "Standard monthly update, historically well-telegraphed with incremental information.",
    emphasis: "secondary"
  },
  {
    id: "mc-3",
    timeLabel: "Next week",
    region: "Global",
    title: "Clustered data window",
    description: "Several data releases land within the same 48-hour period. Use this window to review playbooks.",
    emphasis: "baseline"
  }
];

