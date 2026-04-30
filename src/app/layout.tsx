import type { Metadata } from "next";
import { Barlow, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

const GA_MEASUREMENT_ID = "G-Q2FW2TCV6M";

// Talkao brand typography — Barlow (per identity guide)
const barlow = Barlow({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talkao Ecosystem — Voice Translator & More",
  description:
    "30M+ downloads. 4 companies. From AI translation to parking marketplaces. Built by Diego Jarrin.",
  openGraph: {
    title: "Talkao Ecosystem — Showcase",
    description:
      "30M+ downloads. €174K annual revenue. Bootstrapped. Google Play Accelerator 2026.",
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
      className={`${barlow.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider>{children}</I18nProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
