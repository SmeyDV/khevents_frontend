import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"

// Use Next.js font optimization for Latin fonts
import { Playfair_Display, Libre_Baskerville } from "next/font/google"

// Define fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  weight: ["400", "700"],
})

// Khmer font will be loaded via link tags in the head

export const metadata: Metadata = {
  title: "KhmerEvents - Discover Amazing Events in Cambodia",
  description: "Find and book the best events in Cambodia - concerts, festivals, workshops, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Khmer font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Khmer:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfair.variable} ${libreBaskerville.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'