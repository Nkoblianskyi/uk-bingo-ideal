import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_DISPLAY_NAME } from "@/lib/site"

export default function AboutPage() {
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
            <Info className="h-5 w-5 text-blue-300" />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">About {SITE_DISPLAY_NAME}</h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Clear, practical UK bingo room comparisons with transparent editorial standards.
          </p>
        </header>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <div className="space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Our Purpose</h2>
              <p>
                At {SITE_DISPLAY_NAME}, we focus on clear, up-to-date information about UKGC-licensed online bingo rooms
                serving the United Kingdom. Choosing where to play can feel crowded and noisy, so we aim to make comparisons
                easier: ticket prices, rooms and game formats, welcome offers, payments, mobile apps, and safer gambling
                tools.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">How We Evaluate Bingo Operators</h2>
              <p className="mb-3">
                Our framework reflects what UK players typically prioritise: fair ticket pricing, lively rooms and chat,
                a good mix of 90-ball and 75-ball (and variants where offered), transparent welcome and promo rules, and
                trustworthy payments. We assess each brand across these areas so our rankings stay practical, not
                theoretical.
              </p>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">Assessment Standards</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Licensing and regulatory oversight</li>
                  <li>Security, responsible gambling, and player protection</li>
                  <li>Game variety, value for money on tickets, and promo fairness</li>
                  <li>Payments, support quality, and mobile experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Our Assessment Approach</h2>
              <p>
                Every bingo brand displayed on our site undergoes structured evaluation. Our team reviews licensing,
                product depth, promotions, payments, and player protections so readers get practical guidance, not generic
                marketing copy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Why Our Reviews Matter</h2>
              <p>
                Editorial independence forms the foundation of our operations. While we may earn compensation when you
                visit bingo operators through our site, this does not determine our rankings or assessments. Our editorial
                team maintains autonomy, and our evaluations reflect each operator&apos;s product quality and player
                safeguards.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Safe Gambling Practices</h2>
              <p className="mb-2">
                We champion responsible gambling principles. Bingo should stay entertainment and never cause financial or
                personal harm. We only feature operators that demonstrate clear commitment to player protection and safer
                gambling tools.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Self-limitation tools and spending controls</li>
                <li>Access to recognised UK support organisations</li>
                <li>Age verification and transparent terms</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Maintaining Currency</h2>
              <p>
                The UK online bingo market changes quickly, with new rooms, offers, and product updates from established
                brands. Our team monitors developments so our assessments and rankings stay aligned with what players see
                on each site today.
              </p>
            </section>

            <section className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 sm:p-5">
              <h3 className="mb-2 text-base font-bold text-red-900 sm:text-lg">Essential Notice</h3>
              <p className="text-red-800">
                Gambling should stay enjoyable. Never bet more than you can afford to lose. If gambling starts causing
                harm, seek help from specialist support services.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
