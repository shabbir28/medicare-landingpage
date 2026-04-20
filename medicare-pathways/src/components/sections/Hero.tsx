import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import img1 from '../../assets/Layer 23.jpg'
import img2 from '../../assets/Layer 21.jpg'

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-10 -z-10 rounded-[2.25rem] bg-gradient-to-br from-brand-100 via-white to-accent-100 blur-2xl" />

      <div className="grid gap-5">
        <div className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-200/60 md:p-5">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={img1}
              alt="Medicare Pathways support"
              className="h-56 w-full object-cover md:h-64"
              style={{ objectPosition: '55% 52%' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-white/25" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                Clear choices. No confusion.
              </div>
              <div className="mt-2 text-lg font-extrabold text-white">Guidance you can trust</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-200/60 md:p-5">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={img2}
                alt="Planning Medicare with confidence"
                className="h-44 w-full object-cover md:h-52"
                style={{ objectPosition: '55% 60%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-white/20" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-sm font-extrabold text-white">Smart decisions</div>
                <div className="mt-0.5 text-xs text-white/80">Simple process</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-200/60">
            <div className="text-sm font-extrabold text-slate-900">Plan Match</div>
            <div className="mt-3 rounded-2xl bg-surface-50 p-4 ring-1 ring-slate-200/60">
              <div className="text-xs font-semibold text-slate-500">Coverage fit</div>
              <div className="mt-1 flex items-baseline justify-between">
                <div className="text-2xl font-extrabold text-slate-900">Great</div>
                <div className="text-sm font-semibold text-slate-600">Based on ZIP</div>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                <div className="h-2 w-[78%] rounded-full bg-brand-900" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-surface-50 p-3 ring-1 ring-slate-200/60">
                <div className="text-xs font-semibold text-slate-500">Providers</div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">In-network</div>
              </div>
              <div className="rounded-2xl bg-surface-50 p-3 ring-1 ring-slate-200/60">
                <div className="text-xs font-semibold text-slate-500">Savings</div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">Compare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-surface-50 to-white" />
      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              Medicare guidance, simplified
            </div>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Find the Right Medicare Plan for You
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-slate-600 md:text-lg">
              Compare plans, check providers, and understand benefits in minutes—built for clarity
              and confidence.
            </p>

            <div className="mt-7 rounded-3xl bg-white p-3 shadow-soft ring-1 ring-slate-200/60 sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="w-full">
                  <span className="sr-only">ZIP code</span>
                  <input
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter ZIP code"
                    className="h-12 w-full rounded-2xl bg-surface-50 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
                  />
                </label>
                <Button className="h-12 rounded-2xl" size="lg">
                  Search
                </Button>
              </div>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Talk to an advisor
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-900" />
                No spam. No pressure.
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-900" />
                Personalized options by location
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:justify-self-end"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

