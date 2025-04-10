import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"

// Font: Open Sans
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "KhmerEvents - Discover Amazing Events in Cambodia",
  description: "Find and book the best events in Cambodia - concerts, festivals, workshops, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Khmer font via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khmer:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={openSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} ssr>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
