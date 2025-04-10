import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Skeleton className="h-8 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-12 h-1" />
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-12 h-1" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <div className="space-y-6">
            <Skeleton className="h-6 w-48 mx-auto" />
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-[300px] w-full rounded-lg" />
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>

            <Skeleton className="h-10 w-full mt-6" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Skeleton className="h-[1px] w-full" />
            </div>
            <div className="relative flex justify-center">
              <Skeleton className="h-4 w-32 bg-background" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="text-center">
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-64" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </footer>
    </div>
  )
}
