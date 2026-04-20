import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import contactImg from '../../assets/Post 2.jpg'
import type { ReactNode } from 'react'

function Field({
  label,
  children
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'h-12 w-full rounded-2xl bg-surface-50 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Talk to us — we’ll help you choose the right path
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
            Share a few details and we’ll follow up with clear plan options for your area.
          </p>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="h-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative h-full">
                <img
                  src={contactImg}
                  alt="Friendly healthcare support"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-accent-400" />
                    Trusted, clear guidance
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-white md:text-xl">
                    Professional support, without the pressure
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    We keep it simple: clear next steps and answers you can trust.
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
          >
            <Card className="p-6 md:p-7">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name">
                    <input className={inputClass} placeholder="e.g., Sarah" autoComplete="given-name" />
                  </Field>
                  <Field label="Last name">
                    <input className={inputClass} placeholder="e.g., Khan" autoComplete="family-name" />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone number">
                    <input
                      className={inputClass}
                      placeholder="e.g., (555) 123-4567"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      className={inputClass}
                      placeholder="e.g., sarah@email.com"
                      inputMode="email"
                      autoComplete="email"
                      type="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Country">
                    <select className={inputClass} defaultValue="US" autoComplete="country">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="PK">Pakistan</option>
                      <option value="IN">India</option>
                    </select>
                  </Field>
                  <Field label="ZIP code">
                    <input
                      className={inputClass}
                      placeholder="e.g., 10001"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoComplete="postal-code"
                    />
                  </Field>
                </div>

                <div className="rounded-3xl bg-surface-50 p-4 ring-1 ring-slate-200/70">
                  <div className="text-sm font-extrabold text-slate-900">What happens next?</div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900" />
                      We confirm plan availability for your ZIP code
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900" />
                      We share clear comparisons and next steps
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-900" />
                      No spam, no pressure
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about plan options.
                  </div>
                  <Button type="submit" size="lg" className="rounded-2xl">
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

