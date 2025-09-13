"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppFormDialog } from "@/components/app/AppFormDialog";
import { useCreateApplication } from "@/lib/queries";
import { toast } from "sonner";

export function Toolbar() {
  const create = useCreateApplication();

  async function handleCreate(data) {
    await create.mutateAsync({ ...data });
    toast.success("Application created");
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
      <div className="flex-1 flex items-center gap-2">
        <Input placeholder="Search (client-side)" className="max-w-sm" aria-label="Search applications" />
      </div>
      <AppFormDialog
        onSubmit={handleCreate}
        trigger={<Button className="ml-auto">+ New Application</Button>}
      />
    </div>
  );
}

