"use client"

const BINGO_TICKER_ITEMS = [
  { id: "1", title: "UKGC-licensed rooms only", subtitle: "Compare sites you can trust in Great Britain" },
  { id: "2", title: "90-ball & 75-ball classics", subtitle: "Plus speed bingo, Slingo-style games where offered" },
  { id: "3", title: "Welcome offers in GBP", subtitle: "Free tickets, deposit bundles—always read full T&Cs" },
  { id: "4", title: "Mobile-first play", subtitle: "Stable apps and fast dabbers matter on the go" },
  { id: "5", title: "Community & chat hosts", subtitle: "Room atmosphere is part of the UK bingo experience" },
  { id: "6", title: "Safer gambling tools", subtitle: "Deposit limits, reality checks, timeouts & GamStop" },
  { id: "7", title: "Jackpots & linked games", subtitle: "Check each room for prize rules and schedules" },
  { id: "8", title: "New-player packages", subtitle: "Wagering, game weighting, and expiry vary by brand" },
] as const

export function Ticker() {
  const tripled = [...BINGO_TICKER_ITEMS, ...BINGO_TICKER_ITEMS, ...BINGO_TICKER_ITEMS]

  return (
    <div className="relative overflow-hidden h-[40px] mb-2">
      <div className="absolute left-0 top-0 bottom-0 right-0 overflow-hidden bg-slate-200 border-t border-slate-400/80 rounded-br-xl">
        <div className="ticker-track h-full flex items-center pl-[7.5rem] sm:pl-32">
          {tripled.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 px-6 py-2 border-l border-slate-400/90 min-w-[280px] text-center whitespace-nowrap"
            >
              <div className="font-semibold text-sm text-slate-900">{item.title}</div>
              <div className="text-xs text-slate-600 mt-0.5">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 bg-slate-900 text-white font-bold px-3 sm:px-4 py-2 text-sm rounded-r-full z-10 flex items-center border-r-2 border-amber-500 shadow-sm">
        <div className="text-center leading-tight">
          <div className="text-[10px] sm:text-xs text-amber-400">UK</div>
          <div className="text-[10px] sm:text-xs">Bingo</div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 90s linear infinite;
          width: max-content;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
