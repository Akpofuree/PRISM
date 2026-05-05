import { cn } from "../../utils/cn.js";

export function Tabs({ tabs, activeTab, onChange, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-prism-border bg-prism-bg p-1",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition",
              isActive
                ? "bg-prism-teal/20 text-prism-teal"
                : "text-prism-muted hover:text-prism-text",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
