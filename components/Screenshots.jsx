"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { id: "board", label: "Board" },
  { id: "timeline", label: "Timeline" },
  { id: "resume", label: "Resume Tailor" },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="board" className="w-full">
          <TabsList aria-label="Screenshots tabs" className="mx-auto">
            {tabs.map((t) => (
              <TabsTrigger key={t.id} value={t.id} aria-controls={`panel-${t.id}`}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((t) => (
            <TabsContent key={t.id} value={t.id} id={`panel-${t.id}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-64 sm:h-80 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 rounded-2xl border border-white/10 flex items-center justify-center text-sm text-zinc-500"
                >
                  {t.label} preview coming soon
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

