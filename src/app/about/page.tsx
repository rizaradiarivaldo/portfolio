// import { AboutContent } from "@/components/about-content"
import type { Metadata } from "next"
import { AboutContent } from "../components/about-content"

export const metadata: Metadata = {
  title: "About - Andrew Alexeyev | Senior Product Designer",
  description: "Learn about Andrew's achievements including redesigning iGoods app, ASO optimization, and award-winning work at Cuberto agency.",
  openGraph: {
    title: "About - Andrew Alexeyev | Senior Product Designer",
    description: "Learn about Andrew's achievements including redesigning iGoods app, ASO optimization, and award-winning work at Cuberto agency.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutContent />
    </main>
  )
}
