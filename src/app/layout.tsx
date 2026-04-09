import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from 'next/script'; // استيراد مكتبة السكريبت

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AQL Solutions - Sovereign AI & Secure Workspaces",
  description: "Empowering KSA enterprises with locally-hosted AI integrations, autonomous penetration testing, and absolute data sovereignty—aligned with Vision 2030.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preload Cairo font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} bg-pureblack text-purewhite font-sans antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>

        {/* --- Google Analytics Start --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JFFPBRW8ML"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JFFPBRW8ML');
          `}
        </Script>
        {/* --- Google Analytics End --- */}
      </body>
    </html>
  );
}