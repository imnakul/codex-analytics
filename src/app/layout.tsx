import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  description:
    "A privacy-first, local-only dashboard for Codex usage, model performance, and API-equivalent cost estimates.",
  title: "Codex Analytics Ledger",
};

const themeBootScript = `
  try {
    const stored = localStorage.getItem("codex-analytics-ledger:theme");
    document.documentElement.dataset.theme = stored === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html
      className="h-full antialiased"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full bg-[#10120e] font-display text-[#f1ecdf]">
        {children}
      </body>
    </html>
  );
}
