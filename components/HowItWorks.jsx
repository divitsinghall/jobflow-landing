export function HowItWorks() {
  const steps = [
    {
      title: "Create your master resume",
      desc: "Collect your skills and experiences once.",
    },
    { title: "Track every application", desc: "Stay organized from apply to offer." },
    { title: "Get reminders & tailor fast", desc: "Follow-up and customize in clicks." },
  ];
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ol className="relative border-s border-white/10">
          {steps.map((s, i) => (
            <li key={s.title} className="ms-6 pb-10 last:pb-0">
              <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-[hsl(var(--primary))]" />
              <h3 className="text-base font-semibold">{i + 1}. {s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

