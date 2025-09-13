"use client";
import { useDroppable } from "@dnd-kit/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppCard } from "@/components/app/AppCard";

export function Column({ id, title, items }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const count = items?.length || 0;
  return (
    <div ref={setNodeRef} className="transition-colors">
      <Card className={`min-h-[280px] ${isOver ? "ring-2 ring-[hsl(var(--ring))]" : ""}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            <span className="text-xs text-zinc-500">{count}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {count === 0 ? (
            <div className="text-sm text-zinc-500">No applications. Add your first!</div>
          ) : (
            items.map((a) => <AppCard key={a.id} app={a} />)
          )}
        </CardContent>
      </Card>
    </div>
  );
}

