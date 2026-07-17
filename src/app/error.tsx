"use client";

import { useEffect } from "react";
import { DatabaseZap, RotateCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps): React.ReactNode {
  useEffect(() => {
    console.error("[codex-analytics-ledger] Dashboard render failed", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#10120e] p-5 text-[#f1ecdf]">
      <section className="w-full max-w-lg border border-[#6e3a31] bg-[#1b1511] p-6 sm:p-8">
        <DatabaseZap aria-hidden="true" className="text-[#ff8067]" size={30} />
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff8067]">
          Local data unavailable
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">
          Codex Analytics Ledger could not read the state database.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#9c9f92]">{error.message}</p>
        <button
          aria-label="Retry reading Codex analytics"
          className="mt-6 flex items-center gap-2 bg-[#d7ff5f] px-4 py-2.5 text-sm font-bold text-[#172000] outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => unstable_retry()}
          role="button"
          type="button"
        >
          <RotateCw aria-hidden="true" size={15} />
          Try again
        </button>
      </section>
    </main>
  );
}
