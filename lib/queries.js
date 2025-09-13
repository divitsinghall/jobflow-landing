"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useApplications(stage) {
  return useQuery({
    queryKey: ["applications", { stage }],
    queryFn: async () => {
      const url = stage ? `/api/applications?stage=${stage}` : "/api/applications";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch applications");
      return res.json();
    },
  });
}

export function useCreateApplication() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create application");
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}

export function useUpdateApplication() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update application");
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}

export function useDeleteApplication() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/applications/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete application");
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}

export function useDueReminders() {
  return useQuery({
    queryKey: ["reminders", "due"],
    queryFn: async () => {
      const res = await fetch("/api/reminders/due");
      if (!res.ok) throw new Error("Failed to fetch reminders");
      return res.json();
    },
    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });
}

