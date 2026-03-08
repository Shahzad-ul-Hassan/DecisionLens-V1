import { academyMock, type AcademyLesson } from "@/mocks/academy";

export async function fetchAcademyLessons(): Promise<AcademyLesson[]> {
  return academyMock;
}

