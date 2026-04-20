import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import img1 from '../../assets/Layer 23.jpg'
import img2 from '../../assets/Layer 21.jpg'

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Decorative blurred background blob */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-200/40 via-white/10 to-accent-200/40 blur-3xl" />

      <div className="grid gap-6">
        <motion.div
          whileHover={{ y: -6, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-[2rem] bg-white/60 p-4 shadow-xl shadow-slate-200/50 ring-1 ring-white/80 backdrop-blur-xl md:p-5"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={img1}
              alt="Medicare Pathways support"
              className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-64"
              style={{ objectPosition: '55% 52%' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(var(--color-accent-400),0.8)]" />
                Clear choices. No confusion.
              </div>
              <div className="mt-3 text-2xl font-extrabold text-white tracking-tight">Guidance you can trust</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -4, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-[2rem] bg-white/60 p-4 shadow-xl shadow-slate-200/50 ring-1 ring-white/80 backdrop-blur-xl md:p-5"
          >
            <div className="relative overflow-hidden rounded-3xl h-full">
              <img
                src={img2}
                alt="Planning Medicare with confidence"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 min-h-[11rem]"
                style={{ objectPosition: '55% 60%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-base font-extrabold text-white tracking-tight">Smart decisions</div>
                <div className="mt-1 text-xs text-white/90">Simple process</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-[2rem] bg-white/80 p-6 shadow-xl shadow-slate-200/50 ring-1 ring-white/80 backdrop-blur-xl flex flex-col justify-center"
          >
            <div className="text-sm font-extrabold tracking-tight text-slate-900 border-b border-slate-200/60 pb-3">Plan Match</div>
            <div className="mt-4 rounded-2xl bg-surface-50/80 p-4 ring-1 ring-slate-200/60 backdrop-blur-sm">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Coverage fit</div>
              <div className="mt-1 flex items-baseline justify-between mb-3">
                <div className="text-3xl font-black text-brand-900 tracking-tighter">98%</div>
                <div className="text-[10px] font-bold text-accent-600 bg-accent-50 px-2 py-1 rounded-full">Top Match</div>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '98%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-900"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Premium ambient aesthetic background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-50 via-white to-white" />
      <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 rounded-full bg-brand-50/60 blur-[120px]" />
      <div className="absolute left-0 top-[20%] -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-50/60 blur-[100px]" />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/60 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500"></span>
              </span>
              Medicare guidance, simplified
            </div>

            <h1 className="mt-8 text-balance text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-[4rem] lg:leading-[1.1]">
              Find the Right <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-600">Medicare Plan</span> for You
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg text-slate-600 leading-relaxed md:text-xl">
              Compare plans, check providers, and understand benefits in minutes—built for clarity
              and confidence.
            </p>

            <div className="mt-10 w-full max-w-xl rounded-2xl bg-white/80 p-2.5 shadow-xl shadow-brand-900/5 ring-1 ring-slate-200/80 backdrop-blur-xl sm:rounded-full">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="relative flex-1 pl-4">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter your ZIP code to begin"
                    className="h-14 w-full bg-transparent pl-10 pr-4 text-base font-semibold text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <Button className="h-14 rounded-xl px-8 shadow-md sm:rounded-full" size="lg" onClick={scrollToContact}>
                  Explore Plans
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                No spam. No pressure.
              </span>
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Options by location
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:justify-self-end w-full"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
