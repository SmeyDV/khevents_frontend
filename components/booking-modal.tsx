"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Calendar, CreditCard, Ticket } from "lucide-react"

interface TicketType {
  id: string
  name: string
  price: number
  description: string
  available: number
}

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  eventTitle: string
  eventDate: string
  eventImage: string
  onBookingComplete?: (ticketCount: number) => void
}

export default function BookingModal({
  open,
  onOpenChange,
  eventTitle,
  eventDate,
  eventImage,
  onBookingComplete,
}: BookingModalProps) {
  const [step, setStep] = useState<"select" | "checkout" | "confirmation">("select")
  const [selectedTickets, setSelectedTickets] = useState<{ [key: string]: number }>({})
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bank">("card")

  // Sample ticket types
  const ticketTypes: TicketType[] = [
    {
      id: "general",
      name: "General Admission",
      price: 15,
      description: "Standard entry to the event",
      available: 200,
    },
    {
      id: "vip",
      name: "VIP Access",
      price: 45,
      description: "Premium seating and exclusive perks",
      available: 50,
    },
    {
      id: "early",
      name: "Early Bird",
      price: 10,
      description: "Limited discounted tickets",
      available: 20,
    },
  ]

  const handleQuantityChange = (ticketId: string, quantity: number) => {
    setSelectedTickets({
      ...selectedTickets,
      [ticketId]: Math.max(0, quantity),
    })
  }

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, quantity) => sum + quantity, 0)
  }

  const getTotalPrice = () => {
    return ticketTypes.reduce((sum, ticket) => {
      const quantity = selectedTickets[ticket.id] || 0
      return sum + ticket.price * quantity
    }, 0)
  }

  const handleContinue = () => {
    if (step === "select" && getTotalTickets() > 0) {
      setStep("checkout")
    } else if (step === "checkout") {
      setStep("confirmation")
      if (onBookingComplete) {
        onBookingComplete(getTotalTickets())
      }
    } else if (step === "confirmation") {
      onOpenChange(false)
      setStep("select")
      setSelectedTickets({})
    }
  }

  const handleBack = () => {
    if (step === "checkout") {
      setStep("select")
    } else if (step === "confirmation") {
      setStep("checkout")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {step === "select" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">Select Tickets</DialogTitle>
              <DialogDescription>
                Choose the type and number of tickets you want to purchase for {eventTitle}.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4 py-4">
              <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <img src={eventImage || "/placeholder.svg"} alt={eventTitle} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">{eventTitle}</h3>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {eventDate}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4 my-4">
              {ticketTypes.map((ticket) => (
                <div key={ticket.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Ticket className="w-4 h-4 mr-2" />
                      <h4 className="font-medium">{ticket.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{ticket.description}</p>
                    <p className="text-sm">
                      ${ticket.price.toFixed(2)} • {ticket.available} available
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(ticket.id, (selectedTickets[ticket.id] || 0) - 1)}
                      disabled={(selectedTickets[ticket.id] || 0) === 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{selectedTickets[ticket.id] || 0}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(ticket.id, (selectedTickets[ticket.id] || 0) + 1)}
                      disabled={(selectedTickets[ticket.id] || 0) >= ticket.available}
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="flex justify-between items-center py-4">
              <div>
                <p className="font-medium">Total</p>
                <p className="text-sm text-muted-foreground">{getTotalTickets()} tickets</p>
              </div>
              <p className="text-xl font-medium">${getTotalPrice().toFixed(2)}</p>
            </div>

            <DialogFooter>
              <Button onClick={handleContinue} disabled={getTotalTickets() === 0}>
                Continue to Checkout
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "checkout" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">Checkout</DialogTitle>
              <DialogDescription>Complete your purchase to secure your tickets.</DialogDescription>
            </DialogHeader>

            <div className="space-y-4 my-4">
              <div>
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+855 12 345 678" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Payment Method</h3>
                <RadioGroup
                  defaultValue="card"
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value as "card" | "paypal" | "bank")}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-3 space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-center py-4">
              <div>
                <p className="font-medium">Total</p>
                <p className="text-sm text-muted-foreground">{getTotalTickets()} tickets</p>
              </div>
              <p className="text-xl font-medium">${getTotalPrice().toFixed(2)}</p>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleBack} className="sm:order-1 order-2">
                Back
              </Button>
              <Button onClick={handleContinue} className="sm:order-2 order-1">
                Complete Purchase
              </Button>
            </DialogFooter>
          </>
        )}

        {step === "confirmation" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">Booking Confirmed!</DialogTitle>
              <DialogDescription>Your tickets have been booked successfully.</DialogDescription>
            </DialogHeader>

            <div className="my-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Thank you for your purchase</h3>
              <p className="text-muted-foreground mb-4">
                We've sent a confirmation email with your tickets to your email address.
              </p>

              <div className="bg-secondary p-4 rounded-lg text-left mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Event:</span>
                  <span className="font-medium">{eventTitle}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{eventDate}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Tickets:</span>
                  <span>{getTotalTickets()} tickets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Paid:</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                You can view your tickets anytime in the "My Tickets" section of your account.
              </p>
            </div>

            <DialogFooter>
              <Button onClick={handleContinue}>Done</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
