import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Container } from '../ui/Container'
import type { ReactNode } from 'react'

type Step = {
  title: string
  description: string
  icon: ReactNode
}

const steps: Step[] = [
  {
    title: 'Tell us your ZIP code',
    description: 'We tailor plan options to your location and availability.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 11.2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    title: 'Compare plans in minutes',
    description: 'See premiums, coverage, and key benefits with plain-language summaries.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M8 6h13M8 12h13M8 18h13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 7h2M3 13h2M3 19h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: 'Confirm providers & prescriptions',
    description: 'Check networks and common medications so there are fewer surprises later.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M9 11l2 2 4-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  },
  {
    title: 'Enroll with confidence',
    description: 'Use our checklist and guidance to complete enrollment smoothly.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 3l8 4v6c0 5-3.4 9-8 10-4.6-1-8-5-8-10V7l8-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M12 9v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
]

export function Steps() {
  return (
    <section id="providers" className="bg-surface-50 py-14 md:py-18 lg:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            A simple step-by-step process
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
            Clear guidance from first search to enrollment—no confusing detours.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              className="relative rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200/60"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-soft">
                  {s.icon}
                </div>
                <div className="text-sm font-extrabold text-accent-600">0{idx + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>

              {idx !== steps.length - 1 ? (
                <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-300" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

