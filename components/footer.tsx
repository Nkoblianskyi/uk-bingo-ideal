import Link from "next/link"
import Image from "next/image"
import { SITE_DISPLAY_NAME, SITE_DOMAIN } from "@/lib/site"

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white py-8 mt-12 border-t border-bingo-pink/30">
      <div className="absolute top-0 left-0 right-0 flex h-1" aria-hidden>
        <div className="w-1/3 bg-slate-800" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-red-600" />
      </div>

      <div className="container mx-auto px-4 pt-2">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-1 text-white tracking-tight">Safer gambling in the UK</h3>
          <p className="text-xs text-slate-400 mb-4 max-w-xl mx-auto">
            Independent support organisations for anyone affected by gambling harm in Great Britain and Northern Ireland.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="https://www.gambleaware.org/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.gamcare.org.uk/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.gordonmoody.org.uk/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img src="/gordon.png" alt="Gordon Moody" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.gamblersanonymous.org.uk/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.gamstop.co.uk/" className="opacity-90 hover:opacity-100 transition-opacity text-xs font-bold text-white border border-bingo-pink/55 rounded-lg px-3 py-2 bg-slate-900/90 hover:bg-slate-800/90">
               <img src="/gamstop.svg" alt="Gamblers Anonymous" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://www.egba.eu/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img src="/egba.png" alt="EGBA" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-bingo-pink/55 ring-offset-2 ring-offset-slate-950">
              <Image src="/logo.png" alt={`${SITE_DISPLAY_NAME} logo`} width={32} height={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif tracking-wide">
                <span className="text-bingo-pink">Best</span>
                <span className="text-white"> </span>
                <span className="text-white">British</span>
                <span className="text-white"> </span>
                <span className="text-bingo-pink">Bingo</span>
                <span className="text-white"> </span>
                <span className="text-white">Sites</span>
              </h3>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-8 border-y border-slate-800 py-5">
          <Link href="/about" className="text-slate-300 hover:text-bingo-pink font-medium transition-colors">
            About us
          </Link>
          <Link href="/responsible-gaming" className="text-slate-300 hover:text-bingo-pink font-medium transition-colors">
            Responsible gaming
          </Link>
          <Link href="/cookie-policy" className="text-slate-300 hover:text-bingo-pink font-medium transition-colors">
            Cookie policy
          </Link>
          <Link href="/privacy-policy" className="text-slate-300 hover:text-bingo-pink font-medium transition-colors">
            Privacy policy
          </Link>
        </div>

        <div className="text-center space-y-2">
          <p className="text-slate-500 text-sm">
            © 2026 {SITE_DISPLAY_NAME} ({SITE_DOMAIN}). All rights reserved.
          </p>
          <p className="text-red-400 font-semibold text-sm tracking-wide">
            18+ | UK only | When the fun stops, stop. BeGambleAware.org
          </p>
        </div>
      </div>
    </footer>
  )
}
