export function Badges() {
  const items = [
    { label: "Built for students" },
    { label: "Hackathon Fall 2025" },
    { label: "Open Source-Friendly" },
  ];
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {items.map((i) => (
        <span
          key={i.label}
          className="rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs"
        >
          {i.label}
        </span>
      ))}
    </div>
  );
}

