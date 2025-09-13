"use client";
import { useEffect, useMemo, useRef } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDueReminders, useUpdateApplication } from "@/lib/queries";
import { toast } from "sonner";
import { snooze } from "@/lib/date";

export function ReminderBell() {
  const { data } = useDueReminders();
  const update = useUpdateApplication();
  const notified = useRef(new Set());
  const dueCount = data?.length || 0;

  useEffect(() => {
    if (Notification && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!data) return;
    for (const a of data) {
      if (notified.current.has(a.id)) continue;
      notified.current.add(a.id);
      toast(
        `${a.company} – ${a.role}`,
        {
          description: "Follow-up due",
          action: {
            label: "+1d",
            onClick: () =>
              update.mutate({ id: a.id, data: { nextFollowUp: snooze(new Date(), 1).toISOString() } }),
          },
          cancel: {
            label: "Open",
            onClick: () => {
              const el = document.getElementById(`app-${a.id}`);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              el?.classList.add("ring-2", "ring-[hsl(var(--ring))]");
              setTimeout(() => el?.classList.remove("ring-2", "ring-[hsl(var(--ring))]"), 1500);
            },
          },
        }
      );
      if (Notification && Notification.permission === "granted") {
        new Notification("Follow-up due", { body: `${a.company} – ${a.role}` });
      }
    }
  }, [data, update]);

  return (
    <Button variant="ghost" size="icon" aria-label="Reminders">
      <div className="relative">
        <Bell className="h-5 w-5" />
        {dueCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] text-white">
            {dueCount}
          </span>
        )}
      </div>
    </Button>
  );
}

