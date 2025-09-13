import { prisma } from "@/lib/db";
import { z } from "zod";

const Stage = z.enum(["APPLIED", "INTERVIEW", "OFFER", "REJECTED"]);
const baseSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  link: z.string().url().optional().or(z.literal("").transform(() => undefined)),
  location: z.string().optional(),
  dateApplied: z.string().transform((s) => new Date(s)),
  stage: Stage.default("APPLIED"),
  notes: z.string().optional(),
  nextFollowUp: z.string().optional().transform((s) => (s ? new Date(s) : undefined)),
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const stage = searchParams.get("stage");
  const where = stage && Stage.options.includes(stage) ? { stage } : {};
  const apps = await prisma.application.findMany({ where, orderBy: { createdAt: "desc" } });
  return Response.json(apps);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = baseSchema.parse(body);
    const created = await prisma.application.create({ data: parsed });
    return Response.json(created, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ error: err.flatten() }, { status: 400 });
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

