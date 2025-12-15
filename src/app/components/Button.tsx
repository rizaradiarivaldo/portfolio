import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "ghost"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({ children, variant = "primary", className, type = "button", ...rest }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-[var(--accent)] text-black shadow-lg shadow-[var(--accent)]/25 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "border border-neutral-700 text-neutral-200 hover:border-[var(--accent)] hover:text-[var(--accent)]",
  }

  return (
    <button type={type} className={`${baseStyles} ${variantStyles[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  )
}
