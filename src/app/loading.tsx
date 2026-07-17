export default function Loading(): React.ReactNode {
  return (
    <main
      aria-label="Loading Codex analytics"
      className="min-h-screen bg-[#10120e] px-4 py-6 text-[#f1ecdf] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1540px] animate-pulse">
        <div className="h-3 w-40 bg-[#35382f]" />
        <div className="mt-7 h-12 w-full max-w-2xl bg-[#24271f]" />
        <div className="mt-3 h-12 w-full max-w-xl bg-[#1b1e18]" />
        <div className="mt-10 grid gap-px border border-[#30332b] bg-[#30332b] sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="h-36 bg-[#171914]" key={index} />
          ))}
        </div>
        <div className="mt-6 h-14 border border-[#30332b] bg-[#171914]" />
        <div className="mt-5 h-[34rem] border border-[#30332b] bg-[#171914]" />
      </div>
    </main>
  );
}

