"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./ui/NavBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-background">
          <NextUIProvider>
            <NavBar />
            {children}
          </NextUIProvider>
        </main>
      </body>
    </html>
  );
}
