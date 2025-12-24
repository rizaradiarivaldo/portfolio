"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, ChevronDown } from "lucide-react"
import { motion, type Variants } from "framer-motion"

export function ProfileHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.section className="relative flex min-h-screen flex-col items-center justify-between px-6 py-12 md:px-12 lg:px-24" variants={containerVariants} initial="hidden" animate="visible">
      {/* Main Content - Centered */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
        {/* Profile Image */}
        <motion.div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20 shadow-2xl md:h-40 md:w-40" variants={itemVariants}>
          <Image src="/images/rizar.png" alt="Riza Radia Rivaldo - Senior Product Designer" fill className="object-cover" priority />
        </motion.div>

        {/* Name and Role */}
        <motion.div className="space-y-3" variants={itemVariants}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">Riza Radia Rivaldo</h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl lg:text-2xl">Software Engineer Frontend | Tech Enthusiast | Lifelong Learner</p>
        </motion.div>
      </div>

      {/* Bottom Section - Social Links and CTA */}
      <div className="flex w-full flex-col items-center gap-8">
        {/* Social Links */}
        <motion.div className="flex items-center gap-6" variants={itemVariants}>
          <Link href="https://www.linkedin.com/in/rizaradiarivaldo" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary md:text-base" aria-label="Connect on LinkedIn">
            <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </motion.div>

        {/* Start Button */}
        <motion.div variants={itemVariants}>
          <Button size="lg" className="group gap-2 rounded-full px-8 py-6 text-base font-medium shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20 md:px-10" asChild>
            <Link href="/about" aria-label="Learn more about me">
              Start
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative gradient blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </motion.section>
  )
}
