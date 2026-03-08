import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { paths } from "@/app/routes/paths";
import { useAuth } from "@/app/providers/AuthProvider";
import { Button } from "@/components/ui/Button";

const nav = [
  { to: paths.overview, label: "Overview" },
  { to: paths.intelligence, label: "Intelligence" },
  { to: paths.liquidity, label: "Liquidity" },
  { to: paths.review, label: "Review" },
  { to: paths.academy, label: "Academy" },
  { to: paths.macro, label: "Macro" },
  { to: paths.reports, label: "Reports" },
  { to: paths.alerts, label: "Alerts" },
  { to: paths.profile, label: "Profile" },
  { to: paths.admin, label: "Admin" }
] as const;

export function AppShell() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_700px_at_15%_10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(900px_700px_at_85%_0%,rgba(167,139,250,0.10),transparent_55%),radial-gradient(900px_700px_at_65%_90%,rgba(34,197,94,0.06),transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-panel backdrop-blur">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold">
                DL
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">DecisionLens</div>
                <div className="text-xs text-slate-300/80">Decision Intelligence</div>
              </div>
            </div>
          </div>

          <nav className="px-2 pb-3">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === paths.overview}
                className={({ isActive }) =>
                  [
                    "my-1 flex items-center justify-between rounded-xl px-3 py-2 text-sm",
                    isActive
                      ? "border border-sky-400/20 bg-sky-400/10 text-slate-50"
                      : "border border-transparent text-slate-200/90 hover:border-white/10 hover:bg-white/5"
                  ].join(" ")
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-white/10 px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-xs text-slate-300/80">Signed in</div>
                <div className="truncate text-sm font-medium">{user?.displayName ?? "—"}</div>
              </div>
              <Button variant="ghost" onClick={() => void signOut()}>
                Sign out
              </Button>
            </div>
          </div>
        </aside>

        <main className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-panel backdrop-blur">
          <header className="flex items-start justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div>
              <div className="text-sm font-semibold tracking-tight">Workspace</div>
              <div className="text-xs text-slate-300/80">
                Premium: {user?.premiumAccess ?? "—"} • Roles: {user?.roles.join(", ") ?? "—"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
                Connected
              </div>
            </div>
          </header>

          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

