"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { PageNavigation } from "@/components/page-navigation"
import { motion, type Variants } from "framer-motion"

export function AboutContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section className="relative flex min-h-screen flex-col px-6 py-12 md:px-12 lg:px-16" variants={containerVariants} initial="hidden" animate="visible">
      {/* Email - Top Right */}
      <motion.div className="mb-8 flex justify-end" variants={itemVariants}>
        <Link href="mailto:rizaradiarivaldo@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base">
          rizaradiarivaldo@gmail.com
        </Link>
      </motion.div>

      {/* Main Content Grid */}
      <div className="flex flex-1 flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" variants={itemVariants}>
            Hi!
          </motion.h1>

          <motion.div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg" variants={itemVariants}>
            <p>I am Riza Radia Rivaldo</p>

            <p>I am a professional Frontend Software Engineer. I have a high curiosity about technological advances and developments. Experienced in creating and developing Website projects using Tech Stack: React, Next, Vue, Nuxt, With Javascript | Typescript, etc.</p>

            {/* <p>
              I also worked on the ASO, which resulted in an increase in conversion from <span className="font-bold text-primary">40.3%</span> to <span className="font-bold text-primary">58.8%</span> with 300K MAU.
            </p>

            <p>
              Additionally, I created the{" "}
              <Link href="#" className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary">
                Memo
              </Link>{" "}
              app for learning languages through memes. I also worked at Cuberto agency, which was named the best agency in the world by{" "}
              <Link href="https://www.awwwards.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary">
                Awwwards
              </Link>
              .
            </p> */}
          </motion.div>

          {/* Telegram Button */}
          <motion.div className="pt-4" variants={itemVariants}>
            <Button size="lg" className="group gap-2 rounded-full px-6 py-6 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20 md:text-base" asChild>
              <Link href="https://t.me/@rizaradiarivaldo" target="_blank" rel="noopener noreferrer">
                t.me/@rizaradiarivaldo
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Column - Peace Sign Image */}
        <motion.div className="relative flex items-center justify-center lg:justify-end" variants={itemVariants}>
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image src="/images/riza2.jpeg" alt="Peace sign hand gesture" fill className="object-contain" priority />
          </div>
        </motion.div>
      </div>

      <motion.div className="flex items-center justify-center gap-6 pt-8" variants={itemVariants}>
        <PageNavigation />
      </motion.div>

      {/* Decorative gradient blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </motion.section>
  )
}
