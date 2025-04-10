"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Search, MapPin, Filter } from "lucide-react"
import EventCard from "@/components/event-card"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    date: [],
    category: [],
    price: [],
    location: [],
  })

  const handleFilterChange = (type, value) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev }
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value)
      } else {
        newFilters[type] = [...newFilters[type], value]
      }
      return newFilters
    })
  }

  const applyFilters = () => {
    // In a real app, this would trigger a data fetch with the filters
    console.log("Applying filters:", activeFilters)
    setFiltersOpen(false)
  }

  const clearFilters = () => {
    setActiveFilters({
      date: [],
      category: [],
      price: [],
      location: [],
    })
  }

  // Filter component that works for both desktop and mobile
  const FilterContent = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-serif font-medium mb-2">Date</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="today"
              checked={activeFilters.date.includes("today")}
              onCheckedChange={() => handleFilterChange("date", "today")}
            />
            <label htmlFor="today" className="text-sm">
              Today
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="tomorrow"
              checked={activeFilters.date.includes("tomorrow")}
              onCheckedChange={() => handleFilterChange("date", "tomorrow")}
            />
            <label htmlFor="tomorrow" className="text-sm">
              Tomorrow
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="this-weekend"
              checked={activeFilters.date.includes("this-weekend")}
              onCheckedChange={() => handleFilterChange("date", "this-weekend")}
            />
            <label htmlFor="this-weekend" className="text-sm">
              This Weekend
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="this-week"
              checked={activeFilters.date.includes("this-week")}
              onCheckedChange={() => handleFilterChange("date", "this-week")}
            />
            <label htmlFor="this-week" className="text-sm">
              This Week
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="this-month"
              checked={activeFilters.date.includes("this-month")}
              onCheckedChange={() => handleFilterChange("date", "this-month")}
            />
            <label htmlFor="this-month" className="text-sm">
              This Month
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-serif font-medium mb-2">Category</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="music"
              checked={activeFilters.category.includes("music")}
              onCheckedChange={() => handleFilterChange("category", "music")}
            />
            <label htmlFor="music" className="text-sm">
              Music
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="arts"
              checked={activeFilters.category.includes("arts")}
              onCheckedChange={() => handleFilterChange("category", "arts")}
            />
            <label htmlFor="arts" className="text-sm">
              Arts
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="food"
              checked={activeFilters.category.includes("food")}
              onCheckedChange={() => handleFilterChange("category", "food")}
            />
            <label htmlFor="food" className="text-sm">
              Food
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sports"
              checked={activeFilters.category.includes("sports")}
              onCheckedChange={() => handleFilterChange("category", "sports")}
            />
            <label htmlFor="sports" className="text-sm">
              Sports
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="festivals"
              checked={activeFilters.category.includes("festivals")}
              onCheckedChange={() => handleFilterChange("category", "festivals")}
            />
            <label htmlFor="festivals" className="text-sm">
              Festivals
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="tours"
              checked={activeFilters.category.includes("tours")}
              onCheckedChange={() => handleFilterChange("category", "tours")}
            />
            <label htmlFor="tours" className="text-sm">
              Tours
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-serif font-medium mb-2">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="free"
              checked={activeFilters.price.includes("free")}
              onCheckedChange={() => handleFilterChange("price", "free")}
            />
            <label htmlFor="free" className="text-sm">
              Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="paid"
              checked={activeFilters.price.includes("paid")}
              onCheckedChange={() => handleFilterChange("price", "paid")}
            />
            <label htmlFor="paid" className="text-sm">
              Paid
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-serif font-medium mb-2">Location</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="phnom-penh"
              checked={activeFilters.location.includes("phnom-penh")}
              onCheckedChange={() => handleFilterChange("location", "phnom-penh")}
            />
            <label htmlFor="phnom-penh" className="text-sm">
              Phnom Penh
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="siem-reap"
              checked={activeFilters.location.includes("siem-reap")}
              onCheckedChange={() => handleFilterChange("location", "siem-reap")}
            />
            <label htmlFor="siem-reap" className="text-sm">
              Siem Reap
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="battambang"
              checked={activeFilters.location.includes("battambang")}
              onCheckedChange={() => handleFilterChange("location", "battambang")}
            />
            <label htmlFor="battambang" className="text-sm">
              Battambang
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sihanoukville"
              checked={activeFilters.location.includes("sihanoukville")}
              onCheckedChange={() => handleFilterChange("location", "sihanoukville")}
            />
            <label htmlFor="sihanoukville" className="text-sm">
              Sihanoukville
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <Button className="w-full bg-primary hover:bg-primary/90" onClick={applyFilters}>
          Apply Filters
        </Button>
        {Object.values(activeFilters).some((arr) => arr.length > 0) && (
          <Button variant="outline" className="flex-shrink-0" onClick={clearFilters}>
            Clear
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold">KhmerEvents</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium text-primary underline underline-offset-4">
              Explore
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Desktop Filters - Hidden on Mobile */}
            <div className="hidden md:block md:w-1/4 space-y-6">
              <div className="bg-card p-4 border rounded-lg">
                <h2 className="font-serif font-semibold mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h2>
                <FilterContent />
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="mb-6">
                <h1 className="text-2xl font-serif font-bold mb-4">Discover Events</h1>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search events..." className="pl-10 bg-card border-border" />
                  </div>
                  <div className="relative flex-1 sm:max-w-[180px]">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-10 bg-card border-border" defaultValue="Phnom Penh" />
                  </div>

                  {/* Mobile Filter Button */}
                  <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="outline" className="sm:flex-shrink-0 gap-2">
                        <Filter className="w-4 h-4" />
                        Filters
                        {Object.values(activeFilters).flat().length > 0 && (
                          <Badge variant="secondary" className="ml-1">
                            {Object.values(activeFilters).flat().length}
                          </Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[80vh] rounded-t-xl pt-6">
                      <div className="max-h-full overflow-auto pb-8">
                        <h2 className="font-serif font-semibold text-lg mb-4 flex items-center">
                          <Filter className="w-4 h-4 mr-2" />
                          Filters
                        </h2>
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Button className="bg-primary hover:bg-primary/90">Search</Button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 24 events</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm hidden sm:inline">Sort by:</span>
                    <Select defaultValue="date">
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date">Date: Soonest</SelectItem>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
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
                <EventCard
                  title="Traditional Dance Workshop"
                  image="/placeholder.svg?height=300&width=400"
                  date="April 22, 2025"
                  location="Battambang"
                  category="Arts"
                  price="$8"
                />
                <EventCard
                  title="Cambodian Rock Band Live"
                  image="/placeholder.svg?height=300&width=400"
                  date="April 25, 2025"
                  location="Phnom Penh"
                  category="Music"
                  price="$12-30"
                />
                <EventCard
                  title="Mekong River Boat Tour"
                  image="/placeholder.svg?height=300&width=400"
                  date="April 28, 2025"
                  location="Kampong Cham"
                  category="Tour"
                  price="$25"
                />
                <EventCard
                  title="Khmer Cuisine Cooking Class"
                  image="/placeholder.svg?height=300&width=400"
                  date="May 1, 2025"
                  location="Phnom Penh"
                  category="Food"
                  price="$35"
                />
                <EventCard
                  title="Water Festival Celebration"
                  image="/placeholder.svg?height=300&width=400"
                  date="November 18-20, 2025"
                  location="Phnom Penh"
                  category="Festival"
                  price="Free"
                />
                <EventCard
                  title="Cambodian Fashion Week"
                  image="/placeholder.svg?height=300&width=400"
                  date="July 15-18, 2025"
                  location="Phnom Penh"
                  category="Arts"
                  price="$20-50"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-accent">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground">
        <div className="container px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <span className="text-xl font-serif font-bold italic text-primary-foreground">KhmerEvents</span>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Discover the best events happening in Cambodia. Connect with your community and never miss out.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/events" className="hover:text-accent">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-accent">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/venues" className="hover:text-accent">
                    Venues
                  </Link>
                </li>
                <li>
                  <Link href="/organizers" className="hover:text-accent">
                    Event Organizers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="hover:text-accent">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-accent">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-accent">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary-foreground mb-4">Download Our App</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="inline-block">
                  <img src="/placeholder.svg?height=40&width=120" alt="Download on App Store" className="h-10" />
                </Link>
                <Link href="#" className="inline-block">
                  <img src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" className="h-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/70">
              © {new Date().getFullYear()} KhmerEvents. All rights reserved.
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
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <span className="sr-only">YouTube</span>
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
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4a49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
