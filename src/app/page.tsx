import { CodexDashboard } from "@/components/dashboard/codex-dashboard";
import { getAnalyticsSnapshot } from "@/lib/codex-reader";

export const dynamic = "force-dynamic";

export default function Home(): React.ReactNode {
  return <CodexDashboard initialData={getAnalyticsSnapshot()} />;
}
