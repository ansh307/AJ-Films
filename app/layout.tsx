import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJ Films — Cinematic Storytelling & Creative Studio",
  description:
    "AJ Films is a creative studio crafting cinematic films, brand content, and social media storytelling. We turn imagination into reality through powerful visuals.",

  keywords: [
    "AJ Films",
    "film production",
    "cinematic videos",
    "brand films",
    "content creation",
    "creative studio",
    "videography",
    "storytelling",
  ],

  authors: [{ name: "AJ Films" }],
  creator: "AJ Films",

  openGraph: {
    title: "AJ Films — Cinematic Storytelling",
    description:
      "We create cinematic films, brand content, and storytelling-driven visuals.",
    url: "https://ajfilms.vercel.app", // 👉 replace
    siteName: "AJ Films",
    images: [
      {
        url: "/og-image.png", // 👉 add this later
        width: 1200,
        height: 630,
        alt: "AJ Films",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AJ Films",
    description: "Cinematic films, brand storytelling, and creative direction.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
