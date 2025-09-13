export const STAGES = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"]; // matches Prisma enum

export function stageColor(stage) {
  switch (stage) {
    case "APPLIED":
      return "indigo";
    case "INTERVIEW":
      return "amber";
    case "OFFER":
      return "emerald";
    case "REJECTED":
      return "rose";
    default:
      return "zinc";
  }
}

