"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Menu } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
        <img src="pictures/logo.svg" alt="KhEvents Logo" className="w-auto h-48 object-contain" />
          {/* <span className="text-lg sm:text-xl font-sans font-bold">KhEvents</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.explore")}
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.categories")}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                {t("nav.login")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                {t("nav.signup")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] pt-10">
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-6 py-4">
                  <div className="space-y-2">
                    <Link
                      href="/events"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("nav.explore")}
                    </Link>
                    <Link
                      href="/categories"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("nav.categories")}
                    </Link>
                    <Link href="/about" className="block py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      {t("nav.about")}
                    </Link>
                  </div>
                </div>
                <div className="border-t pt-6 pb-4 space-y-4">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      {t("nav.login")}
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">{t("nav.signup")}</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}