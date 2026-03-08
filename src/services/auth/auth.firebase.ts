import type { AuthService } from "./auth.types";

export const firebaseAuthService: AuthService = {
  async getSession() {
    throw new Error("Firebase auth is not configured yet.");
  },
  async signIn() {
    throw new Error("Firebase auth is not configured yet.");
  },
  async signOut() {
    throw new Error("Firebase auth is not configured yet.");
  }
};

