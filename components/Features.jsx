import { Briefcase, ClipboardList, MessageSquare, BellRing, Smartphone, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Briefcase,
    title: "Application Tracking",
    desc: "Company, role, date, and status at a glance.",
  },
  {
    icon: ClipboardList,
    title: "Master Resume Management",
    desc: "Tailor fast for every role.",
  },
  {
    icon: MessageSquare,
    title: "Response & Communication Log",
    desc: "Keep notes and emails in one place.",
  },
  { icon: BellRing, title: "Smart Reminders", desc: "Never miss a follow-up again." },
  { icon: Smartphone, title: "Mobile-first & Accessible", desc: "Works great on any device." },
  { icon: ShieldCheck, title: "Privacy-first", desc: "Your data, your control." },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="transition-transform hover:-translate-y-0.5 hover:shadow-lg border-white/20"
            >
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600 dark:text-zinc-300">
                {f.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

