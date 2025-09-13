"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { STAGES } from "@/lib/stages";

const schema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  link: z.string().url().optional().or(z.literal("").transform(() => undefined)),
  location: z.string().optional(),
  dateApplied: z.string().min(1),
  stage: z.enum(["APPLIED", "INTERVIEW", "OFFER", "REJECTED"]),
  notes: z.string().optional(),
  nextFollowUp: z.string().optional(),
});

export function AppFormDialog({ trigger, onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {
      company: "",
      role: "",
      link: "",
      location: "",
      dateApplied: new Date().toISOString(),
      stage: "APPLIED",
      notes: "",
      nextFollowUp: "",
    },
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const dateApplied = watch("dateApplied");
  const nextFollowUp = watch("nextFollowUp");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{defaultValues ? "Edit Application" : "New Application"}</DialogTitle>
        <DialogDescription>Keep it concise and accurate.</DialogDescription>
        <form
          className="grid gap-3 pt-2"
          onSubmit={handleSubmit(async (data) => {
            await onSubmit(data);
            reset();
          })}
        >
          <div className="grid gap-1.5">
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...register("company")} />
            {errors.company && <p className="text-xs text-rose-500">{errors.company.message}</p>}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input id="role" {...register("role")} />
            {errors.role && <p className="text-xs text-rose-500">{errors.role.message}</p>}
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="dateApplied">Date Applied</Label>
              <DatePicker
                value={dateApplied}
                onChange={(v) => setValue("dateApplied", v)}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="stage">Stage</Label>
              <Select value={watch("stage")} onValueChange={(v) => setValue("stage", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {STAGES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="link">Link</Label>
            <Input id="link" placeholder="https://..." {...register("link")} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location")} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" rows={4} {...register("notes")} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="nextFollowUp">Next follow-up</Label>
            <DatePicker
              value={nextFollowUp}
              placeholder="Optional"
              onChange={(v) => setValue("nextFollowUp", v)}
            />
          </div>
          <div className="pt-2 flex justify-end gap-2">
            <Button type="submit" disabled={isSubmitting}>
              {defaultValues ? "Save" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

