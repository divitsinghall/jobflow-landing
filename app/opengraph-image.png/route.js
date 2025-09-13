import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 72,
          color: "white",
          fontWeight: 700,
        }}
      >
        JobFlow
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

