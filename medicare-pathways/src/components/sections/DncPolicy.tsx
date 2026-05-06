import { Container } from '../ui/Container'
import { Card } from '../ui/Card'

export function DncPolicy() {
  return (
    <section id="dnc-policy" className="bg-white py-14 md:py-18 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-2 text-xs font-extrabold text-brand-900 ring-1 ring-brand-900/10">
              Compliance & Privacy
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Do Not Call (DNC) Policy
            </h2>
            <p className="mt-3 text-pretty text-base text-slate-600 md:text-lg">
              Easy Medicare Planz respects your privacy and your preference regarding marketing communications.
            </p>
          </div>

          <Card className="mt-10 p-6 md:p-10">
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
              <h3 className="font-extrabold text-slate-900">Do Not Call Request</h3>
              <p>
                At Easy Medicare Planz, we respect your privacy and your preference regarding marketing
                communications. If you do not wish to receive sales or promotional calls from our company or our
                representatives, you may request to be added to our “Do Not Call” (DNC) list.
              </p>
              <p>
                To submit a request, please contact us with the phone number(s) you would like removed from future
                sales and marketing calls.
              </p>

              <div className="not-prose mt-6 rounded-2xl bg-surface-50 p-5 ring-1 ring-slate-200/70">
                <div className="text-xs font-extrabold tracking-wide text-slate-500">PHONE</div>
                <a
                  href="tel:+15733700030"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-extrabold text-slate-900 hover:text-brand-900"
                >
                  +1 (573) 370-0030
                  <span className="text-sm font-semibold text-slate-500">(tap to call)</span>
                </a>
              </div>

              <h3 className="mt-6 font-extrabold text-slate-900">Processing Timeline</h3>
              <p className="mt-6">
                If you have multiple phone numbers, please provide all numbers you want added to the DNC list.
              </p>
              <p>
                We generally process DNC requests within 5–7 business days; however, it may take up to 30 days for
                your number to be fully removed from active marketing campaigns already in progress.
              </p>
              <p>
                Once added, your number will remain on our internal Do Not Call list for up to five (5) years unless
                you request removal earlier. If your phone number changes, you must submit a new request with the
                updated number to maintain your DNC status.
              </p>
              <p>
                Easy Medicare Planz complies with all applicable federal and state Do Not Call regulations, including
                honoring requests from consumers listed on the National Do Not Call Registry where required by law.
              </p>
              <p>
                Existing customers may still receive communications permitted under applicable laws unless they
                specifically request placement on our internal DNC list.
              </p>
              <p>
                All employees and representatives involved in outbound calling activities are trained on our Do Not
                Call procedures and compliance requirements.
              </p>

              <h3 className="mt-6 font-extrabold text-slate-900">National DNC Registry</h3>
              <p className="mt-6">
                For more information about the National Do Not Call Registry, please visit:
              </p>
              <p className="not-prose mt-3">
                <a
                  href="https://www.donotcall.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-slate-800 ring-1 ring-slate-200/70 transition hover:shadow-soft hover:text-brand-900"
                >
                  www.donotcall.gov
                  <span aria-hidden="true">↗</span>
                </a>
              </p>
              <p className="mt-4">
                Or call 1-888-382-1222
              </p>

              <div className="not-prose mt-8 rounded-2xl border border-slate-200/70 bg-white p-5">
                <div className="text-xs font-extrabold tracking-wide text-slate-500">IMPORTANT DISCLAIMER</div>
                <div className="mt-2 text-sm font-semibold text-slate-700">
                  We are not affiliated with or endorsed by any government agency, Medicare program, or insurance
                  carrier unless explicitly stated otherwise.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

