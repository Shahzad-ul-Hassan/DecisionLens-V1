import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "@/app/shell/AppShell";
import { RequireAuth, RequirePremium, RequireRole } from "@/app/routes/guards";
import { paths } from "@/app/routes/paths";

import { OverviewPage } from "@/pages/Overview";
import { IntelligencePage } from "@/pages/Intelligence";
import { LiquidityPage } from "@/pages/Liquidity";
import { ReviewPage } from "@/pages/Review";
import { AcademyPage } from "@/pages/Academy";
import { MacroPage } from "@/pages/Macro";
import { ReportsPage } from "@/pages/Reports";
import { AlertsPage } from "@/pages/Alerts";
import { ProfilePage } from "@/pages/Profile";
import { AdminPage } from "@/pages/Admin";
import { LoginPage } from "@/pages/Login";
import { NotFoundPage } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: paths.login,
    element: <LoginPage />
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <AppShell />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <RequirePremium><OverviewPage /></RequirePremium> },
      { path: "intelligence", element: <IntelligencePage /> },
      { path: "liquidity", element: <RequirePremium><LiquidityPage /></RequirePremium> },
      { path: "review", element: <RequirePremium><ReviewPage /></RequirePremium> },
      { path: "academy", element: <AcademyPage /> },
      { path: "macro", element: <RequirePremium><MacroPage /></RequirePremium> },
      { path: "reports", element: <RequirePremium><ReportsPage /></RequirePremium> },
      { path: "alerts", element: <RequirePremium><AlertsPage /></RequirePremium> },
      { path: "profile", element: <ProfilePage /> },
      {
        path: "admin",
        element: (
          <RequireRole role="admin">
            <AdminPage />
          </RequireRole>
        )
      },
      { path: "404", element: <NotFoundPage /> },
      { path: "*", element: <Navigate to="/404" replace /> }
    ]
  }
]);

