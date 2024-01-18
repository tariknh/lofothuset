import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header, { SmoothScroll } from "@/components/header/Header";
import dynamic from "next/dynamic";
import Hvordan from "@/components/sections/Hvordan";
import Blog from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import localFont from "next/font/local";
import Transition from "@/components/ui/Animations/Transition";

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "./fonts/Satoshi-Bold.woff2",
    },
    {
      path: "./fonts/Satoshi-Light.woff2",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
    },
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "variable",
    },
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Lofothuset - Moderne Mikrohus",
  description:
    "Utforsk vårt unike utvalg av norske mikrohus – din løsning for en bærekraftig livsstil! Våre mikrohus kombinerer fleksibilitet og funksjonalitet, perfekt tilpasset moderne behov. Oppdag mikrohuset som definerer kompakt, miljøvennlig design, tilgjengelig til konkurransedyktige priser. Sjekk ut våre nyeste mikrohus til salgs og invester i et øko-vennlig, kostnadseffektivt hjem. Finn ditt ideelle mikro hus hos oss!",
  keywords: [
    "mikrohus",
    "mikrobolig",
    "mikrohjem",
    "mikrohuset",
    "mikrohus pris",
    "mikrohus til salgs",
  ],
  metadataBase: new URL("https://lofothuset.no/"),
  openGraph: {
    title: "Lofothuset - Moderne Mikrohus",
    description:
      "Utforsk vårt unike utvalg av norske mikrohus – din løsning for en bærekraftig livsstil! Våre mikrohus kombinerer fleksibilitet og funksjonalitet, perfekt tilpasset moderne behov. Oppdag mikrohuset som definerer kompakt, miljøvennlig design, tilgjengelig til konkurransedyktige priser. Sjekk ut våre nyeste mikrohus til salgs og invester i et øko-vennlig, kostnadseffektivt hjem. Finn ditt ideelle mikro hus hos oss!",
    url: "https://lofothuset.no/",
    siteName: "Lofothuset",
    locale: "no_NO",
    type: "website",
  },
  alternates: {
    canonical: "https://lofothuset.no/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          satoshi.variable
        )}
      >
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
