"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Menu } from "lucide-react";
import { APP_NAME, NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="#" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="JobFlow logo" width={28} height={28} />
            <span className="font-semibold">{APP_NAME}</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 ml-8 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-zinc-600 dark:text-zinc-300 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild>
            <Link href="/app">Launch App</Link>
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="ml-1">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-16">
                <nav aria-label="Mobile" className="grid gap-4">
                  {NAV_LINKS.map((l) => (
                    <a key={l.href} href={l.href} className="text-base">
                      {l.label}
                    </a>
                  ))}
                  <a href="#" className="inline-flex items-center gap-2 text-sm mt-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

