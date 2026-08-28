import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Backup Bean • The Coffee System 2046",
  description: "Vision & Interactive Governance Simulator for The Backup Bean: A circular harvest system for 2046.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[#f4ece1] text-[#1c1917] min-h-screen font-sans selection:bg-[#8c6d46] selection:text-white">
        {children}
      </body>
    </html>
  );
}

