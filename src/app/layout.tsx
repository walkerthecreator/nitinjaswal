import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const themeScript = `
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", storedTheme ? storedTheme === "dark" : prefersDark);
  } catch (_) {}
`;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitinjaswal.me"),
  title: "Nitin Jaswal",
  description: "Portfolio of Nitin Jaswal - Design Engineer crafting digital experiences with code and creativity.",
  keywords: ["Nitin Jaswal", "Design Engineer", "Portfolio", "Web Developer", "Frontend Developer"],
  authors: [{ name: "Nitin Jaswal" }],
  creator: "Nitin Jaswal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitinjaswal.me",
    siteName: "Nitin Jaswal",
    title: "Nitin Jaswal - Design Engineer",
    description: "Portfolio of Nitin Jaswal - Design Engineer crafting digital experiences with code and creativity.",
    images: [
      {
        url: "/images/nitin.jpg",
        width: 1200,
        height: 630,
        alt: "Nitin Jaswal - Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Jaswal - Design Engineer",
    description: "Portfolio of Nitin Jaswal - Design Engineer crafting digital experiences with code and creativity.",
    images: ["/images/nitin.jpg"],
    creator: "@nitinjaswal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nitinjaswal.me",
    types: {
      "text/plain": "https://nitinjaswal.me/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} bg-background text-foreground text-sm`}>
        <Nav />
        {children}
        <Analytics/>
        </body>
    </html>
  );
}
