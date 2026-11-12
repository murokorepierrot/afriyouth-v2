import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AfriYouth Innovation Labs | Empowering Next-Gen Innovators",
  description: "AfriYouth Innovation Labs is a hub where young minds design, develop, and launch solutions that solve real-world problems across the continent.",
  openGraph: {
    title: "AfriYouth Innovation Labs",
    description: "Empowering Youth Through Next-Gen Tech",
    url: "https://snazzy-monstera-2b71ca.netlify.app/",
    siteName: "AfriYouth Labs",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", // Ifoto ya Hero
        width: 1200,
        height: 630,
        alt: "AfriYouth Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}