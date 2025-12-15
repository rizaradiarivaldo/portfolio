import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  const baseStyles = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
  return <div className={`${baseStyles} ${className ?? ""}`}>{children}</div>
}
