import EventCardSkeleton from "@/components/event-card-skeleton"
import CategoryButtonSkeleton from "@/components/category-button-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-20 bg-accent/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-4 w-full max-w-[600px]" />
                <Skeleton className="h-4 w-5/6 max-w-[500px]" />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full sm:max-w-[180px]" />
                  <Skeleton className="h-10 w-full sm:max-w-[120px]" />
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                <Skeleton className="absolute -bottom-6 -left-6 h-16 w-48 rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <CategoryButtonSkeleton key={i} />
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <EventCardSkeleton key={i} />
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <EventCardSkeleton key={i} compact />
                ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground">
        <div className="container px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-8 w-32 bg-primary-foreground/20" />
                  <Skeleton className="h-4 w-full bg-primary-foreground/20" />
                  <Skeleton className="h-4 w-5/6 bg-primary-foreground/20" />
                </div>
              ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
