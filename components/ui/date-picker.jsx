"use client";
import { useId } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

// Simple, accessible date picker using native input[type=date] inside a popover
export function DatePicker({ value, onChange, placeholder = "Pick a date" }) {
  const id = useId();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? new Date(value).toLocaleDateString() : <span className="text-zinc-500">{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <label htmlFor={id} className="text-xs text-zinc-500">Select date</label>
        <input
          id={id}
          type="date"
          className="mt-2 w-full rounded-xl border border-[hsl(var(--border))] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
          value={value ? new Date(value).toISOString().slice(0, 10) : ""}
          onChange={(e) => {
            const val = e.target.value ? new Date(e.target.value + "T00:00:00") : null;
            onChange?.(val ? val.toISOString() : "");
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

