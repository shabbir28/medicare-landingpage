import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import type { ReactNode } from 'react'
import { LogoBadge } from '../LogoBadge'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Plans', href: '#plans' },
      { label: 'Providers', href: '#providers' },
      { label: 'Resources', href: '#resources' },
      { label: 'Get Started', href: '#contact' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Enrollment Checklist', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' }
    ]
  }
]

function SocialIcon({
  children,
  label
}: {
  label: string
  children: ReactNode
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-50 text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white hover:text-brand-900 hover:shadow-soft"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-gradient-to-b from-white to-surface-50">
      <Container className="py-12 md:py-14">
        <Card className="p-6 md:p-8">

          {/* ── Main grid ── */}
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto_auto] xl:grid-cols-[260px_1fr_1fr_1fr_280px]">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3">
                <LogoBadge size="sm" />
                <div className="text-base font-extrabold tracking-tight text-brand-900">
                  Medicare Pathways
                </div>
              </div>
              <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-slate-700">
                A modern, trust-first experience for exploring Medicare options with clarity and
                confidence.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <SocialIcon label="Twitter/X">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M7 17L17 7M7 7l10 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M7 10v10M7 7v.01M11 20v-6a3 3 0 0 1 6 0v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon label="YouTube">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path d="M10 9l6 3-6 3V9Z" fill="currentColor" />
                    <path
                      d="M3 12c0-3.5.4-5.4 1.4-6.4S7.5 4 12 4s6.6.6 7.6 1.6S21 8.5 21 12s-.4 5.4-1.4 6.4S16.5 20 12 20s-6.6-.6-7.6-1.6S3 15.5 3 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-extrabold text-slate-900">{col.title}</div>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-700 transition hover:text-brand-900"
                        onClick={(e) => {
                          if (link.href === '#contact') {
                            e.preventDefault()
                            const el = document.getElementById('contact')
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact card */}
            <div className="w-full min-w-[240px] rounded-3xl bg-surface-50 p-5 ring-1 ring-slate-200/70">
              <div className="text-xs font-semibold text-slate-500">Call us</div>
              <a
                href="tel:+18005550199"
                className="mt-1 inline-flex text-base font-extrabold tabular-nums tracking-tight text-slate-900 underline-offset-4 hover:text-brand-900 hover:underline"
              >
                <span className="whitespace-nowrap">(800) 555-0199</span>
              </a>
              <div className="mt-3 text-xs font-semibold text-slate-500">Hours</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">
                <span className="whitespace-nowrap">Mon–Fri</span>
                <span className="mx-1 text-slate-300">•</span>
                <span className="whitespace-nowrap">9am–6pm</span>
              </div>
              <div className="mt-4 rounded-2xl bg-white p-3 ring-1 ring-slate-200/70">
                <div className="text-xs font-semibold text-slate-700">Need help fast?</div>
                <div className="mt-1 text-xs text-slate-600">
                  Ask about plans, providers, and enrollment steps.
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-10 grid gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-600 md:grid-cols-2 md:items-center">
            <div className="leading-relaxed">
              © {new Date().getFullYear()} Medicare Pathways. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
              <a href="#" className="hover:text-brand-900">Privacy</a>
              <a href="#" className="hover:text-brand-900">Terms</a>
            </div>
          </div>

        </Card>
      </Container>
    </footer>
  )
}
