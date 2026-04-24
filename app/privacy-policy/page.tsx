import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-5 text-slate-100 hover:bg-white/10 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <header className="mb-5 rounded-xl border border-slate-700 bg-slate-900 px-5 py-6 sm:px-7 sm:py-8">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 ring-1 ring-blue-500/40">
            <Shield className="h-5 w-5 text-blue-300" />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-300">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <div className="space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">1. Data We Gather</h2>
              <p>
            We collect information that you voluntarily provide when registering an account, subscribing to our updates,
            or reaching out for assistance and support services.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Individual Data</h3>
              <ul className="list-disc space-y-1 pl-5">
            <li>Full name and electronic mail address</li>
            <li>Internet protocol address and browser details</li>
            <li>Website usage patterns and user preferences</li>
            <li>Tracking technologies and analytical data</li>
          </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">2. Information Utilization</h2>
              <p className="mb-2">We use collected information to:</p>
              <ul className="list-disc space-y-1 pl-5">
            <li>Deliver and enhance our platform services</li>
            <li>Distribute newsletters and promotional communications</li>
            <li>Examine user behavior patterns and website trends</li>
            <li>Maintain compliance with regulatory requirements</li>
          </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">3. Data Sharing Practices</h2>
              <p>
            We do not sell, exchange, or transfer your personal information to external parties without explicit
            consent, except as specifically outlined in this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">4. Cookie Technology</h2>
              <p>
            We employ cookies to improve your browsing experience on our platform. You may disable cookies through your
            browser configuration, though this may impact certain website functionalities.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">5. Information Security</h2>
              <p>
            We maintain robust security protocols to safeguard your personal data against unauthorized access,
            modification, disclosure, or destruction through industry-standard protective measures.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">6. User Rights</h2>
              <p className="mb-2">
            Under applicable UK data protection law (including the UK GDPR as retained in domestic legislation), you
            may have the right to:
              </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Review your stored personal information</li>
            <li>Modify incorrect or outdated data</li>
            <li>Request deletion of your information</li>
            <li>Object to specific data processing activities</li>
            <li>Transfer your data to another service provider</li>
          </ul>
            </section>

            <section className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 sm:p-5">
              <h2 className="mb-2 text-lg font-bold text-blue-900 sm:text-xl">7. Policy Modifications</h2>
              <p className="text-blue-900">
            We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. We
            will inform you of significant changes by posting the revised policy on this page with an updated effective
            date.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
