import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  const baseStyles =
    "rounded-2xl border border-neutral-800/60 bg-[var(--muted)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm"

  return <div className={`${baseStyles} ${className ?? ""}`}>{children}</div>
}
