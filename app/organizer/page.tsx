"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarDays, Users, Ticket, DollarSign, TrendingUp, Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function OrganizerDashboard() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sopheap Organizer</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <CalendarDays className="h-4 w-4" />
          Create New Event
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<CalendarDays className="h-5 w-5 text-primary" />}
          title="Total Events"
          value="12"
          trend="+2 this month"
          trendUp={true}
        />
        <StatCard
          icon={<Users className="h-5 w-5 text-primary" />}
          title="Total Attendees"
          value="1,234"
          trend="+156 this month"
          trendUp={true}
        />
        <StatCard
          icon={<Ticket className="h-5 w-5 text-primary" />}
          title="Tickets Sold"
          value="856"
          trend="+89 this month"
          trendUp={true}
        />
        <StatCard
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          title="Revenue"
          value="$8,560"
          trend="+$1,245 this month"
          trendUp={true}
        />
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </div>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Phnom Penh International Music Festival"
              date="May 5-7, 2025"
              time="All day"
              location="Phnom Penh"
              attendees={120}
              capacity={200}
              status="Published"
            />
            <EventCard
              title="Traditional Dance Workshop"
              date="April 22, 2025"
              time="2:00 PM - 5:00 PM"
              location="Battambang"
              attendees={45}
              capacity={50}
              status="Published"
            />
            <EventCard
              title="Cambodian Rock Band Live"
              date="April 25, 2025"
              time="7:00 PM - 10:00 PM"
              location="Phnom Penh"
              attendees={78}
              capacity={150}
              status="Published"
            />
          </div>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Khmer New Year Celebration"
              date="April 14-16, 2024"
              time="All day"
              location="Siem Reap"
              attendees={350}
              capacity={350}
              status="Completed"
            />
            <EventCard
              title="Cambodian Cooking Class"
              date="March 15, 2024"
              time="10:00 AM - 1:00 PM"
              location="Phnom Penh"
              attendees={25}
              capacity={30}
              status="Completed"
            />
          </div>
        </TabsContent>
        <TabsContent value="draft" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Cambodian Film Festival"
              date="June 10-12, 2025"
              time="Various times"
              location="Phnom Penh"
              attendees={0}
              capacity={300}
              status="Draft"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ActivityItem
              title="New ticket purchase"
              description="5 tickets purchased for Phnom Penh International Music Festival"
              time="10 minutes ago"
            />
            <ActivityItem
              title="Event published"
              description="Traditional Dance Workshop has been published"
              time="2 hours ago"
            />
            <ActivityItem
              title="New registration"
              description="15 new registrations for Cambodian Rock Band Live"
              time="Yesterday"
            />
            <ActivityItem
              title="Event updated"
              description="You updated the details for Cambodian Film Festival"
              time="2 days ago"
            />
            <Button variant="outline" className="w-full mt-2">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-serif">Sales Overview</CardTitle>
                <CardDescription>Ticket sales performance</CardDescription>
              </div>
              <div className="flex gap-1">
                <Button
                  variant={timeRange === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("week")}
                >
                  Week
                </Button>
                <Button
                  variant={timeRange === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("month")}
                >
                  Month
                </Button>
                <Button
                  variant={timeRange === "year" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("year")}
                >
                  Year
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center">
                <TrendingUp className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Sales chart visualization would appear here</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-medium">$8,560</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-medium">24.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  title,
  value,
  trend,
  trendUp,
}: {
  icon: React.ReactNode
  title: string
  value: string
  trend: string
  trendUp: boolean
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
          <Badge variant={trendUp ? "default" : "destructive"} className="text-xs">
            {trend}
          </Badge>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-medium">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function EventCard({
  title,
  date,
  time,
  location,
  attendees,
  capacity,
  status,
}: {
  title: string
  date: string
  time: string
  location: string
  attendees: number
  capacity: number
  status: "Published" | "Draft" | "Completed"
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 bg-muted">
        <img src="/placeholder.svg?height=128&width=384" alt={title} className="w-full h-full object-cover" />
        <Badge
          className={`absolute top-2 right-2 ${
            status === "Published" ? "bg-green-500" : status === "Draft" ? "bg-amber-500" : "bg-blue-500"
          }`}
        >
          {status}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="space-y-1 mb-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Attendees</span>
            <span>
              {attendees}/{capacity}
            </span>
          </div>
          <Progress value={(attendees / capacity) * 100} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

function ActivityItem({ title, description, time }: { title: string; description: string; time: string }) {
  return (
    <div className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
      <div className="space-y-1">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
