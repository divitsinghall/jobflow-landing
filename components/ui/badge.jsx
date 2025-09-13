import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-[hsl(var(--muted))] text-foreground",
    outline: "border border-[hsl(var(--border))]",
    success: "bg-emerald-500 text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

