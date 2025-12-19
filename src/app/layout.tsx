import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrew Alexeyev - Senior Product Designer Portfolio",
  description: "Portfolio of Andrew Alexeyev, a Senior Product Designer specializing in user-centered design and digital experiences. View my work and get in touch.",
  keywords: ["Product Designer", "UI/UX Design", "Portfolio", "Andrew Alexeyev", "Senior Designer", "Digital Design"],
  authors: [{ name: "Andrew Alexeyev" }],
  creator: "Andrew Alexeyev",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Andrew Alexeyev - Senior Product Designer",
    description: "Portfolio of Andrew Alexeyev, Senior Product Designer",
    siteName: "Andrew Alexeyev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Alexeyev - Senior Product Designer",
    description: "Portfolio of Andrew Alexeyev, Senior Product Designer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
