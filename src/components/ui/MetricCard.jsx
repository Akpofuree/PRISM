import { cn } from "../../utils/cn.js";
import { Badge } from "./Badge.jsx";

export function MetricCard({
  label,
  value,
  description,
  badge,
  badgeVariant = "neutral",
  icon: Icon,
  featured = false,
  className,
}) {
  return (
    <article
      className={cn(
        "rounded-2xl bg-prism-panel p-5",
        featured && "border border-prism-teal/30 bg-prism-teal/10",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-prism-muted">
            {label}
          </p>

          <p className="mt-5 text-2xl font-semibold text-prism-text">{value}</p>
        </div>

        {Icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-prism-teal/15 text-prism-teal">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>

      {badge ? (
        <div className="mt-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      ) : null}

      {description ? (
        <p className="mt-2 text-sm text-prism-muted">{description}</p>
      ) : null}
    </article>
  );
}
