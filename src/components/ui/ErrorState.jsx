import { AlertTriangle } from "lucide-react";
import { cn } from "../../utils/cn.js";
import { Button } from "./Button.jsx";

export function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this data. Please try again.",
  actionLabel,
  onAction,
  className,
}) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-col items-center justify-center rounded-2xl border border-prism-border bg-prism-panel p-6 text-center",
        className,
      )}
    >
      <AlertTriangle className="h-7 w-7 text-prism-red" />

      <h2 className="mt-3 text-base font-semibold text-prism-text">{title}</h2>

      <p className="mt-2 max-w-sm text-sm text-prism-muted">{message}</p>

      {actionLabel && onAction ? (
        <Button className="mt-4" variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
