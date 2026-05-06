import { Card } from '../ui/Card'
import { Container } from '../ui/Container'

export function TermsAndConditions() {
  return (
    <section id="terms-and-conditions" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-2 text-xs font-extrabold text-brand-900 ring-1 ring-brand-900/10">
              Legal
            </div>
            <h1 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Terms of Use
            </h1>
            <p className="mt-3 text-pretty text-base text-slate-600 md:text-lg">
              Welcome to Easy Medicare Planz. By accessing or using our website and services, you agree to comply
              with these Terms of Use. If you do not agree with these terms, please do not use this website.
            </p>
          </div>

          <Card className="mt-10 p-6 md:p-10">
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
              <h3 className="font-extrabold text-slate-900">Our Services</h3>
              <p>
                Easy Medicare Planz helps connect users with licensed insurance agents, providers, and Medicare-related
                plan information. We do not directly provide insurance coverage or guarantee approval, eligibility, or
                enrollment in any plan.
              </p>

              <h3 className="font-extrabold text-slate-900">User Responsibilities</h3>
              <p>By using this website, you confirm that:</p>
              <ul>
                <li>You are at least 18 years old</li>
                <li>The information you provide is accurate and truthful</li>
                <li>You will not misuse, copy, damage, or interfere with the website or its services</li>
              </ul>
              <p>Unauthorized use of the website may result in restricted access or legal action.</p>

              <h3 className="font-extrabold text-slate-900">Privacy & Communication</h3>
              <p>
                Your use of this website is also subject to our Privacy Policy. By submitting your information, you
                consent to receive communications by phone, email, or text message regarding Medicare-related products
                and services.
              </p>

              <h3 className="font-extrabold text-slate-900">Disclaimer</h3>
              <p>
                All content and services on this website are provided "as is" without warranties of any kind. Easy
                Medicare Planz is not responsible for errors, interruptions, third-party services, or decisions made
                based on information provided on this website.
              </p>

              <h3 className="font-extrabold text-slate-900">Limitation of Liability</h3>
              <p>
                We are not liable for any indirect, incidental, or consequential damages related to your use of this
                website or services.
              </p>

              <h3 className="font-extrabold text-slate-900">Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content,
                accuracy, or practices of those external websites.
              </p>

              <h3 className="font-extrabold text-slate-900">Updates to Terms</h3>
              <p>
                We may update these Terms of Use at any time without prior notice. Continued use of the website means
                you accept any updated terms.
              </p>

              <h3 className="font-extrabold text-slate-900">Important Disclaimers</h3>
              <ul>
                <li>
                  Easy Medicare Planz is not affiliated with or endorsed by Medicare, the U.S. government, or any
                  insurance carrier.
                </li>
                <li>We do not offer every plan available in all areas.</li>
                <li>Benefits, premiums, and plan availability may vary by carrier and location.</li>
                <li>
                  Enrollment may be limited to certain enrollment periods unless you qualify for a Special Enrollment
                  Period (SEP).
                </li>
              </ul>

              <h3 className="font-extrabold text-slate-900">Contact Us</h3>
              <p>For questions regarding these Terms of Use, please contact:</p>
              <div className="not-prose mt-3 rounded-2xl bg-surface-50 p-5 ring-1 ring-slate-200/70">
                <div className="text-sm font-bold text-slate-900">Easy Medicare Planz</div>
                <a
                  href="tel:+15733700030"
                  className="mt-1 inline-flex items-center gap-2 text-base font-extrabold text-slate-900 hover:text-brand-900"
                >
                  Phone: +1 (573) 370-0030
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
