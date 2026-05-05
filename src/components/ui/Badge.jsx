import { cn } from "../../utils/cn.js";

const variants = {
  neutral: "bg-prism-panel-soft text-prism-muted",
  positive: "bg-prism-teal/15 text-prism-teal",
  negative: "bg-prism-red/15 text-prism-red",
  warning: "bg-yellow-500/15 text-yellow-400",
};

export function Badge({ children, variant = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
