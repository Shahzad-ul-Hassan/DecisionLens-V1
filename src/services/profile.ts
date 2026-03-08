import { profileMock, type ProfileSnapshot } from "@/mocks/profile";

export async function fetchProfileSnapshot(): Promise<ProfileSnapshot> {
  return profileMock;
}

