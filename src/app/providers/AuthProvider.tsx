import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authService } from "@/services/auth";
import type { AuthSession, AuthUser, SignInInput } from "@/services/auth/auth.types";

export type AuthStatus = "loading" | "authenticated" | "anonymous";

type AuthContextValue = {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;
  signIn: (input: SignInInput) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const restored = await authService.getSession();
      if (!mounted) return;
      setSession(restored);
      setUser(restored?.user ?? null);
      setStatus(restored ? "authenticated" : "anonymous");
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      status,
      user,
      session,
      async signIn(input) {
        setStatus("loading");
        const next = await authService.signIn(input);
        setSession(next);
        setUser(next.user);
        setStatus("authenticated");
      },
      async signOut() {
        await authService.signOut();
        setSession(null);
        setUser(null);
        setStatus("anonymous");
      }
    }),
    [session, status, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

