"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const columns = [
  { title: "Applied", color: "bg-blue-500" },
  { title: "Interview", color: "bg-amber-500" },
  { title: "Offer", color: "bg-emerald-500" },
  { title: "Rejected", color: "bg-rose-500" },
];

const cards = [
  { col: 0, company: "Acme", role: "Frontend Intern" },
  { col: 0, company: "Globex", role: "UI Engineer" },
  { col: 1, company: "Soylent", role: "Design Systems" },
  { col: 1, company: "Initech", role: "React Dev" },
  { col: 2, company: "Initrode", role: "SWE Intern" },
];

export function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-radial rounded-3xl blur-2xl opacity-60" aria-hidden />
      <Card className="relative overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {columns.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-white/10 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`h-2 w-2 rounded-full ${c.color}`} />
                  <span className="text-sm font-medium">{c.title}</span>
                </div>
                <div className="space-y-2">
                  {cards
                    .filter((k) => columns[k.col].title === c.title)
                    .map((k, i) => (
                      <motion.div
                        key={k.company + i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="rounded-xl border border-white/10 bg-white/80 dark:bg-zinc-950/40 px-3 py-2 shadow-sm"
                      >
                        <div className="text-sm font-medium">{k.company}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{k.role}</div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Badge className="shadow-sm">Tailor Resume</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

