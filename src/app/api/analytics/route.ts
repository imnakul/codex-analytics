import { getAnalyticsSnapshot } from "@/lib/codex-reader";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export function GET(): Response {
  try {
    return Response.json(getAnalyticsSnapshot(), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("[codex-analytics-ledger] Analytics refresh failed", error);
    return Response.json(
      { error: "Unable to read local Codex analytics." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}
