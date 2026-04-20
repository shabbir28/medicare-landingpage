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
                      d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
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

            {/* Contact column (made consistent with others) */}
            <div>
              <div className="text-sm font-extrabold text-slate-900">Contact Us</div>
              <ul className="mt-4 space-y-5 text-sm">
                <li>
                  <div className="font-semibold text-slate-500 text-xs mb-1">Call us</div>
                  <a href="tel:+15733700030" className="block font-semibold text-slate-700 transition hover:text-brand-900">
                    +1 (573) 370 0030
                  </a>
                </li>
                <li>
                  <div className="font-semibold text-slate-500 text-xs mb-1">Email us</div>
                  <a href="mailto:info@medicarepathways.shop" className="block font-semibold text-slate-700 transition hover:text-brand-900">
                    info@medicarepathways.shop
                  </a>
                </li>
                <li>
                  <div className="font-semibold text-slate-500 text-xs mb-1">Address</div>
                  <div className="font-semibold text-slate-700">14 Hartland Ave,<br />Huntington Station, NY</div>
                </li>
                <li>
                  <div className="font-semibold text-slate-500 text-xs mb-1">Hours</div>
                  <div className="font-semibold text-slate-700">Mon–Fri • 9am–6pm</div>
                </li>
              </ul>
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
