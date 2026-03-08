export type ReportTemplate = {
  id: string;
  name: string;
  cadence: "daily" | "weekly" | "monthly" | "ad-hoc";
  audience: "desk" | "management" | "committee";
  summary: string;
};

export type GeneratedReport = {
  id: string;
  templateId: string;
  createdAt: string;
  status: "draft" | "final";
};

export type ReportsSnapshot = {
  templates: ReportTemplate[];
  recent: GeneratedReport[];
};

export const reportsMock: ReportsSnapshot = {
  templates: [
    {
      id: "rt-1",
      name: "Daily conditions brief",
      cadence: "daily",
      audience: "desk",
      summary: "Condensed view of conditions, macro context, liquidity, and key follow-ups."
    },
    {
      id: "rt-2",
      name: "Weekly governance pack",
      cadence: "weekly",
      audience: "committee",
      summary: "Structured review of decisions, outcomes, and upcoming windows."
    },
    {
      id: "rt-3",
      name: "Monthly overview",
      cadence: "monthly",
      audience: "management",
      summary: "High-level narrative of environment, risk usage, and process quality."
    }
  ],
  recent: [
    {
      id: "gr-1",
      templateId: "rt-1",
      createdAt: "Today • 07:45",
      status: "final"
    },
    {
      id: "gr-2",
      templateId: "rt-2",
      createdAt: "3 days ago",
      status: "final"
    },
    {
      id: "gr-3",
      templateId: "rt-3",
      createdAt: "Last week",
      status: "draft"
    }
  ]
};

