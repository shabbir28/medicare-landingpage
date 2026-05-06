import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/Button'
import logoImg from '../../assets/5.png'

function Field({
  label,
  children
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'h-11 w-full rounded-xl bg-surface-50 px-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400'

export function MobileStickyForm() {
  const [isOpen] = useState(true)
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
  const [showThankYou, setShowThankYou] = useState(false)

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
      setShowThankYou(true)
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
    <>
      {/* Full Screen Form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden overflow-hidden">
            {/* Form Content */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full h-full flex flex-col bg-slate-50"
            >
              <div className="flex flex-row items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shadow-sm z-10 min-h-[100px] gap-2">
                <img src={logoImg} alt="Easy Medicare Planz" className="h-[100px] sm:h-[120px] w-auto max-w-[60%] object-contain origin-left scale-[1.3] -ml-2" />
                <h3 className="text-[17px] font-extrabold text-slate-900 text-right flex-1 uppercase tracking-wide leading-tight">Eligibility Checker</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                {showThankYou ? (
                  <div className="text-center py-10">
                    <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                    <p className="mt-2 text-slate-600">Your eligibility form has been submitted. We'll contact you soon.</p>
                  </div>
                ) : (
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Name">
                        <input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="e.g., Sarah"
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
                          required
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Gender">
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        >
                          <option value="" disabled>Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </Field>
                      <Field label="Current Coverage">
                        <select
                          name="currentCoverage"
                          value={formData.currentCoverage}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        >
                          <option value="" disabled>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Household Income">
                      <input
                        name="householdIncome"
                        type="number"
                        value={formData.householdIncome}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="e.g., 50000"
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
                        type="email"
                        required
                      />
                    </Field>

                    {status === 'error' && (
                      <div className="text-sm font-semibold text-red-600 bg-red-50 rounded-xl p-3 text-center">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full rounded-xl py-3.5 text-base shadow-lg"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Sending...' : 'Submit Form'}
                      </Button>
                      <p className="text-[10px] text-center text-slate-400 mt-3">
                        By submitting, you agree to be contacted about plan options.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
