"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export function SheetContent({ side = "right", className, children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 grid gap-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 shadow-xl border border-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out",
          side === "right" && "inset-y-0 right-0 h-full w-80 sm:w-96",
          side === "left" && "inset-y-0 left-0 h-full w-80 sm:w-96",
          className
        )}
        {...props}
      >
        {children}
        <SheetClose className="focus-ring absolute right-4 top-4 rounded-full opacity-70 transition-opacity hover:opacity-100">
          <X className="h-5 w-5" />
        </SheetClose>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

