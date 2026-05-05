export function Card({ children, className = "" }) {
  return (
    <section
      className={["rounded-2xl bg-prism-panel p-6 shadow-sm", className].join(
        " ",
      )}
    >
      {children}
    </section>
  );
}
