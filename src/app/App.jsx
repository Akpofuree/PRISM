import { AppShell } from "../components/layout/AppShell.jsx";
import { AppRouter } from "./router.jsx";
import { AppProviders } from "./providers.jsx";

export function App() {
  return (
    <AppProviders>
      <AppShell>
        <AppRouter />
      </AppShell>
    </AppProviders>
  );
}
