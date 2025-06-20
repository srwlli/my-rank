import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RankApp - Pairwise Ranking",
  description: "Vote and rank your favorites",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        
        {/* Responsive main content area - reduced top padding */}
        <main className="pt-6 lg:pt-4 pb-20 px-4 min-h-screen">
          {/* Mobile: max-w-sm, Tablet: max-w-md, Desktop: max-w-2xl */}
          <div className="max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto">
            {children}
          </div>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}