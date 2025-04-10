import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface EventCardSkeletonProps {
  compact?: boolean
}

export default function EventCardSkeleton({ compact = false }: EventCardSkeletonProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className={`w-full ${compact ? "h-40" : "h-48"}`} />
        <Skeleton className="absolute top-2 right-2 h-5 w-16" />
      </div>
      <CardContent className={`${compact ? "p-3" : "p-4"}`}>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="space-y-2">
          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-2 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-2 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-2 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardContent>
      <CardFooter className={`${compact ? "p-3 pt-0" : "p-4 pt-0"}`}>
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  )
}
