import { Skeleton } from "@/components/ui/skeleton"

export default function CategoryButtonSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-card border rounded-lg">
      <Skeleton className="w-12 h-12 rounded-full mb-2" />
      <Skeleton className="h-4 w-16 mb-1" />
      <Skeleton className="h-3 w-20" />
    </div>
  )
}
