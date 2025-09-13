import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Screenshots } from "@/components/Screenshots";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Stats />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <div className="fixed bottom-4 left-0 right-0 px-4 sm:hidden">
        <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-3 shadow-xl">
          <div className="flex items-center gap-3">
            <a href="#screenshots" className="text-sm underline">See screenshots</a>
            <div className="ml-auto">
              <WaitlistDialog triggerVariant="default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
