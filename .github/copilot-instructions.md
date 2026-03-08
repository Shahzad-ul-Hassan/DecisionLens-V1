# DecisionLens Copilot Instructions

## Architecture Overview
DecisionLens is a React SPA built with Vite, TypeScript, and Tailwind CSS, focused on decision intelligence. It uses a mock-data-first approach with Firebase-ready authentication.

- **App Structure**: `src/app/` contains core logic (providers, routes, shell); `src/components/` splits into `feature/` (business logic) and `ui/` (primitives); `src/pages/` for route components; `src/services/` for data access; `src/mocks/` for fake data.
- **Routing**: React Router with route guards in `src/app/routes/guards.tsx` for authentication (`RequireAuth`), premium access (`RequirePremium`), and roles (`RequireRole`).
- **Authentication**: `AuthProvider` context manages user state; `authService` switches between mock and Firebase based on `VITE_AUTH_PROVIDER` env var.
- **Data Flow**: Services import mocks directly (e.g., `services/overview.ts` returns `mocks/overview.ts`); replace with real APIs later.
- **UI Shell**: `AppShell` provides dark-themed navigation sidebar with `NavLink` active states; pages use `PageScaffold` for consistent headers and grid layouts.

## Key Patterns
- **Path Constants**: Use `paths` object from `src/app/routes/paths.ts` for all route definitions and links.
- **Type Exports**: Auth types are re-exported from `services/auth/index.ts`; define data types in mock files (e.g., `mocks/overview.ts`).
- **Component Props**: Pages receive no props; data fetched via hooks in components.
- **Styling**: Dark slate color scheme; use `boxShadow: panel` for cards; responsive grids with Tailwind classes.
- **Imports**: `@/` alias resolves to `src/`; prefer absolute imports.

## Development Workflow
- **Run Locally**: `npm run dev` starts Vite dev server on port 5173.
- **Build**: `npm run build` runs TypeScript compilation then Vite build.
- **Auth Switching**: Set `VITE_AUTH_PROVIDER=firebase` to enable Firebase auth; defaults to mock.
- **Adding Pages**: Create component in `pages/`, add route in `router.tsx` with appropriate guards, update `paths.ts` and nav array in `AppShell.tsx`.
- **Data Integration**: Add types and mock data in `mocks/`, create service function in `services/`, call from page components.

## Conventions
- **File Naming**: PascalCase for components (e.g., `OverviewPage.tsx`), camelCase for services/hooks.
- **Mock Structure**: Each mock file exports types and a mock object (e.g., `overviewMock`).
- **Premium Gating**: Wrap routes/elements with `<RequirePremium>`; check `user.premiumAccess === "premium"`.
- **Role Checks**: Use `<RequireRole role="admin">` for admin-only areas; roles array on user object.</content>
<parameter name="filePath">/Users/macbook/Documents/DecisionLens/.github/copilot-instructions.md