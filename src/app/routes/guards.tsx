import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { paths } from "@/app/routes/paths";
import type { Role } from "@/services/auth";
import { CenteredPanel } from "@/components/ui/CenteredPanel";
import { Spinner } from "@/components/ui/Spinner";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return (
      <CenteredPanel title="Loading">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <Spinner />
          <span>Signing you in</span>
        </div>
      </CenteredPanel>
    );
  }

  if (status === "anonymous") {
    return <Navigate to={paths.login} replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}

export function RequirePremium({ children }: { children: React.ReactNode }) {
  const { user, status } = useAuth();

  if (status !== "authenticated") return null;

  if (user?.premiumAccess !== "premium") {
    return (
      <CenteredPanel title="Access restricted" subtitle="Premium access is required for this area.">
        <div className="text-sm text-slate-300">
          If you believe this is incorrect, review your account settings.
        </div>
      </CenteredPanel>
    );
  }

  return <>{children}</>;
}

export function RequireRole({ role, children }: { role: Role; children: React.ReactNode }) {
  const { user, status } = useAuth();

  if (status !== "authenticated") return null;

  if (!user?.roles.includes(role)) {
    return (
      <CenteredPanel title="Access restricted" subtitle="You do not have permission for this area.">
        <div className="text-sm text-slate-300">If you believe this is incorrect, contact an administrator.</div>
      </CenteredPanel>
    );
  }

  return <>{children}</>;
}

