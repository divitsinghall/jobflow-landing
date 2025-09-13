"use client";
import { useDraggable } from "@dnd-kit/core";
import { ExternalLink, Clock, Trash, Pencil, BellPlus, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatRelative } from "@/lib/date";
import { useDeleteApplication, useUpdateApplication } from "@/lib/queries";
import { AppFormDialog } from "@/components/app/AppFormDialog";
import { snooze } from "@/lib/date";
import { toast } from "sonner";

export function AppCard({ app }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: app.id });
  const del = useDeleteApplication();
  const update = useUpdateApplication();

  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  async function onDelete() {
    del.mutate(app.id, {
      onSuccess: () => toast.success("Deleted"),
      onError: () => toast.error("Delete failed"),
    });
  }

  return (
    <Card
      ref={setNodeRef}
      id={`app-${app.id}`}
      style={style}
      className={`p-3 transition-shadow ${isDragging ? "shadow-2xl" : "hover:shadow-md"}`}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{app.company}</div>
          <div className="text-xs text-zinc-500 truncate">{app.role}</div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-zinc-500">
            <Clock className="h-3 w-3" /> {formatRelative(new Date(app.dateApplied))}
            {app.nextFollowUp && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-amber-700 dark:text-amber-300">
                <BellPlus className="h-3 w-3" /> follow-up set
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {app.link && (
            <Button variant="ghost" size="icon" asChild aria-label="Open link">
              <a href={app.link} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          <AppFormDialog
            defaultValues={{
              ...app,
              dateApplied: new Date(app.dateApplied).toISOString(),
              nextFollowUp: app.nextFollowUp ? new Date(app.nextFollowUp).toISOString() : "",
            }}
            onSubmit={async (data) => {
              await update.mutateAsync({ id: app.id, data });
              toast.success("Saved");
            }}
            trigger={
              <Button variant="ghost" size="icon" aria-label="Edit">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          />
          <Button variant="ghost" size="icon" aria-label="Delete" onClick={onDelete}>
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => update.mutate({ id: app.id, data: { nextFollowUp: snooze(new Date(), 3).toISOString() } })}
        >
          Snooze +3d
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => update.mutate({ id: app.id, data: { nextFollowUp: snooze(new Date(), 7).toISOString() } })}
        >
          Snooze +1w
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => update.mutate({ id: app.id, data: { nextFollowUp: null } })}
        >
          <Check className="h-4 w-4 mr-1" /> Mark Done
        </Button>
      </div>
    </Card>
  );
}

