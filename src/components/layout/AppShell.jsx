import { MobileNav } from "./MobileNav.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Topbar } from "./Topbar.jsx";

export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-prism-bg text-prism-text">
      <Sidebar />

      <div className="min-h-screen lg:pl-72">
        <Topbar />

        <main className="px-4 pb-24 pt-5 sm:px-6 lg:px-8 lg:pb-8">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
