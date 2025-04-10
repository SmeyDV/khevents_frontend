"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import {
  BarChart3,
  PieChart,
  LineChart,
  Users,
  Ticket,
  DollarSign,
  TrendingUp,
  Download,
  Calendar,
  ArrowUpDown,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30days")
  const [eventFilter, setEventFilter] = useState("all")

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track performance and insights for your events</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[150px]">
              <Calendar className="h-4 w-4 mr-2" />
              {timeRange === "7days"
                ? "Last 7 days"
                : timeRange === "30days"
                  ? "Last 30 days"
                  : timeRange === "90days"
                    ? "Last 90 days"
                    : "Last 12 months"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="12months">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Select value={eventFilter} onValueChange={setEventFilter}>
            <SelectTrigger className="w-[180px]">
              <span>Event: {eventFilter === "all" ? "All Events" : eventFilter}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="Phnom Penh International Music Festival">Music Festival</SelectItem>
              <SelectItem value="Traditional Dance Workshop">Dance Workshop</SelectItem>
              <SelectItem value="Cambodian Rock Band Live">Rock Band Live</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Users className="h-5 w-5 text-primary" />}
          title="Total Attendees"
          value="1,234"
          trend="+15.3%"
          trendUp={true}
        />
        <StatCard
          icon={<Ticket className="h-5 w-5 text-primary" />}
          title="Tickets Sold"
          value="856"
          trend="+12.5%"
          trendUp={true}
        />
        <StatCard
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          title="Revenue"
          value="$8,560"
          trend="+18.2%"
          trendUp={true}
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
          title="Conversion Rate"
          value="24.5%"
          trend="+2.1%"
          trendUp={true}
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="sales" className="gap-2">
            <LineChart className="h-4 w-4" />
            Sales
          </TabsTrigger>
          <TabsTrigger value="audience" className="gap-2">
            <PieChart className="h-4 w-4" />
            Audience
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">Ticket Sales Trend</CardTitle>
                <CardDescription>Daily ticket sales over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <LineChart className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Line chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">Revenue by Event</CardTitle>
                <CardDescription>Distribution of revenue across events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <PieChart className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Pie chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Event Performance</CardTitle>
              <CardDescription>Comparison of key metrics across events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Phnom Penh International Music Festival</div>
                    <div className="text-sm text-muted-foreground">120/200 attendees</div>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>Revenue: $1,800</div>
                    <div>Conversion: 28.4%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Traditional Dance Workshop</div>
                    <div className="text-sm text-muted-foreground">45/50 attendees</div>
                  </div>
                  <Progress value={90} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>Revenue: $360</div>
                    <div>Conversion: 32.1%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Cambodian Rock Band Live</div>
                    <div className="text-sm text-muted-foreground">78/150 attendees</div>
                  </div>
                  <Progress value={52} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>Revenue: $1,170</div>
                    <div>Conversion: 19.8%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Sales by Ticket Type</CardTitle>
              <CardDescription>Distribution of sales across different ticket types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Bar chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Top Selling Events</CardTitle>
              <CardDescription>Events ranked by ticket sales</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Event Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Tickets Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Avg. Ticket Price</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Phnom Penh International Music Festival</TableCell>
                    <TableCell>120</TableCell>
                    <TableCell>$1,800</TableCell>
                    <TableCell>$15.00</TableCell>
                    <TableCell>28.4%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cambodian Rock Band Live</TableCell>
                    <TableCell>78</TableCell>
                    <TableCell>$1,170</TableCell>
                    <TableCell>$15.00</TableCell>
                    <TableCell>19.8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Traditional Dance Workshop</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>$360</TableCell>
                    <TableCell>$8.00</TableCell>
                    <TableCell>32.1%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">Audience Demographics</CardTitle>
                <CardDescription>Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <PieChart className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Demographics chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">Geographic Distribution</CardTitle>
                <CardDescription>Attendee locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Geographic chart would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Attendee Engagement</CardTitle>
              <CardDescription>How attendees interact with your events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Email Open Rate</div>
                    <div className="text-sm text-muted-foreground">68%</div>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Click-through Rate</div>
                    <div className="text-sm text-muted-foreground">42%</div>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Social Media Shares</div>
                    <div className="text-sm text-muted-foreground">156</div>
                  </div>
                  <Progress value={56} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
          <div className={`text-xs font-medium ${trendUp ? "text-green-500" : "text-red-500"}`}>{trend}</div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-medium">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
