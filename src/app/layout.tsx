import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({ subsets: ["latin"] });

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
      <body className={ GeistMono.className + " bg-black text-white text-sm"}>
        <Nav></Nav>
        {children}
        <Analytics/>
        </body>
    </html>
  );
}
