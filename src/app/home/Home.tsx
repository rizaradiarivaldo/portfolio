import Image from "next/image"
import ProfileImage from "@/lib/anjay.png"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-10 text-center backdrop-blur md:mt-40">
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-accent bg-background">
          <Image src={ProfileImage} alt="Profile" className="h-full w-full object-cover" priority />
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
      </div>
    </section>
  )
}
