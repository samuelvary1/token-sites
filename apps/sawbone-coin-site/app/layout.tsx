import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAWBONE (SAWB) | Solana",
  description: "SAWBONE — friendly field medic meme coin on Solana.",
  openGraph: {
    title: "SAWBONE (SAWB)",
    description: "The friendliest field medic on Solana.",
    images: ["/sawbone-preview.png"]
  },
  icons: { icon: "/favicon.ico" }
};

export const viewport: Viewport = { themeColor: "#0f172a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
