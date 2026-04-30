import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { cn } from '../ui/cn'
import imgA from '../../assets/Layer 17.jpg'
import imgB from '../../assets/Medicare Pathway 30.jpg.jpeg'

type InfoBlock = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  image: string
  objectPosition?: string
}

const blocks: InfoBlock[] = [
  {
    eyebrow: 'Clarity first',
    title: 'Designed to reduce confusion',
    description:
      'Medicare is complex. Our UI prioritizes plain language, calm layout, and consistent patterns so you can focus on what matters.',
    bullets: ['Plain-language summaries', 'Benefit highlights that scan easily', 'Transparent comparisons'],
    image: imgA,
    objectPosition: '55% 42%'
  },
  {
    eyebrow: 'Trust & support',
    title: 'Guidance that feels human',
    description:
      'Whether you prefer self-serve or a quick call, the experience stays consistent across devices and touchpoints.',
    bullets: ['Mobile-first experience', 'Advisor-ready handoff', 'Secure, privacy-minded defaults'],
    image: imgB,
    objectPosition: '65% 55%'
  }
]

function Illustration({
  flip,
  src,
  objectPosition
}: {
  flip?: boolean
  src: string
  objectPosition?: string
}) {
  return (
    <Card className="relative overflow-hidden">
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100',
          flip && 'from-accent-100 via-white to-brand-100'
        )}
      />
      <div className="relative">
        <img
          src={src}
          alt=""
          className="h-[340px] w-full object-cover md:h-[420px]"
          style={{ objectPosition: objectPosition ?? '50% 50%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-white/20" />
      </div>
    </Card>
  )
}

export function Info() {
  return (
    <section id="resources" className="bg-white py-14 md:py-18 lg:py-20">
      <Container className="space-y-14 md:space-y-18">
        {blocks.map((b, idx) => {
          const reversed = idx % 2 === 1
          return (
            <motion.div
              key={b.title}
              className={cn(
                'grid items-center gap-10 lg:grid-cols-2 lg:gap-14',
                reversed && 'lg:[&>*:first-child]:order-2'
              )}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-surface-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  {b.eyebrow}
                </div>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  {b.title}
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-base text-slate-600 md:text-lg">
                  {b.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {b.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                          <path
                            d="M7 12l3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }}>
                <Illustration
                  flip={reversed}
                  src={b.image}
                  objectPosition={b.objectPosition}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </Container>
    </section>
  )
}

