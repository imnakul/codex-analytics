import { z } from "zod";

export const threadTurnAnalyticsSchema = z.object({
  id: z.string(),
  message: z.string(),
  startedAt: z.string(),
  model: z.string(),
  reasoningEffort: z.string(),
  durationMs: z.number().nonnegative(),
  timeToFirstTokenMs: z.number().nonnegative().nullable(),
  totalTokens: z.number().int().nonnegative(),
  inputTokens: z.number().int().nonnegative(),
  peakInputTokens: z.number().int().nonnegative(),
  cachedInputTokens: z.number().int().nonnegative(),
  outputTokens: z.number().int().nonnegative(),
  reasoningOutputTokens: z.number().int().nonnegative(),
  toolCalls: z.number().int().nonnegative(),
  shellCommands: z.number().int().nonnegative(),
  webCalls: z.number().int().nonnegative(),
  completed: z.boolean(),
});

export const threadAnalyticsSchema = z.object({
  id: z.string(),
  title: z.string(),
  projectName: z.string(),
  projectPath: z.string(),
  model: z.string(),
  reasoningEffort: z.string(),
  source: z.string(),
  startedAt: z.string(),
  updatedAt: z.string(),
  activeDurationMs: z.number().nonnegative(),
  wallDurationMs: z.number().nonnegative(),
  timeToFirstTokenMs: z.number().nonnegative().nullable(),
  turns: z.number().int().nonnegative(),
  prompts: z.number().int().nonnegative(),
  toolCalls: z.number().int().nonnegative(),
  shellCommands: z.number().int().nonnegative(),
  webCalls: z.number().int().nonnegative(),
  turnDetails: z.array(threadTurnAnalyticsSchema),
  totalTokens: z.number().int().nonnegative(),
  inputTokens: z.number().int().nonnegative(),
  peakInputTokens: z.number().int().nonnegative(),
  cachedInputTokens: z.number().int().nonnegative(),
  outputTokens: z.number().int().nonnegative(),
  reasoningOutputTokens: z.number().int().nonnegative(),
  contextWindow: z.number().int().positive().nullable(),
  archived: z.boolean(),
  internal: z.boolean(),
  hasDetailedUsage: z.boolean(),
  isPossiblyActive: z.boolean(),
});

export const analyticsSnapshotSchema = z.object({
  generatedAt: z.string(),
  databasePath: z.string(),
  codexHome: z.string(),
  threads: z.array(threadAnalyticsSchema),
  warnings: z.array(z.string()),
});

export const tokenRateSchema = z.object({
  input: z.number().nonnegative(),
  output: z.number().nonnegative(),
  cachedInput: z.number().nonnegative().nullable(),
  cacheWrite: z.number().nonnegative().nullable(),
});

export const modelRateSchema = z.object({
  short: tokenRateSchema,
  long: tokenRateSchema.nullable(),
});

export type AnalyticsSnapshot = z.infer<typeof analyticsSnapshotSchema>;
export type ModelRate = z.infer<typeof modelRateSchema>;
export type TokenRate = z.infer<typeof tokenRateSchema>;
export type ThreadAnalytics = z.infer<typeof threadAnalyticsSchema>;
export type ThreadTurnAnalytics = z.infer<typeof threadTurnAnalyticsSchema>;
