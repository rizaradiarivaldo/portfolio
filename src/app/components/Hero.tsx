"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "../lib/motion"
import { Button } from "./Button"
import { Card } from "./Card"

export function Hero() {
  const intro =
    "Saya fokus merancang pengalaman digital yang ringkas, mudah dipahami, dan punya sentuhan visual yang hangat. Dari wireframe sampai handoff, saya bantu tim bergerak cepat dan tetap konsisten."

  const highlight =
    "Saya percaya desain yang bagus lahir dari riset yang tepat, iterasi cepat, dan kolaborasi erat dengan developer untuk memastikan detailnya terasa di produk akhir."

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <Card className="relative overflow-hidden px-8 py-10 md:px-12 md:py-12">
        <motion.span variants={fadeUp} className="absolute right-6 top-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
          andrew@hey.com
        </motion.span>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <motion.div variants={stagger} className="flex-1 space-y-5">
            <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-white md:text-5xl">
              Hi!
            </motion.h2>

            <motion.p variants={fadeUp} className="text-neutral-300 leading-relaxed">
              {intro}
            </motion.p>

            <motion.p variants={fadeUp} className="text-neutral-300 leading-relaxed">
              <span className="text-[var(--accent)]">Product thinking</span> dan <span className="text-[var(--accent)]">rasa visual</span> saya gabungkan supaya desain terasa konsisten, teruji, dan siap dikembangkan tanpa kejutan di sprint berikutnya.
            </motion.p>

            <motion.p variants={fadeUp} className="text-neutral-300 leading-relaxed">
              {highlight}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Button>Lihat portfolio</Button>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Slide sebelumnya"
                  className="h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-[var(--accent)] hover:text-white"
                >
                  ‹
                </button>
                <button
                  aria-label="Slide berikutnya"
                  className="h-9 w-9 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-[var(--accent)] hover:text-white"
                >
                  ›
                </button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
            <div className="relative h-44 w-44 md:h-52 md:w-52">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#161a24] via-[#0f121a] to-[#0b0d13] shadow-[0_25px_60px_rgba(0,0,0,0.35)]" />
              <div className="absolute inset-[10%] rounded-full border border-neutral-800/70" />
              <div className="relative flex h-full w-full items-center justify-center">
                <span className="text-6xl md:text-7xl">✌🏼</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
