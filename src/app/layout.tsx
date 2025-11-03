import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitin Jaswal",
  description: "Portfolio of Nitin Jaswal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className + " bg-black text-white text-sm"}>
        <Nav />
        {children}
        <Analytics/>
        </body>
    </html>
  );
}
