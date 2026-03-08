export type AdminUserRow = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
  premiumAccess: "standard" | "premium";
  status: "active" | "invited";
};

export type AdminSnapshot = {
  users: AdminUserRow[];
};

export const adminMock: AdminSnapshot = {
  users: [
    {
      id: "ad-1",
      name: "Admin User",
      email: "admin@decisionlens.local",
      role: "admin",
      premiumAccess: "premium",
      status: "active"
    },
    {
      id: "ad-2",
      name: "Desk Analyst",
      email: "analyst@decisionlens.local",
      role: "member",
      premiumAccess: "premium",
      status: "active"
    },
    {
      id: "ad-3",
      name: "Viewer",
      email: "viewer@decisionlens.local",
      role: "member",
      premiumAccess: "standard",
      status: "invited"
    }
  ]
};

