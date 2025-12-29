import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nepzumfc.com"),
  title: "Nepzum FC | Plumstead's Premier Youth Football Academy",
  description:
    "Join London's most exciting youth football academy. FA-certified coaches, safe environment, and opportunities for players aged 5-16. Book your free trial today!",
  keywords:
    "youth football, academy, Plumstead, London, kids football, FA certified, youth sports, football training, children football club",
  authors: [{ name: "Nepzum FC" }],
  creator: "Nepzum FC",
  publisher: "Nepzum FC",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nepzumfc.com",
    siteName: "Nepzum FC",
    title: "Nepzum FC | Plumstead's Premier Youth Football Academy",
    description:
      "Join London's most exciting youth football academy. FA-certified coaches, safe environment, and opportunities for players aged 5-16.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nepzum FC - The Future is Purple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepzum FC | Youth Football Academy",
    description:
      "Join Plumstead's fastest-growing youth football academy. FA-certified coaches, ages 5-16.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png", // Using the logo for apple touch icon as well ensures consistency
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-slate-900 text-slate-50 min-h-screen font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
