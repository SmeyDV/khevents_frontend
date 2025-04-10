import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  MapPin,
  Music,
  Theater,
  FishIcon as Food,
  ClubIcon as Sports,
  Camera,
  Utensils,
  Landmark,
  Ticket,
  Users,
  BookOpen,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Music",
      icon: <Music className="w-8 h-8" />,
      count: 42,
      description: "Concerts, performances, and musical events across Cambodia.",
      featured: true,
    },
    {
      name: "Arts",
      icon: <Theater className="w-8 h-8" />,
      count: 28,
      description: "Theater, dance, exhibitions, and cultural performances.",
      featured: true,
    },
    {
      name: "Food",
      icon: <Food className="w-8 h-8" />,
      count: 35,
      description: "Food festivals, cooking classes, and culinary experiences.",
      featured: true,
    },
    {
      name: "Sports",
      icon: <Sports className="w-8 h-8" />,
      count: 19,
      description: "Marathons, tournaments, and sporting competitions.",
      featured: true,
    },
    {
      name: "Festivals",
      icon: <Calendar className="w-8 h-8" />,
      count: 23,
      description: "Traditional celebrations, cultural festivals, and seasonal events.",
      featured: true,
    },
    {
      name: "Tours",
      icon: <MapPin className="w-8 h-8" />,
      count: 17,
      description: "Guided tours, excursions, and travel experiences.",
      featured: true,
    },
    {
      name: "Photography",
      icon: <Camera className="w-8 h-8" />,
      count: 12,
      description: "Photography workshops, exhibitions, and competitions.",
    },
    {
      name: "Workshops",
      icon: <Users className="w-8 h-8" />,
      count: 31,
      description: "Skill-building sessions, classes, and educational events.",
    },
    {
      name: "Heritage",
      icon: <Landmark className="w-8 h-8" />,
      count: 15,
      description: "Historical tours, temple visits, and cultural heritage events.",
    },
    {
      name: "Nightlife",
      icon: <Ticket className="w-8 h-8" />,
      count: 22,
      description: "Evening entertainment, parties, and nightlife experiences.",
    },
    {
      name: "Wellness",
      icon: <BookOpen className="w-8 h-8" />,
      count: 14,
      description: "Yoga retreats, meditation sessions, and wellness activities.",
    },
    {
      name: "Markets",
      icon: <Utensils className="w-8 h-8" />,
      count: 18,
      description: "Night markets, craft fairs, and shopping experiences.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold">KhEvents</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
              Explore
            </Link>
            <Link href="/categories" className="text-sm font-medium text-primary underline underline-offset-4">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
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
        <section className="py-12 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-serif font-bold mb-4">Event Categories</h1>
              <p className="text-muted-foreground mb-6">
                Discover events in Cambodia by category. From traditional festivals to modern concerts, find experiences
                that match your interests.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search categories..." className="pl-10 bg-background border-border" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-serif font-bold mb-2">Featured Categories</h2>
            <p className="text-muted-foreground mb-8">Our most popular event categories</p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories
                .filter((category) => category.featured)
                .map((category) => (
                  <Link href={`/categories/${category.name.toLowerCase()}`} key={category.name}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-sm border border-border hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-primary">
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-serif font-bold">{category.name}</h3>
                              <Badge variant="outline" className="ml-2">
                                {category.count} events
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-serif font-bold mb-2">All Categories</h2>
            <p className="text-muted-foreground mb-8">Browse all event types available in Cambodia</p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <Link href={`/categories/${category.name.toLowerCase()}`} key={category.name}>
                  <div className="bg-card p-4 border rounded-lg transition-all hover:shadow-sm hover:border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-primary">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-serif font-medium">{category.name}</h3>
                        <p className="text-xs text-muted-foreground">{category.count} events</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tight">Can't Find What You're Looking For?</h2>
                <p className="max-w-[600px] text-primary-foreground/80">
                  If you're organizing an event that doesn't fit into our categories, or if you have suggestions for new
                  categories, we'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-background text-primary hover:bg-background/90">Contact Us</Button>
                <Button
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary/80"
                >
                  Suggest a Category
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground">
        <div className="container px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <span className="text-xl font-serif font-bold text-primary-foreground">KhmerEvents</span>
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
