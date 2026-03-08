import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { ReviewLog } from "@/components/feature/ReviewLog";
import { fetchReviewDecisions } from "@/services/review";
import type { ReviewDecision } from "@/mocks/review";

export function ReviewPage() {
  const [items, setItems] = useState<ReviewDecision[]>([]);

  useEffect(() => {
    void fetchReviewDecisions().then(setItems);
  }, []);

  return (
    <PageScaffold title="Review" description="Structured review workflows and decision logs.">
      <ReviewLog items={items} />
    </PageScaffold>
  );
}

