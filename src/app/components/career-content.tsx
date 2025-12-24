"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { PageNavigation } from "@/components/page-navigation"
import { motion, type Variants } from "framer-motion"

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
    employmentType: "Full Time",
    skills: ["Next.js", "TypeScript"],
  },
  {
    company: "Eratani",
    role: "Front End Developer",
    duration: "Des 2021 - Nov 2022 · 1 thn",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    employmentType: "Full Time",
    skills: ["JavaScript", "Tailwind CSS", "+5 keahlian"],
  },
  {
    company: "Pijar Camp",
    role: "Frontend Facilitator",
    duration: "Des 2023 - Des 2023 · 1 bln",
    location: "Jarak jauh",
    employmentType: "Freelance",
    skills: ["HTML", "Cascading Style Sheets (CSS)", "+1 keahlian"],
  },
  {
    company: "Fazztrack",
    role: "Freelance Software Engineer",
    duration: "Apr 2022 - Agu 2022 · 5 bln",
    location: "Jarak jauh",
    employmentType: "Freelance",
    skills: ["Vue.js", "JavaScript", "+7 keahlian"],
  },
  {
    company: "Roots Indonesia",
    role: "Full Stack Website Developer",
    duration: "Nov 2020 - Nov 2021 · 1 thn 1 bln",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    employmentType: "Full Time",
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

export function CareerContent() {
  return (
    <motion.section className="relative flex min-h-screen flex-col px-6 py-8 md:px-12 lg:px-16" variants={containerVariants} initial="hidden" animate="visible">
      {/* Email - Top Right */}
      <motion.div className="mb-8 flex justify-end" variants={itemVariants}>
        <Link href="mailto:rizaradiarivaldo@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary md:text-base">
          rizaradiarivaldo@gmail.com
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
            <div className="relative overflow-x-auto pb-8 scroll-smooth scrollbar-hide">
              <div className="inline-grid min-w-max grid-flow-col auto-cols-[20rem] gap-16 px-4">
                {careerData.map((position, index) => (
                  <div key={index} className="relative grid w-80 grid-rows-[auto_auto_1fr]">
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

                    {/* Timeline Dot and Connected Line */}
                    <div className="relative my-8 flex items-center">
                      <div className={`relative z-10 h-3 w-3 rounded-full ${index === 0 ? "bg-primary" : "bg-muted-foreground"}`}>
                        <div className={`z-10 h-3 w-3 rounded-full ${index === 0 && "ring-4 ring-primary/20 animate-ping animation-duration-[1s]"}`} />
                      </div>

                      {/* {index < careerData.length - 1 && <div className="absolute left-0 right-[-4.5rem] top-1/2 h-0.5 -translate-y-1/2 bg-muted" aria-hidden />} */}
                      <div className="absolute left-0 -right-18 top-1/2 h-0.5 -translate-y-1/2 bg-muted" aria-hidden />
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

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="block lg:hidden">
            <div className="relative pl-[calc(var(--spacing)*8.2)]">
              <div className="absolute left-4 top-3 bottom-3 w-px bg-muted" aria-hidden />
              <div className="space-y-6">
                {careerData.map((position, index) => (
                  <motion.div key={index} className="relative rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur" variants={itemVariants}>
                    <div className="absolute -left-6 top-5 flex items-center">
                      <div className={`h-3.5 w-3.5 rounded-full border-2 border-background ${index === 0 ? "bg-primary" : "bg-muted-foreground/40"}`}>
                        <div className={`h-3.5 w-3.5 rounded-full border-2 ${index === 0 && "ring-4 ring-primary/20 animate-ping"}`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {position.companyLink ? (
                        <Link href={position.companyLink} className="inline-flex items-center gap-2 text-xl font-semibold hover:text-primary">
                          {position.company}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      ) : (
                        <h2 className="text-xl font-semibold">{position.company}</h2>
                      )}
                      <p className="text-sm font-medium text-muted-foreground">{position.role}</p>
                      {position.employmentType && <p className="text-xs uppercase tracking-wide text-muted-foreground/70">{position.employmentType}</p>}
                      <p className="text-sm text-muted-foreground/70">{position.duration}</p>
                      <p className="text-xs text-muted-foreground/60">{position.location}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {position.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hidden pt-12 lg:flex lg:justify-center">
          <PageNavigation />
        </div>
      </div>

      {/* Decorative gradient blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/3 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </motion.section>
  )
}
