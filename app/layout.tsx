import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Footer } from "@/components/footer";
import BackgroundVideo from "@/components/VideoBackground";
import ThemeInitializer from "@/components/ThemeInitializer";
import { Provider } from "@radix-ui/react-toast";
import { Providers } from "./provider";
import { Navigation } from "@/components/navigation";
import VideoBackground from "@/components/VideoBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "EthioShield - Advanced Antivirus Protection",
  description:
    "Protect your digital world with cutting-edge security technology, crafted with Ethiopian excellence and global standards.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} antialiased`}
    >
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          async
        />
      </head>
      <body className="font-sans">
        {/* <ThemeProvider defaultTheme="system" storageKey="ethio-shield-theme">
          <BackgroundVideo />

          <Footer />*/}
        <ThemeInitializer />
        <Providers>
          <VideoBackground />

          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
