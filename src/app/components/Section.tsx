import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  const baseStyles = "py-16 md:py-24 flex min-h-screen items-center"
  return <section className={`${baseStyles} ${className ?? ""}`}>{children}</section>
}
