import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage.jsx";
import { MarketsPage } from "../features/markets/pages/MarketsPage.jsx";
import { WalletPage } from "../features/wallet/pages/WalletPage.jsx";
import { TransactionsPage } from "../features/transactions/pages/TransactionsPage.jsx";
import { SettingsPage } from "../features/settings/pages/SettingsPage.jsx";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/settings" element={<SettingsPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
