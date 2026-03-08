import { overviewMock, type OverviewSnapshot } from "@/mocks/overview";

export async function fetchOverviewSnapshot(): Promise<OverviewSnapshot> {
  return overviewMock;
}

