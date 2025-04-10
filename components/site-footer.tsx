"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function SiteFooter() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-8 md:py-10 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <span className="text-lg sm:text-xl font-serif font-bold italic text-primary-foreground">
                {t("app.name")}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">{t("footer.description")}</p>
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <h3 className="text-sm font-medium text-primary-foreground mb-4">{t("footer.quickLinks")}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="/events" className="hover:text-accent">
                  {t("footer.allEvents")}
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-accent">
                  {t("nav.categories")}
                </Link>
              </li>
              <li>
                <Link href="/venues" className="hover:text-accent">
                  {t("footer.venues")}
                </Link>
              </li>
              <li>
                <Link href="/organizers" className="hover:text-accent">
                  {t("footer.organizers")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <h3 className="text-sm font-medium text-primary-foreground mb-4">{t("footer.support")}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-accent">
                  {t("footer.helpCenter")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  {t("footer.contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent">
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium text-primary-foreground mb-4">{t("footer.downloadApp")}</h3>
            <div className="flex flex-row sm:flex-col gap-2">
              <Link href="#" className="inline-block">
                <img src="/placeholder.svg?height=40&width=120" alt="Download on App Store" className="h-10" />
              </Link>
              <Link href="#" className="inline-block">
                <img src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" className="h-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/70 text-center sm:text-left">
            {t("footer.rights").replace("{year}", currentYear.toString())}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
