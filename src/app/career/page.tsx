import type { Metadata } from "next"
import { CareerContent } from "../components/career-content"

export const metadata: Metadata = {
  title: "Career - Andrew Alexeyev | Senior Product Designer",
  description: "Explore Andrew's career journey from UI/UX Designer at 4XXI to Product Designer at leading companies including Cuberto (Agency of the Year) and iGoods.",
  openGraph: {
    title: "Career - Andrew Alexeyev | Senior Product Designer",
    description: "Explore Andrew's career journey from UI/UX Designer at 4XXI to Product Designer at leading companies including Cuberto (Agency of the Year) and iGoods.",
    type: "website",
  },
}

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerContent />
    </main>
  )
}
