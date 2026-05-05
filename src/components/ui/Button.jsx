import { cn } from "../../utils/cn.js";

const variants = {
  primary: "bg-prism-teal text-prism-bg hover:bg-prism-teal/90",
  secondary: "bg-prism-panel-soft text-prism-text hover:bg-prism-border",
  ghost:
    "bg-transparent text-prism-muted hover:bg-prism-panel-soft hover:text-prism-text",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
