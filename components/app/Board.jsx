"use client";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { toast } from "sonner";
import { STAGES } from "@/lib/stages";
import { Column } from "@/components/app/Column";
import { useUpdateApplication } from "@/lib/queries";

export function Board({ applications }) {
  const update = useUpdateApplication();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

  async function onDragEnd(event) {
    const { over, active } = event;
    if (!over || !active?.id) return;
    const newStage = over.id;
    if (!STAGES.includes(newStage)) return;
    update.mutate({ id: active.id, data: { stage: newStage } }, {
      onSuccess: () => toast.success("Stage updated"),
      onError: () => toast.error("Failed to update stage"),
    });
  }

  const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
  for (const a of applications || []) grouped[a.stage]?.push(a);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAGES.map((stage) => (
          <Column key={stage} id={stage} title={stage} items={grouped[stage]} />
        ))}
      </div>
    </DndContext>
  );
}

