import {
  ArrowLeftRight,
  BarChart3,
  LayoutDashboard,
  Settings,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-prism-border bg-prism-panel px-2 py-2 lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "flex min-h-14 flex-col items-center justify-center rounded-xl text-[11px] font-medium transition",
                  isActive
                    ? "bg-prism-teal text-prism-bg"
                    : "text-prism-muted hover:bg-prism-panel-soft hover:text-prism-text",
                ].join(" ")
              }
            >
              <Icon className="mb-1 h-5 w-5" />
              <span className="max-w-full truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
