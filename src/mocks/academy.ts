export type AcademyLesson = {
  id: string;
  title: string;
  level: "intro" | "intermediate" | "advanced";
  duration: string;
  summary: string;
};

export const academyMock: AcademyLesson[] = [
  {
    id: "ac-1",
    title: "Foundations of decision intelligence",
    level: "intro",
    duration: "12 min",
    summary: "How to structure questions, information, and outcomes in a repeatable decision process."
  },
  {
    id: "ac-2",
    title: "Designing review rhythms",
    level: "intermediate",
    duration: "18 min",
    summary: "Building weekly and monthly review cadences that stay grounded in evidence and governance."
  },
  {
    id: "ac-3",
    title: "Working with scenario ranges",
    level: "advanced",
    duration: "24 min",
    summary: "Using ranges and pathways instead of single-point views when planning under uncertainty."
  }
];

