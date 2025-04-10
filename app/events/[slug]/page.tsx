import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Tag, Clock, Share2, Heart, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingModal from "@/components/booking-modal"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const eventTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

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
        <div className="container px-4 py-8 md:px-6">
          <Link
            href="/events"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Events
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt={eventTitle}
                  className="w-full object-cover h-[300px] md:h-[400px]"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Festival</Badge>
              </div>

              <div>
                <h1 className="text-3xl font-serif font-bold mb-4">{eventTitle}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span>April 13-16, 2025</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span>Siem Reap, Cambodia</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Tag className="w-5 h-5 mr-2 text-primary" />
                    <span>Free - $45</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-8">
                  <BookingButton eventTitle={eventTitle} />
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>

                <Tabs defaultValue="about">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="venue">Venue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="mt-4 space-y-4">
                    <p>
                      Angkor Sankranta is one of the most significant cultural festivals in Cambodia, celebrated during
                      the Khmer New Year. The festival takes place in Siem Reap, home to the famous Angkor Wat temple
                      complex.
                    </p>
                    <p>
                      During the festival, visitors can experience traditional Khmer games, cultural performances,
                      traditional dances, and delicious Cambodian cuisine. The event showcases Cambodia's rich cultural
                      heritage and provides an opportunity for both locals and tourists to participate in the
                      celebrations.
                    </p>
                    <p>Highlights include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Traditional Khmer games and sports</li>
                      <li>Cultural performances and traditional dance shows</li>
                      <li>Food festivals featuring authentic Cambodian cuisine</li>
                      <li>Art exhibitions and handicraft displays</li>
                      <li>Religious ceremonies at Angkor Wat and other temples</li>
                      <li>Parade showcasing Cambodian culture and traditions</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-4">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-serif font-semibold">Day 1: April 13, 2025</h3>
                        <div className="space-y-2 mt-2">
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">9:00 AM</div>
                            <div>Opening Ceremony at Angkor Wat</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">11:00 AM</div>
                            <div>Traditional Games Competition</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">2:00 PM</div>
                            <div>Cultural Performances</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">7:00 PM</div>
                            <div>Evening Concert and Food Festival</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-serif font-semibold">Day 2: April 14, 2025</h3>
                        <div className="space-y-2 mt-2">
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">9:00 AM</div>
                            <div>Sand Mountain Building Ceremony</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">11:00 AM</div>
                            <div>Traditional Dance Workshops</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">2:00 PM</div>
                            <div>Art and Handicraft Exhibition</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">7:00 PM</div>
                            <div>Traditional Music Performance</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-serif font-semibold">Day 3-4: April 15-16, 2025</h3>
                        <div className="space-y-2 mt-2">
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">All Day</div>
                            <div>Continued celebrations with various activities throughout Siem Reap</div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <div className="text-sm text-muted-foreground">7:00 PM</div>
                            <div>Closing Ceremony with Fireworks Display (April 16)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="venue" className="mt-4">
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=400&width=800"
                          alt="Event venue map"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-serif font-semibold">Venue Information</h3>
                      <p>
                        The Angkor Sankranta Festival takes place across multiple locations in Siem Reap, with the main
                        events centered around the Angkor Archaeological Park and Siem Reap city center.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Angkor Archaeological Park</p>
                            <p className="text-sm text-muted-foreground">Siem Reap, Cambodia</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold mb-2">Getting There</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                              1
                            </span>
                            <span>From Siem Reap International Airport: 20-minute drive to the venue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                              2
                            </span>
                            <span>Tuk-tuks and taxis are readily available throughout Siem Reap</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                              3
                            </span>
                            <span>Special shuttle services will be available during the festival</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 border border-border rounded-lg">
                <h2 className="text-xl font-serif font-bold mb-4">Event Organizer</h2>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Ministry of Tourism"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">Ministry of Tourism, Cambodia</h3>
                    <p className="text-sm text-muted-foreground">Official Government Organization</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The Ministry of Tourism of Cambodia organizes the annual Angkor Sankranta Festival to promote cultural
                  tourism and preserve Cambodian traditions.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Organizer
                </Button>
              </div>

              <div className="bg-card p-6 border border-border rounded-lg">
                <h2 className="text-xl font-serif font-bold mb-4">Share This Event</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="w-full">
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
                  </Button>
                  <Button variant="outline" size="icon" className="w-full">
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
                  </Button>
                  <Button variant="outline" size="icon" className="w-full">
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
                  </Button>
                  <Button variant="outline" size="icon" className="w-full">
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
                      className="lucide lucide-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="bg-card p-6 border border-border rounded-lg">
                <h2 className="text-xl font-serif font-bold mb-4">Similar Events</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Water Festival"
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Water Festival</h3>
                      <p className="text-sm text-muted-foreground">Nov 18-20, 2025 • Phnom Penh</p>
                      <Link href="/events/water-festival" className="text-sm text-primary hover:underline">
                        View details
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Khmer New Year Celebration"
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Khmer New Year Celebration</h3>
                      <p className="text-sm text-muted-foreground">Apr 14-16, 2025 • Phnom Penh</p>
                      <Link href="/events/khmer-new-year-celebration" className="text-sm text-primary hover:underline">
                        View details
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Pchum Ben Festival"
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Pchum Ben Festival</h3>
                      <p className="text-sm text-muted-foreground">Oct 5-7, 2025 • Nationwide</p>
                      <Link href="/events/pchum-ben-festival" className="text-sm text-primary hover:underline">
                        View details
                      </Link>
                    </div>
                  </div>
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

// Client component for booking button with modal
function BookingButton({ eventTitle }: { eventTitle: string }) {
  "use client"

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ticketCount, setTicketCount] = useState(0)

  const handleBookingComplete = (count: number) => {
    setTicketCount(count)
  }

  return (
    <>
      <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsModalOpen(true)}>
        {ticketCount > 0 ? `${ticketCount} Tickets Reserved` : "Get Tickets"}
      </Button>

      <BookingModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        eventTitle={eventTitle}
        eventDate="April 13-16, 2025"
        eventImage="/placeholder.svg?height=300&width=400"
        onBookingComplete={handleBookingComplete}
      />
    </>
  )
}
