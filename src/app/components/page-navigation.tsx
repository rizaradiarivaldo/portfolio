"use client"

import { useRouter, usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ROUTES = ["/", "/about", "/career", "/contact"]

interface PageNavigationProps {
  className?: string
  isLastPage?: boolean
}

export function PageNavigation({ className = "", isLastPage = false }: PageNavigationProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentIndex = ROUTES.indexOf(pathname)

  const isFirstPage = currentIndex === 0
  const isAtLastPage = isLastPage || currentIndex === ROUTES.length - 1

  const handlePrevious = () => {
    if (!isFirstPage && currentIndex > 0) {
      router.push(ROUTES[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (!isAtLastPage && currentIndex < ROUTES.length - 1) {
      router.push(ROUTES[currentIndex + 1])
    }
  }

  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <button onClick={handlePrevious} className="rounded-full p-2 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30" disabled={isFirstPage} aria-label="Previous page">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={handleNext} className="rounded-full p-2 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30" disabled={isAtLastPage} aria-label="Next page">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export { ROUTES }
