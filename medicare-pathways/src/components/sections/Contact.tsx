import { useState } from 'react'
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: 'US',
    zip: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbw1NTace8YXEVPKj07Gvcmq6IHKES0QZgX7g0JHJwj41Hx5eoZ3RoZjNXQoGSjtpYS6fA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(formData)
        }
      )

      setStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: 'US',
        zip: ''
      })

      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
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
            viewport={{ once: false, amount: 0.25 }}
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
                  <div className="mt-4 flex flex-col gap-2 relative z-10">
                    <a href="mailto:info@medicarepathways.shop" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white group">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      info@medicarepathways.shop
                    </a>
                    <div className="inline-flex items-start gap-2 text-sm font-semibold text-brand-300 hover:text-white transition">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>14 Hartland Ave,<br/>Huntington Station, NY</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
          >
            <Card className="p-6 md:p-7">
              <form
                className="grid gap-5"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name">
                    <input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="e.g., Sarah" 
                      autoComplete="given-name" 
                      required
                    />
                  </Field>
                  <Field label="Last name">
                    <input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="e.g., Khan" 
                      autoComplete="family-name" 
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone number">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., +1 (573) 370 0030"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., sarah@email.com"
                      inputMode="email"
                      autoComplete="email"
                      type="email"
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Country">
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass} 
                      autoComplete="country"
                    >
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
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., 10001"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoComplete="postal-code"
                      required
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

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-2">
                  <div className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about plan options.
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="rounded-2xl min-w-[120px] relative"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
                {status === 'success' && (
                  <div className="mt-1 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-2xl p-3 text-center ring-1 ring-emerald-200">
                    Thank you! Your information has been received.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-1 text-sm font-semibold text-red-600 bg-red-50 rounded-2xl p-3 text-center ring-1 ring-red-200">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

