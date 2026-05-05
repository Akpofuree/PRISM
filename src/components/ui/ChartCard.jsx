import { cn } from "../../utils/cn.js";

export function ChartCard({ title, action, children, footer, className }) {
  return (
    <section className={cn("rounded-2xl bg-prism-panel p-6", className)}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-prism-text">{title}</h2>

        {action ? <div>{action}</div> : null}
      </div>

      <div className="mt-6">{children}</div>

      {footer ? (
        <div className="mt-4 border-t border-prism-border pt-4 text-sm text-prism-muted">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
