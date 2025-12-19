import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact - Let's Work Together",
  description: "Get in touch to discuss how I can help raise your conversion rates and improve your product design.",
}

export default function ContactPage() {
  return <ContactContent />
}
