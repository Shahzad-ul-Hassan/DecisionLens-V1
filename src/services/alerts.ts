import { alertsMock, type AlertConfig } from "@/mocks/alerts";

export async function fetchAlertConfigs(): Promise<AlertConfig[]> {
  return alertsMock;
}

