import { reviewMock, type ReviewDecision } from "@/mocks/review";

export async function fetchReviewDecisions(): Promise<ReviewDecision[]> {
  return reviewMock;
}

