import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Download, MapPin, QrCode, Ticket } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MyTicketsPage() {
  // Sample ticket data - in a real app, this would come from a database
  const upcomingTickets = [
    {
      id: "ticket-1",
      eventTitle: "Angkor Sankranta Festival",
      eventDate: "April 13-16, 2025",
      location: "Siem Reap",
      ticketType: "General Admission",
      quantity: 2,
      price: "$30.00",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "ticket-2",
      eventTitle: "Phnom Penh International Music Festival",
      eventDate: "May 5-7, 2025",
      location: "Phnom Penh",
      ticketType: "VIP Access",
      quantity: 1,
      price: "$45.00",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const pastTickets = [
    {
      id: "ticket-3",
      eventTitle: "Traditional Dance Workshop",
      eventDate: "January 22, 2025",
      location: "Battambang",
      ticketType: "General Admission",
      quantity: 1,
      price: "$8.00",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold">KhmerEvents</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
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
            <Link href="/my-tickets">
              <Button variant="outline" size="sm" className="gap-1">
                <Ticket className="w-4 h-4" />
                My Tickets
              </Button>
            </Link>
            <Link href="/account">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Account
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold">My Tickets</h1>
              <p className="text-muted-foreground">Manage your event tickets and bookings</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export All Tickets
            </Button>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming" className="flex gap-2 items-center">
                Upcoming <Badge>{upcomingTickets.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="past" className="flex gap-2 items-center">
                Past <Badge>{pastTickets.length}</Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              {upcomingTickets.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingTickets.map((ticket) => (
                    <Card key={ticket.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={ticket.image || "/placeholder.svg"}
                          alt={ticket.eventTitle}
                          className="w-full h-40 object-cover"
                        />
                        <Badge className="absolute top-2 right-2">{ticket.ticketType}</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-bold text-lg mb-2">{ticket.eventTitle}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1 text-primary" />
                            <span>{ticket.eventDate}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1 text-primary" />
                            <span>{ticket.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Ticket className="w-4 h-4 mr-1 text-primary" />
                            <span>
                              {ticket.quantity} {ticket.quantity > 1 ? "tickets" : "ticket"} • {ticket.price}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button variant="outline" className="flex-1 gap-1">
                          <QrCode className="w-4 h-4" />
                          View Ticket
                        </Button>
                        <Button variant="outline" className="flex-1 gap-1">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ticket className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No upcoming tickets</h3>
                  <p className="text-muted-foreground mb-6">You don't have any upcoming event tickets.</p>
                  <Link href="/events">
                    <Button>Browse Events</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            <TabsContent value="past">
              {pastTickets.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pastTickets.map((ticket) => (
                    <Card key={ticket.id} className="overflow-hidden opacity-80">
                      <div className="relative">
                        <img
                          src={ticket.image || "/placeholder.svg"}
                          alt={ticket.eventTitle}
                          className="w-full h-40 object-cover"
                        />
                        <Badge className="absolute top-2 right-2" variant="outline">
                          {ticket.ticketType}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-bold text-lg mb-2">{ticket.eventTitle}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1 text-primary" />
                            <span>{ticket.eventDate}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1 text-primary" />
                            <span>{ticket.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Ticket className="w-4 h-4 mr-1 text-primary" />
                            <span>
                              {ticket.quantity} {ticket.quantity > 1 ? "tickets" : "ticket"} • {ticket.price}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ticket className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No past tickets</h3>
                  <p className="text-muted-foreground mb-6">You don't have any past event tickets.</p>
                  <Link href="/events">
                    <Button>Browse Events</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
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
