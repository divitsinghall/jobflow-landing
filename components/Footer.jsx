import Image from "next/image";
import { APP_NAME, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="JobFlow logo" width={24} height={24} />
            <span className="font-semibold">{APP_NAME}</span>
          </div>
          <nav aria-label="Footer" className="flex items-center gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-zinc-600 dark:text-zinc-300 hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-foreground">GitHub</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}

