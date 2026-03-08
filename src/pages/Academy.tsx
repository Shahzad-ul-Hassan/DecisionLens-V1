import React, { useEffect, useState } from "react";
import { PageScaffold } from "@/pages/_shared/PageScaffold";
import { Card } from "@/components/ui/Card";
import { fetchAcademyLessons } from "@/services/academy";
import type { AcademyLesson } from "@/mocks/academy";

export function AcademyPage() {
  const [lessons, setLessons] = useState<AcademyLesson[]>([]);

  useEffect(() => {
    void fetchAcademyLessons().then(setLessons);
  }, []);

  return (
    <PageScaffold title="Academy" description="Internal playbooks, frameworks, and reference material.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            title={lesson.title}
            description={`${lesson.level.toUpperCase()} • ${lesson.duration}`}
          >
            <div className="text-xs text-slate-300/85">{lesson.summary}</div>
          </Card>
        ))}
      </div>
    </PageScaffold>
  );
}

