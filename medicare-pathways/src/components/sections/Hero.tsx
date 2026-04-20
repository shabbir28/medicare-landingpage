import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import heroBg from '../../assets/Layer 23.jpg'


function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const { scrollY } = useScroll()

  // Make the background move at a slower, smoother speed (classic parallax)
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%'])
  
  // Fade out text slightly when scrolling down
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const contentY = useTransform(scrollY, [0, 400], ['0px', '40px'])

  return (
    <section id="home" className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-brand-950">
      
      {/* 1. Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bottom-[-15%] z-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroBg}
          alt="Medicare Guidance"
          className="h-full w-full object-cover object-[75%_35%] opacity-90"
          loading="eager"
        />
        {/* Dynamic Sidebar Gradient Overlay - Deep blue on the left for text, transparent on the right for the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/80 to-slate-900/5 sm:via-brand-900/90" />
        <div className="absolute inset-0 bg-brand-950/20" /> {/* Subtle global tint */}
      </motion.div>

      {/* 2. Main Content (Left Aligned over the dark gradient) */}
      <Container className="relative z-10 w-full pt-16">
        <motion.div
          className="flex max-w-2xl flex-col items-start"
          style={{ opacity: contentOpacity, y: contentY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-100 shadow-sm ring-1 ring-blue-400/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>
            Premium Medicare Guidance
          </div>

          <h1 className="mt-8 text-balance text-5xl font-black tracking-tight text-white mb-6 sm:text-6xl lg:text-7xl">
            Find the Right <br className="max-sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Medicare Plan</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg font-medium text-slate-300 md:text-xl">
            Compare plans, check providers, and understand benefits in minutes—built for clarity
            and confidence.
          </p>

          <div className="mt-10 w-full max-w-lg rounded-2xl bg-white/10 p-2 shadow-2xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-xl sm:rounded-full">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative flex-1 pl-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter ZIP code..."
                  className="h-14 w-full bg-transparent pl-10 pr-2 text-base font-semibold text-white placeholder:font-medium placeholder:text-white/60 focus:outline-none"
                />
              </div>
              <Button className="h-14 rounded-xl px-8 shadow-md sm:rounded-full bg-blue-600 hover:bg-blue-500 text-white border-0" size="lg" onClick={scrollToContact}>
                Explore Plans
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-blue-200/80">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              No spam. No pressure.
            </span>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Options by location
            </span>
          </div>
        </motion.div>
      </Container>
      
      {/* Subtle bottom fade transition to the next white section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  )
}
