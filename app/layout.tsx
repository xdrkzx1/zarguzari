import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zarguzari — Couture Embroidery Atelier",
    template: "%s | Zarguzari",
  },
  description:
    "Zari and Zardozi Savoir-Faire from India, Since 1985. A 40-year couture embroidery studio working with the world's leading fashion houses.",
  keywords: [
    "zardozi embroidery",
    "zari embroidery",
    "couture embroidery studio India",
    "luxury embroidery atelier",
    "bridal embroidery India",
    "hand embroidery",
  ],
  openGraph: {
    title: "Zarguzari — Couture Embroidery Atelier",
    description:
      "Zari and Zardozi Savoir-Faire from India, Since 1985.",
    siteName: "Zarguzari",
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-[#1C1C1A] text-[#F4EEE0] font-body antialiased" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
