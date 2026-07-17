// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selasecurefinancial.com"),
  title: "SelaSecure Financial",
  description: "Secure. Generational. Wealth.",
  icons: {
    icon: "/logonob.ico",
  },
  openGraph: {
    title: "SelaSecure Financial",
    description: "Secure. Generational. Wealth.",
    url: "https://selasecurefinancial.com",
    siteName: "SelaSecure Financial",
    images: [
      {
        url: "/logonob.ico",
        width: 1200,
        height: 630,
        alt: "SelaSecure Financial",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SelaSecure Financial",
    description: "Secure. Generational. Wealth.",
    images: ["/logonob.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Load Google Translate library once (after interactive) */}
        <Script
          id="google-translate-lib"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        {/* Provide a safe placeholder init; the Header (client) will run the real init when its container exists */}
        <Script id="google-translate-placeholder" strategy="afterInteractive">
          {`window.googleTranslateElementInit = function() { /* placeholder */ }`}
        </Script>

        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
