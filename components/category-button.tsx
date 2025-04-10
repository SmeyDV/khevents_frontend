import Link from "next/link"
import type { ReactNode } from "react"

interface CategoryButtonProps {
  icon: ReactNode
  name: string
  count: number
}

export default function CategoryButton({ icon, name, count }: CategoryButtonProps) {
  return (
    <Link
      href={`/categories/${name.toLowerCase().replace(/.*:\s*/, "")}`}
      className="flex flex-col items-center justify-center p-3 sm:p-4 bg-card border rounded-lg transition-all hover:border-primary/20 hover:shadow-sm"
    >
      <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-accent text-primary mb-2">
        {icon}
      </div>
      <span className="font-serif font-medium text-xs sm:text-sm text-center">{name}</span>
      <span className="text-xs text-muted-foreground">{count} events</span>
    </Link>
  )
}
