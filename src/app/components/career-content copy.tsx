"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink } from "lucide-react"
import { PageNavigation } from "@/components/page-navigation"
import { motion, AnimatePresence, type Variants } from "framer-motion"

type CareerPosition = {
  company: string
  companyLink?: string
  role: string
  duration: string
  location: string
  employmentType?: string
  skills: string[]
}

const careerData: CareerPosition[] = [
  {
    company: "Eratani",
    role: "Senior Associate Front End Developer",
    duration: "Des 2022 - Saat ini · 3 thn 1 bln",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia · Di lokasi",
    skills: ["Next.js", "TypeScript"],
  },
  {
    company: "Eratani",
    role: "Front End Developer",
    duration: "Des 2021 - Nov 2022 · 1 thn",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    skills: ["JavaScript", "Tailwind CSS", "+5 keahlian"],
  },
  {
    company: "Pijar Camp",
    role: "Frontend Facilitator",
    duration: "Des 2023 - Des 2023 · 1 bln",
    location: "Jarak jauh",
    employmentType: "Pekerja Lepas",
    skills: ["HTML", "Cascading Style Sheets (CSS)", "+1 keahlian"],
  },
  {
    company: "Fazztrack",
    role: "Freelance Software Engineer",
    duration: "Apr 2022 - Agu 2022 · 5 bln",
    location: "Jarak jauh",
    employmentType: "Pekerja Lepas",
    skills: ["Vue.js", "JavaScript", "+7 keahlian"],
  },
  {
    company: "Roots Indonesia",
    role: "Full Stack Website Developer",
    duration: "Nov 2020 - Nov 2021 · 1 thn 1 bln",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    employmentType: "Purnawaktu",
    skills: ["JavaScript", "HTML", "+4 keahlian"],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export function CareerContent() {
  const [currentPage, setCurrentPage] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

  const handlePrevious = () => {
    const newPage = Math.max(0, currentPage - 1)
    setPage([newPage, -1])
    setCurrentPage(newPage)
  }

  const handleNext = () => {
    const newPage = Math.min(careerData.length - 1, currentPage + 1)
    setPage([newPage, 1])
    setCurrentPage(newPage)
  }

  return (
    <motion.section className="relative flex min-h-screen flex-col px-6 py-12 md:px-12 lg:px-16" variants={containerVariants} initial="hidden" animate="visible">
      {/* Email - Top Right */}
      <motion.div className="mb-8 flex justify-end" variants={itemVariants}>
        <Link href="mailto:idrewha@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base">
          idrewha@gmail.com
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Career Heading */}
        <motion.h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl" variants={itemVariants}>
          Pengalaman
        </motion.h1>

        {/* Timeline Container */}
        <div className="relative flex-1">
          <motion.div className="hidden lg:block" variants={itemVariants}>
            <div className="relative overflow-x-auto pb-8">
              <div className="inline-flex min-w-max gap-16 px-4">
                {careerData.map((position, index) => (
                  <div key={index} className="relative flex w-80 flex-col">
                    {/* Company and Role Info */}
                    <div className="space-y-2">
                      {position.companyLink ? (
                        <Link href={position.companyLink} className="inline-flex items-center gap-1.5 text-xl font-semibold hover:text-primary">
                          {position.company}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      ) : (
                        <h2 className="text-xl font-semibold">{position.company}</h2>
                      )}
                      <p className="text-base text-muted-foreground">{position.role}</p>
                      {position.employmentType && <p className="text-sm text-muted-foreground/80">{position.employmentType}</p>}
                      <p className="text-sm text-muted-foreground/70">{position.duration}</p>
                      <p className="text-xs text-muted-foreground/60">{position.location}</p>
                    </div>

                    {/* Timeline Dot and Line */}
                    <div className="relative my-8 flex items-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      {index < careerData.length - 1 && <div className="absolute left-3 h-0.5 w-full bg-muted" />}
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-col gap-3">
                      {position.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center text-xs text-muted-foreground/50">Scroll horizontal untuk melihat semua →</div>
          </motion.div>

          {/* Mobile/Tablet: Carousel View */}
          <div className="block lg:hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div key={page} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-8">
                <div className="space-y-2">
                  {careerData[currentPage].companyLink ? (
                    <Link href={careerData[currentPage].companyLink} className="inline-flex items-center gap-2 text-3xl font-semibold hover:text-primary md:text-4xl">
                      {careerData[currentPage].company}
                      <ExternalLink className="h-6 w-6" />
                    </Link>
                  ) : (
                    <h2 className="text-3xl font-semibold md:text-4xl">{careerData[currentPage].company}</h2>
                  )}
                  <p className="text-lg text-muted-foreground">{careerData[currentPage].role}</p>
                  {careerData[currentPage].employmentType && <p className="text-base text-muted-foreground/80">{careerData[currentPage].employmentType}</p>}
                  <p className="text-base text-muted-foreground/70">{careerData[currentPage].duration}</p>
                  <p className="text-sm text-muted-foreground/60">{careerData[currentPage].location}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <div className="h-0.5 flex-1 bg-muted" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {careerData[currentPage].skills.map((skill, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 items-end gap-4 pt-12">
          <Button size="lg" className="group gap-2 rounded-full px-6 py-6 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20 md:text-base" asChild>
            <Link href="https://t.me/idrewha" target="_blank" rel="noopener noreferrer">
              t.me/idrewha
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          <div className="flex justify-center lg:hidden">
            <div className="flex items-center justify-center gap-6">
              <button onClick={handlePrevious} className="rounded-full p-2 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30" disabled={currentPage === 0} aria-label="Previous position">
                <ChevronRight className="h-6 w-6 rotate-180" />
              </button>
              <button onClick={handleNext} className="rounded-full p-2 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30" disabled={currentPage === careerData.length - 1} aria-label="Next position">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <PageNavigation />
          </div>
        </div>
      </div>

      {/* Decorative gradient blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </motion.section>
  )
}
