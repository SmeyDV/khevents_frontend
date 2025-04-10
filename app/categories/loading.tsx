import { Skeleton } from "@/components/ui/skeleton"
import CategoryButtonSkeleton from "@/components/category-button-skeleton"

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
        <section className="py-12 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-4 w-full max-w-xl mx-auto mb-6" />
              <Skeleton className="h-10 w-full max-w-md mx-auto" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64 mb-8" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-[150px] w-full rounded-lg" />
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64 mb-8" />

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <CategoryButtonSkeleton key={i} />
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
