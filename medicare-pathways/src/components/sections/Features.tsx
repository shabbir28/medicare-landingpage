import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  icon: ReactNode
}

const features: Feature[] = [
  {
    title: 'Plan comparisons',
    description: 'See premiums, benefits, and trade-offs side-by-side with clear language.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M4 19V5m0 14h16M8 15l2-3 3 2 3-6 2 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Provider checks',
    description: 'Confirm doctors and hospitals you prefer are in-network before you enroll.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9.5 10.5h5M12 8v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: 'Benefits explained',
    description: 'Understand deductibles, copays, and coverage—without the fine-print fatigue.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M7 4h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 12h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: 'Enrollment support',
    description: 'Guided steps and checklists that keep you on track from start to finish.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
  }
]

export function Features() {
  return (
    <section id="plans" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Everything you need to choose with confidence
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
            Built for a modern, trust-first healthcare experience—clear, calm, and easy to follow.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <Card className="h-full p-6 transition-shadow hover:shadow-lift">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

