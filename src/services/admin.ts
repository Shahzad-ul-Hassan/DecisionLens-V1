import { adminMock, type AdminSnapshot } from "@/mocks/admin";

export async function fetchAdminSnapshot(): Promise<AdminSnapshot> {
  return adminMock;
}

