import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  accent: "blue" | "coral" | "lime" | "paper";
  detail: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

const accentClasses: Record<SummaryCardProps["accent"], string> = {
  blue: "bg-[#88bfff] text-[#0d1d2e]",
  coral: "bg-[#ff8067] text-[#2b0c07]",
  lime: "bg-[#d7ff5f] text-[#172000]",
  paper: "bg-[#efe9dc] text-[#202018]",
};

export function SummaryCard({
  accent,
  detail,
  icon: Icon,
  label,
  value,
}: SummaryCardProps): React.ReactNode {
  return (
    <article className="group relative min-h-36 overflow-hidden border border-[#30332b] bg-[#171914] p-4 transition-colors duration-200 hover:border-[#4a4f41] sm:p-5">
      <div
        className={`absolute right-0 top-0 flex size-11 items-center justify-center ${accentClasses[accent]}`}
      >
        <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
      </div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8e9383]">
        {label}
      </p>
      <p className="mt-7 font-display text-3xl font-semibold tracking-[-0.04em] text-[#f1ecdf] sm:text-[2rem]">
        {value}
      </p>
      <p className="mt-2 max-w-[18rem] text-xs leading-5 text-[#8e9383]">
        {detail}
      </p>
    </article>
  );
}

