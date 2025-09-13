import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/WaitlistDialog";

export function CTABanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20 p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to stress less about job hunting?</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Get organized today—JobFlow keeps you on track.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WaitlistDialog />
            <Button asChild variant="outline">
              <a href="#">Star on GitHub</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

