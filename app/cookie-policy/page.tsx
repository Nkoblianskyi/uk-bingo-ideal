import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
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
            <Cookie className="h-5 w-5 text-blue-300" />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Cookie Policy</h1>
          <p className="mt-2 text-sm text-slate-300">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <div className="space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">Understanding Cookies</h2>
              <p>
            Cookies are small data files stored on your device when you browse our website. These files help websites
            function more efficiently and provide valuable information to site operators about user behavior and
            preferences.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">Our Cookie Usage</h2>
              <p className="mb-2">We use cookies for essential site functions and quality improvement:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li><strong>Necessary cookies:</strong> basic functionality and navigation</li>
                <li><strong>Performance cookies:</strong> analytics and site improvement</li>
                <li><strong>Marketing cookies:</strong> relevant advertising content</li>
                <li><strong>Preference cookies:</strong> saved user settings</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">Cookie Categories We Deploy</h2>
              <h3 className="mb-1 text-lg font-semibold text-slate-900">Temporary cookies</h3>
              <p className="mb-3">
            These short-term cookies are automatically removed when you exit your browser. They assist in maintaining
            your session state as you navigate between different pages on our site.
              </p>

              <h3 className="mb-1 text-lg font-semibold text-slate-900">Permanent cookies</h3>
              <p>
            These files remain stored on your device for a predetermined duration or until manually deleted. They help
            us identify returning visitors and personalize their browsing experience accordingly.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">External Cookie Sources</h2>
              <p className="mb-2">Third-party cookies may include:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Analytics platforms</li>
                <li>Social sharing integrations</li>
                <li>Advertising partners</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">Cookie Management Options</h2>
              <p className="mb-2">
            You maintain full control over cookie settings through multiple methods. Most web browsers enable you to:
              </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Review all cookies currently stored on your device</li>
            <li>Remove cookies selectively or completely</li>
            <li>Prevent cookies from specific websites</li>
            <li>Block all cookie installations</li>
            <li>Automatically clear cookies upon browser closure</li>
          </ul>
            </section>

            <section className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 sm:p-5">
              <h2 className="mb-2 text-lg font-bold text-blue-900 sm:text-xl">Your Cookie Preferences</h2>
              <p className="text-blue-900">
            By continuing to browse our website, you acknowledge and accept our cookie usage as outlined in this policy.
            You may modify or withdraw your consent at any time by adjusting your browser's cookie settings or
            preferences.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
