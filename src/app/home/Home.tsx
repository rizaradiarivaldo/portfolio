import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Send } from "lucide-react"
import Image from "next/image"
export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-10 text-center backdrop-blur md:mt-40">
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-accent bg-background">
          <Image src="/images/rizar.png" alt="Profile" className="h-full w-full object-cover" priority />
        </div>
        <div className="space-y-2 md:mt-8">
          <h1 className="text-2xl md:text-5xl font-semibold">Riza Radia Rivaldo</h1>
          <p className="text-sm md:text-2xl text-foreground/70 md:mt-3.5">Software Engineer Frontend | Tech Enthusiast | Lifelong Learner</p>
        </div>
        <Button variant="primary" size="lg" fontSize="lg">
          Start
          {/* <p className="text-lg">Start</p> */}
        </Button>
        {/* <Button variant="outline" className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-medium text-background hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">Get in Touch</Button> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-2xl pt-12 mt-12">
          {/* Telegram */}
          <a href="https://t.me/rizaradiarivaldo" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
            <Send className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span className="text-white text-base mb-1">Telegram</span>
              <span className="text-[#4ADE80] text-sm group-hover:underline flex items-center gap-1">
                @rizaradiarivaldo
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L9 3M9 3H3.5M9 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:rizaradiarivaldo@gmail.com" className="flex items-start gap-4 group">
            <Mail className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span className="text-white text-base mb-1">Mail</span>
              <span className="text-[#4ADE80] text-sm group-hover:underline">rizaradiarivaldo@gmail.com</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/rizaradiarivaldo" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
            <Linkedin className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span className="text-white text-base mb-1">LinkedIn</span>
              <span className="text-[#4ADE80] text-sm group-hover:underline flex items-center gap-1">
                @rizaradiarivaldo
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L9 3M9 3H3.5M9 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
