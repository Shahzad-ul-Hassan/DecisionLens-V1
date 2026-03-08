import type { AuthService } from "./auth.types";
import { mockAuthService } from "./auth.mock";
import { firebaseAuthService } from "./auth.firebase";

function selectAuthProvider(): "mock" | "firebase" {
  const v = (import.meta.env.VITE_AUTH_PROVIDER ?? "mock").toLowerCase();
  return v === "firebase" ? "firebase" : "mock";
}

export const authService: AuthService = (() => {
  const provider = selectAuthProvider();
  return provider === "firebase" ? firebaseAuthService : mockAuthService;
})();

export type * from "./auth.types";

