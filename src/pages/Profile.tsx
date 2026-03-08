import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { Card } from "@/components/ui/Card";
import { KeyValueList, type KeyValueItem } from "@/components/feature/KeyValueList";
import { fetchProfileSnapshot } from "@/services/profile";
import type { ProfileSnapshot } from "@/mocks/profile";

export function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileSnapshot | null>(null);

  useEffect(() => {
    void fetchProfileSnapshot().then(setProfile);
  }, []);

  const prefItems: KeyValueItem[] =
    profile?.preferences.map((p) => ({ id: p.id, label: p.label, value: p.value })) ?? [];

  const subscriptionStatus = user?.premiumAccess === "premium" ? "Premium workspace" : "Standard workspace";

  return (
    <div className="space-y-4">
      <div>
        <div className="text-lg font-semibold tracking-tight">Profile</div>
        <div className="mt-1 text-sm text-slate-300/80">Account details, subscription, and workspace behaviour.</div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card title="Account" description="Mock session data">
          <dl className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-300/80">Name</dt>
              <dd className="truncate text-slate-100">{user?.displayName ?? "—"}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-300/80">Email</dt>
              <dd className="truncate text-slate-100">{user?.email ?? "—"}</dd>
            </div>
          </dl>
        </Card>

        <Card title="Subscription" description="How this workspace is configured.">
          <dl className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-300/80">Subscription</dt>
              <dd className="truncate text-slate-100">{subscriptionStatus}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-300/80">Premium access</dt>
              <dd className="text-slate-100">{user?.premiumAccess ?? "—"}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-300/80">Roles</dt>
              <dd className="text-slate-100">{user?.roles.join(", ") ?? "—"}</dd>
            </div>
          </dl>
        </Card>

        {profile ? (
          <Card title="Workspace preferences">
            <KeyValueList items={prefItems} />
          </Card>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card title="Session behaviour" description="Placeholder analytics">
          <div className="space-y-2 text-xs text-slate-300/85">
            <div className="flex items-center justify-between gap-4">
              <span>Typical session length</span>
              <span className="text-slate-100">Mock: 18–25 min</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Most visited area</span>
              <span className="text-slate-100">Overview</span>
            </div>
          </div>
        </Card>
        <Card title="Review rhythm" description="Placeholder analytics">
          <div className="space-y-2 text-xs text-slate-300/85">
            <div className="flex items-center justify-between gap-4">
              <span>Desk reviews this week</span>
              <span className="text-slate-100">Mock: 3</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Committee reviews this month</span>
              <span className="text-slate-100">Mock: 1</span>
            </div>
          </div>
        </Card>
        <Card title="Usage balance" description="Placeholder analytics">
          <div className="space-y-2 text-xs text-slate-300/85">
            <div className="flex items-center justify-between gap-4">
              <span>Environment vs. governance time</span>
              <span className="text-slate-100">Mock: 60 / 40</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Academy visits</span>
              <span className="text-slate-100">Mock: light</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

