"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "../lib/motion"
import { Button } from "./Button"
import { Card } from "./Card"
import { SocialLinks } from "./SocialLinks"

export function ProfileCard() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <Card className="flex flex-col items-center gap-8 px-8 py-10 text-center md:px-10">
        <motion.div
          variants={fadeUp}
          className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neutral-800/80 bg-gradient-to-b from-[#1a1d25] via-[#10131b] to-[#0c0f16] shadow-lg shadow-black/40"
        >
          <div className="absolute inset-2 rounded-full bg-neutral-900/70 backdrop-blur-sm" />
          <span className="relative text-4xl">🧑🏻‍💻</span>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-1">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">Andrew Alexeyev</h1>
          <p className="text-sm text-neutral-400 md:text-base">Senior Product Designer</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Button>Start</Button>
        </motion.div>

        <motion.div variants={fadeUp} className="w-full">
          <SocialLinks />
        </motion.div>
      </Card>
    </motion.div>
  )
}
