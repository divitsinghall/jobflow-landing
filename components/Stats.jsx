"use client";
import { useEffect, useRef, useState } from "react";

function useCountTo(end, duration = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(end * p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return value;
}

export function Stats() {
  const a = useCountTo(12);
  const b = useCountTo(96);
  const c = useCountTo(48);
  const items = [
    { label: "hours saved monthly", value: a },
    { label: "follow-ups on time", value: b },
    { label: "applications organized", value: c },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.label} className="text-center rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <div className="text-4xl font-bold">{i.value}<span className="text-[hsl(var(--primary))]">+</span></div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

