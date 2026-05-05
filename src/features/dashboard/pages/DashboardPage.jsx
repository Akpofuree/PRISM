export function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-prism-teal/30 bg-prism-teal/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-prism-muted">
            Total Balance
          </p>
          <p className="mt-6 text-3xl font-semibold">$84,254.32</p>
          <p className="mt-3 inline-flex rounded-full bg-prism-teal/15 px-3 py-1 text-xs font-semibold text-prism-teal">
            ▲ +12.5% this month
          </p>
        </div>

        <div className="rounded-2xl bg-prism-panel p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-prism-muted">
            Total Profit
          </p>
          <p className="mt-6 text-3xl font-semibold">$12,847.00</p>
          <p className="mt-3 inline-flex rounded-full bg-prism-teal/15 px-3 py-1 text-xs font-semibold text-prism-teal">
            ▲ +8.2% vs last week
          </p>
        </div>
      </div>
    </section>
  );
}
