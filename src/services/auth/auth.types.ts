export type Role = "admin" | "member";

export type PremiumAccess = "standard" | "premium";

export type AuthUser = {
  uid: string;
  email: string;
  displayName: string;
  roles: Role[];
  premiumAccess: PremiumAccess;
};

export type AuthSession = {
  user: AuthUser;
};

export type SignInInput = {
  email: string;
  password: string;
  preset?: "standard" | "premium" | "admin";
};

export type AuthService = {
  getSession: () => Promise<AuthSession | null>;
  signIn: (input: SignInInput) => Promise<AuthSession>;
  signOut: () => Promise<void>;
};

