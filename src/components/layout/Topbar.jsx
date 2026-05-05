import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 bg-prism-bg/90 px-4 py-5 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-prism-muted">
            Welcome back! Here's your portfolio overview.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-0.5">
          <label className="hidden h-11 w-64 items-center gap-2 rounded-full bg-prism-panel-soft px-5 text-sm text-prism-muted md:flex">
            <Search className="h-4 w-4 shrink-0" />
            <input
              type="search"
              placeholder="Search..."
              className="min-w-0 flex-1 bg-transparent text-prism-text outline-none placeholder:text-prism-muted"
            />
          </label>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-prism-panel-soft text-prism-muted transition hover:text-prism-text"
            aria-label="View notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-prism-teal px-1 text-[10px] font-bold text-prism-bg">
              3
            </span>
          </button>

          <div className="hidden items-center gap-3 rounded-full bg-prism-panel-soft py-1.5 pl-1.5 pr-5 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-prism-teal text-xs font-bold text-prism-bg">
              AL
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Alex Morgan</p>
              <p className="text-xs text-prism-muted">Pro Trader</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
