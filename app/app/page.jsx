"use client";
import { useApplications } from "@/lib/queries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toolbar } from "@/components/app/Toolbar";
import { Board } from "@/components/app/Board";

export default function AppPage() {
  const { data } = useApplications();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Toolbar />
      </div>
      <Tabs defaultValue="board">
        <TabsList>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>
        <TabsContent value="board" className="mt-4 p-0 border-none bg-transparent">
          <Board applications={data} />
        </TabsContent>
        <TabsContent value="table" className="mt-4">
          <div className="text-sm text-zinc-500">Coming soon.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

