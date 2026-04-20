import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import bgImg from '../../assets/Layer 18.jpg'

type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Angela M.',
    role: 'Retired teacher',
    quote:
      'The comparison view was so clear. I finally understood what I was paying for and why.',
    rating: 5,
    initials: 'AM'
  },
  {
    name: 'James R.',
    role: 'Caregiver',
    quote:
      'Checking providers took seconds. It helped us choose a plan that actually fit our doctors.',
    rating: 5,
    initials: 'JR'
  },
  {
    name: 'Priya S.',
    role: 'New to Medicare',
    quote:
      'The steps were straightforward and calm—no jargon. It felt premium and trustworthy.',
    rating: 5,
    initials: 'PS'
  }
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={filled ? 'h-4 w-4 text-accent-500' : 'h-4 w-4 text-slate-300'}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.3l-5.3 3.2 1.4-6-4.6-4 6.1-.5L12 4.3l2.4 5.7 6.1.5-4.6 4 1.4 6L12 17.3z" />
          </svg>
        )
      })}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-surface-50 py-14 md:py-18 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/60">
          <img
            src={bgImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            style={{ objectPosition: '55% 35%' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/55" />
          <div className="relative p-6 md:p-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Trusted by people who value clarity
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
                A few words from users who found a path forward with confidence.
              </p>
            </motion.div>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-surface-50 px-3 py-1 ring-1 ring-slate-200/70">
                High trust experience
              </span>
              <span className="rounded-full bg-surface-50 px-3 py-1 ring-1 ring-slate-200/70">
                Mobile-first design
              </span>
              <span className="rounded-full bg-surface-50 px-3 py-1 ring-1 ring-slate-200/70">
                Clear next steps
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                className="min-w-[84%] md:min-w-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full p-6 transition-shadow hover:shadow-lift">
                  <Stars rating={t.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-sm font-extrabold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">{t.name}</div>
                      <div className="text-xs font-semibold text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

