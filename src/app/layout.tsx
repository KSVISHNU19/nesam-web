import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nesam Glass, Plywoods & Hardware | Premium Showroom",
  description: "Discover luxury architectural glass, designer plywoods, high-end laminates, and premium hardware at Nesam. Creating modern building materials and premium interior design solutions since 2012.",
  keywords: [
    "Decorative Glass",
    "Luxury Mirrors",
    "Toughened Glass",
    "Premium Plywood",
    "Designer Laminates",
    "Architectural Hardware",
    "Modern Interior Solutions",
    "Nesam Glass",
    "Glass Partitions"
  ],
  authors: [{ name: "Nesam Architectural Materials" }],
  openGraph: {
    title: "Nesam Glass, Plywoods & Hardware | Premium Showroom",
    description: "Premium architectural materials for modern spaces. Explore our collection of decorative glass, mirrors, toughened glass, plywoods, laminates, and luxury hardware.",
    url: "https://nesammaterials.com",
    siteName: "Nesam Glass, Plywoods & Hardware",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nesam Glass, Plywoods & Hardware | Premium Showroom",
    description: "Discover luxury architectural glass, designer plywoods, high-end laminates, and premium hardware at Nesam.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-warm-white text-charcoal selection:bg-gold-wood selection:text-white">
        {children}
      </body>
    </html>
  );
}
