import type {
  ModelRate,
  ThreadAnalytics,
  ThreadTurnAnalytics,
} from "@/lib/analytics-types";

export const LONG_CONTEXT_THRESHOLD = 272_000;

export const DEFAULT_MODEL_RATES: Readonly<Record<string, ModelRate>> = {
  "gpt-5.6-sol": {
    short: { input: 5, cachedInput: 0.5, cacheWrite: 6.25, output: 30 },
    long: { input: 10, cachedInput: 1, cacheWrite: 12.5, output: 45 },
  },
  "gpt-5.6-terra": {
    short: { input: 2.5, cachedInput: 0.25, cacheWrite: 3.125, output: 15 },
    long: { input: 5, cachedInput: 0.5, cacheWrite: 6.25, output: 22.5 },
  },
  "gpt-5.6-luna": {
    short: { input: 1, cachedInput: 0.1, cacheWrite: 1.25, output: 6 },
    long: { input: 2, cachedInput: 0.2, cacheWrite: 2.5, output: 9 },
  },
  "gpt-5.5": {
    short: { input: 5, cachedInput: 0.5, cacheWrite: null, output: 30 },
    long: { input: 10, cachedInput: 1, cacheWrite: null, output: 45 },
  },
  "gpt-5.5-pro": {
    short: { input: 30, cachedInput: null, cacheWrite: null, output: 180 },
    long: { input: 60, cachedInput: null, cacheWrite: null, output: 270 },
  },
  "gpt-5.4": {
    short: { input: 2.5, cachedInput: 0.25, cacheWrite: null, output: 15 },
    long: { input: 5, cachedInput: 0.5, cacheWrite: null, output: 22.5 },
  },
  "gpt-5.4-mini": {
    short: { input: 0.75, cachedInput: 0.075, cacheWrite: null, output: 4.5 },
    long: null,
  },
  "gpt-5.4-nano": {
    short: { input: 0.2, cachedInput: 0.02, cacheWrite: null, output: 1.25 },
    long: null,
  },
  "gpt-5.4-pro": {
    short: { input: 30, cachedInput: null, cacheWrite: null, output: 180 },
    long: { input: 60, cachedInput: null, cacheWrite: null, output: 270 },
  },
};

export interface CostEstimate {
  cacheReadCost: number;
  inputCost: number;
  outputCost: number;
  total: number;
  usesLongContextRate: boolean;
}

interface UsageForCost {
  cachedInputTokens: number;
  inputTokens: number;
  model: string;
  outputTokens: number;
  peakInputTokens: number;
}

function estimateUsageCost(
  usage: UsageForCost,
  rates: Readonly<Record<string, ModelRate>>,
): CostEstimate | null {
  const rate = rates[usage.model];
  if (!rate) {
    return null;
  }

  const usesLongContextRate =
    usage.peakInputTokens > LONG_CONTEXT_THRESHOLD && rate.long !== null;
  const activeRate = usesLongContextRate ? rate.long : rate.short;
  if (!activeRate) {
    return null;
  }

  const uncachedInput = Math.max(
    0,
    usage.inputTokens - usage.cachedInputTokens,
  );
  const inputCost = (uncachedInput / 1_000_000) * activeRate.input;
  const cacheReadCost =
    (usage.cachedInputTokens / 1_000_000) *
    (activeRate.cachedInput ?? activeRate.input);
  const outputCost = (usage.outputTokens / 1_000_000) * activeRate.output;

  return {
    cacheReadCost,
    inputCost,
    outputCost,
    total: inputCost + cacheReadCost + outputCost,
    usesLongContextRate,
  };
}

export function estimateTurnCost(
  turn: ThreadTurnAnalytics,
  rates: Readonly<Record<string, ModelRate>>,
): CostEstimate | null {
  return estimateUsageCost(turn, rates);
}

/**
 * Estimates thread cost from locally recorded usage. Codex exposes cached reads,
 * but not cache-write token counts, so uncached input uses the normal input rate.
 */
export function estimateThreadCost(
  thread: ThreadAnalytics,
  rates: Readonly<Record<string, ModelRate>>,
): CostEstimate | null {
  if (!thread.hasDetailedUsage) {
    return null;
  }

  const tokenBearingTurns = thread.turnDetails.filter(
    (turn) => turn.totalTokens > 0,
  );
  if (tokenBearingTurns.length > 0) {
    const turnCosts = tokenBearingTurns.map((turn) => estimateTurnCost(turn, rates));
    if (turnCosts.every((cost) => cost !== null)) {
      return turnCosts.reduce<CostEstimate>(
        (total, cost) => ({
          cacheReadCost: total.cacheReadCost + cost.cacheReadCost,
          inputCost: total.inputCost + cost.inputCost,
          outputCost: total.outputCost + cost.outputCost,
          total: total.total + cost.total,
          usesLongContextRate:
            total.usesLongContextRate || cost.usesLongContextRate,
        }),
        {
          cacheReadCost: 0,
          inputCost: 0,
          outputCost: 0,
          total: 0,
          usesLongContextRate: false,
        },
      );
    }
    return null;
  }

  return estimateUsageCost(thread, rates);
}
