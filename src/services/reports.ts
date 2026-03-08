import { reportsMock, type ReportsSnapshot } from "@/mocks/reports";

export async function fetchReportsSnapshot(): Promise<ReportsSnapshot> {
  return reportsMock;
}

