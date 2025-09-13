"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function WaitlistDialog({ triggerVariant = "outline", triggerClassName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submit() {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    // Fake submit
    // eslint-disable-next-line no-console
    console.log("waitlist", { name, email });
    toast.success("You're on the waitlist!");
    setName("");
    setEmail("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={triggerClassName}>
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="waitlist-desc">
        <DialogTitle>Join the waitlist</DialogTitle>
        <DialogDescription id="waitlist-desc">
          Be the first to try JobFlow. We’ll send updates, no spam.
        </DialogDescription>
        <div className="grid gap-3 pt-2">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Johnson" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@school.edu" />
          </div>
          <Button onClick={submit} className="mt-2">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

