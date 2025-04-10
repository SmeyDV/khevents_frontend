import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MapPin, Phone, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rathanakpong Pha",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "With over 15 years of experience in event management across Cambodia, Pong founded KhmerEvents to showcase the country's rich cultural heritage.",
    },
    {
      name: "Reaksmey Rin",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Reaksmey has a passion for organizing events that celebrate the diversity of Cambodian culture.",
    }
  ]

  const stats = [
    { value: "500+", label: "Events Listed" },
    { value: "50,000+", label: "Monthly Visitors" },
    { value: "25+", label: "Provinces Covered" },
    { value: "300+", label: "Partner Organizations" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Our Story</h1>
                <p className="text-muted-foreground text-lg">
                  KhmerEvents was founded in 2023 with a simple mission: to connect people with the rich cultural
                  experiences that Cambodia has to offer.
                </p>
                <p className="text-muted-foreground">
                  From traditional festivals that have been celebrated for centuries to contemporary concerts and art
                  exhibitions, our platform serves as a bridge between event organizers and attendees, helping to
                  preserve and promote Cambodia's vibrant cultural heritage.
                </p>
              </div>
              <div className="relative lg:ml-auto">
                <div className="relative overflow-hidden rounded-lg shadow-sm border border-border">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="KhmerEvents team at a cultural festival"
                    className="object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-sm border border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Established 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                We believe that events are more than just gatherings—they're opportunities to connect, learn, and
                celebrate the diverse cultural tapestry of Cambodia.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card border border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">Preserve Heritage</h3>
                  <p className="text-muted-foreground">
                    We showcase traditional Cambodian festivals and cultural events to help preserve the country's rich
                    heritage for future generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">Connect Communities</h3>
                  <p className="text-muted-foreground">
                    Our platform brings together locals, expatriates, and tourists, fostering cultural exchange and
                    building stronger communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">Promote Tourism</h3>
                  <p className="text-muted-foreground">
                    By highlighting events across Cambodia, we help visitors discover authentic experiences beyond the
                    typical tourist attractions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-card border border-border">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border border-border">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-accent text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-card border border-border">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-serif font-bold mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4">Testimonials</h2>
              <p className="text-muted-foreground">What our users say about KhmerEvents</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic">
                      "KhmerEvents has transformed how I discover cultural activities in Phnom Penh. I've attended
                      events I never would have found otherwise."
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-border">
                        <AvatarFallback className="bg-accent text-primary">SC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sokha Chhum</p>
                        <p className="text-xs text-muted-foreground">Phnom Penh Resident</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic">
                      "As a tourist, this platform helped me experience authentic Cambodian culture beyond the usual
                      attractions. The festival calendar was especially useful."
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-border">
                        <AvatarFallback className="bg-accent text-primary">JL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">James Lee</p>
                        <p className="text-xs text-muted-foreground">International Visitor</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic">
                      "As an event organizer, KhmerEvents has helped us reach a wider audience for our traditional dance
                      performances. Their platform is invaluable."
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-border">
                        <AvatarFallback className="bg-accent text-primary">BT</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Bopha Tep</p>
                        <p className="text-xs text-muted-foreground">Cultural Organization Director</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions about KhmerEvents? We'd love to hear from you. Reach out to our team for support,
                  partnerships, or just to say hello.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Our Office</p>
                      <p className="text-sm text-muted-foreground">#123 Norodom Boulevard, Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@khmerevents.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+855 23 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="KhmerEvents office in Phnom Penh"
                  className="rounded-lg border border-border shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tight">Join Our Journey</h2>
                <p className="max-w-[600px] text-primary-foreground/80">
                  Subscribe to our newsletter to stay updated on the latest events, cultural insights, and
                  behind-the-scenes stories from KhmerEvents.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-primary/80 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
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
