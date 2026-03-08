export type ProfilePreference = {
  id: string;
  label: string;
  value: string;
};

export type ProfileSnapshot = {
  organisation: string;
  desk: string;
  timezone: string;
  preferences: ProfilePreference[];
};

export const profileMock: ProfileSnapshot = {
  organisation: "DecisionLens Labs",
  desk: "Multi-asset",
  timezone: "Browser local",
  preferences: [
    {
      id: "pref-1",
      label: "Default horizon",
      value: "Next 24–72 hours"
    },
    {
      id: "pref-2",
      label: "Review rhythm",
      value: "Weekly desk review, monthly committee"
    },
    {
      id: "pref-3",
      label: "Theme emphasis",
      value: "Macro context and governance quality"
    }
  ]
};

