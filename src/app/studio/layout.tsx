import { ReactNode } from "react"
import { Container } from "../components/Container"
import { Section } from "../components/Section"

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <Section className="bg-gradient-to-b from-[#0f1218] via-[#0c0f14] to-[#080a0f]">
      <Container className="w-full space-y-10">
        <header className="flex flex-col gap-3 rounded-2xl border border-neutral-800/70 bg-[var(--muted)] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Studio</p>
            <h1 className="text-2xl font-semibold text-white">Project Playground</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            <span className="rounded-full border border-neutral-800/70 px-3 py-1">Draft</span>
            <span className="rounded-full border border-neutral-800/70 px-3 py-1">v0.1</span>
          </div>
        </header>
        <main className="rounded-2xl border border-neutral-800/70 bg-[var(--muted)] px-6 py-8 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">{children}</main>
      </Container>
    </Section>
  )
}
