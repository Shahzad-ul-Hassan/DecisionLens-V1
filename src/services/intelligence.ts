import { intelligenceMock, type IntelligenceItem } from "@/mocks/intelligence";

export async function fetchIntelligenceItems(): Promise<IntelligenceItem[]> {
  return intelligenceMock;
}

