import React from "react";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import { Header } from "@/components/layout/header";

import "./globals.css";

const notoSans = Noto_Sans({
   subsets: ["latin"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Mini Studio",
   description: "Mini Studio app character flow",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={notoSans.className}>
         <body className="antialiased">
            <div className="bg-soft-violet flex min-h-screen w-full flex-col overflow-hidden bg-[linear-gradient(34deg,rgba(216,216,247,1)_0%,rgba(234,234,251,1)_100%)]">
               <Header />
               {children}
            </div>
         </body>
      </html>
   );
}
