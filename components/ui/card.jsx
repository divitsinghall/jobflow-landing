import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("p-6 pb-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-base font-semibold", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6 pt-2", className)} {...props} />;
}

