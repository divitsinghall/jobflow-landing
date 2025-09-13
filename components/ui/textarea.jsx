import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[88px] w-full rounded-xl border border-[hsl(var(--border))] bg-transparent px-4 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

