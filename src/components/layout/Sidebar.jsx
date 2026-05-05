import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Wallet,
  ArrowLeftRight,
  Sun,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Markets",
    path: "/markets",
    icon: BarChart3,
  },
  {
    label: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-prism-border bg-prism-panel px-5 py-6 lg:block">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Prism logo" className="h-10 w-10" />
        <div>
          <p className="text-lg font-semibold">Prism</p>
          <p className="text-xs text-prism-muted">Crypto Intelligence</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-prism-muted/70">
          Main Menu
        </p>

        <nav className="mt-3 space-y-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium no-underline transition",
                    isActive
                      ? "bg-prism-teal/15 text-prism-teal"
                      : "text-prism-muted hover:bg-prism-panel-soft hover:text-prism-text",
                  ].join(" ")
                }
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-10">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-prism-muted/70">
          Account
        </p>

        <nav className="mt-3 space-y-2">
          {navItems.slice(4).map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium no-underline transition",
                    isActive
                      ? "bg-prism-teal/15 text-prism-teal"
                      : "text-prism-muted hover:bg-prism-panel-soft hover:text-prism-text",
                  ].join(" ")
                }
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="absolute inset-x-5 bottom-8 flex items-center justify-between text-sm text-prism-muted">
        <div className="flex items-center gap-3">
          <Sun className="h-5 w-5" />
          <span>Light Mode</span>
        </div>

        <button
          type="button"
          className="flex h-7 w-12 items-center rounded-full bg-prism-teal p-1"
          aria-label="Toggle light mode"
        >
          <span className="ml-auto h-5 w-5 rounded-full bg-white" />
        </button>
      </div>
    </aside>
  );
}
