import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn.js";

export function LoadingState({ message = "Loading data...", className }) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-col items-center justify-center rounded-2xl border border-prism-border bg-prism-panel p-6 text-center",
        className,
      )}
    >
      <Loader2 className="h-6 w-6 animate-spin text-prism-teal" />
      <p className="mt-3 text-sm text-prism-muted">{message}</p>
    </div>
  );
}
