"use client"

import Link from "next/link"
import { Calendar, MapPin, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

interface EventCardProps {
  title: string
  image: string
  date: string
  location: string
  category: string
  price: string
  compact?: boolean
}

export default function EventCard({ title, image, date, location, category, price, compact = false }: EventCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-border h-full flex flex-col">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full object-cover ${compact ? "h-32 sm:h-40" : "h-40 sm:h-48"}`}
        />
        <Badge className="absolute top-2 right-2 bg-primary text-xs">{category}</Badge>
      </div>
      <CardContent className={`${compact ? "p-3" : "p-3 sm:p-4"} flex-grow`}>
        <h3
          className={`font-serif font-bold ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg"} mb-2 line-clamp-2`}
        >
          {title}
        </h3>
        <div className="space-y-1">
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-primary flex-shrink-0" />
            <span className="truncate">{date}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-primary flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-primary flex-shrink-0" />
            <span className="truncate">{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className={`${compact ? "p-3 pt-0" : "p-3 pt-0 sm:p-4 sm:pt-0"}`}>
        <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
          <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
            {t("events.viewDetails", "View Details")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
