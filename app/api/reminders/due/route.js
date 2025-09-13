import { prisma } from "@/lib/db";

export async function GET() {
  const now = new Date();
  const due = await prisma.application.findMany({
    where: { nextFollowUp: { lte: now } },
    orderBy: { nextFollowUp: "asc" },
  });
  return Response.json(due);
}

