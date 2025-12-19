"use client"

import Image from "next/image"
import { Mail, Send, Linkedin } from "lucide-react"
import { PageNavigation } from "./page-navigation"
import { motion, type Variants } from "framer-motion"

export function ContactContent() {
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
    <motion.main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8 text-foreground" variants={containerVariants} initial="hidden" animate="visible">
      {/* Contact Section */}
      <div className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center">
        {/* Profile Image */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="relative h-32 w-32 overflow-hidden rounded-full bg-blue-100">
            <Image src="/images/rizar.png" alt="Profile" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 className="mb-4 text-balance text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" variants={itemVariants}>
          Let&apos;s work together?
        </motion.h1>

        {/* Description */}
        <motion.p className="mb-12 max-w-2xl text-balance text-center text-lg text-muted-foreground md:text-xl" variants={itemVariants}>
          Write to me, I will tell you in detail about how I raised the conversion rate by 70%.
        </motion.p>

        {/* Contact Methods */}
        <motion.div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8" variants={itemVariants}>
          {/* Telegram */}
          <a href="https://t.me/idrewha" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="mb-1 text-sm text-muted-foreground">Telegram</div>
              <div className="flex items-center gap-1 font-medium text-primary">
                @idrewha
                <span className="text-xs">↗</span>
              </div>
            </div>
          </a>

          {/* Mail */}
          <a href="mailto:idrewha@gmail.com" className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="mb-1 text-sm text-muted-foreground">Mail</div>
              <div className="font-medium text-foreground">idrewha@gmail.com</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/idrewha" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
            <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="mb-1 text-sm text-muted-foreground">LinkedIn</div>
              <div className="flex items-center gap-1 font-medium text-primary">
                @idrewha
                <span className="text-xs">↗</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <motion.div className="mt-12 w-full" variants={itemVariants}>
        <PageNavigation isLastPage={true} />
      </motion.div>

      {/* Decorative gradient blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </motion.main>
  )
}
