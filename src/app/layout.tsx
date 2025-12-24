import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Riza Radia Rivaldo - Software Engineer Frontend 2",
  description: "I am a professional Frontend Software Engineer. I have a high curiosity about technological advances and developments. Experienced in creating and developing Website projects using Tech Stack: React, Next, Vue, Nuxt, With Javascript | Typescript, etc.",
  keywords: ["Riza Radia Rivaldo", "Software Engineer Frontend 2", "Frontend Engineer", "Frontend Developer", "Frontend Software Engineer", "Web Developer", "Web Engineer", "React Developer", "Next.js Developer", "Vue Developer", "Nuxt Developer", "JavaScript Developer", "TypeScript Developer"],
  authors: [{ name: "Riza Radia Rivaldo" }],
  creator: "Riza Radia Rivaldo",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Riza Radia Rivaldo - Software Engineer Frontend",
    description: "Portfolio of Riza Radia Rivaldo, Software Engineer Frontend",
    siteName: "Riza Radia Rivaldo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riza Radia Rivaldo - Software Engineer Frontend",
    description: "Portfolio of Riza Radia Rivaldo, Software Engineer Frontend",
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
