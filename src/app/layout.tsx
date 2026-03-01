import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AlertTriangle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wei Chen - Portfolio",
  description: "Personal portfolio of Wei Chen, Engineering Leader at YouTube.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#bc1a22] selection:text-white`}
      >
        <div className="relative">
          {/* AI Experiment Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-900/50 py-2.5 px-6 relative z-[100] transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-center">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500 shrink-0" />
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-amber-800 dark:text-amber-500/80 leading-tight">
                AI Experiment: Content is generated for demonstration and is not fully validated. May contain errors.
              </p>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
