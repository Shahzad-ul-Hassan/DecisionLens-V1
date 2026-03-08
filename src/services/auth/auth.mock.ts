import type { AuthService, AuthSession, PremiumAccess, Role, SignInInput } from "./auth.types";

const STORAGE_KEY = "decisionlens.mock.session.v1";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildUserFromPreset(email: string, preset: SignInInput["preset"]) {
  const displayName = email.split("@")[0] || "User";

  let roles: Role[] = ["member"];
  let premiumAccess: PremiumAccess = "standard";

  if (preset === "premium") premiumAccess = "premium";
  if (preset === "admin") {
    roles = ["admin"];
    premiumAccess = "premium";
  }

  return {
    uid: "mock-" + Math.random().toString(16).slice(2),
    email,
    displayName,
    roles,
    premiumAccess
  };
}

function readStoredSession(): AuthSession | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

function writeStoredSession(session: AuthSession | null) {
  if (!session) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export const mockAuthService: AuthService = {
  async getSession() {
    await sleep(150);
    return readStoredSession();
  },
  async signIn(input) {
    await sleep(250);

    const email = input.email.trim().toLowerCase();
    if (!email) throw new Error("Email is required.");

    const session: AuthSession = {
      user: buildUserFromPreset(email, input.preset ?? "standard")
    };
    writeStoredSession(session);
    return session;
  },
  async signOut() {
    await sleep(100);
    writeStoredSession(null);
  }
};

