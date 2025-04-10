import type React from "react"
import Link from "next/link"
import { Calendar, LayoutDashboard, CalendarDays, BarChart3, Users, Settings, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function OrganizerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] p-0">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-xl font-serif font-bold">KhmerEvents</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <CalendarDays className="h-4 w-4" />
              Create Event
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Organizer" />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r bg-card">
          <DesktopSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

function DesktopSidebar() {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="px-3 py-2">
        <h2 className="text-lg font-serif font-semibold">Organizer Dashboard</h2>
        <p className="text-sm text-muted-foreground">Manage your events and analytics</p>
      </div>
      <Separator className="my-4" />
      <nav className="space-y-1 flex-1">
        <NavItem href="/organizer" icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" />
        <NavItem href="/organizer/events" icon={<CalendarDays className="h-4 w-4" />} label="My Events" />
        <NavItem href="/organizer/analytics" icon={<BarChart3 className="h-4 w-4" />} label="Analytics" />
        <NavItem href="/organizer/attendees" icon={<Users className="h-4 w-4" />} label="Attendees" />
        <NavItem href="/organizer/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
      </nav>
      <Separator className="my-4" />
      <Button variant="ghost" className="justify-start gap-2 px-3">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  )
}

function MobileSidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Organizer" />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-serif font-semibold">Sopheap Organizer</h2>
            <p className="text-xs text-muted-foreground">sopheap@example.com</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavItem href="/organizer" icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" />
        <NavItem href="/organizer/events" icon={<CalendarDays className="h-4 w-4" />} label="My Events" />
        <NavItem href="/organizer/analytics" icon={<BarChart3 className="h-4 w-4" />} label="Analytics" />
        <NavItem href="/organizer/attendees" icon={<Users className="h-4 w-4" />} label="Attendees" />
        <NavItem href="/organizer/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent">
      {icon}
      <span>{label}</span>
    </Link>
  )
}
