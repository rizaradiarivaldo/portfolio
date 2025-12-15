import { ComponentType } from "react"

interface SocialLink {
  label: string
  href: string
  handle: string
  icon: ComponentType<{ className?: string }>
}

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      d="M20.37 4.6 16.7 19.64c-.2.8-.98 1.18-1.7.77l-3.83-2.32-2.07 2a1 1 0 0 1-1.7-.55l-.74-3.88-3.65-1.42c-.96-.37-.93-1.77.05-2.08L19 3.62c.93-.31 1.82.47 1.37 1Z"
    />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m5.5 7 6.12 4.13c.23.15.52.15.75 0L18.5 7" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M7 9.5v8.75m5.25-8.75v8.75m0-5.25c0-1.75 1.44-3.25 3.25-3.25A3.3 3.3 0 0 1 18.8 13v5.25M7 6.75c0 .69-.56 1.25-1.25 1.25S4.5 7.44 4.5 6.75 5.06 5.5 5.75 5.5 7 6.06 7 6.75Z" />
  </svg>
)

const links: SocialLink[] = [
  { label: "Telegram", href: "https://t.me/andrew", handle: "@alexeyev_a", icon: TelegramIcon },
  { label: "Mail", href: "mailto:andrew@hey.com", handle: "andrew@hey.com", icon: MailIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/andrew", handle: "@alexeyev_a", icon: LinkedinIcon },
]

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-neutral-300">
      {links.map(({ label, href, handle, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="group inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-neutral-800/60"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="h-4 w-4 text-[var(--accent)] transition group-hover:scale-105" />
          <span className="text-neutral-400 group-hover:text-white">
            {label} <span className="text-neutral-500">/</span> <span className="text-white">{handle}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
