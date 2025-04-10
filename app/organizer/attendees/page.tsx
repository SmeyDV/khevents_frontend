"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, Mail, Download, ArrowUpDown, UserPlus, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AttendeesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [eventFilter, setEventFilter] = useState("all")

  // Mock data for attendees
  const attendees = [
    {
      id: "1",
      name: "Sokha Chhum",
      email: "sokha.c@example.com",
      phone: "+855 12 345 678",
      event: "Phnom Penh International Music Festival",
      ticketType: "VIP",
      purchaseDate: "March 15, 2025",
      status: "confirmed",
    },
    {
      id: "2",
      name: "Dara Kim",
      email: "dara.k@example.com",
      phone: "+855 12 987 654",
      event: "Phnom Penh International Music Festival",
      ticketType: "General",
      purchaseDate: "March 16, 2025",
      status: "confirmed",
    },
    {
      id: "3",
      name: "Bopha Tep",
      email: "bopha.t@example.com",
      phone: "+855 11 222 333",
      event: "Traditional Dance Workshop",
      ticketType: "Standard",
      purchaseDate: "March 10, 2025",
      status: "confirmed",
    },
    {
      id: "4",
      name: "Visal Prak",
      email: "visal.p@example.com",
      phone: "+855 10 555 777",
      event: "Cambodian Rock Band Live",
      ticketType: "VIP",
      purchaseDate: "March 18, 2025",
      status: "pending",
    },
    {
      id: "5",
      name: "Channary Kim",
      email: "channary.k@example.com",
      phone: "+855 12 444 888",
      event: "Traditional Dance Workshop",
      ticketType: "Standard",
      purchaseDate: "March 12, 2025",
      status: "confirmed",
    },
    {
      id: "6",
      name: "Sopheap Chea",
      email: "sopheap.c@example.com",
      phone: "+855 11 999 000",
      event: "Cambodian Rock Band Live",
      ticketType: "General",
      purchaseDate: "March 17, 2025",
      status: "cancelled",
    },
  ]

  // Filter attendees based on search query and event filter
  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.phone.includes(searchQuery)

    const matchesEvent = eventFilter === "all" || attendee.event === eventFilter

    return matchesSearch && matchesEvent
  })

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold">Attendees</h1>
          <p className="text-muted-foreground">Manage and communicate with your event attendees</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <UserPlus className="h-4 w-4" />
            Add Attendee
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All Attendees</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Email All
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Message All
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search attendees..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={eventFilter} onValueChange={setEventFilter}>
            <SelectTrigger className="w-[250px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Event: {eventFilter === "all" ? "All Events" : eventFilter}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="Phnom Penh International Music Festival">Music Festival</SelectItem>
              <SelectItem value="Traditional Dance Workshop">Dance Workshop</SelectItem>
              <SelectItem value="Cambodian Rock Band Live">Rock Band Live</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all">
          <AttendeesTable attendees={filteredAttendees} />
        </TabsContent>
        <TabsContent value="confirmed">
          <AttendeesTable attendees={filteredAttendees.filter((a) => a.status === "confirmed")} />
        </TabsContent>
        <TabsContent value="pending">
          <AttendeesTable attendees={filteredAttendees.filter((a) => a.status === "pending")} />
        </TabsContent>
        <TabsContent value="cancelled">
          <AttendeesTable attendees={filteredAttendees.filter((a) => a.status === "cancelled")} />
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif">Attendee Summary</CardTitle>
            <CardDescription>Overview of your event attendees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Total Attendees</div>
                <div className="font-medium">{attendees.length}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Confirmed</div>
                <div className="font-medium">{attendees.filter((a) => a.status === "confirmed").length}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Pending</div>
                <div className="font-medium">{attendees.filter((a) => a.status === "pending").length}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Cancelled</div>
                <div className="font-medium">{attendees.filter((a) => a.status === "cancelled").length}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif">Recent Activity</CardTitle>
            <CardDescription>Latest attendee registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendees
                .sort((a, b) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime())
                .slice(0, 3)
                .map((attendee) => (
                  <div key={attendee.id} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      {attendee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{attendee.name}</div>
                      <div className="text-xs text-muted-foreground">{attendee.event}</div>
                      <div className="text-xs text-muted-foreground">Purchased on {attendee.purchaseDate}</div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif">Communication</CardTitle>
            <CardDescription>Engage with your attendees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full gap-2">
              <Mail className="h-4 w-4" />
              Send Email Campaign
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <MessageSquare className="h-4 w-4" />
              Send SMS Notification
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AttendeesTable({ attendees }: { attendees: any[] }) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <div className="flex items-center gap-1">
                Name
                <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Ticket Type</TableHead>
            <TableHead>Purchase Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                No attendees found. Try adjusting your filters.
              </TableCell>
            </TableRow>
          ) : (
            attendees.map((attendee) => (
              <TableRow key={attendee.id}>
                <TableCell className="font-medium">{attendee.name}</TableCell>
                <TableCell>
                  <div className="text-sm">{attendee.email}</div>
                  <div className="text-xs text-muted-foreground">{attendee.phone}</div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">{attendee.event}</TableCell>
                <TableCell>{attendee.ticketType}</TableCell>
                <TableCell>{attendee.purchaseDate}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      attendee.status === "confirmed"
                        ? "bg-green-500"
                        : attendee.status === "pending"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }
                  >
                    {attendee.status.charAt(0).toUpperCase() + attendee.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
