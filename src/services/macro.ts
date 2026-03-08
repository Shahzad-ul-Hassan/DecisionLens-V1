import { macroMock, type MacroEvent } from "@/mocks/macro";

export async function fetchMacroEvents(): Promise<MacroEvent[]> {
  return macroMock;
}

