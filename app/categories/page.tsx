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
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

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
      <SiteHeader />
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
      <SiteFooter />
    </div>
  )
}
