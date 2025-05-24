import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Gaharwar",
  description: "Nishant Gaharwar is a Software Engineer with 1.5+ years of experience crafting scalable, high-performance web applications using TypeScript and React.",
  keywords: "Nishant Gaharwar, Nishant Gaharwar Portfolio, Nishant Gaharwar Resume, Nishant Gaharwar LinkedIn, Nishant Gaharwar GitHub",
  authors: [{ name: "Nishant Gaharwar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
        geist.className,
        geistMono.className
      )}>
        {children}
      </body>
    </html>
  );
}
