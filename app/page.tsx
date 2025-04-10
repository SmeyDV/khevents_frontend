"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MapPin, Music, Theater, FishIcon as Food, ClubIcon as Sports } from "lucide-react"
import EventCard from "@/components/event-card"
import CategoryButton from "@/components/category-button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-12 sm:py-16 md:py-20 bg-accent/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tighter">
                  {t("app.tagline")}
                </h1>
                <p className="max-w-[600px] text-sm sm:text-base md:text-lg text-muted-foreground">
                  {t("app.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder={t("home.search")} className="pl-10 bg-background border-border" />
                  </div>
                  <div className="relative flex-1 sm:max-w-[180px]">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder={t("home.location")}
                      className="pl-10 bg-background border-border"
                      defaultValue="Phnom Penh"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">{t("home.findEvents")}</Button>
                </div>
              </div>
              <div className="relative lg:ml-auto mt-6 lg:mt-0">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cambodian festival celebration"
                    className="object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background p-3 sm:p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-xs sm:text-sm font-medium">100+ events this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 md:py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight mb-4 sm:mb-6">
              {t("home.browseByCategory")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              <CategoryButton icon={<Music />} name={t("events.category") + ": " + "Music"} count={42} />
              <CategoryButton icon={<Theater />} name={t("events.category") + ": " + "Arts"} count={28} />
              <CategoryButton icon={<Food />} name={t("events.category") + ": " + "Food"} count={35} />
              <CategoryButton icon={<Sports />} name={t("events.category") + ": " + "Sports"} count={19} />
              <CategoryButton icon={<Calendar />} name={t("events.category") + ": " + "Festivals"} count={23} />
              <CategoryButton icon={<MapPin />} name={t("events.category") + ": " + "Tours"} count={17} />
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 md:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">Featured Events</h2>
              <Link href="/events">
                <Button variant="link" className="text-primary text-sm">
                  View all events
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <EventCard
                title="Angkor Sankranta Festival"
                image="/placeholder.svg?height=300&width=400"
                date="April 13-16, 2025"
                location="Siem Reap"
                category="Festival"
                price="Free"
              />
              <EventCard
                title="Phnom Penh International Music Festival"
                image="/placeholder.svg?height=300&width=400"
                date="May 5-7, 2025"
                location="Phnom Penh"
                category="Music"
                price="$15-45"
              />
              <EventCard
                title="Cambodia Food & Beverage Exhibition"
                image="/placeholder.svg?height=300&width=400"
                date="June 2-4, 2025"
                location="Phnom Penh"
                category="Food"
                price="$10"
              />
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 md:py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">Upcoming Events</h2>
              <Link href="/events">
                <Button variant="link" className="text-primary text-sm">
                  View all events
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <EventCard
                title="Traditional Dance Workshop"
                image="/placeholder.svg?height=250&width=350"
                date="April 22, 2025"
                location="Battambang"
                category="Arts"
                price="$8"
                compact
              />
              <EventCard
                title="Cambodian Rock Band Live"
                image="/placeholder.svg?height=250&width=350"
                date="April 25, 2025"
                location="Phnom Penh"
                category="Music"
                price="$12-30"
                compact
              />
              <EventCard
                title="Mekong River Boat Tour"
                image="/placeholder.svg?height=250&width=350"
                date="April 28, 2025"
                location="Kampong Cham"
                category="Tour"
                price="$25"
                compact
              />
              <EventCard
                title="Khmer Cuisine Cooking Class"
                image="/placeholder.svg?height=250&width=350"
                date="May 1, 2025"
                location="Phnom Penh"
                category="Food"
                price="$35"
                compact
              />
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight">
                  Never Miss an Event Again
                </h2>
                <p className="max-w-[600px] text-sm sm:text-base text-primary-foreground/80">
                  Sign up for our newsletter to get personalized event recommendations and exclusive offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary/80 border-primary/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-background text-primary hover:bg-background/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
