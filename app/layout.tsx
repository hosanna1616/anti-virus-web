import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundVideo } from "@/components/background-video"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "EthioShield - Advanced Antivirus Protection",
  description:
    "Protect your digital world with cutting-edge security technology, crafted with Ethiopian excellence and global standards.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async />
      </head>
      <body className="font-sans">
        <BackgroundVideo />
        <ThemeProvider defaultTheme="system" storageKey="ethio-shield-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
