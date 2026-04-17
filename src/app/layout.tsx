import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talkao Ecosystem — Voice Translator & More",
  description:
    "30M+ downloads. 6 companies. 45 projects. From AI translation to parking marketplaces. Built by Diego Jarrin.",
  openGraph: {
    title: "Talkao Ecosystem — Showcase",
    description:
      "30M+ downloads. €200K+ annual revenue. Bootstrapped. Google Play Accelerator 2026.",
    type: "website",
  },
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
