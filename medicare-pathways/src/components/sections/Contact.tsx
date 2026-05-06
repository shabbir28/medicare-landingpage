import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import contactImg from '../../assets/Medicare 30.jpg.jpeg'
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
    fullName: '',
    age: '',
    gender: '',
    currentCoverage: '',
    householdIncome: '',
    phone: '',
    email: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const [showThankYouPopup, setShowThankYouPopup] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    if (status !== 'loading' && status !== 'idle') {
      setStatus('idle')
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setStatus('loading')

    try {

      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        phone: formData.phone.startsWith('+')
          ? `'${formData.phone}`
          : formData.phone
      }

      await fetch(
        'https://script.google.com/macros/s/AKfycby5jY_CosAgma0SX8yUZtzXy_LRxfRDvuqoX7C-PeYykJCjvBZEwb6O4vNQXXmIp60/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(submissionData)
        }
      )

      setStatus('success')

      setShowThankYouPopup(true)

      setFormData({
        fullName: '',
        age: '',
        gender: '',
        currentCoverage: '',
        householdIncome: '',
        phone: '',
        email: '',
      })

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
            Eligibility Checker
          </h2>

          <p className="mt-3 max-w-2xl text-pretty text-base text-slate-600 md:text-lg">
            Fill out the form below to check plan eligibility. All fields are required.
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

                    <a
                      href="mailto:info@easymedicareplanz.com"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white group"
                    >
                      info@easymedicareplanz.com
                    </a>

                    <div className="inline-flex items-start gap-2 text-sm font-semibold text-brand-300 hover:text-white transition">
                      <span>
                        14 Hartland Ave,
                        <br />
                        Huntington Station, NY
                      </span>
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

                  <Field label="Name">
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., Sarah Khan"
                      autoComplete="name"
                      required
                    />
                  </Field>

                  <Field label="Age">
                    <input
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., 65"
                      inputMode="numeric"
                      min={0}
                      required
                    />
                  </Field>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <Field label="Gender">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="" disabled>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>

                  <Field label="Current Coverage (Yes/No)">
                    <select
                      name="currentCoverage"
                      value={formData.currentCoverage}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="" disabled>Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </Field>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <Field label="Household Income">
                    <input
                      name="householdIncome"
                      type="number"
                      value={formData.householdIncome}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g., 50000"
                      inputMode="numeric"
                      min={0}
                      required
                    />
                  </Field>

                  <Field label="Phone Number">
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

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

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
                    {status === 'loading' ? 'Sending...' : 'Check Eligibility'}
                  </Button>

                </div>

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

      {showThankYouPopup && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4">

          <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-lift ring-1 ring-slate-200/70 md:p-8">

            <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
              Thank You!
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-600 md:text-base">
              Thank you for submitting the form. We will contact you soon.
            </p>

            <Button
              type="button"
              className="mt-6 w-full rounded-2xl"
              onClick={() => {
                setShowThankYouPopup(false)
                setStatus('idle')
              }}
            >
              Close
            </Button>

          </div>

        </div>
      )}

    </section>
  )
}