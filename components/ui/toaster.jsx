"use client";
import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl",
        },
      }}
    />
  );
}

