import "../globals.css";

import { cn } from "@/lib/utils";

import localFont from "next/font/local";

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../fonts/Satoshi-Bold.woff2",
    },
    {
      path: "../fonts/Satoshi-Light.woff2",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
    },
    {
      path: "../fonts/Satoshi-Regular.woff2",
    },
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "variable",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen p-safe bg-background font-sans antialiased",
          satoshi.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
