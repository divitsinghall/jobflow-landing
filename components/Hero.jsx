"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { TAGLINE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { DashboardMock } from "@/components/DashboardMock";

export function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(0);
  const transform = useMotionTemplate`translate(${mouseX}%, ${mouseY}%)`;

  function onMouseMove(e) {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 8; // -4..4
    const y = ((clientY - rect.top) / rect.height - 0.5) * 4; // -2..2
    mouseX.set(50 + x);
    mouseY.set(y);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2"
        style={{ transform }}
      >
        <div className="h-full w-full bg-radial" />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28" onMouseMove={onMouseMove}>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            JobFlow
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            {TAGLINE}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/app">Launch App</Link>
            </Button>
            <WaitlistDialog triggerVariant="outline" triggerClassName="w-full sm:w-auto" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <span className="rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1">Built for students</span>
            <span className="rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1">Hackathon Fall 2025</span>
            <span className="rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1">Open Source-Friendly</span>
          </div>
        </div>

        <div className="mt-12">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

