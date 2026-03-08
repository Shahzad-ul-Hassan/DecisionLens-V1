import React, { useMemo, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CenteredPanel } from "@/components/ui/CenteredPanel";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/app/providers/AuthProvider";
import { paths } from "@/app/routes/paths";
import type { SignInInput } from "@/services/auth";

export function LoginPage() {
  const { status, signIn } = useAuth();
  const location = useLocation();

  const from = useMemo(() => {
    const raw = (location.state as { from?: string } | null)?.from;
    return typeof raw === "string" && raw.startsWith("/") ? raw : paths.overview;
  }, [location.state]);

  const [email, setEmail] = useState("analyst@decisionlens.local");
  const [password, setPassword] = useState("");
  const [preset, setPreset] = useState<NonNullable<SignInInput["preset"]>>("premium");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (status === "authenticated") return <Navigate to={from} replace />;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signIn({ email, password, preset });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
      setSubmitting(false);
    }
  }

  return (
    <CenteredPanel title="Sign in" subtitle="Mock auth for Phase‑1. Firebase can be wired in behind this adapter.">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs text-slate-300/80">Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>

        <div className="space-y-2">
          <label className="text-xs text-slate-300/80">Password</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            placeholder="(not validated in mock)"
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs text-slate-300/80">Session preset</div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <PresetButton active={preset === "standard"} onClick={() => setPreset("standard")} label="Standard" />
            <PresetButton active={preset === "premium"} onClick={() => setPreset("premium")} label="Premium" />
            <PresetButton active={preset === "admin"} onClick={() => setPreset("admin")} label="Admin" />
          </div>
          <div className="text-xs text-slate-300/70">
            Premium routes require the Premium preset. Admin routes require the Admin preset.
          </div>
        </div>

        {error ? <div className="rounded-xl border border-rose-300/20 bg-rose-300/10 p-3 text-xs">{error}</div> : null}

        <div className="flex items-center justify-end gap-2">
          <Button type="submit" disabled={submitting}>
            {submitting ? "Signing in" : "Sign in"}
          </Button>
        </div>
      </form>
    </CenteredPanel>
  );
}

function PresetButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl border px-3 py-2 text-left text-sm transition",
        active
          ? "border-sky-300/25 bg-sky-300/10 text-slate-50"
          : "border-white/10 bg-white/5 text-slate-200/90 hover:border-white/15 hover:bg-white/10"
      ].join(" ")}
    >
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-0.5 text-xs text-slate-300/70">Mock session</div>
    </button>
  );
}

