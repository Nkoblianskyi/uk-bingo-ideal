import Link from "next/link"
import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_DISPLAY_NAME } from "@/lib/site"

export default function ResponsibleGamingPage() {
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
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Responsible Gaming</h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">Your safety and wellbeing come first.</p>
        </header>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <div className="space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            <section className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 sm:p-5">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-red-800 font-bold text-xl mb-0">Important Notice</h2>
            </div>
            <p className="text-red-700 mb-2">
              Gambling should always remain fun and entertaining. If betting stops being enjoyable or begins to cause
              problems in your life, it's time to seek help.
            </p>
            <p className="text-red-700 font-semibold">Remember: You are never alone, and help is always available.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Gambling Responsibly</h2>
              <p>
            Responsible gambling means enjoying betting as a form of entertainment while maintaining control over your
            time and money. It involves understanding the risks, setting limits, and knowing when to stop.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Key Principles</h3>
              <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Set Time Limits</h4>
              <p className="text-blue-800 text-sm">
                Decide how much time you'll spend gambling before you start, and stick to it.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Set Money Limits</h4>
              <p className="text-blue-800 text-sm">
                Only gamble with money you can afford to lose. Never borrow money to gamble.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Take Regular Breaks</h4>
              <p className="text-blue-800 text-sm">
                Step away from gambling regularly to maintain perspective and control.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Don't Chase Losses</h4>
              <p className="text-blue-800 text-sm">
                Accept losses as part of the entertainment cost. Never try to win back what you've lost.
              </p>
            </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Warning Signs</h2>
              <p className="mb-2">
            It's important to recognize when gambling might be becoming a problem. Watch out for these warning signs:
              </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Spending more time or money gambling than you intended</li>
            <li>Feeling anxious, depressed, or guilty about your gambling</li>
            <li>Lying to family or friends about your gambling activities</li>
            <li>Borrowing money or selling possessions to fund gambling</li>
            <li>Neglecting work, family, or other responsibilities</li>
            <li>Thinking about gambling constantly</li>
            <li>Feeling the need to bet more money to get the same excitement</li>
            <li>Being unable to stop or reduce your gambling</li>
          </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Self-Help Tools</h2>
              <p className="mb-2">
            Most reputable gambling sites offer tools to help you maintain control:
              </p>
          <div className="rounded-lg bg-green-50 p-4 sm:p-5">
            <ul className="space-y-2 text-green-800">
              <li>
                <strong>Deposit Limits:</strong> Set daily, weekly, or monthly limits on how much you can deposit
              </li>
              <li>
                <strong>Loss Limits:</strong> Set limits on how much you can lose in a specific time period
              </li>
              <li>
                <strong>Session Time Limits:</strong> Set limits on how long you can play in one session
              </li>
              <li>
                <strong>Reality Checks:</strong> Receive regular reminders about how long you've been playing
              </li>
              <li>
                <strong>Self-Exclusion:</strong> Temporarily or permanently block yourself from gambling sites
              </li>
            </ul>
          </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Getting Help</h2>
              <p>
            If you're concerned about your gambling or that of someone you know, help is available. These organizations
            provide free, confidential support:
              </p>
            </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">GambleAware</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Leading charity providing information, advice, and support for anyone affected by gambling problems.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Website:</strong> www.gambleaware.org
                </p>
                <p className="text-sm">
                  <strong>Helpline:</strong> 0808 8020 133
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">GamCare</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Provides support, information, and advice to anyone suffering from a gambling problem.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Website:</strong> www.gamcare.org.uk
                </p>
                <p className="text-sm">
                  <strong>Helpline:</strong> 0808 8020 133
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Gamblers Anonymous</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Fellowship of men and women who share their experience to help solve their gambling problem.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Website:</strong> www.gamblersanonymous.org.uk
                </p>
                <p className="text-sm">
                  <strong>Meetings:</strong> Local support groups available
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 sm:p-5">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Gordon Moody Association</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Provides residential treatment and ongoing support for people with gambling addictions.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Website:</strong> www.gordonmoody.org.uk
                </p>
                <p className="text-sm">
                  <strong>Helpline:</strong> 01384 241292
                </p>
              </div>
            </div>
          </div>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">For Family and Friends</h2>
              <p className="mb-2">
            Gambling problems don't just affect the gambler - they impact families and friends too. If someone you care
            about has a gambling problem:
              </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Don't ignore the problem or hope it will go away</li>
            <li>Encourage them to seek professional help</li>
            <li>Don't lend them money or pay their gambling debts</li>
            <li>Look after your own wellbeing</li>
            <li>Consider seeking support for yourself</li>
          </ul>
            </section>

          <div className="rounded-lg border-l-4 border-bingo-pink bg-bingo-pink-soft p-4 sm:p-5">
            <h3 className="text-bingo-purple-dark font-bold mb-3">Remember</h3>
            <p className="text-slate-800 mb-2">
              Gambling addiction is a recognized medical condition, not a moral failing or lack of willpower.
            </p>
            <p className="text-slate-800">
              Recovery is possible with the right support and treatment. The first step is acknowledging there's a
              problem and asking for help.
            </p>
          </div>

            <section>
              <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">Our Commitment</h2>
              <p className="mb-2">
            At {SITE_DISPLAY_NAME}, we are committed to promoting responsible gambling. We only recommend operators
            that:
              </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide comprehensive responsible gambling tools</li>
            <li>Have clear policies for identifying problem gambling</li>
            <li>Offer easy access to support resources</li>
            <li>Implement strict age verification procedures</li>
            <li>Provide transparent terms and conditions</li>
            <li>Support responsible gambling organizations</li>
          </ul>
            </section>

          <div className="rounded-lg bg-slate-100 p-5 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Right Now?</h3>
            <p className="text-gray-700 mb-4">
              If you or someone you know needs immediate support, don't wait. Help is available 24/7.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-green-600">National Gambling Helpline: 0808 8020 133</p>
              <p className="text-sm text-gray-600">Free, confidential, and available 24 hours a day</p>
            </div>
          </div>
          </div>
        </article>
        </div>
    </div>
  )
}
