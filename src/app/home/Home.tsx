import Image from "next/image"
import ProfileImage from "@/lib/anjay.png"
export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-surface/80 px-8 py-10 text-center shadow-lg backdrop-blur">
        <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-accent bg-background">
          <Image src={ProfileImage} alt="Profile" className="h-full w-full object-cover" priority />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Riza Radia Rivaldo</h1>
          <p className="text-sm text-foreground/70">
            Building a clean portfolio with a dark and light theme toggle.
          </p>
        </div>
      </div>
    </section>
  )
}
