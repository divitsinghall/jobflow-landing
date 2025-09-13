import { prisma } from "@/lib/db";
import { z } from "zod";

const Stage = z.enum(["APPLIED", "INTERVIEW", "OFFER", "REJECTED"]);
const patchSchema = z.object({
  company: z.string().optional(),
  role: z.string().optional(),
  link: z.string().url().optional().or(z.literal("").transform(() => undefined)),
  location: z.string().optional(),
  dateApplied: z.string().optional().transform((s) => (s ? new Date(s) : undefined)),
  stage: Stage.optional(),
  notes: z.string().optional(),
  nextFollowUp: z
    .union([z.string(), z.null()])
    .optional()
    .transform((s) => (s === null ? null : s ? new Date(s) : undefined)),
});

export async function PATCH(_req, { params }) {
  try {
    const body = await _req.json();
    const data = patchSchema.parse(body);
    const updated = await prisma.application.update({ where: { id: params.id }, data });
    return Response.json(updated);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: err.flatten() }, { status: 400 });
    }
    return Response.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function DELETE(_req, { params }) {
  try {
    await prisma.application.delete({ where: { id: params.id } });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: "Not Found" }, { status: 404 });
  }
}

