import { Container } from '../ui/Container'
import { Card } from '../ui/Card'
import { Link } from 'react-router-dom'

export function CcpPolicy() {
  return (
    <section id="ccpa" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-2 text-xs font-extrabold text-brand-900 ring-1 ring-brand-900/10">
              Compliance & Privacy
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              California Consumer Privacy Act (CCPA) Notice
            </h2>
            <p className="mt-3 text-pretty text-base text-slate-600 md:text-lg">
              At Easy Medicare Planz, we respect your privacy and are committed to protecting your personal
              information in accordance with the California Consumer Privacy Act (CCPA).
            </p>
          </div>

          <Card className="mt-10 p-6 md:p-10">
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
              <h3 className="font-extrabold text-slate-900">Information We Collect</h3>
              <p>In the past 12 months, we may have collected personal information such as:</p>
              <ul>
                <li>Name, phone number, email address, and identifiers</li>
                <li>Financial and commercial information</li>
                <li>Internet activity and device information</li>
                <li>Geolocation and employment-related information</li>
                <li>Other information provided through our website or services</li>
              </ul>
              <p>
                We use this information to provide services, customer support, marketing, analytics, and to improve
                user experience.
              </p>

              <h3 className="font-extrabold text-slate-900">Sharing of Information</h3>
              <p>
                We may share personal information with trusted third-party partners or service providers for business,
                operational, and marketing purposes. Certain sharing activities may be considered a "sale" under
                California law.
              </p>

              <p>California residents have the right to:</p>
              <ul>
                <li>Request access to their personal information</li>
                <li>Request deletion of personal information</li>
                <li>Opt out of the sale or sharing of personal information</li>
                <li>Exercise privacy rights without discrimination</li>
              </ul>

              <h3 className="font-extrabold text-slate-900">To submit a request or privacy inquiry, contact:</h3>
              <div className="not-prose mt-3 rounded-2xl bg-surface-50 p-5 ring-1 ring-slate-200/70">
                <div className="text-sm font-bold text-slate-900">Easy Medicare Planz</div>
                <Link
                  to="/call"
                  className="mt-1 inline-flex items-center gap-2 text-base font-extrabold text-slate-900 hover:text-brand-900"
                >
                  Phone: +1 (573) 370-0030
                </Link>
              </div>

              <h3 className="mt-8 font-extrabold text-slate-900">Important Disclaimer</h3>
              <p>
                Easy Medicare Planz is not affiliated with or endorsed by Medicare, the U.S. government, or any
                specific insurance carrier. We do not offer every plan available in all areas. Benefits, availability,
                and enrollment eligibility may vary by carrier, location, and enrollment period.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
