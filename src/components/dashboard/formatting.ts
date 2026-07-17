export function formatTokens(value: number): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 1_000_000 ? 2 : 1,
    notation: "compact",
  }).format(value);
}

export function formatCurrency(value: number | null): string {
  if (value === null) {
    return "Not priced";
  }

  const maximumFractionDigits = value < 0.01 ? 4 : value < 1 ? 3 : 2;
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(value);
}

export function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.max(0, Math.round(milliseconds / 1_000));
  const hours = Math.floor(totalSeconds / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
  }
  return `${seconds}s`;
}

export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "short",
  }).format(new Date(value));
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function shortModelName(model: string): string {
  return model
    .replace(/^gpt-\d+(?:\.\d+)?-/, "")
    .replace(/^gpt-/, "GPT ")
    .replace(/(^|[-_])([a-z])/g, (_match, prefix: string, letter: string) =>
      `${prefix ? " " : ""}${letter.toUpperCase()}`,
    );
}

